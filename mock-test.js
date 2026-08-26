// ========== MOCK TEST QUESTIONS — 4 FULL TESTS ==========

const MOCK_QUESTIONS = {
  reading: [
    // === TEST 1 ===
    {
      passage: "The development of agriculture was one of the most important events in human history. Before agriculture, humans lived as hunters and gatherers, moving from place to place in search of food. With agriculture, people could settle in one location and produce food consistently. This led to the growth of villages and eventually cities. Agriculture also allowed for the division of labor — not everyone needed to find food, so some people could specialize in other tasks like building, crafting, or trading.",
      questions: [
        { q: "What is the main idea of this passage?", options: ["Cities existed before agriculture", "Agriculture transformed human civilization", "Trading was the first specialized task", "Hunting was more efficient than farming"], answer: 1 },
        { q: "According to the passage, what did agriculture allow people to do?", options: ["Build boats for fishing", "Hunt larger animals", "Travel more frequently", "Settle in one location"], answer: 3 },
        { q: "The word 'consistently' is closest in meaning to:", options: ["Regularly and reliably", "Without effort", "In large amounts", "Quickly"], answer: 0 },
        { q: "What can be inferred about hunters and gatherers?", options: ["They moved frequently", "They lived in cities", "They had a division of labor", "They practiced agriculture part-time"], answer: 0 },
        { q: "Which is mentioned as a result of the division of labor?", options: ["Some people specialized in crafting and trading", "Agriculture became less important", "Villages became smaller", "People learned to hunt better"], answer: 0 }
      ]
    },
    {
      passage: "Coral reefs are sometimes called the 'rainforests of the sea' because of the incredible biodiversity they support. Although coral reefs cover less than 1% of the ocean floor, they are home to approximately 25% of all marine species. Reefs are built by tiny animals called coral polyps, which secrete calcium carbonate to form hard structures. These structures grow over thousands of years, creating complex ecosystems. However, coral reefs worldwide are threatened by rising ocean temperatures, pollution, and ocean acidification caused by increased carbon dioxide levels.",
      questions: [
        { q: "Why are coral reefs compared to rainforests?", options: ["They both support high biodiversity", "They both grow quickly", "They are both found only in tropics", "They are both green"], answer: 0 },
        { q: "What percentage of the ocean floor do coral reefs cover?", options: ["10%", "Less than 1%", "25%", "More than 50%"], answer: 1 },
        { q: "The word 'secrete' is closest in meaning to:", options: ["Produce and release", "Destroy", "Hide", "Absorb"], answer: 0 },
        { q: "Which is NOT mentioned as a threat to coral reefs?", options: ["Rising temperatures", "Overfishing", "Pollution", "Ocean acidification"], answer: 1 },
        { q: "What can be inferred about coral reef formation?", options: ["It requires human help", "It only occurs in cold water", "It happens quickly", "It takes thousands of years"], answer: 3 }
      ]
    },
    // === TEST 2 ===
    {
      passage: "The Industrial Revolution, which began in Britain in the late 18th century, fundamentally transformed the way goods were produced. Before industrialization, most products were made by hand in small workshops or homes. The introduction of machines powered by steam and later electricity made it possible to produce goods on a massive scale. Factories became the centers of production, drawing workers from rural areas into growing cities. While industrialization brought economic growth and improved living standards over time, it also created new problems including urban overcrowding, pollution, and dangerous working conditions.",
      questions: [
        { q: "Where did the Industrial Revolution begin?", options: ["Britain", "United States", "Germany", "France"], answer: 0 },
        { q: "What powered the earliest industrial machines?", options: ["Water", "Wind", "Steam", "Electricity"], answer: 2 },
        { q: "The word 'fundamentally' is closest in meaning to:", options: ["Accidentally", "Temporarily", "Partially", "Completely and essentially"], answer: 3 },
        { q: "According to the passage, what drew workers to cities?", options: ["Universities", "Cleaner air", "Factories", "Better housing"], answer: 2 },
        { q: "Which is mentioned as a negative effect of industrialization?", options: ["Decreased production", "Rural overcrowding", "Loss of machines", "Urban pollution"], answer: 3 }
      ]
    },
    {
      passage: "Sleep is essential for both physical and mental health, yet many people do not get adequate rest. During sleep, the body repairs tissues, consolidates memories, and regulates hormones. Research has shown that adults who consistently sleep fewer than seven hours per night have a higher risk of developing cardiovascular disease, obesity, and depression. Despite this evidence, modern lifestyles often prioritize productivity over rest, with artificial lighting and electronic devices disrupting natural sleep patterns. The blue light emitted by screens suppresses the production of melatonin, the hormone that signals the body to prepare for sleep.",
      questions: [
        { q: "What is the main topic of this passage?", options: ["How hormones work", "How to use electronic devices safely", "Why depression is increasing", "The importance of sleep for health"], answer: 3 },
        { q: "What happens during sleep according to the passage?", options: ["Memories are consolidated", "Productivity increases", "Blue light is produced", "Weight increases"], answer: 0 },
        { q: "The word 'adequate' is closest in meaning to:", options: ["Enough", "Brief", "Perfect", "Excessive"], answer: 0 },
        { q: "What does blue light from screens do?", options: ["Repairs body tissues", "Suppresses melatonin production", "Increases melatonin", "Helps people fall asleep"], answer: 1 },
        { q: "What can be inferred from the passage?", options: ["Everyone sleeps enough", "Technology may contribute to sleep problems", "Seven hours is too much sleep", "Only older adults need sleep"], answer: 1 }
      ]
    },
    // === TEST 3 ===
    {
      passage: "Migration is a behavior observed in many animal species, from birds and butterflies to whales and wildebeest. Animals migrate primarily to find food, suitable breeding grounds, or more favorable climatic conditions. The Arctic tern holds the record for the longest migration, traveling approximately 70,000 kilometers annually between the Arctic and Antarctic. Scientists believe that migrating animals use a combination of the Earth's magnetic field, the position of the sun and stars, and visual landmarks to navigate across vast distances. Climate change is now disrupting traditional migration patterns, as shifting temperatures alter the availability of food and habitat along established routes.",
      questions: [
        { q: "What is the primary reason animals migrate?", options: ["To avoid predators only", "To follow human settlements", "To find new species to interact with", "To find food, breeding grounds, or better climate"], answer: 3 },
        { q: "How far does the Arctic tern travel annually?", options: ["7,000 km", "700,000 km", "70,000 km", "17,000 km"], answer: 2 },
        { q: "The word 'vast' is closest in meaning to:", options: ["Extremely large", "Dangerous", "Unknown", "Short"], answer: 0 },
        { q: "How do animals navigate during migration?", options: ["By smell alone", "Using human-made GPS signals", "Only by following other animals", "Using magnetic field, sun, stars, and landmarks"], answer: 3 },
        { q: "What effect is climate change having on migration?", options: ["More animals are migrating", "Animals are migrating faster", "Traditional patterns are being disrupted", "Migration has stopped completely"], answer: 2 }
      ]
    },
    {
      passage: "The human brain is remarkably adaptable, a quality known as neuroplasticity. This means the brain can reorganize itself by forming new neural connections throughout life. Neuroplasticity allows the brain to compensate for injury, adjust to new experiences, and learn new information. For example, studies of London taxi drivers found that their hippocampus — the brain region associated with spatial memory — was significantly larger than average, likely due to years of navigating complex city streets. Similarly, musicians who practice for many hours show enlarged areas of the brain related to motor control and auditory processing. This adaptability is most pronounced in childhood but continues, to a lesser degree, into old age.",
      questions: [
        { q: "What is neuroplasticity?", options: ["The brain's ability to reorganize itself", "The growth of the skull", "A type of brain surgery", "A disease of the nervous system"], answer: 0 },
        { q: "What did studies of London taxi drivers reveal?", options: ["Their vision was better", "They could not learn new routes", "Their hippocampus was larger than average", "They had smaller brains"], answer: 2 },
        { q: "The word 'pronounced' is closest in meaning to:", options: ["Noticeable or strong", "Predicted", "Spoken clearly", "Reduced"], answer: 0 },
        { q: "What can be inferred about neuroplasticity and age?", options: ["It increases as people get older", "It stops at age 30", "It only works in children", "It decreases with age but never stops completely"], answer: 3 },
        { q: "Why are musicians mentioned in the passage?", options: ["To argue that music is better than driving", "As another example of brain adaptation through practice", "To prove neuroplasticity doesn't work", "To compare brain size across professions"], answer: 1 }
      ]
    },
    // === TEST 4 ===
    {
      passage: "Water scarcity is becoming one of the most pressing global challenges of the 21st century. While approximately 71% of the Earth's surface is covered by water, only about 2.5% of it is freshwater, and much of that is locked in glaciers or deep underground. As the global population grows and climate patterns shift, demand for freshwater is outpacing supply in many regions. Agriculture alone accounts for roughly 70% of freshwater consumption worldwide. Solutions being explored include desalination of seawater, improved irrigation techniques, water recycling, and rainwater harvesting. However, many of these technologies remain expensive or energy-intensive, making them inaccessible to the communities that need them most.",
      questions: [
        { q: "What percentage of Earth's water is freshwater?", options: ["70%", "71%", "25%", "About 2.5%"], answer: 3 },
        { q: "What uses the most freshwater globally?", options: ["Industry", "Energy production", "Agriculture", "Households"], answer: 2 },
        { q: "The word 'pressing' is closest in meaning to:", options: ["Physical", "Urgent and serious", "Slow-developing", "Political"], answer: 1 },
        { q: "Which is NOT mentioned as a solution to water scarcity?", options: ["Building more dams", "Rainwater harvesting", "Desalination", "Water recycling"], answer: 0 },
        { q: "What can be inferred about desalination technology?", options: ["It is too expensive for many communities that need it", "It has completely solved water scarcity", "It is cheap and widely available", "It only works in cold climates"], answer: 0 }
      ]
    },
    {
      passage: "The concept of emotional intelligence, popularized by psychologist Daniel Goleman in the 1990s, refers to the ability to recognize, understand, and manage our own emotions, as well as the emotions of others. Unlike traditional IQ, which measures cognitive abilities like logic and reasoning, emotional intelligence encompasses skills such as empathy, self-awareness, motivation, and social competence. Research suggests that emotional intelligence may be a better predictor of success in the workplace than IQ alone. Leaders with high emotional intelligence tend to create more positive work environments, resolve conflicts more effectively, and inspire greater loyalty among team members. Importantly, unlike IQ, emotional intelligence can be developed and improved throughout life with deliberate practice.",
      questions: [
        { q: "Who popularized the concept of emotional intelligence?", options: ["Sigmund Freud", "Daniel Goleman", "Howard Gardner", "Albert Einstein"], answer: 1 },
        { q: "How is emotional intelligence different from IQ?", options: ["They are the same thing", "EI is about emotions and social skills, IQ is about logic", "IQ includes empathy", "EI cannot be measured"], answer: 1 },
        { q: "The word 'encompasses' is closest in meaning to:", options: ["Excludes", "Measures", "Includes or contains", "Contradicts"], answer: 2 },
        { q: "What does research suggest about EI in the workplace?", options: ["It may predict success better than IQ alone", "It is irrelevant to success", "It decreases with experience", "It only matters for managers"], answer: 0 },
        { q: "What is stated about improving emotional intelligence?", options: ["Only children can improve it", "It decreases over time", "It can be developed with practice", "It cannot be changed"], answer: 2 }
      ]
    }
  ],

  listening: [
    // === TEST 1 ===
    {
      context: "A professor lectures about photosynthesis in a biology class.",
      transcript: "Today we'll discuss photosynthesis — the process by which plants convert sunlight into energy. Plants use chlorophyll, the green pigment in their leaves, to absorb sunlight. They combine this light energy with water from the soil and carbon dioxide from the air to produce glucose and oxygen. The glucose provides energy for the plant to grow, while the oxygen is released into the atmosphere. Interestingly, photosynthesis is responsible for producing most of the oxygen we breathe.",
      questions: [
        { q: "What is the main topic of the lecture?", options: ["Why leaves change color", "The process of photosynthesis", "How plants grow taller", "Different types of plants"], answer: 1 },
        { q: "What does chlorophyll do?", options: ["Creates carbon dioxide", "Absorbs sunlight", "Produces water", "Stores glucose"], answer: 1 },
        { q: "What are the products of photosynthesis?", options: ["Soil and minerals", "Chlorophyll and sunlight", "Glucose and oxygen", "Water and carbon dioxide"], answer: 2 },
        { q: "Why does the professor mention oxygen production?", options: ["To compare plants to animals", "To explain why plants are green", "To describe how glucose is used", "To emphasize its importance for life"], answer: 3 }
      ]
    },
    {
      context: "A student visits the housing office about a problem.",
      transcript: "Student: Hi, I'm having an issue with my dorm room. The heating hasn't been working for three days and it's getting really cold at night. I submitted a maintenance request online, but nobody has come. Housing Officer: I'm sorry. Let me check... I see your request. We're short-staffed this week because of the holiday. I can escalate this to urgent priority and someone should come by tomorrow morning. In the meantime, I can arrange for a portable heater to be delivered this afternoon.",
      questions: [
        { q: "What is the student's problem?", options: ["Broken heating", "Noisy roommate", "Internet not working", "Room too small"], answer: 0 },
        { q: "Why hasn't the request been addressed?", options: ["Short-staffed due to holiday", "Never submitted", "Not serious enough", "Office lost it"], answer: 0 },
        { q: "What temporary solution is offered?", options: ["Stay with friend", "Portable heater", "Extra blankets", "Different room"], answer: 1 },
        { q: "When will maintenance fix the heating?", options: ["Tomorrow morning", "Next week", "This afternoon", "After the holiday"], answer: 0 }
      ]
    },
    // === TEST 2 ===
    {
      context: "A professor discusses the water cycle in an environmental science class.",
      transcript: "The water cycle, also known as the hydrological cycle, describes the continuous movement of water within the Earth and atmosphere. It begins with evaporation — when the sun heats water in oceans, lakes, and rivers, turning it into vapor. This vapor rises into the atmosphere, cools, and condenses to form clouds. When clouds become saturated, precipitation occurs as rain, snow, or hail. The water then either flows into rivers and back to the ocean — that's surface runoff — or seeps into the ground to become groundwater. What's fascinating is that the total amount of water on Earth hasn't changed in billions of years. The water you drink today could contain molecules that dinosaurs drank millions of years ago.",
      questions: [
        { q: "What is the first step of the water cycle mentioned?", options: ["Runoff", "Condensation", "Precipitation", "Evaporation"], answer: 3 },
        { q: "What causes evaporation?", options: ["The moon's gravity", "The sun heating water", "Cold temperatures", "Wind"], answer: 1 },
        { q: "What happens when clouds become saturated?", options: ["Evaporation increases", "Precipitation occurs", "They move higher", "They disappear"], answer: 1 },
        { q: "Why does the professor mention dinosaurs?", options: ["To illustrate that water is recycled over millions of years", "To explain groundwater formation", "To compare modern and ancient weather", "To discuss extinction"], answer: 0 }
      ]
    },
    {
      context: "A student speaks with a librarian about research resources.",
      transcript: "Student: Hi, I'm working on a research paper about renewable energy for my environmental studies class, and I'm having trouble finding academic sources. The regular search just gives me news articles. Librarian: Ah, you'll want to use our academic databases. Have you tried Google Scholar? That's a good start, but for more specialized sources, I'd recommend our library's access to JSTOR and ScienceDirect. You can access those through the library website with your student login. Also, I'd suggest narrowing your topic — 'renewable energy' is quite broad. Are you focusing on solar, wind, or something specific? Student: I think I want to focus on solar energy in developing countries. Librarian: Perfect. That's much more focused. I'd also recommend booking a session with a research librarian — we can help you develop a search strategy.",
      questions: [
        { q: "What problem is the student having?", options: ["Can't access the library", "Paper is overdue", "Topic is too narrow", "Finding only news articles instead of academic sources"], answer: 3 },
        { q: "What databases does the librarian recommend?", options: ["Wikipedia and Google", "YouTube and TED", "Amazon and Barnes & Noble", "JSTOR and ScienceDirect"], answer: 3 },
        { q: "What advice does the librarian give about the topic?", options: ["Use more news sources", "Make it broader", "Change it completely", "Narrow it down"], answer: 3 },
        { q: "What does the student decide to focus on?", options: ["Wind energy in Europe", "Renewable energy generally", "Solar energy in developing countries", "Nuclear energy"], answer: 2 }
      ]
    },
    // === TEST 3 ===
    {
      context: "A professor lectures about behavioral economics.",
      transcript: "Today I want to talk about a concept in behavioral economics called the 'anchoring effect.' This is the tendency for people to rely too heavily on the first piece of information they encounter when making decisions. Here's a classic example: in one experiment, researchers asked participants to estimate the percentage of African countries in the United Nations. But first, they spun a wheel that randomly landed on either 10 or 65. Participants who saw 65 estimated significantly higher percentages than those who saw 10 — even though the wheel number was completely random and irrelevant! This shows how our brains latch onto initial numbers as reference points. The anchoring effect has huge implications for real life. In salary negotiations, whoever states a number first often 'anchors' the entire discussion. In retail, a 'was $100, now $60' sign makes $60 feel like a bargain, even if the item was never really worth $100.",
      questions: [
        { q: "What is the anchoring effect?", options: ["A type of investment strategy", "The tendency to rely heavily on the first information encountered", "A method for accurate estimation", "A way to avoid bias"], answer: 1 },
        { q: "What was the purpose of the wheel in the experiment?", options: ["To show a random irrelevant number that still influenced estimates", "To measure spinning speed", "To entertain participants", "To provide accurate information"], answer: 0 },
        { q: "How does anchoring affect salary negotiations?", options: ["It prevents unfair outcomes", "It has no effect on negotiations", "Whoever states a number first anchors the discussion", "It makes negotiations faster"], answer: 2 },
        { q: "Why does the professor mention retail pricing?", options: ["To explain supply and demand", "To show anchoring only works in stores", "To criticize shopping habits", "As a real-life application of anchoring"], answer: 3 }
      ]
    },
    {
      context: "A student meets with an academic advisor about course selection.",
      transcript: "Advisor: So I see you're planning your schedule for next semester. What are you thinking? Student: Well, I need to take Organic Chemistry and Calculus II. But I'm also interested in taking an art history elective. My concern is that the chem and calc courses are both really intensive, and I don't want to overload myself. Advisor: That's a valid concern. Both of those courses have heavy workloads. How many credits are you planning total? Student: If I take all three, it would be 16 credits. Advisor: That's manageable, but it depends on your other commitments. Do you work? Student: Yeah, I work part-time about 15 hours a week. Advisor: In that case, I'd recommend either dropping to 13 credits by saving the elective for summer, or reducing your work hours during the semester. Taking two STEM intensives while working could be overwhelming.",
      questions: [
        { q: "What courses does the student need to take?", options: ["Organic chemistry and calculus II", "English and physics", "Three electives", "Art history and biology"], answer: 0 },
        { q: "What is the student's concern?", options: ["Graduating late", "Can't find the courses", "Courses are too expensive", "Overloading themselves academically"], answer: 3 },
        { q: "How many credits would the student have with all three courses?", options: ["15", "18", "13", "16"], answer: 3 },
        { q: "What does the advisor recommend?", options: ["Take all three courses", "Save the elective or reduce work hours", "Switch majors", "Drop organic chemistry"], answer: 1 }
      ]
    },
    // === TEST 4 ===
    {
      context: "A professor lectures about the history of writing systems.",
      transcript: "The earliest known writing system is Sumerian cuneiform, which appeared around 3400 BCE in Mesopotamia — modern-day Iraq. But here's what's interesting: writing wasn't invented for literature or storytelling. It was invented for accounting. The Sumerians needed to track grain stores, livestock, and trade transactions. Early cuneiform consisted of simple pictographs pressed into clay tablets. Over centuries, these evolved into more abstract wedge-shaped marks. A similar story played out independently in other parts of the world. Egyptian hieroglyphs emerged around 3200 BCE, Chinese characters around 1200 BCE, and Mayan glyphs around 300 BCE. The key insight is that writing appears to have been invented independently multiple times, always in complex societies that needed record-keeping.",
      questions: [
        { q: "What is the earliest known writing system?", options: ["Mayan glyphs", "Egyptian hieroglyphs", "Sumerian cuneiform", "Chinese characters"], answer: 2 },
        { q: "What was writing originally invented for?", options: ["Accounting and record-keeping", "Religious texts", "Storytelling", "Art"], answer: 0 },
        { q: "What material did Sumerians write on?", options: ["Stone walls", "Clay tablets", "Paper", "Animal skin"], answer: 1 },
        { q: "What pattern does the professor identify?", options: ["Writing started as art", "Writing was invented independently multiple times in complex societies", "Only Mesopotamia had writing", "Writing was invented once and spread"], answer: 1 }
      ]
    },
    {
      context: "A student discusses a group project issue with a teaching assistant.",
      transcript: "Student: I'm having a problem with my group project for Professor Kim's class. One of our members hasn't contributed anything in two weeks. We've tried emailing him and messaging on the group chat, but he just doesn't respond. Our presentation is in ten days and we're worried. TA: Has anyone tried talking to him in person? Sometimes people fall behind because of personal issues. Student: We haven't seen him in class either. TA: Okay, here's what I'd suggest. First, document everything — save those emails and messages showing your attempts to reach out. Second, I'll mention this to Professor Kim. She has a policy for unresponsive group members. Usually, she'll contact the student directly, and if there's still no response, she can adjust the grading so the contributing members aren't penalized. Student: That's a relief. Should we redistribute his work among ourselves? TA: Yes, go ahead and split it up. Better to be prepared.",
      questions: [
        { q: "What is the student's problem?", options: ["The project is too difficult", "They disagree on the topic", "A group member isn't contributing or responding", "The deadline was moved up"], answer: 2 },
        { q: "What does the TA suggest first?", options: ["Document all communication attempts", "Remove the member from the group", "Talk to the dean", "Start the project over"], answer: 0 },
        { q: "What is Professor Kim's policy?", options: ["Unresponsive members are expelled", "She can adjust grading so contributing members aren't penalized", "The project is cancelled", "All members get the same grade"], answer: 1 },
        { q: "What should the group do about the missing member's work?", options: ["Ignore that portion", "Hire someone else", "Wait for him", "Split it among themselves"], answer: 3 }
      ]
    }
  ],

  speaking: [
    // === TEST 1 ===
    { type: "task1", prompt: "Some people prefer to work in an office environment. Others prefer to work from home. Which do you prefer and why? Use specific reasons and examples.", prepTime: 15, speakTime: 45 },
    { type: "task1", prompt: "Do you agree or disagree: Learning from mistakes is more valuable than learning from success. Use details and examples.", prepTime: 15, speakTime: 45 },
    { type: "task4", prompt: "The professor discusses two ways animals protect themselves from predators. Summarize the two methods using examples. (Imagine you heard about camouflage and mimicry.)", prepTime: 20, speakTime: 60 },
    { type: "task1", prompt: "If you could learn any new skill, what would it be and why?", prepTime: 15, speakTime: 45 },
    // === TEST 2 ===
    { type: "task1", prompt: "Do you agree or disagree: Children should be limited in the amount of time they spend using electronic devices.", prepTime: 15, speakTime: 45 },
    { type: "task1", prompt: "Some people like to plan every detail of their vacation. Others prefer to be spontaneous. Which approach do you prefer?", prepTime: 15, speakTime: 45 },
    { type: "task4", prompt: "The professor explains two methods companies use to motivate employees. Summarize both using examples. (Imagine: financial incentives vs. workplace culture/recognition.)", prepTime: 20, speakTime: 60 },
    { type: "task1", prompt: "What is the most effective way to reduce stress? Use specific reasons and examples.", prepTime: 15, speakTime: 45 },
    // === TEST 3 ===
    { type: "task1", prompt: "Do you agree or disagree: It is better to have a few close friends than many casual acquaintances.", prepTime: 15, speakTime: 45 },
    { type: "task1", prompt: "Some people think that competition motivates people to do their best. Others believe cooperation is more effective. What is your opinion?",prepTime: 15, speakTime: 45 },
    { type: "task4", prompt: "The professor discusses two types of memory: short-term and long-term. Explain the differences using the professor's examples. (Imagine: phone numbers vs. childhood experiences.)", prepTime: 20, speakTime: 60 },
    { type: "task1", prompt: "If your city had extra funding, would you recommend spending it on public transportation or parks? Why?", prepTime: 15, speakTime: 45 },
    // === TEST 4 ===
    { type: "task1", prompt: "Do you agree or disagree: People are too dependent on technology today.", prepTime: 15, speakTime: 45 },
    { type: "task1", prompt: "Would you prefer to take a job in a field you love with average pay, or a less interesting job with excellent pay? Explain.", prepTime: 15, speakTime: 45 },
    { type: "task4", prompt: "The professor describes two ways that urbanization affects the environment. Summarize both with examples. (Imagine: heat island effect and loss of green spaces.)", prepTime: 20, speakTime: 60 },
    { type: "task1", prompt: "What quality do you think is most important for a leader to have? Use specific examples.", prepTime: 15, speakTime: 45 }
  ],

  writing: [
    // === TEST 1 ===
    { type: "email", prompt: "You recently attended a workshop at your university that was poorly organized. Write an email to the event coordinator. In your email:\n• Explain which workshop you attended\n• Describe the problems you experienced\n• Suggest improvements for future workshops", time: 420 },
    { type: "discussion", prompt: "Your professor asks: Should companies be required to offer remote work options to employees?\n\nStudent A: Yes — remote work increases productivity and helps work-life balance. Studies show people are more efficient at home.\n\nStudent B: No — working in person builds stronger relationships and makes collaboration easier. Remote work leads to isolation.\n\nShare your opinion. (120-150 words)", time: 600 },
    // === TEST 2 ===
    { type: "email", prompt: "You ordered a product online that arrived damaged. Write an email to customer service. In your email:\n• Describe the product you ordered\n• Explain how it was damaged when it arrived\n• State what resolution you would like (refund, replacement, etc.)", time: 420 },
    { type: "discussion", prompt: "Your professor asks: Should university education be free for all students?\n\nStudent A: Absolutely — education is a right, not a privilege. Free university would reduce inequality and allow everyone to reach their potential regardless of financial background.\n\nStudent B: I disagree — free education would lower quality because of overcrowding and reduced funding. Students who pay tuition are more motivated.\n\nShare your opinion. (120-150 words)", time: 600 },
    // === TEST 3 ===
    { type: "email", prompt: "Your neighbor has been making excessive noise late at night. Write an email to your building manager. In your email:\n• Describe the noise problem\n• Explain how it is affecting you\n• Request a specific action", time: 420 },
    { type: "discussion", prompt: "Your professor asks: Is social media doing more harm than good to society?\n\nStudent A: Social media connects people globally, enables social movements, and gives everyone a voice. The benefits outweigh the negatives.\n\nStudent B: Social media increases anxiety, spreads misinformation, and creates addiction. The harm to mental health is well-documented.\n\nShare your opinion. (120-150 words)", time: 600 },
    // === TEST 4 ===
    { type: "email", prompt: "You are a member of a local sports club that has recently changed its schedule. Write an email to the club manager. In your email:\n• Mention which sport/activity you participate in\n• Explain why the new schedule doesn't work for you\n• Propose an alternative time", time: 420 },
    { type: "discussion", prompt: "Your professor asks: Should governments ban single-use plastics?\n\nStudent A: Yes — the environmental damage is undeniable. Oceans are filling with plastic waste, and marine life is dying. A ban would force companies to innovate alternatives.\n\nStudent B: A complete ban is too extreme — it would hurt small businesses and low-income consumers who rely on affordable packaging. Better to invest in recycling infrastructure.\n\nShare your opinion. (120-150 words)", time: 600 }
  ]
};

