// ========== APP STATE ==========
const STATE_KEY = 'toefl_prep_state';

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    return saved ? JSON.parse(saved) : {
    theme: 'light',
    streak: 0,
    lastPracticeDate: null,
    scores: [],
    savedResponses: [],
    vocabStatus: {},
    currentSection: 'dashboard',
    planDay: 1,
    recordings: [],
    testHistory: []
  };
  } catch(e) {
    return { theme: 'light', streak: 0, lastPracticeDate: null, scores: [], savedResponses: [], vocabStatus: {}, currentSection: 'dashboard', planDay: 1, recordings: [], testHistory: [] };
  }
}

function saveState() {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch(e) {}
}

let state = loadState();

// ========== NAVIGATION ==========
function switchSection(sectionId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  
  document.getElementById(sectionId).classList.add('active');
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
  
  state.currentSection = sectionId;
  saveState();
  
  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => switchSection(item.dataset.section));
});

// ========== THEME ==========
function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
  saveState();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const icons = document.querySelectorAll('.theme-toggle i, .theme-toggle-mobile i');
  icons.forEach(i => {
    i.className = state.theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  });
  const label = document.querySelector('.theme-toggle');
  if (label) label.innerHTML = `<i class="fa-solid fa-${state.theme === 'dark' ? 'sun' : 'moon'}"></i> ${state.theme === 'dark' ? 'Light' : 'Dark'} Mode`;
}

// ========== MOBILE SIDEBAR ==========
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ========== TIMER ==========
let timerInterval = null;
let timeLeft = 45;
let totalTime = 45;

function setTimer(seconds) {
  timeLeft = seconds;
  totalTime = seconds;
  updateTimerDisplay();
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  document.getElementById('timerStartBtn').innerHTML = '<i class="fa-solid fa-play"></i> Start';
  
  // Update active preset
  document.querySelectorAll('.preset-btn').forEach(btn => {
    const btnVal = btn.textContent.trim();
    const match = (btnVal === '15s' && seconds === 15) ||
      (btnVal === '45s' && seconds === 45) ||
      (btnVal === '60s' && seconds === 60) ||
      (btnVal === '10m' && seconds === 600) ||
      (btnVal === '20m' && seconds === 1200);
    btn.classList.toggle('active', match);
  });
}

function toggleTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('timerStartBtn').innerHTML = '<i class="fa-solid fa-play"></i> Start';
  } else {
    document.getElementById('timerStartBtn').innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('timerStartBtn').innerHTML = '<i class="fa-solid fa-play"></i> Start';
        playAlarm();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = totalTime;
  updateTimerDisplay();
  document.getElementById('timerStartBtn').innerHTML = '<i class="fa-solid fa-play"></i> Start';
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  document.getElementById('timerDisplay').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  
  // Color change when low
  const display = document.getElementById('timerDisplay');
  if (timeLeft <= 5 && timeLeft > 0) {
    display.style.color = 'var(--danger)';
  } else {
    display.style.color = 'var(--primary)';
  }
}

function playAlarm() {
  const display = document.getElementById('timerDisplay');
  display.style.color = 'var(--danger)';
  display.textContent = "TIME!";
  
  // Visual flash
  const flash = document.createElement('div');
  flash.className = 'timer-alarm';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 1500);
  
  // Audio alert
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 800;
    osc.connect(ctx.destination);
    osc.start();
    setTimeout(() => { osc.stop(); ctx.close(); }, 500);
  } catch(e) {}
}

// ========== PRACTICE PROMPTS ==========
let currentPromptType = 'speaking1';

