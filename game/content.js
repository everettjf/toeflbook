/* ============================================================
   TOEFL Daily Game — CONTENT
   Loaded via <script>; defines a single global `CONTENT`.
   Data shapes must match core.js "DATA SHAPES (by `uses`)".
   ==================================================================== */
const CONTENT = {
  startDate: "2026-05-18",
  chapters: [
    { n:1, from:1,  to:14,  title:"Diagnosis & System Setup",      skill:"mixed" },
    { n:2, from:15, to:28,  title:"Listening + Vocabulary",        skill:"listening" },
    { n:3, from:29, to:42,  title:"Reading + Academic Vocab",      skill:"reading" },
    { n:4, from:43, to:56,  title:"Speaking — Listen & Repeat",    skill:"speaking" },
    { n:5, from:57, to:70,  title:"Writing — Email + Sentence",    skill:"writing" },
    { n:6, from:71, to:84,  title:"Speaking — Interview + AI",      skill:"speaking" },
    { n:7, from:85, to:98,  title:"Writing — Academic Discussion",  skill:"writing" },
    { n:8, from:99, to:112, title:"Adaptive — Module 1 Mastery",    skill:"mixed" },
    { n:9, from:113,to:126, title:"Full Mocks ×4",                  skill:"mixed" },
    { n:10,from:127,to:130, title:"Final Taper",                    skill:"mixed" },
  ],
  days: {
    // ===================== Day 1 — vocab (reading) =====================
    1: {
      skill:"reading", engine:"vocab-galaxy", title:"Vocab Galaxy: Liftoff",
      blurb:"Launch your reading prep by matching eight high-frequency academic words to their meanings.",
      data:{ items:[
        { word:"hypothesis", correct:"a proposed explanation to be tested", options:["a proven scientific law","a proposed explanation to be tested","a measurement error","a final conclusion"] },
        { word:"significant", correct:"large enough to be important or noticeable", options:["completely unrelated","large enough to be important or noticeable","easily forgotten","strictly forbidden"] },
        { word:"analyze", correct:"to examine something in detail", options:["to ignore on purpose","to examine something in detail","to copy exactly","to advertise widely"] },
        { word:"derive", correct:"to obtain something from a source", options:["to obtain something from a source","to destroy completely","to delay indefinitely","to decorate richly"] },
        { word:"factor", correct:"an element that contributes to a result", options:["a written summary","an element that contributes to a result","a kind of machine","a temporary pause"] },
        { word:"interpret", correct:"to explain the meaning of something", options:["to translate into numbers only","to explain the meaning of something","to hide from view","to manufacture cheaply"] },
        { word:"establish", correct:"to set up or create firmly", options:["to set up or create firmly","to gradually weaken","to question repeatedly","to measure precisely"] },
        { word:"consequence", correct:"a result or effect of an action", options:["a starting condition","a result or effect of an action","a random guess","a written contract"] },
      ]}
    },
    // ===================== Day 2 — dictation (listening) =====================
    2: {
      skill:"listening", engine:"dictation-arcade", title:"Dictation Arcade",
      blurb:"Sharpen your listening by typing out six academic sentences word for word.",
      data:{ sentences:[
        "The researchers collected data from three separate experiments before reaching a conclusion.",
        "Photosynthesis allows plants to convert sunlight into the energy they need to grow.",
        "The lecture this afternoon will focus on the causes of the Industrial Revolution.",
        "Many students underestimate how much time effective revision actually requires.",
        "Coral reefs are extremely sensitive to even small changes in ocean temperature.",
        "The committee agreed that the new policy should take effect at the start of the term.",
      ]}
    },
    // ===================== Day 3 — echo (speaking) =====================
    3: {
      skill:"speaking", engine:"echo-mic", title:"Echo Mic: Warm-Up",
      blurb:"Build speaking fluency by repeating six clear sentences aloud into the mic.",
      data:{ items:[
        "I would like to discuss the main reasons for my decision.",
        "The professor explained the assignment in a very clear way.",
        "In my opinion, regular exercise improves both health and concentration.",
        "Living on campus makes it easier to attend early classes.",
        "The experiment produced results that surprised the entire team.",
        "Public transportation reduces traffic and helps protect the environment.",
      ]}
    },
    // ===================== Day 4 — vocab (reading) =====================
    4: {
      skill:"reading", engine:"word-cascade", title:"Word Cascade",
      blurb:"Catch falling academic words and pair each with its correct definition.",
      data:{ items:[
        { word:"contribute", correct:"to give in order to help achieve something", options:["to give in order to help achieve something","to remove completely","to delay a decision","to repeat aloud"] },
        { word:"approach", correct:"a particular way of dealing with a problem", options:["a final outcome","a particular way of dealing with a problem","a strong objection","a written reward"] },
        { word:"evident", correct:"clear and easily seen or understood", options:["clear and easily seen or understood","kept secret","slowly fading","highly expensive"] },
        { word:"acquire", correct:"to gain or obtain something", options:["to gain or obtain something","to lose carelessly","to argue strongly","to estimate roughly"] },
        { word:"distinct", correct:"clearly different or separate", options:["nearly identical","clearly different or separate","completely random","temporarily closed"] },
        { word:"emerge", correct:"to come out or become known", options:["to come out or become known","to break apart","to count again","to remain hidden forever"] },
        { word:"sufficient", correct:"enough for a particular purpose", options:["far too little","enough for a particular purpose","extremely rare","strictly illegal"] },
        { word:"impact", correct:"a strong effect or influence", options:["a quiet whisper","a strong effect or influence","a minor decoration","a fixed schedule"] },
      ]}
    },
    // ===================== Day 5 — prompts (speaking) =====================
    5: {
      skill:"speaking", engine:"rapid-interview", title:"Rapid Interview",
      blurb:"Practice speaking under time pressure with four open-ended interview prompts.",
      data:{ seconds:45, prompts:[
        "Describe a place you enjoy studying and explain why it helps you focus.",
        "Some people prefer working in groups while others prefer working alone. Which do you prefer and why?",
        "What is one skill you would like to improve this year, and how will you do it?",
        "Do you think students should be required to take physical education classes? Explain your view.",
      ]}
    },
    // ===================== Day 6 — passage (reading) =====================
    6: {
      skill:"reading", engine:"inference-detective", title:"Inference Detective",
      blurb:"Read short academic paragraphs and deduce what each one logically implies.",
      data:{ items:[
        { passage:"Honeybees communicate the location of food through a series of movements called the waggle dance. The angle and duration of the dance correspond to the direction and distance of a food source. Bees that watch the dance then fly directly toward the indicated location.", question:"What can be inferred about honeybees?", options:["They cannot find food without human help.","They can transmit specific spatial information to one another.","They dance only at night.","They prefer flowers that are far away."], correct:1, why:"Because watching bees fly straight to the food, the dance must carry usable location information." },
        { passage:"The town's library extended its hours last spring, staying open until midnight during exam weeks. Within a month, the number of evening visitors had nearly doubled, and several students said the late hours were the main reason they came.", question:"What can be inferred from the passage?", options:["The library was rarely used before the change.","Demand existed for study space outside normal daytime hours.","Students dislike studying at home.","The library plans to reduce its hours."], correct:1, why:"The sharp rise in evening visitors after extending hours shows there was unmet demand for late study time." },
        { passage:"Volcanic soil is often rich in minerals such as potassium and phosphorus. For this reason, regions near long-dormant volcanoes frequently support unusually productive farmland, even when the surrounding areas are less fertile.", question:"What can be inferred about farmers near dormant volcanoes?", options:["They must import all of their fertilizer.","They may benefit from naturally nutrient-rich soil.","They cannot grow any crops safely.","They avoid planting near the mountains."], correct:1, why:"Since volcanic soil is mineral-rich and supports productive farmland, nearby farmers benefit from the natural fertility." },
        { passage:"During the experiment, plants kept in blue light grew taller but produced fewer leaves than those kept in red light. The red-light plants remained shorter but developed dense, broad foliage.", question:"What can be inferred about light color and plant growth?", options:["Light color has no effect on plants.","Different light colors influence plant growth in different ways.","Plants always grow best in blue light.","Leaves only form in darkness."], correct:1, why:"The contrasting results under blue and red light show that light color shapes how plants grow." },
      ]}
    },
    // ===================== Day 7 — scramble (writing) =====================
    7: {
      skill:"writing", engine:"sentence-builder", title:"Sentence Builder",
      blurb:"Strengthen your writing by reordering scrambled words into correct sentences.",
      data:{ items:[
        { answer:"The professor explained the theory in great detail." },
        { answer:"Students should review their notes after every lecture." },
        { answer:"The new policy will improve safety across campus." },
        { answer:"Reading widely helps writers develop a richer vocabulary." },
        { answer:"The committee postponed the meeting until next week." },
        { answer:"Regular exercise can reduce stress and improve focus." },
      ]}
    },
    // ===================== Day 8 — vocab (reading) =====================
    8: {
      skill:"reading", engine:"bubble-match", title:"Bubble Match",
      blurb:"Pop the bubble that defines each academic word to boost your reading vocabulary.",
      data:{ items:[
        { word:"adequate", correct:"satisfactory or acceptable in quality or amount", options:["satisfactory or acceptable in quality or amount","completely missing","far beyond need","strictly forbidden"] },
        { word:"convert", correct:"to change something into a different form", options:["to change something into a different form","to count carefully","to hide away","to argue against"] },
        { word:"emphasis", correct:"special importance given to something", options:["special importance given to something","a small mistake","a long delay","a quiet sound"] },
        { word:"reluctant", correct:"unwilling and hesitant to do something", options:["eager and ready","unwilling and hesitant to do something","completely confused","extremely loud"] },
        { word:"abundant", correct:"present in large quantities", options:["present in large quantities","nearly absent","carefully hidden","slowly fading"] },
        { word:"contrast", correct:"a clear difference between two things", options:["a strong agreement","a clear difference between two things","a written summary","a kind of tool"] },
        { word:"obtain", correct:"to get or come to possess something", options:["to get or come to possess something","to throw away","to question loudly","to repeat often"] },
        { word:"precise", correct:"exact and accurate", options:["exact and accurate","rough and vague","loud and harsh","cheap and weak"] },
      ]}
    },
    // ===================== Day 9 — dictation (listening) =====================
    9: {
      skill:"listening", engine:"dictation-arcade", title:"Dictation Arcade II",
      blurb:"Train your ear by transcribing six more academic sentences accurately.",
      data:{ sentences:[
        "The ancient city was abandoned long before European explorers arrived.",
        "Economists disagree about the long term effects of raising interest rates.",
        "Glaciers store a large portion of the planet's fresh water supply.",
        "The orientation session will cover registration deadlines and library access.",
        "Scientists believe the comet will not be visible again for many decades.",
        "Effective teamwork depends on clear communication and shared goals.",
      ]}
    },
    // ===================== Day 10 — vocab (reading) =====================
    10: {
      skill:"reading", engine:"cube-match", title:"Cube Match",
      blurb:"Rotate through academic words and lock each one to its meaning.",
      data:{ items:[
        { word:"complex", correct:"made of many connected or related parts", options:["made of many connected or related parts","very simple and plain","completely empty","loud and sudden"] },
        { word:"detect", correct:"to discover or notice something", options:["to discover or notice something","to destroy fully","to copy exactly","to delay on purpose"] },
        { word:"feature", correct:"a distinctive part or characteristic", options:["a distinctive part or characteristic","a serious error","a long pause","a written rule"] },
        { word:"gradual", correct:"happening slowly over time", options:["happening slowly over time","occurring all at once","never happening","strictly secret"] },
        { word:"justify", correct:"to give good reasons for something", options:["to give good reasons for something","to hide carefully","to measure exactly","to ignore completely"] },
        { word:"reveal", correct:"to make something known", options:["to make something known","to keep hidden","to count again","to throw away"] },
        { word:"stable", correct:"firmly fixed and not likely to change", options:["firmly fixed and not likely to change","constantly shifting","easily broken","completely missing"] },
        { word:"vital", correct:"absolutely necessary or essential", options:["absolutely necessary or essential","entirely optional","slightly useful","mildly annoying"] },
      ]}
    },
    // ===================== Day 11 — echo (speaking) =====================
    11: {
      skill:"speaking", engine:"echo-mic", title:"Echo Mic: Fluency",
      blurb:"Boost your speaking rhythm by repeating six longer academic sentences aloud.",
      data:{ items:[
        "Although the project was difficult, the team completed it on time.",
        "Researchers have found a strong link between sleep and memory.",
        "The museum offers free admission to students on weekday afternoons.",
        "Reducing plastic waste requires changes in both habits and policy.",
        "The author argues that technology has reshaped how we communicate.",
        "Before the exam, I plan to review every chapter at least twice.",
      ]}
    },
    // ===================== Day 12 — passage (reading) =====================
    12: {
      skill:"reading", engine:"inference-detective", title:"Inference Detective II",
      blurb:"Sharpen your reading by inferring the implied meaning of four new passages.",
      data:{ items:[
        { passage:"After the factory installed quieter machinery, nearby residents reported fewer sleep disturbances and complaints to the city dropped sharply. The factory's output, however, remained exactly the same.", question:"What can be inferred from the passage?", options:["The factory produced less after the change.","The original noise had been disturbing residents.","Residents wanted the factory to close.","Quieter machines work more slowly."], correct:1, why:"Fewer disturbances after reducing noise show the earlier noise had been bothering residents." },
        { passage:"Penguins have a layer of densely packed feathers and a thick reserve of fat beneath their skin. They are able to remain active in temperatures that would be fatal to most other birds.", question:"What can be inferred about penguins?", options:["They cannot survive in warm climates.","Their bodies are adapted to extreme cold.","They rely on other animals for warmth.","They have no feathers at all."], correct:1, why:"Their feather layer and fat reserve let them stay active in deadly cold, showing adaptation to it." },
        { passage:"The new online registration system reduced the average wait time from forty minutes to under five. Staff who once managed long lines were reassigned to help students with academic advising.", question:"What can be inferred about the registration system?", options:["It increased the number of staff overall.","It freed staff time for other work.","It made students wait longer.","It was unpopular with the college."], correct:1, why:"Because the faster system let staff be reassigned, it freed up their time for other tasks." },
        { passage:"In the dry season, certain trees in the savanna shed all their leaves. This loss greatly reduces the amount of water the trees lose to the air, allowing them to survive months with little rainfall.", question:"What can be inferred about these trees?", options:["They die every dry season.","Shedding leaves is a survival strategy.","They grow only in rainforests.","They need constant rainfall."], correct:1, why:"Since dropping leaves cuts water loss and helps them endure drought, it is a survival strategy." },
      ]}
    },
    // ===================== Day 13 — vocab (reading) =====================
    13: {
      skill:"reading", engine:"word-runner", title:"Word Runner",
      blurb:"Run through a lane of academic words, choosing the right meaning at full speed.",
      data:{ items:[
        { word:"assess", correct:"to judge the value or quality of something", options:["to judge the value or quality of something","to ignore entirely","to build quickly","to repeat aloud"] },
        { word:"benefit", correct:"a helpful or useful advantage", options:["a helpful or useful advantage","a serious danger","a small noise","a written warning"] },
        { word:"crucial", correct:"extremely important", options:["extremely important","totally pointless","slightly amusing","barely visible"] },
        { word:"diminish", correct:"to become or make smaller", options:["to become or make smaller","to grow rapidly","to stay the same","to repeat often"] },
        { word:"enhance", correct:"to improve the quality of something", options:["to improve the quality of something","to break apart","to keep secret","to count again"] },
        { word:"foster", correct:"to encourage the growth of something", options:["to encourage the growth of something","to forbid strictly","to measure exactly","to hide away"] },
        { word:"generate", correct:"to produce or create something", options:["to produce or create something","to destroy fully","to delay endlessly","to question loudly"] },
        { word:"hinder", correct:"to make progress difficult", options:["to make progress difficult","to speed up greatly","to decorate richly","to summarize briefly"] },
      ]}
    },
    // ===================== Day 14 — scramble (writing) =====================
    14: {
      skill:"writing", engine:"sentence-builder", title:"Sentence Builder II",
      blurb:"Practice writing by unscrambling six academic sentences into proper order.",
      data:{ items:[
        { answer:"Scientists carefully recorded the temperature every single hour." },
        { answer:"The library will remain open during the entire exam period." },
        { answer:"A balanced diet contributes greatly to overall good health." },
        { answer:"The historian described how the empire slowly collapsed." },
        { answer:"Most experts agree that early planning prevents many problems." },
        { answer:"The lecture explored the origins of modern human language." },
      ]}
    },
    // ===================== Day 15 — dictation (listening) =====================
    15: {
      skill:"listening", engine:"dictation-arcade", title:"Dictation Arcade III",
      blurb:"Begin the listening chapter by transcribing six academic sentences precisely.",
      data:{ sentences:[
        "The professor reminded us that the final paper is due on Friday.",
        "Migratory birds rely on the Earth's magnetic field to navigate.",
        "The invention of the printing press transformed how knowledge spread.",
        "Most of the cafeteria's vegetables are now grown on a local farm.",
        "Rising sea levels threaten many low lying coastal communities.",
        "The seminar will examine how memory changes as people age.",
      ]}
    },
    // ===================== Day 16 — vocab (listening) =====================
    16: {
      skill:"listening", engine:"vocab-galaxy", title:"Vocab Galaxy: Lecture Words",
      blurb:"Listen and link eight academic words you will often hear in lectures to their meanings.",
      data:{ items:[
        { word:"phenomenon", correct:"an observable fact or event", options:["an observable fact or event","a written rule","a personal opinion","a kind of tool"] },
        { word:"abstract", correct:"existing as an idea rather than a physical object", options:["existing as an idea rather than a physical object","made of solid metal","clearly visible","strictly forbidden"] },
        { word:"correspond", correct:"to match or be similar to something", options:["to match or be similar to something","to disagree sharply","to destroy fully","to delay a task"] },
        { word:"dominant", correct:"most powerful or influential", options:["most powerful or influential","weak and minor","completely hidden","easily forgotten"] },
        { word:"explicit", correct:"stated clearly and in detail", options:["stated clearly and in detail","left unsaid","loudly sung","badly broken"] },
        { word:"integrate", correct:"to combine parts into a whole", options:["to combine parts into a whole","to break into pieces","to count again","to question loudly"] },
        { word:"prior", correct:"existing or happening before", options:["existing or happening before","occurring afterward","never occurring","strictly secret"] },
        { word:"theory", correct:"a set of ideas meant to explain something", options:["a set of ideas meant to explain something","a proven fact beyond doubt","a random guess","a written contract"] },
      ]}
    },
    // ===================== Day 17 — dictation (listening) =====================
    17: {
      skill:"listening", engine:"dictation-arcade", title:"Dictation Arcade IV",
      blurb:"Keep training your ear by transcribing six varied academic sentences.",
      data:{ sentences:[
        "The expedition team mapped a region that no one had explored before.",
        "Inflation can quietly erode the value of people's savings over time.",
        "Bats use echoes from their own calls to locate insects in the dark.",
        "The advising office strongly recommends meeting your tutor each month.",
        "Wind turbines generate electricity without producing harmful emissions.",
        "The novelist drew heavily on her childhood in a small fishing village.",
      ]}
    },
    // ===================== Day 18 — vocab (listening) =====================
    18: {
      skill:"listening", engine:"bubble-match", title:"Bubble Match: Audio",
      blurb:"Listen for the word, then pop the bubble that captures its academic meaning.",
      data:{ items:[
        { word:"alternative", correct:"another option that can be chosen", options:["another option that can be chosen","the only possible choice","a serious mistake","a written summary"] },
        { word:"component", correct:"a part of a larger whole", options:["a part of a larger whole","a finished product","a long delay","a loud noise"] },
        { word:"diverse", correct:"showing a lot of variety", options:["showing a lot of variety","exactly the same","completely empty","strictly secret"] },
        { word:"function", correct:"the purpose or role of something", options:["the purpose or role of something","a serious failure","a quiet whisper","a written reward"] },
        { word:"isolate", correct:"to separate something from others", options:["to separate something from others","to join together","to count again","to repeat aloud"] },
        { word:"primary", correct:"first in importance or order", options:["first in importance or order","last and least important","completely random","easily broken"] },
        { word:"resource", correct:"a supply that can be used when needed", options:["a supply that can be used when needed","a permanent shortage","a written rule","a kind of error"] },
        { word:"transmit", correct:"to send or pass something on", options:["to send or pass something on","to receive only","to destroy fully","to hide away"] },
      ]}
    },
    // ===================== Day 19 — echo (speaking) =====================
    19: {
      skill:"speaking", engine:"echo-mic", title:"Echo Mic: Lecture Lines",
      blurb:"Repeat six lecture-style sentences aloud to refine pronunciation and pacing.",
      data:{ items:[
        "Today we will examine how rivers shape the surrounding landscape.",
        "The data clearly suggest that the effect is not random at all.",
        "Let us consider three possible explanations for this result.",
        "As you can see from the chart, the trend has reversed completely.",
        "This discovery raises important questions about the earlier theory.",
        "In conclusion, the evidence strongly supports the original hypothesis.",
      ]}
    },
    // ===================== Day 20 — vocab (listening) =====================
    20: {
      skill:"listening", engine:"word-cascade", title:"Word Cascade: Audio",
      blurb:"Catch falling lecture words and match each to its precise academic meaning.",
      data:{ items:[
        { word:"accumulate", correct:"to gather or build up over time", options:["to gather or build up over time","to scatter quickly","to count once","to repeat aloud"] },
        { word:"constitute", correct:"to form or make up something", options:["to form or make up something","to break apart","to delay a task","to hide away"] },
        { word:"deduce", correct:"to reach a conclusion by reasoning", options:["to reach a conclusion by reasoning","to guess randomly","to forbid strictly","to decorate richly"] },
        { word:"exceed", correct:"to go beyond a limit", options:["to go beyond a limit","to fall far short","to stay the same","to question loudly"] },
        { word:"facilitate", correct:"to make a process easier", options:["to make a process easier","to block completely","to measure exactly","to repeat often"] },
        { word:"inherent", correct:"existing as a natural part of something", options:["existing as a natural part of something","added from outside","completely absent","easily removed"] },
        { word:"objective", correct:"not influenced by personal feelings", options:["not influenced by personal feelings","based purely on emotion","totally random","strictly secret"] },
        { word:"undergo", correct:"to experience or be subjected to", options:["to experience or be subjected to","to avoid entirely","to create from nothing","to summarize briefly"] },
      ]}
    },
    // ===================== Day 21 — dictation (listening) =====================
    21: {
      skill:"listening", engine:"dictation-arcade", title:"Dictation Arcade V",
      blurb:"Push your listening accuracy higher by transcribing six dense academic sentences.",
      data:{ sentences:[
        "The survey revealed that most respondents favored the proposed reform.",
        "Tropical rainforests contain more than half of the world's plant species.",
        "The engineer explained why the bridge needed urgent repairs.",
        "Scholars still debate exactly when the manuscript was written.",
        "Renewable energy now supplies a growing share of the nation's power.",
        "The study tracked the same group of children for over a decade.",
      ]}
    },
    // ===================== Day 22 — vocab (listening) =====================
    22: {
      skill:"listening", engine:"cube-match", title:"Cube Match: Audio",
      blurb:"Hear the word, rotate the cube, and snap each term to its academic meaning.",
      data:{ items:[
        { word:"adjacent", correct:"next to or near something", options:["next to or near something","very far away","completely hidden","strictly forbidden"] },
        { word:"coherent", correct:"clear, logical, and well organized", options:["clear, logical, and well organized","confusing and disordered","extremely loud","barely visible"] },
        { word:"deviate", correct:"to move away from a usual course", options:["to move away from a usual course","to stay exactly on track","to count again","to repeat aloud"] },
        { word:"equivalent", correct:"equal in value or meaning", options:["equal in value or meaning","totally different","completely empty","easily broken"] },
        { word:"finite", correct:"having clear limits or an end", options:["having clear limits or an end","without any limit","strictly secret","loud and sudden"] },
        { word:"infer", correct:"to conclude from evidence", options:["to conclude from evidence","to state directly","to destroy fully","to hide away"] },
        { word:"notion", correct:"an idea or belief about something", options:["an idea or belief about something","a proven fact","a written contract","a kind of machine"] },
        { word:"sustain", correct:"to keep something going over time", options:["to keep something going over time","to stop suddenly","to count once","to question loudly"] },
      ]}
    },
    // ===================== Day 23 — dictation (listening) =====================
    23: {
      skill:"listening", engine:"dictation-arcade", title:"Dictation Arcade VI",
      blurb:"Test your trained ear on six fresh academic sentences across varied topics.",
      data:{ sentences:[
        "The astronomer pointed out that the star had already begun to fade.",
        "Volunteers spent the weekend restoring the eroded riverbank.",
        "The textbook compares several theories of childhood development.",
        "A sudden frost destroyed nearly half of the region's orange crop.",
        "The dormitory will undergo renovations during the summer break.",
        "Ancient traders carried silk and spices along dangerous routes.",
      ]}
    },
    // ===================== Day 24 — vocab (listening) =====================
    24: {
      skill:"listening", engine:"word-runner", title:"Word Runner: Audio",
      blurb:"Race through a stream of lecture words, picking the right meaning each time.",
      data:{ items:[
        { word:"allocate", correct:"to assign resources for a purpose", options:["to assign resources for a purpose","to waste carelessly","to count again","to repeat aloud"] },
        { word:"comprise", correct:"to consist of or be made up of", options:["to consist of or be made up of","to break apart","to delay a task","to hide away"] },
        { word:"depict", correct:"to show or represent something", options:["to show or represent something","to erase fully","to question loudly","to measure exactly"] },
        { word:"converse", correct:"opposite in nature or order", options:["opposite in nature or order","exactly the same","completely silent","strictly secret"] },
        { word:"feasible", correct:"possible to do or achieve", options:["possible to do or achieve","clearly impossible","totally random","easily broken"] },
        { word:"implement", correct:"to put a plan into action", options:["to put a plan into action","to abandon a plan","to count once","to summarize briefly"] },
        { word:"prominent", correct:"important and well known", options:["important and well known","obscure and ignored","loud and harsh","cheap and weak"] },
        { word:"valid", correct:"based on sound reasoning or evidence", options:["based on sound reasoning or evidence","clearly false","strictly secret","barely visible"] },
      ]}
    },
    // ===================== Day 25 — echo (speaking) =====================
    25: {
      skill:"speaking", engine:"echo-mic", title:"Echo Mic: Discussion",
      blurb:"Repeat six discussion-ready sentences aloud to build natural speaking flow.",
      data:{ items:[
        "I agree with the author that small changes can have a big effect.",
        "One major advantage of online learning is its flexibility.",
        "From my own experience, group projects teach valuable teamwork skills.",
        "It is reasonable to assume that prices will continue to rise.",
        "The main drawback of this approach is that it takes a lot of time.",
        "Overall, I believe the benefits clearly outweigh the costs.",
      ]}
    },
    // ===================== Day 26 — passage (reading) =====================
    26: {
      skill:"reading", engine:"inference-detective", title:"Inference Detective III",
      blurb:"Read four academic paragraphs and pinpoint the conclusion each one supports.",
      data:{ items:[
        { passage:"When a particular species of beetle was removed from a forest plot, dead wood began piling up because no other organism broke it down at the same rate. Within a few years, fewer young trees were able to take root in the cluttered soil.", question:"What can be inferred about the beetle?", options:["It harmed the forest by eating young trees.","It played an important role in recycling dead wood.","It had no effect on the forest at all.","It only lived in cluttered soil."], correct:1, why:"Because dead wood piled up once the beetle was gone, it had been important for breaking that wood down." },
        { passage:"Early maps of the coastline contained large errors in distance and shape. Later versions, drawn after sailors used more accurate instruments, matched the real geography far more closely.", question:"What can be inferred from the passage?", options:["The coastline itself changed shape over time.","Better instruments improved the accuracy of maps.","Early mapmakers never sailed the coast.","Maps are still highly inaccurate today."], correct:1, why:"Maps grew accurate after sailors used better instruments, so the instruments improved accuracy." },
        { passage:"A company offered employees the option to work from home two days a week. Reported job satisfaction rose, and the number of workers leaving the company fell to its lowest level in a decade.", question:"What can be inferred about the work from home policy?", options:["It made employees less productive.","It was associated with happier, more loyal employees.","It forced the company to hire fewer people.","It was disliked by most workers."], correct:1, why:"Higher satisfaction and fewer departures after the policy suggest employees were happier and more loyal." },
        { passage:"Fossils of tropical ferns have been discovered in rock layers found near the North Pole. These plants could only have grown in a warm, humid climate.", question:"What can be inferred about the polar region?", options:["It has always been frozen.","It once had a much warmer climate.","Ferns can grow in ice today.","The fossils were carried there by people."], correct:1, why:"Tropical ferns need warmth, so finding their fossils there means the region was once much warmer." },
      ]}
    },
    // ===================== Day 27 — dictation (listening) =====================
    27: {
      skill:"listening", engine:"dictation-arcade", title:"Dictation Arcade VII",
      blurb:"Near the chapter's end, transcribe six challenging academic sentences with care.",
      data:{ sentences:[
        "The geologist explained how the canyon was carved over millions of years.",
        "Reliable data are essential before any firm conclusion can be drawn.",
        "The orchestra rehearsed the difficult passage until it sounded effortless.",
        "Urban planners are trying to make the city more friendly to pedestrians.",
        "The vaccine trial included thousands of volunteers from many countries.",
        "Careful note taking can make studying for exams far less stressful.",
      ]}
    },
    // ===================== Day 28 — vocab (listening) =====================
    28: {
      skill:"listening", engine:"vocab-galaxy", title:"Vocab Galaxy: Chapter Finale",
      blurb:"Close the listening chapter by matching eight more academic words to their meanings.",
      data:{ items:[
        { word:"anticipate", correct:"to expect something to happen", options:["to expect something to happen","to forget completely","to count again","to repeat aloud"] },
        { word:"compile", correct:"to gather information into one place", options:["to gather information into one place","to scatter widely","to destroy fully","to hide away"] },
        { word:"definitive", correct:"final and not able to be questioned", options:["final and not able to be questioned","uncertain and open","completely random","strictly secret"] },
        { word:"evolve", correct:"to develop gradually over time", options:["to develop gradually over time","to stay unchanged","to break apart","to question loudly"] },
        { word:"fundamental", correct:"forming a necessary base or core", options:["forming a necessary base or core","entirely unimportant","loud and harsh","easily removed"] },
        { word:"hypothetical", correct:"based on a possible idea rather than fact", options:["based on a possible idea rather than fact","proven beyond doubt","clearly visible","strictly forbidden"] },
        { word:"reinforce", correct:"to strengthen or support something", options:["to strengthen or support something","to weaken greatly","to count once","to summarize briefly"] },
        { word:"subsequent", correct:"coming after something else", options:["coming after something else","happening first","never happening","completely hidden"] },
      ]}
    },
  },
};