// ========== TEST SELECTOR — WHICH SET TO USE ==========
let mockTestSet = 0; // 0-3 (4 tests)

function getTestSet() {
  // Rotate through tests based on how many have been taken
  const history = (state.testHistory || []).length;
  return history % 4;
}

// ========== MOCK TEST ENGINE ==========
let mockState = {
  active: false,
  mode: null,
  sections: [],
  currentSection: 0,
  currentQuestion: 0,
  answers: {},
  writingResponses: {},
  speakingTranscripts: {},
  timer: null,
  timeLeft: 0,
  startTime: null,
  testSet: 0
};

function startMockTest(mode) {
  mockTestSet = getTestSet();
  
  mockState = {
    active: true,
    mode: mode,
    sections: mode === 'full' ? ['reading', 'listening', 'speaking', 'writing'] : [mode],
    currentSection: 0,
    currentQuestion: 0,
    answers: {},
    writingResponses: {},
    speakingTranscripts: {},
    timer: null,
    timeLeft: 0,
    startTime: new Date().toLocaleString(),
    testSet: mockTestSet,
    writingTimerStarted: false
  };
  
  document.getElementById('mockTestActive').style.display = 'block';
  document.getElementById('mockResultsArea').style.display = 'none';
  loadMockSection();
}

function getQuestionsForSection(section) {
  const set = mockState.testSet;
  if (section === 'reading') {
    // 2 passages per test
    const start = set * 2;
    const passages = MOCK_QUESTIONS.reading.slice(start, start + 2);
    return passages.reduce((acc, p) => acc.concat(p.questions.map((q, i) => ({...q, passageIdx: start + Math.floor(i/5)}))), []);
  } else if (section === 'listening') {
    const start = set * 2;
    const convos = MOCK_QUESTIONS.listening.slice(start, start + 2);
    return convos.reduce((acc, p) => acc.concat(p.questions), []);
  } else if (section === 'speaking') {
    const start = set * 4;
    return MOCK_QUESTIONS.speaking.slice(start, start + 4);
  } else if (section === 'writing') {
    const start = set * 2;
    return MOCK_QUESTIONS.writing.slice(start, start + 2);
  }
  return [];
}