function setPromptType(type, el) {
  currentPromptType = type;
  document.querySelectorAll('.prompt-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  newPrompt();
}

function newPrompt() {
  const list = PROMPTS[currentPromptType];
  const prompt = list[Math.floor(Math.random() * list.length)];
  const types = {
    speaking1: 'Speaking Task 1 — Personal Opinion (15s prep, 45s speak)',
    speaking24: 'Speaking Tasks 2-4 — Integrated (30s prep, 60s speak)',
    writing2: 'Writing Task 2 — Academic Discussion (10 min, 120-150 words)'
  };
  document.getElementById('promptType').textContent = types[currentPromptType];
  document.getElementById('promptText').textContent = prompt;
}

// ========== RESPONSE ANALYSIS ==========
function analyzeResponse() {
  const text = document.getElementById('responseArea').value.trim();
  if (!text) { alert('Write something first!'); return; }
  
  const words = text.split(/\s+/).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const avgWordsPerSentence = sentences > 0 ? Math.round(words / sentences) : 0;
  
  const hasTransitions = /first|second|third|moreover|however|therefore|in addition|for example|for instance|furthermore|consequently|nevertheless/i.test(text);
  const hasOpinion = /i believe|i think|in my view|i agree|i disagree|i prefer|personally|in my opinion/i.test(text);
  const hasExamples = /for example|for instance|such as|specifically|to illustrate/i.test(text);
  const hasConclusion = /therefore|in conclusion|to sum up|overall|for these reasons/i.test(text);
  
  // Count transition words
  const transitionWords = text.match(/\b(first|second|third|moreover|however|therefore|furthermore|in addition|consequently|nevertheless|although|despite|whereas|similarly|likewise|in contrast|on the other hand|as a result)\b/gi) || [];
  
  let html = '<h4 style="margin-bottom:12px;">📊 Analysis</h4>';
  html += `<p>📝 <strong>Word count:</strong> ${words} ${getWordCountFeedback(words)}</p>`;
  html += `<p>📏 <strong>Sentences:</strong> ${sentences} (avg ${avgWordsPerSentence} words/sentence)</p>`;
  html += `<p>${hasTransitions ? '✅' : '⚠️'} <strong>Transitions:</strong> ${hasTransitions ? `Found ${transitionWords.length} — good structure!` : 'Missing! Add "First, Second, Moreover, However"'}</p>`;
  html += `<p>${hasOpinion ? '✅' : '⚠️'} <strong>Clear opinion:</strong> ${hasOpinion ? 'Yes — position is clear' : 'Start with "I believe/think..." to be clear'}</p>`;
  html += `<p>${hasExamples ? '✅' : '⚠️'} <strong>Examples:</strong> ${hasExamples ? 'Yes — good support!' : 'Add "For example..." to strengthen your argument'}</p>`;
  html += `<p>${hasConclusion ? '✅' : '💡'} <strong>Conclusion:</strong> ${hasConclusion ? 'Present — good wrap-up' : 'Consider adding "Therefore..." to close (optional for short responses)'}</p>`;
  
  // Overall assessment
  const checks = [hasTransitions, hasOpinion, hasExamples, hasConclusion].filter(Boolean).length;
  html += '<hr style="margin: 12px 0; border: none; border-top: 1px solid var(--border-light);">';
  if (checks >= 3) html += '<p>🌟 <strong>Strong response!</strong> Good structure and support.</p>';
  else if (checks >= 2) html += '<p>👍 <strong>Decent start.</strong> Add more transitions and examples to level up.</p>';
  else html += '<p>💪 <strong>Keep practicing.</strong> Focus on: clear opinion → reason + example → conclusion.</p>';
  
  document.getElementById('analysisResult').innerHTML = html;
  document.getElementById('analysisResult').style.display = 'block';
}

function getWordCountFeedback(words) {
  if (currentPromptType === 'writing2') {
    if (words < 100) return '⚠️ (too short — aim for 120-150)';
    if (words > 180) return '⚠️ (too long — keep under 150)';
    return '✅ (good range)';
  }
  if (currentPromptType === 'speaking1') {
    if (words < 50) return '(could say more in 45s)';
    if (words > 120) return '(might be too much for 45s)';
    return '(good for 45s)';
  }
  return '';
}

function saveResponse() {
  const text = document.getElementById('responseArea').value.trim();
  if (!text) return;
  
  state.savedResponses.unshift({
    text: text,
    type: currentPromptType,
    prompt: document.getElementById('promptText').textContent,
    date: new Date().toLocaleDateString()
  });
  
  if (state.savedResponses.length > 20) state.savedResponses.pop();
  saveState();
  renderSavedResponses();
  alert('Response saved! ✅');
}

function clearResponse() {
  document.getElementById('responseArea').value = '';
  document.getElementById('analysisResult').style.display = 'none';
}

function renderSavedResponses() {
  const container = document.getElementById('savedResponses');
  if (state.savedResponses.length === 0) {
    container.innerHTML = '<p class="empty-state">No saved responses yet.</p>';
    return;
  }
  container.innerHTML = state.savedResponses.map((r, i) => `
    <div class="saved-item">
      <div class="saved-meta">${r.date} • ${r.type}</div>
      <div class="saved-text">${escapeHtml(r.text.substring(0, 150))}${r.text.length > 150 ? '...' : ''}</div>
    </div>
  `).join('');
}

// ========== VOCABULARY ==========
let currentCardIndex = 0;
let filteredVocab = [...VOCABULARY];

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function showCard() {
  if (filteredVocab.length === 0) return;
  const card = filteredVocab[currentCardIndex];
  document.getElementById('flashcard').classList.remove('flipped');
  document.querySelector('.vocab-word').textContent = card.word;
  document.querySelector('.vocab-def').textContent = card.def;
  document.querySelector('.vocab-example').textContent = `"${card.example}"`;
  document.getElementById('cardCounter').textContent = `${currentCardIndex + 1} / ${filteredVocab.length}`;
}

function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % filteredVocab.length;
  showCard();
}

