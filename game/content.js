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
    // ===================== Day 29 — passage (reading) =====================
    29: {
      skill:"reading", engine:"inference-detective", title:"Inference Detective IV",
      blurb:"Open the reading chapter by inferring the implied meaning of four academic passages.",
      data:{ items:[
        { passage:"Archaeologists found grain stores far larger than a single household could consume in one of the settlement's oldest buildings. Nearby, they uncovered tablets recording who had deposited and withdrawn portions of grain.", question:"What can be inferred about the settlement?", options:["Its people did not farm grain.","It had some form of organized communal storage.","The building was used only for housing.","The tablets were purely decorative."], correct:1, why:"Oversized stores plus deposit-and-withdrawal records imply grain was managed communally rather than per household." },
        { passage:"After a coastal city banned cars from its historic center, shopkeepers initially protested. A year later, foot traffic had risen and several owners reported their best sales in years.", question:"What can be inferred about the car ban?", options:["It drove most shops out of business.","It ended up benefiting many of the businesses there.","Shopkeepers were correct to oppose it.","It reduced the number of visitors."], correct:1, why:"Rising foot traffic and record sales after the ban show it ultimately helped the businesses." },
        { passage:"A species of moth that once had pale wings became predominantly dark in regions where soot from factories coated the trees. In areas with clean air, the pale form remained common.", question:"What can be inferred about the moths' coloring?", options:["Wing color is unrelated to surroundings.","Coloring that blends with the trees offers an advantage.","All moths eventually turn dark.","Soot directly dyes the moths' wings."], correct:1, why:"Dark moths thrived on sooty trees while pale ones stayed common on clean trees, so blending in confers an advantage." },
        { passage:"The diary of an eighteenth-century merchant lists frequent shipments of ice packed in sawdust traveling hundreds of miles inland during summer. The ice was sold at high prices to wealthy households.", question:"What can be inferred from the diary?", options:["Ice was worthless in that era.","There was a profitable trade in preserving and transporting ice.","Only poor families could afford ice.","Sawdust was used to melt the ice faster."], correct:1, why:"High prices and long-distance summer shipments imply a profitable trade in storing and moving ice." },
      ]}
    },
    // ===================== Day 30 — vocab (reading) =====================
    30: {
      skill:"reading", engine:"vocab-galaxy", title:"Vocab Galaxy: Reading Words",
      blurb:"Launch the reading chapter by matching eight academic words to their precise meanings.",
      data:{ items:[
        { word:"ambiguous", correct:"open to more than one interpretation", options:["open to more than one interpretation","perfectly clear and exact","completely silent","strictly forbidden"] },
        { word:"advocate", correct:"to publicly support a cause or idea", options:["to publicly support a cause or idea","to strongly oppose","to count again","to repeat aloud"] },
        { word:"scrutinize", correct:"to examine closely and critically", options:["to examine closely and critically","to glance at briefly","to destroy fully","to hide away"] },
        { word:"comprehensive", correct:"complete and covering all parts", options:["complete and covering all parts","narrow and partial","completely random","easily broken"] },
        { word:"mitigate", correct:"to make something less severe", options:["to make something less severe","to make far worse","to keep secret","to summarize briefly"] },
        { word:"plausible", correct:"reasonable and likely to be true", options:["reasonable and likely to be true","clearly impossible","strictly secret","loud and harsh"] },
        { word:"empirical", correct:"based on observation or experiment", options:["based on observation or experiment","based purely on guessing","totally unrelated","barely visible"] },
        { word:"arbitrary", correct:"based on chance rather than reason", options:["based on chance rather than reason","carefully justified","clearly visible","easily removed"] },
      ]}
    },
    // ===================== Day 31 — vocab (reading) =====================
    31: {
      skill:"reading", engine:"word-cascade", title:"Word Cascade: Reading",
      blurb:"Catch falling academic words and pair each with its correct reading-level meaning.",
      data:{ items:[
        { word:"prevalent", correct:"widespread or common in an area", options:["widespread or common in an area","extremely rare","completely hidden","strictly forbidden"] },
        { word:"viable", correct:"capable of working successfully", options:["capable of working successfully","certain to fail","totally random","easily broken"] },
        { word:"redundant", correct:"no longer needed because of repetition", options:["no longer needed because of repetition","absolutely essential","loud and harsh","barely visible"] },
        { word:"concise", correct:"expressing much in few words", options:["expressing much in few words","long and wordy","completely empty","strictly secret"] },
        { word:"anomaly", correct:"something that differs from the norm", options:["something that differs from the norm","a perfectly typical case","a written contract","a kind of tool"] },
        { word:"pertinent", correct:"clearly relevant to the matter", options:["clearly relevant to the matter","completely off topic","loud and sudden","easily removed"] },
        { word:"transient", correct:"lasting only a short time", options:["lasting only a short time","permanent and fixed","strictly secret","clearly visible"] },
        { word:"lucid", correct:"clear and easy to understand", options:["clear and easy to understand","confusing and murky","extremely loud","barely visible"] },
      ]}
    },
    // ===================== Day 32 — passage (reading) =====================
    32: {
      skill:"reading", engine:"inference-detective", title:"Inference Detective V",
      blurb:"Sharpen your reading by deducing the conclusion supported by four new passages.",
      data:{ items:[
        { passage:"In a long-term study, gardens that left a strip of wildflowers along their edges attracted far more bees than tidy gardens with no flowering borders. The wildflower gardens also produced larger vegetable harvests.", question:"What can be inferred from the study?", options:["Wildflowers harm vegetable plants.","Attracting bees can improve vegetable yields.","Tidy gardens always produce more food.","Bees avoid wildflowers."], correct:1, why:"More bees and bigger harvests in wildflower gardens imply that attracting bees boosts vegetable yields." },
        { passage:"A region that once relied on a single coal mine for most jobs invested heavily in retraining workers for technology firms. A decade later, unemployment there was lower than in similar towns that made no such investment.", question:"What can be inferred about the retraining program?", options:["It had no measurable effect.","It likely helped the region adapt to economic change.","It forced the coal mine to expand.","It increased unemployment."], correct:1, why:"Lower unemployment than comparable towns suggests the retraining helped the region adapt." },
        { passage:"Sailors of the past noticed that ships disappeared from view hull-first, with the masts vanishing last as they sailed away. This observation troubled those who assumed the sea was perfectly flat.", question:"What can be inferred from the sailors' observation?", options:["Ships sank as they sailed away.","The surface of the sea is curved.","Masts are heavier than hulls.","The sailors had poor eyesight."], correct:1, why:"Hulls vanishing before masts is what a curved surface would cause, undermining the flat-sea assumption." },
        { passage:"A museum replaced its harsh overhead lighting with softer, indirect light in one gallery. Visitors lingered noticeably longer in that gallery and rated their experience higher than in the brightly lit rooms.", question:"What can be inferred about the lighting change?", options:["Bright light makes art easier to enjoy.","Lighting can shape how visitors experience a gallery.","Visitors prefer total darkness.","The artworks were changed as well."], correct:1, why:"Longer visits and higher ratings after the change show lighting affects the gallery experience." },
      ]}
    },
    // ===================== Day 33 — vocab (reading) =====================
    33: {
      skill:"reading", engine:"bubble-match", title:"Bubble Match: Reading",
      blurb:"Pop the bubble that defines each academic word to expand your reading vocabulary.",
      data:{ items:[
        { word:"augment", correct:"to increase the size or amount of", options:["to increase the size or amount of","to reduce sharply","to count once","to repeat aloud"] },
        { word:"eradicate", correct:"to remove or destroy completely", options:["to remove or destroy completely","to gently encourage","to delay a task","to hide away"] },
        { word:"magnitude", correct:"the great size or importance of something", options:["the great size or importance of something","a tiny detail","a written rule","a quiet whisper"] },
        { word:"prone", correct:"likely to do or suffer something", options:["likely to do or suffer something","completely protected","strictly secret","loud and harsh"] },
        { word:"validate", correct:"to confirm that something is true or sound", options:["to confirm that something is true or sound","to prove false","totally random","easily broken"] },
        { word:"nuance", correct:"a subtle difference in meaning", options:["a subtle difference in meaning","a huge obvious gap","a serious failure","a kind of machine"] },
        { word:"paradigm", correct:"a typical model or pattern of thinking", options:["a typical model or pattern of thinking","a random exception","a written reward","a long delay"] },
        { word:"ubiquitous", correct:"present everywhere at once", options:["present everywhere at once","found in only one place","completely hidden","barely visible"] },
      ]}
    },
    // ===================== Day 34 — scramble (writing) =====================
    34: {
      skill:"writing", engine:"sentence-builder", title:"Sentence Builder III",
      blurb:"Strengthen your writing by reordering six scrambled academic sentences correctly.",
      data:{ items:[
        { answer:"The researchers presented their findings to a skeptical audience." },
        { answer:"Careful editing can transform a rough draft into clear prose." },
        { answer:"The author compares two competing theories throughout the chapter." },
        { answer:"Reliable evidence should always support a strong argument." },
        { answer:"The committee reviewed each proposal before reaching a decision." },
        { answer:"Reading critically helps students question what they encounter." },
      ]}
    },
    // ===================== Day 35 — vocab (reading) =====================
    35: {
      skill:"reading", engine:"word-runner", title:"Word Runner: Reading",
      blurb:"Run through a lane of academic words, choosing the right meaning at full speed.",
      data:{ items:[
        { word:"intrinsic", correct:"belonging naturally to something", options:["belonging naturally to something","added from outside","completely absent","easily removed"] },
        { word:"discrete", correct:"separate and individually distinct", options:["separate and individually distinct","blended into one mass","strictly secret","loud and sudden"] },
        { word:"catalyst", correct:"something that speeds up a change", options:["something that speeds up a change","something that halts change","a written rule","a quiet whisper"] },
        { word:"synthesize", correct:"to combine ideas into a new whole", options:["to combine ideas into a new whole","to take fully apart","to count again","to repeat aloud"] },
        { word:"candid", correct:"honest and straightforward in speech", options:["honest and straightforward in speech","secretive and evasive","totally random","barely visible"] },
        { word:"rigorous", correct:"extremely thorough and demanding", options:["extremely thorough and demanding","careless and loose","completely empty","easily broken"] },
        { word:"autonomy", correct:"the ability to govern oneself", options:["the ability to govern oneself","total dependence on others","a serious failure","a kind of machine"] },
        { word:"dynamic", correct:"marked by constant change or activity", options:["marked by constant change or activity","fixed and unchanging","strictly forbidden","clearly visible"] },
      ]}
    },
    // ===================== Day 36 — passage (reading) =====================
    36: {
      skill:"reading", engine:"inference-detective", title:"Inference Detective VI",
      blurb:"Test your reading instincts by inferring what each of four passages logically implies.",
      data:{ items:[
        { passage:"A bird native to a remote island lost the ability to fly over many generations, since the island had no ground predators. When rats were later introduced by ships, the bird's numbers fell rapidly.", question:"What can be inferred about the flightless bird?", options:["It could easily escape the rats.","Its loss of flight left it vulnerable to new predators.","Rats helped the bird survive.","The bird never lived on the ground."], correct:1, why:"A sharp decline after rats arrived implies that being flightless made the bird vulnerable to ground predators." },
        { passage:"Two groups of students prepared for the same test. One group spread its study over two weeks, while the other crammed everything into the final night. The spaced group recalled far more a month later.", question:"What can be inferred about studying?", options:["Cramming is the most effective method.","Spreading study over time aids long-term recall.","The test was unfair to one group.","Memory does not depend on study habits."], correct:1, why:"Better month-later recall by the spaced group implies spacing study improves lasting memory." },
        { passage:"A river that had been straightened decades ago to speed up boat traffic was recently allowed to wind naturally again. Within a few years, fish populations recovered and downstream flooding became less frequent.", question:"What can be inferred about the straightened river?", options:["Straightening it had improved the ecosystem.","The natural, winding form better supports the river's health.","Boats can no longer use the river.","Flooding is unrelated to river shape."], correct:1, why:"Recovering fish and reduced flooding after restoring the winding form imply that shape supports river health." },
        { passage:"An ancient script remained unreadable for centuries until scholars found a stone carved with the same text in three languages, two of which were already understood. Soon after, translations of the unknown script appeared.", question:"What can be inferred about the three-language stone?", options:["It made the script harder to read.","It provided a key for decoding the unknown script.","The unknown script was never deciphered.","Only one language on it was useful."], correct:1, why:"Translations appearing soon after the stone's discovery imply it served as the key to decoding the script." },
      ]}
    },
    // ===================== Day 37 — vocab (reading) =====================
    37: {
      skill:"reading", engine:"cube-match", title:"Cube Match: Reading",
      blurb:"Rotate through academic words and lock each one to its precise meaning.",
      data:{ items:[
        { word:"integral", correct:"necessary to make something complete", options:["necessary to make something complete","entirely optional","completely hidden","strictly forbidden"] },
        { word:"contradict", correct:"to state the opposite of something", options:["to state the opposite of something","to fully agree with","to count again","to repeat aloud"] },
        { word:"ethical", correct:"relating to right and wrong conduct", options:["relating to right and wrong conduct","without any rules","loud and harsh","barely visible"] },
        { word:"negligible", correct:"so small as to be unimportant", options:["so small as to be unimportant","large and significant","strictly secret","easily broken"] },
        { word:"profound", correct:"very deep or far-reaching", options:["very deep or far-reaching","shallow and minor","completely empty","clearly visible"] },
        { word:"trivial", correct:"of little value or importance", options:["of little value or importance","deeply important","a kind of machine","a long delay"] },
        { word:"aggregate", correct:"a total formed by combining parts", options:["a total formed by combining parts","a single isolated piece","a written reward","a quiet whisper"] },
        { word:"simultaneous", correct:"happening at the same time", options:["happening at the same time","occurring one after another","never happening","strictly forbidden"] },
      ]}
    },
    // ===================== Day 38 — echo (speaking) =====================
    38: {
      skill:"speaking", engine:"echo-mic", title:"Echo Mic: Reading Aloud",
      blurb:"Build speaking fluency by reading six academic sentences aloud into the mic.",
      data:{ items:[
        "The passage suggests that early cities grew up around reliable water sources.",
        "According to the author, careful reading begins with asking good questions.",
        "Each paragraph in the essay supports a single, clearly stated idea.",
        "The evidence presented here points toward an unexpected conclusion.",
        "Skimming a text first can help you locate its main argument quickly.",
        "A strong summary captures the central point in just a few sentences.",
      ]}
    },
    // ===================== Day 39 — vocab (reading) =====================
    39: {
      skill:"reading", engine:"vocab-galaxy", title:"Vocab Galaxy: Reading Depth",
      blurb:"Deepen your reading vocabulary by matching eight more academic words to their meanings.",
      data:{ items:[
        { word:"cumulative", correct:"increasing by successive additions", options:["increasing by successive additions","shrinking steadily","completely random","strictly forbidden"] },
        { word:"deteriorate", correct:"to become progressively worse", options:["to become progressively worse","to steadily improve","to count again","to repeat aloud"] },
        { word:"exemplify", correct:"to serve as a typical example of", options:["to serve as a typical example of","to contradict entirely","to destroy fully","to hide away"] },
        { word:"hierarchy", correct:"a system ranked by level or rank", options:["a system ranked by level or rank","a group with no order","a written reward","a quiet whisper"] },
        { word:"intervene", correct:"to step in to alter an outcome", options:["to step in to alter an outcome","to stay completely out","strictly secret","easily broken"] },
        { word:"mutual", correct:"shared by two or more parties", options:["shared by two or more parties","held by one alone","loud and harsh","barely visible"] },
        { word:"refute", correct:"to prove a claim to be false", options:["to prove a claim to be false","to firmly support","completely empty","clearly visible"] },
        { word:"scope", correct:"the range a subject covers", options:["the range a subject covers","a single fixed point","a kind of machine","a long delay"] },
      ]}
    },
  },
};