function loadMockSection() {
  const section = mockState.sections[mockState.currentSection];
  const sectionTimes = { reading: 600, listening: 480, speaking: 0, writing: 0 };
  
  mockState.currentQuestion = 0;
  mockState.timeLeft = sectionTimes[section];
  mockState.writingTimerStarted = false;
  
  document.getElementById('mockSectionTitle').textContent = `${section.charAt(0).toUpperCase() + section.slice(1)} (Test ${mockState.testSet + 1})`;
  
  if (mockState.timeLeft > 0) startMockTimer();
  else document.getElementById('mockTimer').textContent = 'Per task ↓';
  
  renderMockQuestion();
}

function startMockTimer() {
  clearInterval(mockState.timer);
  updateMockTimerDisplay();
  mockState.timer = setInterval(() => {
    mockState.timeLeft--;
    updateMockTimerDisplay();
    if (mockState.timeLeft <= 0) {
      clearInterval(mockState.timer);
      alert("⏰ Time's up for this section!");
      submitMockSection();
    }
  }, 1000);
}

function updateMockTimerDisplay() {
  const m = Math.floor(mockState.timeLeft / 60);
  const s = mockState.timeLeft % 60;
  const display = document.getElementById('mockTimer');
  display.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  display.className = mockState.timeLeft <= 60 ? 'mock-timer warning' : 'mock-timer';
}