function prevCard() {
  currentCardIndex = (currentCardIndex - 1 + filteredVocab.length) % filteredVocab.length;
  showCard();
}

function markCard(status) {
  const word = filteredVocab[currentCardIndex].word;
  state.vocabStatus[word] = status;
  saveState();
  renderWordList();
  nextCard();
}

function filterWords(filter, el) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  
  if (filter === 'all') {
    filteredVocab = [...VOCABULARY];
  } else {
    filteredVocab = VOCABULARY.filter(v => state.vocabStatus[v.word] === filter);
  }
  currentCardIndex = 0;
  showCard();
  renderWordList();
}

function renderWordList() {
  const container = document.getElementById('wordList');
  const words = filteredVocab.length > 0 ? filteredVocab : VOCABULARY;
  container.innerHTML = words.map(v => {
    const status = state.vocabStatus[v.word] || '';
    return `<div class="word-item">
      <span class="word-label">${v.word}</span>
      <span>${v.def}</span>
      ${status ? `<span class="word-status ${status}">${status}</span>` : ''}
    </div>`;
  }).join('');
}

// ========== PROGRESS / SCORES ==========
function logScore() {
  const r = parseInt(document.getElementById('inputReading').value) || 0;
  const l = parseInt(document.getElementById('inputListening').value) || 0;
  const s = parseInt(document.getElementById('inputSpeaking').value) || 0;
  const w = parseInt(document.getElementById('inputWriting').value) || 0;
  
  if (r + l + s + w === 0) { alert('Enter at least one score!'); return; }
  
  state.scores.unshift({
    date: new Date().toLocaleDateString(),
    reading: r, listening: l, speaking: s, writing: w,
    total: r + l + s + w
  });
  
  saveState();
  renderScores();
  updateDashboardScores();
  
  // Clear inputs
  ['inputReading', 'inputListening', 'inputSpeaking', 'inputWriting'].forEach(id => {
    document.getElementById(id).value = '';
  });
  
  alert(`Score logged! Total: ${r + l + s + w}/120 ✅`);
}

function renderScores() {
  const container = document.getElementById('scoreHistory');
  if (state.scores.length === 0) {
    container.innerHTML = '<p class="empty-state">No scores logged yet.</p>';
    return;
  }
  container.innerHTML = state.scores.map(s => `
    <div class="score-entry">
      <span class="score-date">${s.date}</span>
      <div class="score-breakdown-mini">
        <span>R:${s.reading}</span>
        <span>L:${s.listening}</span>
        <span>S:${s.speaking}</span>
        <span>W:${s.writing}</span>
      </div>
      <span class="score-total">${s.total}/120</span>
    </div>
  `).join('');
}

function updateDashboardScores() {
  if (state.scores.length > 0) {
    const latest = state.scores[0];
    document.getElementById('readingScore').textContent = latest.reading || '—';
    document.getElementById('listeningScore').textContent = latest.listening || '—';
    document.getElementById('speakingScore').textContent = latest.speaking || '—';
    document.getElementById('writingScore').textContent = latest.writing || '—';
  }
}

// ========== STREAK ==========
function logPractice() {
  const today = new Date().toDateString();
  if (state.lastPracticeDate === today) {
    alert("Already logged today! Keep it up tomorrow 🔥");
    return;
  }
  
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastPracticeDate === yesterday) {
    state.streak++;
  } else if (state.lastPracticeDate !== today) {
    state.streak = 1;
  }
  
  state.lastPracticeDate = today;
  saveState();
  document.getElementById('streakCount').textContent = state.streak;
  alert(`🔥 ${state.streak} day streak! Keep going!`);
}

// ========== RESET ==========
function resetAllData() {
  if (confirm('Are you sure? This will delete ALL your saved progress, responses, and scores.')) {
    localStorage.removeItem(STATE_KEY);
    state = loadState();
    renderAll();
    alert('All data cleared.');
  }
}

