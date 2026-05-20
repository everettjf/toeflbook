/* TOEFL Daily Game — content & day metadata.
   Days 1-7 are fully built (proof of concept). Days 8-130 show on the
   calendar as "coming soon" until their content is added here. */

const CONTENT = {
  startDate: "2026-05-18", // Day 1 (Monday)

  // chapter ranges (day numbers, inclusive) + theme for calendar coloring
  chapters: [
    { n: 1,  from: 1,   to: 14,  title: "Diagnosis & System Setup",     skill: "mixed" },
    { n: 2,  from: 15,  to: 28,  title: "Listening + Vocabulary",        skill: "listening" },
    { n: 3,  from: 29,  to: 42,  title: "Reading + Academic Vocab",      skill: "reading" },
    { n: 4,  from: 43,  to: 56,  title: "Speaking — Listen & Repeat",    skill: "speaking" },
    { n: 5,  from: 57,  to: 70,  title: "Writing — Email + Sentence",    skill: "writing" },
    { n: 6,  from: 71,  to: 84,  title: "Speaking — Interview + AI",     skill: "speaking" },
    { n: 7,  from: 85,  to: 98,  title: "Writing — Academic Discussion", skill: "writing" },
    { n: 8,  from: 99,  to: 112, title: "Adaptive — Module 1 Mastery",   skill: "mixed" },
    { n: 9,  from: 113, to: 126, title: "Full Mocks ×4",                 skill: "mixed" },
    { n: 10, from: 127, to: 130, title: "Final Taper",                   skill: "mixed" },
  ],

  // fully-built days
  days: {
    1: {
      skill: "reading", gameType: "vocab-match",
      title: "Academic Vocab Match",
      blurb: "Day 1 is setup day. Warm up with 10 high-frequency academic words — pick the right meaning before the clock runs out.",
      data: {
        seconds: 90,
        items: [
          { word: "hypothesis", correct: "a proposed explanation to be tested", options: ["a proven scientific law", "a proposed explanation to be tested", "a measurement error", "a final conclusion"] },
          { word: "ambiguous", correct: "open to more than one interpretation", options: ["clearly defined", "open to more than one interpretation", "strongly negative", "happening rarely"] },
          { word: "advocate", correct: "to publicly support or recommend", options: ["to strongly oppose", "to publicly support or recommend", "to remain neutral", "to investigate"] },
          { word: "deteriorate", correct: "to become progressively worse", options: ["to improve steadily", "to stay unchanged", "to become progressively worse", "to expand quickly"] },
          { word: "prevalent", correct: "widespread in a particular area or time", options: ["extremely rare", "widespread in a particular area or time", "officially banned", "recently invented"] },
          { word: "scrutinize", correct: "to examine closely and critically", options: ["to glance at briefly", "to examine closely and critically", "to ignore deliberately", "to copy exactly"] },
          { word: "viable", correct: "capable of working successfully", options: ["impossible to achieve", "capable of working successfully", "extremely expensive", "morally wrong"] },
          { word: "comprehensive", correct: "complete and including everything", options: ["partial and limited", "complete and including everything", "easy to understand", "highly technical"] },
          { word: "diminish", correct: "to make or become smaller", options: ["to make or become smaller", "to repeat often", "to make public", "to measure precisely"] },
          { word: "coherent", correct: "logical and well-organized", options: ["confusing and disjointed", "logical and well-organized", "loudly spoken", "written by hand"] },
        ],
      },
    },

    2: {
      skill: "listening", gameType: "dictation-sprint",
      title: "Dictation Sprint",
      blurb: "Day 2 baselines Listening. Listen to each sentence (replay as needed) and type exactly what you hear. Scored on word accuracy.",
      data: {
        sentences: [
          "The lecture begins with an overview of cellular respiration.",
          "Most of the migratory birds return to the wetlands in early spring.",
          "Researchers collected samples from three different locations.",
          "The professor emphasized the importance of citing your sources.",
          "Photosynthesis converts sunlight into chemical energy.",
          "The committee will announce its decision next Thursday.",
        ],
      },
    },

    3: {
      skill: "speaking", gameType: "listen-repeat",
      title: "Listen & Repeat Trainer",
      blurb: "Day 3 baselines Speaking. Listen to the sentence, then repeat it aloud. Your microphone is scored on how closely your words match — the exact new-format Task 1.",
      data: {
        items: [
          "Could you tell me where the library is?",
          "The experiment produced unexpected but useful results.",
          "I would like to schedule a meeting with my advisor.",
          "Many students underestimate how long the assignment takes.",
          "The city council approved the new public transit plan.",
          "She explained the theory clearly and with great patience.",
          "We should consider the long-term effects of this policy.",
        ],
      },
    },

    4: {
      skill: "reading", gameType: "complete-words",
      title: "Complete the Words",
      blurb: "Day 4: vocab ignition. Each sentence hides a word with missing letters — type the full word. This mirrors the 2026 'Complete the Words' Reading sub-task.",
      data: {
        items: [
          { sentence: "The data clearly s_____t the researcher's claim.", answer: "support" },
          { sentence: "Her argument was both clear and pers_____e.", answer: "persuasive" },
          { sentence: "Scientists con_____d the experiment three times.", answer: "conducted" },
          { sentence: "The results were sig_____t and reliable.", answer: "significant" },
          { sentence: "We need to ana_____e the data before deciding.", answer: "analyze" },
          { sentence: "The policy had a major i_____t on the economy.", answer: "impact" },
          { sentence: "His explanation was rather a_____s and unclear.", answer: "ambiguous" },
          { sentence: "The theory was eventually est_____d by evidence.", answer: "established" },
        ],
      },
    },

    5: {
      skill: "speaking", gameType: "interview-responder",
      title: "Interview Responder",
      blurb: "Day 5 is your first Speaking MAIN. You get a prompt and 45 seconds — speak your answer. The app captures a transcript, word count, and speaking rate so you can self-rate.",
      data: {
        seconds: 45,
        prompts: [
          "Some people prefer to study alone, while others prefer to study in groups. Which do you prefer and why?",
          "Describe a skill you would like to learn and explain why it interests you.",
          "Do you agree or disagree: technology has made people less social? Explain.",
          "Talk about a place you enjoy visiting and why it is meaningful to you.",
        ],
      },
    },

    6: {
      skill: "reading", gameType: "inference-detective",
      title: "Inference Detective",
      blurb: "Day 6 Reading MAIN. Read each short passage and pick the inference the text actually supports — not the one that merely sounds reasonable.",
      data: {
        items: [
          {
            passage: "Although the new fertilizer increased crop yields in the first season, soil tests two years later showed a sharp decline in nitrogen levels. Farmers who continued using it reported smaller harvests over time.",
            question: "What can be inferred about the new fertilizer?",
            options: [
              "It is the most effective fertilizer available.",
              "Its short-term benefits may come at a long-term cost.",
              "It has no effect on soil quality.",
              "Farmers should never use any fertilizer.",
            ],
            correct: 1,
            why: "The passage contrasts an early yield boost with later soil depletion and smaller harvests — implying a long-term downside.",
          },
          {
            passage: "The museum's evening hours, introduced last year, attracted mostly young professionals who could not visit during the day. Daytime attendance, however, remained unchanged.",
            question: "What does the passage suggest about the evening hours?",
            options: [
              "They replaced daytime visitors with evening ones.",
              "They reached a group that was previously unable to attend.",
              "They caused daytime attendance to fall.",
              "They were unpopular with all visitors.",
            ],
            correct: 1,
            why: "Daytime attendance was 'unchanged' and evening hours drew people who 'could not visit during the day' — so a new audience was added.",
          },
          {
            passage: "Despite a larger advertising budget, the company's sales grew more slowly this year than last. A competitor that spent far less on advertising saw faster growth.",
            question: "What can be reasonably inferred?",
            options: [
              "Advertising spending alone does not guarantee faster sales growth.",
              "The company should stop advertising entirely.",
              "The competitor sells identical products.",
              "Advertising always reduces sales.",
            ],
            correct: 0,
            why: "More ad spending coincided with slower growth while a low-spending rival grew faster — so spending alone isn't decisive.",
          },
          {
            passage: "The river's water level has dropped each summer for the past decade. Local farmers, who depend on it for irrigation, have begun digging deeper wells.",
            question: "What does the farmers' behavior suggest?",
            options: [
              "They expect the water shortage to continue.",
              "They have given up farming.",
              "The river will refill next year.",
              "Wells are cheaper than irrigation.",
            ],
            correct: 0,
            why: "Investing in deeper wells is a response to an ongoing decline — implying they expect the shortage to persist.",
          },
          {
            passage: "Online courses allow students to learn at their own pace. However, completion rates for these courses are consistently lower than for traditional in-person classes.",
            question: "What can be inferred about self-paced learning?",
            options: [
              "It is always superior to in-person learning.",
              "Flexibility may make it harder for some students to finish.",
              "It is only used by working adults.",
              "It guarantees better grades.",
            ],
            correct: 1,
            why: "The passage pairs the freedom of self-pacing with lower completion — implying flexibility can undermine follow-through.",
          },
        ],
      },
    },

    7: {
      skill: "writing", gameType: "sentence-builder",
      title: "Sentence Builder",
      blurb: "Day 7 touches Writing. Drag the word tiles into the correct order to form a grammatical sentence — practice for the 2026 'Build a Sentence' task.",
      data: {
        items: [
          { answer: "The professor explained the theory in great detail." },
          { answer: "Many students find the new format quite challenging." },
          { answer: "She submitted her application before the deadline." },
          { answer: "The results of the study were published last month." },
          { answer: "We should review our notes before the exam." },
          { answer: "His argument was supported by strong evidence." },
        ],
      },
    },
  },
};