function renderMockQuestion() {
  const section = mockState.sections[mockState.currentSection];
  const questions = getQuestionsForSection(section);
  const total = questions.length;
  const idx = mockState.currentQuestion;
  
  document.getElementById('mockProgress').textContent = `Question ${idx + 1} / ${total}`;
  document.getElementById('mockPrevBtn').disabled = idx === 0;
  document.getElementById('mockNextBtn').style.display = idx < total - 1 ? 'inline-flex' : 'none';
  document.getElementById('mockSubmitBtn').style.display = idx === total - 1 ? 'inline-flex' : 'none';
  
  const area = document.getElementById('mockQuestionArea');
  
  if (section === 'reading' || section === 'listening') {
    const data = MOCK_QUESTIONS[section];
    const start = mockState.testSet * 2;
    let passageIdx = start, qIdx = idx;
    for (let p = start; p < start + 2; p++) {
      if (qIdx < data[p].questions.length) { passageIdx = p; break; }
      qIdx -= data[p].questions.length;
    }
    
    const passage = data[passageIdx];
    const question = passage.questions[qIdx];
    const key = `${section}_${idx}`;
    const selectedAnswer = mockState.answers[key];
    
    area.innerHTML = `
      <div class="mock-question">
        ${section === 'reading' ? `<div class="q-passage">${passage.passage}</div>` : 
          `<div class="q-passage">
            <strong>${passage.context}</strong><br><br>
            <div style="text-align:center; padding:16px;">
              <button class="btn btn-primary" onclick="playListeningAudio(${passageIdx})" style="padding:12px 24px; font-size:14px;"><i class="fa-solid fa-headphones"></i> Play Audio</button>
              <button class="btn btn-secondary" onclick="playListeningAudio(${passageIdx})" style="margin-left:8px;"><i class="fa-solid fa-rotate-right"></i> Replay</button>
              <div id="listeningStatus_${idx}" style="margin-top:10px; font-size:13px; color:var(--text-muted);">Click Play to hear the conversation</div>
            </div>
          </div>`}
        <div class="q-text">${question.q}</div>
        <div class="mock-options">
          ${question.options.map((opt, i) => `
            <div class="mock-option ${selectedAnswer === i ? 'selected' : ''}" onclick="selectMockAnswer('${key}', ${i})">
              <span class="option-letter">${String.fromCharCode(65+i)}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (section === 'speaking') {
    const tasks = getQuestionsForSection('speaking');
    const task = tasks[idx];
    const key = `speaking_${idx}`;
    const existing = mockState.speakingTranscripts[key] || '';
    
    area.innerHTML = `
      <div class="mock-question">
        <div class="q-num">${task.type === 'task1' ? 'Independent Task' : 'Integrated Task'}</div>
        <div class="q-text">${task.prompt}</div>
        <div class="mock-speaking-area">
          <div style="display:flex; gap:12px; justify-content:center; margin-bottom:16px;">
            <button class="btn btn-secondary" id="mockPrepBtn_${idx}" onclick="startMockSpeakTimer(${idx}, ${task.prepTime}, 'prep')"><i class="fa-solid fa-brain"></i> Start Prep (${task.prepTime}s)</button>
            <button class="btn btn-primary" id="mockSpeakBtn_${idx}" onclick="startMockSpeakTimer(${idx}, ${task.speakTime}, 'speak')" disabled><i class="fa-solid fa-microphone"></i> Start Speaking (${task.speakTime}s)</button>
          </div>
          <div class="timer-display" id="mockSpeakTimerDisplay_${idx}" style="font-size:48px; font-weight:800; text-align:center; font-family:monospace; color:var(--primary); margin-bottom:16px;">00:${String(task.prepTime).padStart(2,'0')}</div>
          <div style="text-align:center; font-size:13px; color:var(--text-muted); margin-bottom:12px;" id="mockSpeakPhase_${idx}">Click "Start Prep" to begin</div>
          <div class="mock-recorder">
            <div class="recorder-controls">
              <button class="btn btn-danger" id="mockRecBtn_${idx}" onclick="toggleMockRecording(${idx})" disabled><i class="fa-solid fa-microphone"></i> Record</button>
              <button class="btn btn-secondary" id="mockStopBtn_${idx}" onclick="stopMockRecording(${idx})" disabled><i class="fa-solid fa-stop"></i> Stop</button>
            </div>
            <div id="mockLiveText_${idx}" style="margin-top:12px; padding:12px; background:var(--bg); border-radius:8px; font-size:14px; min-height:40px; text-align:left; display:none;"></div>
          </div>
          <p style="font-size:12px; color:var(--text-muted); margin-top:12px;">Transcription auto-fills below. Edit if needed:</p>
          <textarea class="response-textarea" style="min-height:80px;" placeholder="Your speech will appear here automatically..." 
            id="mockSpeakText_${idx}"
            oninput="mockState.speakingTranscripts['${key}']=this.value">${existing}</textarea>
        </div>
      </div>
    `;
  } else if (section === 'writing') {
    const tasks = getQuestionsForSection('writing');
    const task = tasks[idx];
    const key = `writing_${idx}`;
    const existing = mockState.writingResponses[key] || '';
    const timeMin = Math.floor(task.time / 60);
    
    if (!mockState.writingTimerStarted) {
      mockState.timeLeft = task.time;
      startMockTimer();
      mockState.writingTimerStarted = true;
    }
    
    area.innerHTML = `
      <div class="mock-question">
        <div class="q-num">${task.type === 'email' ? 'Write an Email' : 'Academic Discussion'} — ${timeMin} minutes</div>
        <div class="q-text" style="white-space:pre-line;">${task.prompt}</div>
        <div class="mock-writing-area">
          <textarea placeholder="Write your response here..." 
            oninput="mockState.writingResponses['${key}']=this.value">${existing}</textarea>
          <div style="margin-top:8px; font-size:12px; color:var(--text-muted);">
            Word count: <span id="mockWordCount">${existing.split(/\s+/).filter(w=>w).length}</span>
          </div>
        </div>
      </div>
    `;
    
    const ta = area.querySelector('textarea');
    ta.addEventListener('input', () => {
      document.getElementById('mockWordCount').textContent = ta.value.split(/\s+/).filter(w=>w).length;
    });
  }
}

function selectMockAnswer(key, optionIdx) {
  mockState.answers[key] = optionIdx;
  renderMockQuestion();
}

function mockNext() {
  const section = mockState.sections[mockState.currentSection];
  const total = getQuestionsForSection(section).length;
  if (mockState.currentQuestion < total - 1) {
    mockState.currentQuestion++;
    if (section === 'writing') mockState.writingTimerStarted = false;
    renderMockQuestion();
  }
}

function mockPrev() {
  if (mockState.currentQuestion > 0) {
    mockState.currentQuestion--;
    renderMockQuestion();
  }
}

function submitMockSection() {
  clearInterval(mockState.timer);
  
  if (mockState.currentSection < mockState.sections.length - 1) {
    mockState.currentSection++;
    alert(`✅ Section complete! Next: ${mockState.sections[mockState.currentSection].toUpperCase()}`);
    loadMockSection();
  } else {
    showMockResults();
  }
}

function showMockResults() {
  mockState.active = false;
  document.getElementById('mockTestActive').style.display = 'none';
  document.getElementById('mockResultsArea').style.display = 'block';
  
  const results = evaluateMockTest();
  
  let html = '';
  
  if (results.reading) {
    html += `<div class="result-section"><h4><i class="fa-solid fa-book-open"></i> Reading</h4>
      <div class="result-score">${results.reading.correct}/${results.reading.total}</div>
      <div class="result-details">Estimated: ${results.reading.scaled}/30</div>
      <div style="margin-top:12px;">${results.reading.breakdown}</div></div>`;
  }
  if (results.listening) {
    html += `<div class="result-section"><h4><i class="fa-solid fa-headphones"></i> Listening</h4>
      <div class="result-score">${results.listening.correct}/${results.listening.total}</div>
      <div class="result-details">Estimated: ${results.listening.scaled}/30</div>
      <div style="margin-top:12px;">${results.listening.breakdown}</div></div>`;
  }
  if (results.speaking) {
    html += `<div class="result-section"><h4><i class="fa-solid fa-microphone"></i> Speaking</h4>
      <div class="result-score">Auto: ${results.speaking.avgScore}/5</div>
      <div class="result-details">${results.speaking.feedback}<br><em>Copy & share with Quick for full evaluation</em></div></div>`;
  }
  if (results.writing) {
    html += `<div class="result-section"><h4><i class="fa-solid fa-pen"></i> Writing</h4>
      <div class="result-score">Auto: ${results.writing.avgScore}/5</div>
      <div class="result-details">${results.writing.feedback}<br><em>Copy & share with Quick for full evaluation</em></div></div>`;
  }
  
  html += `<div class="result-total">
    <div class="total-label">Estimated Total</div>
    <div class="total-score">${results.estimatedTotal}/120</div>
    <div class="total-label" style="margin-top:4px;">${results.estimatedTotal >= 95 ? 'C1 Level 🎉' : results.estimatedTotal >= 72 ? 'B2 Level ✅' : 'Keep practicing!'}</div>
  </div>`;
  
  document.getElementById('mockResults').innerHTML = html;
  
  if (!state.testHistory) state.testHistory = [];
  state.testHistory.unshift({
    date: mockState.startTime,
    mode: mockState.mode,
    testSet: mockState.testSet + 1,
    results: results,
    answers: {...mockState.answers},
    writingResponses: {...mockState.writingResponses},
    speakingTranscripts: {...mockState.speakingTranscripts}
  });
  saveState();
  renderTestHistory();
}

function evaluateMockTest() {
  const results = {};
  let totalEstimated = 0;
  let sectionCount = 0;
  
  if (mockState.sections.includes('reading')) {
    const data = MOCK_QUESTIONS.reading;
    const start = mockState.testSet * 2;
    const allQs = data.slice(start, start + 2).reduce((acc, p) => acc.concat(p.questions), []);
    let correct = 0;
    let breakdown = '';
    allQs.forEach((q, i) => {
      const userAns = mockState.answers[`reading_${i}`];
      const isCorrect = userAns === q.answer;
      if (isCorrect) { correct++; }
      else {
        breakdown += `<div style="padding:8px; margin:4px 0; background:var(--danger-light, #fef2f2); border-radius:6px; font-size:12px;">`;
        breakdown += `<strong>Q${i+1}:</strong> ${q.q.substring(0,60)}...<br>`;
        breakdown += `❌ You: <strong>${userAns !== undefined ? q.options[userAns] : '(no answer)'}</strong><br>`;
        breakdown += `✅ Correct: <strong>${q.options[q.answer]}</strong>`;
        breakdown += `</div>`;
      }
    });
    if (!breakdown) breakdown = '<div style="color:var(--success); font-size:13px;">🎉 All correct!</div>';
    const scaled = Math.round((correct / allQs.length) * 30);
    results.reading = { correct, total: allQs.length, scaled, breakdown };
    totalEstimated += scaled; sectionCount++;
  }
  
  if (mockState.sections.includes('listening')) {
    const data = MOCK_QUESTIONS.listening;
    const start = mockState.testSet * 2;
    const allQs = data.slice(start, start + 2).reduce((acc, p) => acc.concat(p.questions), []);
    let correct = 0;
    let breakdown = '';
    allQs.forEach((q, i) => {
      const userAns = mockState.answers[`listening_${i}`];
      const isCorrect = userAns === q.answer;
      if (isCorrect) { correct++; }
      else {
        breakdown += `<div style="padding:8px; margin:4px 0; background:var(--danger-light, #fef2f2); border-radius:6px; font-size:12px;">`;
        breakdown += `<strong>Q${i+1}:</strong> ${q.q.substring(0,60)}...<br>`;
        breakdown += `❌ You: <strong>${userAns !== undefined ? q.options[userAns] : '(no answer)'}</strong><br>`;
        breakdown += `✅ Correct: <strong>${q.options[q.answer]}</strong>`;
        breakdown += `</div>`;
      }
    });
    if (!breakdown) breakdown = '<div style="color:var(--success); font-size:13px;">🎉 All correct!</div>';
    const scaled = Math.round((correct / allQs.length) * 30);
    results.listening = { correct, total: allQs.length, scaled, breakdown };
    totalEstimated += scaled; sectionCount++;
  }
  
  if (mockState.sections.includes('speaking')) {
    let totalScore = 0, count = 0;
    const tasks = getQuestionsForSection('speaking');
    tasks.forEach((q, i) => {
      const text = mockState.speakingTranscripts[`speaking_${i}`] || '';
      if (text.trim()) {
        const eval_ = autoEvaluateSpeaking(text);
        if (eval_) { totalScore += parseFloat(eval_.overall); count++; }
      }
    });
    const avg = count > 0 ? (totalScore / count).toFixed(1) : '—';
    const scaled = count > 0 ? Math.round((totalScore / count) * 6) : 0;
    results.speaking = { avgScore: avg, scaled, feedback: `${count} responses evaluated`, count };
    totalEstimated += scaled; sectionCount++;
  }
  
  if (mockState.sections.includes('writing')) {
    let totalScore = 0, count = 0, feedback = [];
    const tasks = getQuestionsForSection('writing');
    tasks.forEach((q, i) => {
      const text = mockState.writingResponses[`writing_${i}`] || '';
      if (text.trim()) {
        const eval_ = autoEvalWriting(text, q.type);
        totalScore += eval_.score; count++;
        feedback.push(`${q.type}: ${eval_.score}/5`);
      }
    });
    const avg = count > 0 ? (totalScore / count).toFixed(1) : '—';
    const scaled = count > 0 ? Math.round((totalScore / count) * 6) : 0;
    results.writing = { avgScore: avg, scaled, feedback: feedback.join(' | ') || 'No responses', count };
    totalEstimated += scaled; sectionCount++;
  }
  
  results.estimatedTotal = sectionCount < 4 ? Math.round((totalEstimated / sectionCount) * 4) : totalEstimated;
  return results;
}

function autoEvalWriting(text, type) {
  const words = text.split(/\s+/).filter(w => w).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const hasTransitions = /first|second|moreover|however|therefore|furthermore|in addition|for example|in contrast|on the other hand/i.test(text);
  const hasOpinion = /i believe|i think|in my view|i agree|i disagree|personally/i.test(text);
  const longSentences = text.split(/[.!?]+/).filter(s => s.trim().split(/\s+/).length > 20).length;
  const spellingErrors = (text.match(/\b(managzine|appretiate|recevied|seperate|definately|accomodate|occured|neccessary|alot|infact)\b/gi) || []).length;
  
  let score = 3;
  if (hasTransitions) score += 0.5;
  if (hasOpinion) score += 0.3;
  if (type === 'email' && words >= 100 && words <= 180) score += 0.5;
  if (type === 'discussion' && words >= 110 && words <= 160) score += 0.5;
  if (sentences >= 4) score += 0.2;
  if (spellingErrors > 0) score -= spellingErrors * 0.3;
  if (longSentences > 1) score -= 0.5;
  if (words < 80) score -= 1;
  
  return { score: Math.max(1, Math.min(5, Math.round(score * 10) / 10)), words, sentences, spellingErrors, longSentences, hasTransitions, hasOpinion };
}

// ========== COPY & HISTORY ==========
function copyMockResults() {
  const latest = state.testHistory[0];
  if (!latest) { alert('No results!'); return; }
  
  let text = `====== TOEFL MOCK TEST ${latest.testSet || ''} — ${latest.date} ======\n`;
  text += `Mode: ${latest.mode === 'full' ? 'Full Test' : latest.mode + ' only'}\n\n`;
  
  const r = latest.results;
  if (r.reading) text += `READING: ${r.reading.correct}/${r.reading.total} correct (est. ${r.reading.scaled}/30)\n`;
  if (r.listening) text += `LISTENING: ${r.listening.correct}/${r.listening.total} correct (est. ${r.listening.scaled}/30)\n`;
  if (r.speaking) text += `SPEAKING: Auto ${r.speaking.avgScore}/5 (est. ${r.speaking.scaled}/30)\n`;
  if (r.writing) text += `WRITING: Auto ${r.writing.avgScore}/5 (est. ${r.writing.scaled}/30)\n`;
  text += `\nESTIMATED TOTAL: ${r.estimatedTotal}/120\n`;
  
  if (latest.writingResponses && Object.keys(latest.writingResponses).length > 0) {
    text += `\n--- WRITING RESPONSES (for human eval) ---\n`;
    const tasks = MOCK_QUESTIONS.writing.slice((latest.testSet - 1) * 2, latest.testSet * 2);
    tasks.forEach((q, i) => {
      const resp = latest.writingResponses[`writing_${i}`];
      if (resp) {
        text += `\n[${q.type.toUpperCase()} — ${Math.floor(q.time/60)} min]\nPrompt: ${q.prompt.substring(0, 200)}...\nResponse (${resp.split(/\s+/).filter(w=>w).length} words):\n${resp}\n`;
      }
    });
  }
  
  if (latest.speakingTranscripts && Object.keys(latest.speakingTranscripts).length > 0) {
    text += `\n--- SPEAKING TRANSCRIPTS (for human eval) ---\n`;
    const tasks = MOCK_QUESTIONS.speaking.slice((latest.testSet - 1) * 4, latest.testSet * 4);
    tasks.forEach((q, i) => {
      const resp = latest.speakingTranscripts[`speaking_${i}`];
      if (resp) {
        text += `\n[${q.type.toUpperCase()} — ${q.speakTime}s]\nPrompt: ${q.prompt.substring(0, 150)}...\nResponse: ${resp}\n`;
      }
    });
  }
  
  text += `\n====== END — Paste to Quick for full evaluation ======\n`;
  navigator.clipboard.writeText(text).then(() => alert('Results copied! Paste to Quick for scoring. ✅'));
}

function resetMockTest() {
  document.getElementById('mockTestActive').style.display = 'none';
  document.getElementById('mockResultsArea').style.display = 'none';
  clearInterval(mockState.timer);
}

function renderTestHistory() {
  const container = document.getElementById('testHistory');
  if (!container) return;
  const history = state.testHistory || [];
  if (history.length === 0) { container.innerHTML = '<p class="empty-state">No tests taken yet.</p>'; return; }
  container.innerHTML = history.map((h, i) => `
    <div class="test-history-item">
      <div>
        <div class="th-type">${h.mode === 'full' ? '📝 Full Test' : '📋 ' + h.mode} #${h.testSet || '?'}</div>
        <div class="th-date">${h.date}</div>
      </div>
      <div class="th-score">${h.results.estimatedTotal}/120</div>
    </div>
  `).join('');
}

function copyAllTestHistory() {
  const history = state.testHistory || [];
  if (history.length === 0) { alert('No history!'); return; }
  let text = '====== ALL TEST HISTORY ======\n\n';
  history.forEach((h, i) => {
    text += `Test ${i+1} [${h.date}] — ${h.mode} Set#${h.testSet || '?'} — Score: ${h.results.estimatedTotal}/120\n`;
    if (h.results.reading) text += `  Reading: ${h.results.reading.scaled}/30\n`;
    if (h.results.listening) text += `  Listening: ${h.results.listening.scaled}/30\n`;
    if (h.results.speaking) text += `  Speaking: ~${h.results.speaking.scaled}/30\n`;
    if (h.results.writing) text += `  Writing: ~${h.results.writing.scaled}/30\n`;
    text += '\n';
  });
  navigator.clipboard.writeText(text).then(() => alert('History copied! ✅'));
}

function clearTestHistory() {
  if (!confirm('Delete all test history?')) return;
  state.testHistory = [];
  saveState();
  renderTestHistory();
}

// ========== MOCK TEST RECORDER ==========
let mockRecorders = {};

function toggleMockRecording(idx) {
  if (mockRecorders[idx] && mockRecorders[idx].active) {
    stopMockRecording(idx);
  } else {
    startMockRecording(idx);
  }
}

function startMockRecording(idx) {
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const rec = {
      active: true,
      stream: stream,
      recognition: null,
      transcript: '',
      seconds: 0,
      interval: null
    };
    mockRecorders[idx] = rec;

    // UI
    document.getElementById(`mockRecBtn_${idx}`).innerHTML = '<i class="fa-solid fa-circle" style="color:#fff"></i> Recording...';
    document.getElementById(`mockRecBtn_${idx}`).style.background = '#dc2626';
    document.getElementById(`mockStopBtn_${idx}`).disabled = false;
    document.getElementById(`mockRecStatus_${idx}`).textContent = '🔴 Recording...';
    document.getElementById(`mockRecStatus_${idx}`).className = 'recorder-status recording';
    document.getElementById(`mockLiveText_${idx}`).style.display = 'block';
    document.getElementById(`mockLiveText_${idx}`).textContent = 'Listening...';

    // Timer
    rec.interval = setInterval(() => {
      rec.seconds++;
      const m = Math.floor(rec.seconds / 60);
      const s = rec.seconds % 60;
      document.getElementById(`mockRecTimer_${idx}`).textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }, 1000);

    // Speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      rec.recognition = new SpeechRecognition();
      rec.recognition.continuous = true;
      rec.recognition.interimResults = true;
      rec.recognition.lang = 'en-US';

      rec.recognition.onresult = (event) => {
        let interim = '';
        let final = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript + ' ';
          } else {
            interim += event.results[i][0].transcript;
          }
        }
        if (final) rec.transcript += final;
        document.getElementById(`mockLiveText_${idx}`).textContent = rec.transcript + interim;
        // Auto-fill textarea
        document.getElementById(`mockSpeakText_${idx}`).value = rec.transcript + interim;
        const key = `speaking_${idx}`;
        mockState.speakingTranscripts[key] = rec.transcript + interim;
      };

      rec.recognition.onerror = (e) => {
        if (e.error !== 'no-speech') console.error('Speech error:', e.error);
      };

      rec.recognition.onend = () => {
        if (rec.active) rec.recognition.start();
      };

      rec.recognition.start();
    } else {
      document.getElementById(`mockLiveText_${idx}`).textContent = '⚠️ Speech recognition not supported. Use Chrome. Type your answer below.';
    }
  }).catch(err => {
    alert('Mic access denied. Allow microphone and try again.');
  });
}