// ========== SPELLING DRILL ==========
let spellingIndex = 0;
let spellingCorrect = 0;

function showSpellingWord() {
  if (spellingIndex >= SPELLING_DRILL.length) spellingIndex = 0;
  const word = SPELLING_DRILL[spellingIndex];
  document.getElementById('spellingWrong').textContent = word.wrong;
  document.getElementById('spellingHint').textContent = 'Hint: ' + word.hint;
  document.getElementById('spellingInput').value = '';
  document.getElementById('spellingInput').className = 'spelling-input';
  document.getElementById('spellingInput').disabled = false;
  document.getElementById('spellingFeedback').textContent = '';
  document.getElementById('spellingInput').focus();
}

function checkSpelling() {
  const inputEl = document.getElementById('spellingInput');
  const input = inputEl.value.trim().toLowerCase();
  const feedbackEl = document.getElementById('spellingFeedback');
  
  if (!input) return;
  
  const correct = SPELLING_DRILL[spellingIndex].correct.toLowerCase();
  
  if (input === correct) {
    inputEl.className = 'spelling-input correct';
    inputEl.disabled = true;
    feedbackEl.innerHTML = '✅ Correct! <button class="btn btn-primary" onclick="nextSpellingWord()" style="margin-left:8px; padding:6px 14px; font-size:12px;">Next →</button>';
    feedbackEl.style.color = 'var(--success)';
    spellingCorrect++;
    document.getElementById('spellingScore').textContent = spellingCorrect;
  } else {
    inputEl.className = 'spelling-input wrong';
    feedbackEl.innerHTML = '❌ Nope. Correct: <strong>' + escapeHtml(SPELLING_DRILL[spellingIndex].correct) + '</strong> <button class="btn btn-secondary" onclick="nextSpellingWord()" style="margin-left:8px; padding:6px 14px; font-size:12px;">Next →</button>';
    feedbackEl.style.color = 'var(--danger)';
  }
}

function nextSpellingWord() {
  spellingIndex++;
  if (spellingIndex >= SPELLING_DRILL.length) {
    spellingIndex = 0;
    alert('Round complete! You got ' + spellingCorrect + '/' + SPELLING_DRILL.length + '. Starting over.');
    spellingCorrect = 0;
    document.getElementById('spellingScore').textContent = 0;
  }
  showSpellingWord();
}

function renderSpellingList() {
  const container = document.getElementById('spellingList');
  if (!container) return;
  container.innerHTML = SPELLING_DRILL.map(w => 
    '<div class="spelling-item"><span class="wrong-word">' + escapeHtml(w.wrong) + '</span><span>→</span><span class="correct-word">' + escapeHtml(w.correct) + '</span></div>'
  ).join('');
}

// ========== LISTEN & REPEAT ==========
let repeatLevel = 1;
let currentRepeatSentence = '';
let repeatTimer = null;

function setRepeatLevel(level, el) {
  repeatLevel = level;
  document.querySelectorAll('.repeat-level .preset-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  newRepeatSentence();
}

function newRepeatSentence() {
  if (repeatTimer) { clearInterval(repeatTimer); repeatTimer = null; }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  
  const filtered = REPEAT_SENTENCES.filter(s => s.level === repeatLevel);
  if (filtered.length === 0) return;
  currentRepeatSentence = filtered[Math.floor(Math.random() * filtered.length)].text;
  
  const sentenceEl = document.getElementById('repeatSentence');
  sentenceEl.textContent = 'Click "Listen Only" or "Show & Listen" to begin';
  sentenceEl.style.color = '';
  document.getElementById('repeatInput').value = '';
  document.getElementById('repeatInput').disabled = true;
  document.getElementById('repeatFeedback').style.display = 'none';
  document.getElementById('repeatShowBtn').disabled = false;
}

function speakSentence(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const eng = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google'))
            || voices.find(v => v.lang.startsWith('en-US'))
            || voices.find(v => v.lang.startsWith('en'));
  if (eng) utterance.voice = eng;
  window.speechSynthesis.speak(utterance);
}

// Pre-load voices
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
}

function showRepeatSentence() {
  // Show text + play audio, then hide after 5 sec
  const sentenceEl = document.getElementById('repeatSentence');
  document.getElementById('repeatShowBtn').disabled = true;
  
  sentenceEl.textContent = currentRepeatSentence;
  sentenceEl.style.color = '';
  speakSentence(currentRepeatSentence);
  
  let countdown = 5;
  repeatTimer = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      sentenceEl.textContent = currentRepeatSentence + ' (' + countdown + 's)';
    } else {
      clearInterval(repeatTimer);
      repeatTimer = null;
      sentenceEl.textContent = '⏳ Now type what you heard...';
      sentenceEl.style.color = 'var(--text-muted)';
      document.getElementById('repeatInput').disabled = false;
      document.getElementById('repeatInput').focus();
    }
  }, 1000);
}

function listenOnlyRepeat() {
  // Audio only — no text shown (like real test)
  const sentenceEl = document.getElementById('repeatSentence');
  document.getElementById('repeatShowBtn').disabled = true;
  
  sentenceEl.textContent = '🔊 Playing audio...';
  sentenceEl.style.color = 'var(--primary)';
  speakSentence(currentRepeatSentence);
  
  // Estimate speech duration (roughly 2.5 words/sec at 0.85 rate)
  const words = currentRepeatSentence.split(' ').length;
  const duration = Math.max(3000, (words / 2.2) * 1000 + 500);
  
  setTimeout(() => {
    sentenceEl.textContent = '⏳ Now type what you heard...';
    sentenceEl.style.color = 'var(--text-muted)';
    document.getElementById('repeatInput').disabled = false;
    document.getElementById('repeatInput').focus();
  }, duration);
}

function checkRepeat() {
  const input = document.getElementById('repeatInput').value.trim();
  if (!input) return;
  
  const original = currentRepeatSentence;
  const inputWords = input.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/);
  const origWords = original.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/);
  
  let correct = 0;
  let errors = [];
  
  origWords.forEach((word, i) => {
    if (inputWords[i] === word) {
      correct++;
    } else {
      errors.push({ expected: word, got: inputWords[i] || '(missing)' });
    }
  });
  
  const accuracy = Math.round((correct / origWords.length) * 100);
  
  let html = '<strong>Accuracy: ' + accuracy + '%</strong> (' + correct + '/' + origWords.length + ' words)<br><br>';
  html += '<strong>Original:</strong> ' + escapeHtml(original) + '<br>';
  html += '<strong>You typed:</strong> ' + escapeHtml(input) + '<br>';
  
  if (errors.length > 0) {
    html += '<br><strong>Errors:</strong><br>';
    errors.forEach(e => {
      html += '• Expected "<strong>' + escapeHtml(e.expected) + '</strong>" → you wrote "<strong>' + escapeHtml(e.got) + '</strong>"<br>';
    });
  } else {
    html += '<br>🎯 <strong>Perfect!</strong> Exactly right.';
  }
  
  document.getElementById('repeatFeedback').innerHTML = html;
  document.getElementById('repeatFeedback').style.display = 'block';
}

// ========== DAILY PLAN ==========
function renderDailyPlan() {
  const container = document.getElementById('fullPlan');
  if (!container) return;
  
  const currentDay = state.planDay || 1;
  
  container.innerHTML = DAILY_PLAN.map((item, i) => {
    const dayNum = i + 1;
    const completed = dayNum < currentDay;
    return `<div class="plan-item ${completed ? 'completed' : ''}">
      <span class="plan-day">Day ${dayNum}</span>
      <span class="plan-focus-badge ${item.focus}">${item.focus}</span>
      <span class="plan-task">${item.task}</span>
      <span>${item.time}</span>
    </div>`;
  }).join('');
  
  // Today's task
  const today = DAILY_PLAN[currentDay - 1] || DAILY_PLAN[0];
  document.getElementById('todayDay').textContent = `Day ${currentDay} of 30`;
  document.getElementById('todayFocus').textContent = today.focus;
  document.getElementById('todayDescription').textContent = today.task;
  document.getElementById('todayTime').textContent = `⏱️ ${today.time}`;
}

function completeDayTask() {
  state.planDay = (state.planDay || 1) + 1;
  if (state.planDay > 30) state.planDay = 30;
  saveState();
  renderDailyPlan();
  document.getElementById('completeDayBtn').textContent = '✅ Done! Come back tomorrow.';
  document.getElementById('completeDayBtn').disabled = true;
}