function stopMockRecording(idx) {
  const rec = mockRecorders[idx];
  if (!rec) return;

  rec.active = false;
  if (rec.recognition) { rec.recognition.onend = null; rec.recognition.stop(); }
  if (rec.stream) rec.stream.getTracks().forEach(t => t.stop());
  if (rec.interval) clearInterval(rec.interval);

  // UI reset
  document.getElementById(`mockRecBtn_${idx}`).innerHTML = '<i class="fa-solid fa-microphone"></i> Record';
  document.getElementById(`mockRecBtn_${idx}`).style.background = '';
  document.getElementById(`mockStopBtn_${idx}`).disabled = true;
  document.getElementById(`mockRecStatus_${idx}`).textContent = 'Done ✅';
  document.getElementById(`mockRecStatus_${idx}`).className = 'recorder-status';

  // Final transcript
  const key = `speaking_${idx}`;
  mockState.speakingTranscripts[key] = rec.transcript.trim();
  document.getElementById(`mockSpeakText_${idx}`).value = rec.transcript.trim();
}

// ========== SPEAKING TASK TIMER ==========
let mockSpeakTimers = {};

function startMockSpeakTimer(idx, duration, phase) {
  // Clear any existing timer for this task
  if (mockSpeakTimers[idx]) clearInterval(mockSpeakTimers[idx]);
  
  let timeLeft = duration;
  const display = document.getElementById(`mockSpeakTimerDisplay_${idx}`);
  const phaseEl = document.getElementById(`mockSpeakPhase_${idx}`);
  
  if (phase === 'prep') {
    phaseEl.textContent = '🧠 PREP TIME — Think about your answer...';
    phaseEl.style.color = 'var(--warning)';
    display.style.color = 'var(--warning)';
    document.getElementById(`mockPrepBtn_${idx}`).disabled = true;
  } else {
    phaseEl.textContent = '🎤 SPEAKING — Talk now!';
    phaseEl.style.color = 'var(--danger)';
    display.style.color = 'var(--danger)';
    document.getElementById(`mockSpeakBtn_${idx}`).disabled = true;
    document.getElementById(`mockRecBtn_${idx}`).disabled = false;
    // Auto-start recording
    toggleMockRecording(idx);
  }
  
  updateMockSpeakDisplay(idx, timeLeft);
  
  mockSpeakTimers[idx] = setInterval(() => {
    timeLeft--;
    updateMockSpeakDisplay(idx, timeLeft);
    
    if (timeLeft <= 5) display.style.color = 'var(--danger)';
    
    if (timeLeft <= 0) {
      clearInterval(mockSpeakTimers[idx]);
      
      if (phase === 'prep') {
        // Prep done → enable speak button
        phaseEl.textContent = '✅ Prep done! Click "Start Speaking"';
        phaseEl.style.color = 'var(--success)';
        document.getElementById(`mockSpeakBtn_${idx}`).disabled = false;
        // Play short beep
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const osc = ctx.createOscillator();
          osc.frequency.value = 600;
          osc.connect(ctx.destination);
          osc.start();
          setTimeout(() => { osc.stop(); ctx.close(); }, 200);
        } catch(e) {}
      } else {
        // Speaking done
        phaseEl.textContent = '⏰ Time up! Stop.';
        phaseEl.style.color = 'var(--danger)';
        display.textContent = 'DONE';
        // Auto-stop recording
        stopMockRecording(idx);
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const osc = ctx.createOscillator();
          osc.frequency.value = 800;
          osc.connect(ctx.destination);
          osc.start();
          setTimeout(() => { osc.stop(); ctx.close(); }, 500);
        } catch(e) {}
      }
    }
  }, 1000);
}

function updateMockSpeakDisplay(idx, seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  document.getElementById(`mockSpeakTimerDisplay_${idx}`).textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// ========== LISTENING AUDIO PLAYBACK ==========
function playListeningAudio(passageIdx) {
  const passage = MOCK_QUESTIONS.listening[passageIdx];
  if (!passage) return;
  
  const text = passage.transcript;
  const idx = mockState.currentQuestion;
  const statusEl = document.getElementById('listeningStatus_' + idx);
  
  if (!('speechSynthesis' in window)) {
    alert('Browser does not support text-to-speech. Use Chrome.');
    return;
  }
  
  window.speechSynthesis.cancel();
  if (statusEl) statusEl.textContent = '🔊 Playing... Listen carefully.';
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  
  let voices = window.speechSynthesis.getVoices();
  const eng = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google'))
            || voices.find(v => v.lang === 'en-US')
            || voices.find(v => v.lang.startsWith('en'));
  if (eng) utterance.voice = eng;
  
  utterance.onend = function() {
    if (statusEl) statusEl.textContent = '✅ Done. Now answer the question.';
  };
  
  window.speechSynthesis.speak(utterance);
}