// ========== SENTENCE LENGTH CHECKER (enhanced analyzeResponse) ==========
const originalAnalyze = analyzeResponse;
analyzeResponse = function() {
  originalAnalyze();
  
  // Add sentence length check
  const text = document.getElementById('responseArea').value.trim();
  if (!text) return;
  
  const sentences = text.split(/[.!?]+/).filter(s => s.trim());
  let longSentences = [];
  
  sentences.forEach(s => {
    const words = s.trim().split(/\s+/).length;
    if (words > 20) longSentences.push({ text: s.trim(), words: words });
  });
  
  if (longSentences.length > 0) {
    const existing = document.getElementById('analysisResult').innerHTML;
    let extra = '<hr style="margin:12px 0; border:none; border-top:1px solid var(--border-light);">';
    extra += `<p>✂️ <strong>Sentence Length Check:</strong> ${longSentences.length} sentence(s) over 20 words!</p>`;
    longSentences.forEach(s => {
      extra += `<span class="sentence-long">⚠️ (${s.words} words): "${s.text.substring(0, 60)}..."</span>`;
    });
    extra += '<p style="margin-top:8px;">💡 Break these into 2 shorter sentences.</p>';
    document.getElementById('analysisResult').innerHTML = existing + extra;
  }
};

// ========== SPEECH RECORDING & TRANSCRIPTION ==========
let mediaRecorder = null;
let audioChunks = [];
let recognition = null;
let recordingInterval = null;
let recordingSeconds = 0;
let currentTranscript = '';
let isRecording = false;

function toggleRecording() {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

function startRecording() {
  // Request microphone
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    isRecording = true;
    currentTranscript = '';
    audioChunks = [];
    
    // Media Recorder for audio
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
    mediaRecorder.start();
    
    // UI updates
    document.getElementById('recordBtn').innerHTML = '<i class="fa-solid fa-circle" style="color:#fff;"></i> Recording...';
    document.getElementById('recordBtn').style.background = '#dc2626';
    document.getElementById('stopRecordBtn').disabled = false;
    document.getElementById('recorderStatus').textContent = '🔴 Recording...';
    document.getElementById('recorderStatus').className = 'recorder-status recording';
    document.getElementById('recorderTimer').className = 'recorder-timer recording';
    document.getElementById('liveTranscription').style.display = 'block';
    document.getElementById('liveText').textContent = 'Listening...';
    document.getElementById('saveRecordingArea').style.display = 'none';
    
    // Timer
    recordingSeconds = 0;
    updateRecorderTimer();
    recordingInterval = setInterval(() => {
      recordingSeconds++;
      updateRecorderTimer();
    }, 1000);
    
    // Speech Recognition
    startSpeechRecognition();
    
  }).catch(err => {
    alert('Microphone access denied. Please allow microphone permission and try again.');
    console.error(err);
  });
}

function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    document.getElementById('liveText').textContent = '⚠️ Speech recognition not supported in this browser. Use Chrome for best results. You can still record and type your transcription manually.';
    return;
  }
  
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  
  recognition.onresult = (event) => {
    let interim = '';
    let final = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        final += event.results[i][0].transcript + ' ';
      } else {
        interim += event.results[i][0].transcript;
      }
    }
    if (final) currentTranscript += final;
    document.getElementById('liveText').textContent = currentTranscript + interim;
  };
  
  recognition.onerror = (e) => {
    if (e.error !== 'no-speech') console.error('Speech error:', e.error);
  };
  
  recognition.onend = () => {
    // Restart if still recording (browser stops after silence)
    if (isRecording) recognition.start();
  };
  
  recognition.start();
}

function stopRecording() {
  isRecording = false;
  
  if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
  if (recognition) { recognition.onend = null; recognition.stop(); }
  if (recordingInterval) { clearInterval(recordingInterval); recordingInterval = null; }
  
  // Stop microphone
  if (mediaRecorder && mediaRecorder.stream) {
    mediaRecorder.stream.getTracks().forEach(t => t.stop());
  }
  
  // UI reset
  document.getElementById('recordBtn').innerHTML = '<i class="fa-solid fa-microphone"></i> Start Recording';
  document.getElementById('recordBtn').style.background = '';
  document.getElementById('stopRecordBtn').disabled = true;
  document.getElementById('recorderStatus').textContent = 'Recording complete';
  document.getElementById('recorderStatus').className = 'recorder-status';
  document.getElementById('recorderTimer').className = 'recorder-timer';
  document.getElementById('liveTranscription').style.display = 'none';
  
  // Show save area with transcription
  document.getElementById('transcriptionEdit').value = currentTranscript.trim() || '(No speech detected — type your response manually)';
  document.getElementById('saveRecordingArea').style.display = 'block';
}

function updateRecorderTimer() {
  const m = Math.floor(recordingSeconds / 60);
  const s = recordingSeconds % 60;
  document.getElementById('recorderTimer').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function saveRecording() {
  const text = document.getElementById('transcriptionEdit').value.trim();
  if (!text) return;
  
  const prompt = document.getElementById('promptText') ? document.getElementById('promptText').textContent : '';
  
  if (!state.recordings) state.recordings = [];
  state.recordings.unshift({
    text: text,
    autoScore: autoEvaluateSpeaking(text),
    prompt: prompt,
    duration: recordingSeconds,
    date: new Date().toLocaleString(),
    type: currentPromptType
  });
  
  saveState();
  renderRecordingHistory();
  document.getElementById('saveRecordingArea').style.display = 'none';
  alert('Recording saved! ✅');
}

// ========== AUTO EVALUATE SPEAKING ==========
function autoEvaluateSpeaking(text) {
  if (!text || text.length < 10) return null;
  
  const words = text.split(/\s+/).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  
  const fillers = (text.match(/\b(uh|um|er|like|you know|basically|actually|so yeah|I mean)\b/gi) || []).length;
  const transitions = (text.match(/\b(first|second|third|firstly|secondly|moreover|however|therefore|furthermore|in addition|for example|for instance|consequently|nevertheless|on the other hand|as a result|in contrast)\b/gi) || []).length;
  const hasOpinion = /\b(i believe|i think|in my view|i agree|i disagree|i prefer|personally|in my opinion)\b/i.test(text);
  const hasExample = /\b(for example|for instance|such as|specifically|to illustrate|when i|last year|in my experience)\b/i.test(text);
  const hasConclusion = /\b(therefore|in conclusion|to sum up|overall|for these reasons|so i believe|that's why)\b/i.test(text);
  
  // Score components (each out of 5)
  let fluencyScore = 5;
  if (fillers > 4) fluencyScore = 2;
  else if (fillers > 2) fluencyScore = 3;
  else if (fillers > 0) fluencyScore = 4;
  
  let structureScore = 1;
  if (hasOpinion) structureScore++;
  if (transitions >= 2) structureScore++;
  if (hasExample) structureScore++;
  if (hasConclusion) structureScore++;
  
  let lengthScore = 3;
  if (words >= 60 && words <= 120) lengthScore = 5;
  else if (words >= 40) lengthScore = 4;
  else if (words < 25) lengthScore = 2;
  
  const avg = ((fluencyScore + structureScore + lengthScore) / 3).toFixed(1);
  
  return {
    overall: avg,
    fluency: fluencyScore,
    structure: structureScore,
    length: lengthScore,
    wordCount: words,
    fillerCount: fillers,
    transitionCount: transitions,
    hasOpinion,
    hasExample,
    hasConclusion,
    feedback: generateSpeakingFeedback(fluencyScore, structureScore, lengthScore, fillers, transitions, hasOpinion, hasExample, words)
  };
}

function generateSpeakingFeedback(fluency, structure, length, fillers, transitions, opinion, example, words) {
  let fb = [];
  if (fillers > 2) fb.push(`⚠️ ${fillers} filler words (uh/um/like) — try to eliminate these`);
  if (!opinion) fb.push('⚠️ No clear opinion stated — start with "I believe/think..."');
  if (transitions < 2) fb.push('⚠️ Need more transitions (First, Second, Moreover)');
  if (!example) fb.push('⚠️ No specific example — add "For example..." or a personal story');
  if (words < 40) fb.push('⚠️ Too short — aim for 60-90 words in 45 sec');
  if (fillers === 0 && opinion && transitions >= 2) fb.push('✅ Good structure and fluency!');
  return fb;
}

function copyTranscription() {
  const text = document.getElementById('transcriptionEdit').value.trim();
  navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard! ✅'));
}

function discardRecording() {
  document.getElementById('saveRecordingArea').style.display = 'none';
}

function renderRecordingHistory() {
  const container = document.getElementById('recordingHistory');
  if (!container) return;
  const recordings = state.recordings || [];
  if (recordings.length === 0) {
    container.innerHTML = '<p class="empty-state">No recordings yet.</p>';
    return;
  }
  container.innerHTML = recordings.map((r, i) => `
    <div class="recording-item">
      <div class="rec-meta">
        <span class="rec-date">#${recordings.length - i} | ${r.date}</span>
        <span class="rec-duration">${Math.floor(r.duration/60)}:${String(r.duration%60).padStart(2,'0')}</span>
      </div>
      ${r.autoScore ? `<div style="font-size:12px; margin-bottom:6px; padding:6px 10px; background:var(--primary-light); border-radius:6px;">
        <strong>Auto-score: ${r.autoScore.overall}/5</strong> 
        (Fluency: ${r.autoScore.fluency} | Structure: ${r.autoScore.structure} | Length: ${r.autoScore.length})
        ${r.autoScore.feedback.length > 0 ? '<br>' + r.autoScore.feedback.join('<br>') : ''}
      </div>` : ''}
      </div>
      ${r.prompt ? `<div class="rec-prompt">${r.prompt.substring(0, 80)}...</div>` : ''}
      <div class="rec-text">${escapeHtml(r.text)}</div>
      <div class="rec-actions">
        <button class="btn btn-secondary" onclick="copySingleRecording(${i})"><i class="fa-solid fa-copy"></i> Copy</button>
        <button class="btn btn-secondary" onclick="deleteRecording(${i})"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function copySingleRecording(index) {
  const r = state.recordings[index];
  let text = `[${r.date} | ${Math.floor(r.duration/60)}:${String(r.duration%60).padStart(2,'0')}]\n`;
  text += `Prompt: ${r.prompt || 'N/A'}\n`;
  text += `Response: ${r.text}\n`;
  if (r.autoScore) text += `Auto-score: ${r.autoScore.overall}/5 (Fluency:${r.autoScore.fluency} Structure:${r.autoScore.structure} Length:${r.autoScore.length})\n`;
  navigator.clipboard.writeText(text).then(() => alert('Copied! ✅'));
}

function copyAllTranscriptions() {
  const recordings = state.recordings || [];
  if (recordings.length === 0) { alert('Nothing to copy!'); return; }
  
  let text = `====== TOEFL SPEAKING PRACTICE — ${new Date().toLocaleDateString()} ======\n`;
  text += `Total recordings: ${recordings.length}\n\n`;
  
  recordings.forEach((r, i) => {
    text += `--- Recording ${recordings.length - i} [${r.date}] ---\n`;
    text += `Duration: ${Math.floor(r.duration/60)}:${String(r.duration%60).padStart(2,'0')}\n`;
    text += `Type: ${r.type || 'N/A'}\n`;
    text += `Prompt: ${r.prompt || 'N/A'}\n`;
    text += `Response: ${r.text}\n`;
    if (r.autoScore) {
      text += `Auto-score: ${r.autoScore.overall}/5 (Fluency:${r.autoScore.fluency}/5 | Structure:${r.autoScore.structure}/5 | Length:${r.autoScore.length}/5)\n`;
      text += `Stats: ${r.autoScore.wordCount} words, ${r.autoScore.fillerCount} fillers, ${r.autoScore.transitionCount} transitions\n`;
      if (r.autoScore.feedback.length > 0) text += `Feedback: ${r.autoScore.feedback.join(' | ')}\n`;
    }
    text += '\n';
  });
  
  text += `====== END — Paste this to Quick for full human evaluation ======\n`;
  
  navigator.clipboard.writeText(text).then(() => alert(`All ${recordings.length} recordings copied! Paste to Quick for full evaluation. ✅`));
}

function deleteRecording(index) {
  state.recordings.splice(index, 1);
  saveState();
  renderRecordingHistory();
}

function clearRecordings() {
  if (!confirm('Delete ALL saved recordings?')) return;
  state.recordings = [];
  saveState();
  renderRecordingHistory();
}


// ========== KEYBOARD SUPPORT ==========
document.addEventListener('keydown', (e) => {
  const activeSection = state.currentSection;
  
  // Flashcard controls
  if (activeSection === 'vocabulary') {
    if (e.key === 'ArrowRight') nextCard();
    else if (e.key === 'ArrowLeft') prevCard();
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipCard(); }
  }
  
  // Spelling drill - Enter to check
  if (activeSection === 'spelling' && e.key === 'Enter') {
    const input = document.getElementById('spellingInput');
    if (document.activeElement === input) checkSpelling();
  }
});

// Flashcard tabindex enter/space
const flashcardEl = document.getElementById('flashcard');
if (flashcardEl) {
  flashcardEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipCard(); }
  });
}

// ========== INIT ==========
function renderAll() {
  applyTheme();
  renderSavedResponses();
  renderWordList();
  renderScores();
  updateDashboardScores();
  showCard();
  showSpellingWord();
  renderSpellingList();
  renderDailyPlan();
  renderRecordingHistory();
  renderTestHistory();
  updateTimerDisplay();
  document.getElementById('streakCount').textContent = state.streak || 0;
  
  // Restore section
  if (state.currentSection) {
    switchSection(state.currentSection);
  }
}

renderAll();
newPrompt();
