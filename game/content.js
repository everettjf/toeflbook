/* TOEFL Daily Game — content & day metadata.
   Days 1-116 fully built. Each day declares skill, engine, title, blurb, and
   data shaped for that engine's `uses` category (see core.js header). */

const CONTENT = {
  "startDate": "2026-06-01",
  "chapters": [
    {
      "n": 1,
      "from": 1,
      "to": 14,
      "title": "Listening + Vocabulary",
      "skill": "listening"
    },
    {
      "n": 2,
      "from": 15,
      "to": 28,
      "title": "Reading + Academic Vocab",
      "skill": "reading"
    },
    {
      "n": 3,
      "from": 29,
      "to": 42,
      "title": "Speaking — Listen & Repeat",
      "skill": "speaking"
    },
    {
      "n": 4,
      "from": 43,
      "to": 56,
      "title": "Writing — Email + Sentence",
      "skill": "writing"
    },
    {
      "n": 5,
      "from": 57,
      "to": 70,
      "title": "Speaking — Interview + AI",
      "skill": "speaking"
    },
    {
      "n": 6,
      "from": 71,
      "to": 84,
      "title": "Writing — Academic Discussion",
      "skill": "writing"
    },
    {
      "n": 7,
      "from": 85,
      "to": 98,
      "title": "Adaptive — Module 1 Mastery",
      "skill": "mixed"
    },
    {
      "n": 8,
      "from": 99,
      "to": 112,
      "title": "Full Mocks ×4",
      "skill": "mixed"
    },
    {
      "n": 9,
      "from": 113,
      "to": 116,
      "title": "Final Taper",
      "skill": "mixed"
    }
  ],
  "days": {
    "1": {
      "skill": "listening",
      "engine": "dictation-arcade",
      "title": "Dictation Arcade III",
      "blurb": "Begin the listening chapter by transcribing six academic sentences precisely.",
      "data": {
        "sentences": [
          "The professor reminded us that the final paper is due on Friday.",
          "Migratory birds rely on the Earth's magnetic field to navigate.",
          "The invention of the printing press transformed how knowledge spread.",
          "Most of the cafeteria's vegetables are now grown on a local farm.",
          "Rising sea levels threaten many low lying coastal communities.",
          "The seminar will examine how memory changes as people age."
        ]
      }
    },
    "2": {
      "skill": "listening",
      "engine": "vocab-galaxy",
      "title": "Vocab Galaxy: Lecture Words",
      "blurb": "Listen and link eight academic words you will often hear in lectures to their meanings.",
      "data": {
        "items": [
          {
            "word": "phenomenon",
            "correct": "an observable fact or event",
            "options": [
              "an observable fact or event",
              "a written rule",
              "a personal opinion",
              "a kind of tool"
            ]
          },
          {
            "word": "abstract",
            "correct": "existing as an idea rather than a physical object",
            "options": [
              "existing as an idea rather than a physical object",
              "made of solid metal",
              "clearly visible",
              "strictly forbidden"
            ]
          },
          {
            "word": "correspond",
            "correct": "to match or be similar to something",
            "options": [
              "to match or be similar to something",
              "to disagree sharply",
              "to destroy fully",
              "to delay a task"
            ]
          },
          {
            "word": "dominant",
            "correct": "most powerful or influential",
            "options": [
              "most powerful or influential",
              "weak and minor",
              "completely hidden",
              "easily forgotten"
            ]
          },
          {
            "word": "explicit",
            "correct": "stated clearly and in detail",
            "options": [
              "stated clearly and in detail",
              "left unsaid",
              "loudly sung",
              "badly broken"
            ]
          },
          {
            "word": "integrate",
            "correct": "to combine parts into a whole",
            "options": [
              "to combine parts into a whole",
              "to break into pieces",
              "to count again",
              "to question loudly"
            ]
          },
          {
            "word": "prior",
            "correct": "existing or happening before",
            "options": [
              "existing or happening before",
              "occurring afterward",
              "never occurring",
              "strictly secret"
            ]
          },
          {
            "word": "theory",
            "correct": "a set of ideas meant to explain something",
            "options": [
              "a set of ideas meant to explain something",
              "a proven fact beyond doubt",
              "a random guess",
              "a written contract"
            ]
          }
        ]
      }
    },
    "3": {
      "skill": "listening",
      "engine": "dictation-arcade",
      "title": "Dictation Arcade IV",
      "blurb": "Keep training your ear by transcribing six varied academic sentences.",
      "data": {
        "sentences": [
          "The expedition team mapped a region that no one had explored before.",
          "Inflation can quietly erode the value of people's savings over time.",
          "Bats use echoes from their own calls to locate insects in the dark.",
          "The advising office strongly recommends meeting your tutor each month.",
          "Wind turbines generate electricity without producing harmful emissions.",
          "The novelist drew heavily on her childhood in a small fishing village."
        ]
      }
    },
    "4": {
      "skill": "listening",
      "engine": "bubble-match",
      "title": "Bubble Match: Audio",
      "blurb": "Listen for the word, then pop the bubble that captures its academic meaning.",
      "data": {
        "items": [
          {
            "word": "alternative",
            "correct": "another option that can be chosen",
            "options": [
              "another option that can be chosen",
              "the only possible choice",
              "a serious mistake",
              "a written summary"
            ]
          },
          {
            "word": "component",
            "correct": "a part of a larger whole",
            "options": [
              "a part of a larger whole",
              "a finished product",
              "a long delay",
              "a loud noise"
            ]
          },
          {
            "word": "diverse",
            "correct": "showing a lot of variety",
            "options": [
              "showing a lot of variety",
              "exactly the same",
              "completely empty",
              "strictly secret"
            ]
          },
          {
            "word": "function",
            "correct": "the purpose or role of something",
            "options": [
              "the purpose or role of something",
              "a serious failure",
              "a quiet whisper",
              "a written reward"
            ]
          },
          {
            "word": "isolate",
            "correct": "to separate something from others",
            "options": [
              "to separate something from others",
              "to join together",
              "to count again",
              "to repeat aloud"
            ]
          },
          {
            "word": "primary",
            "correct": "first in importance or order",
            "options": [
              "first in importance or order",
              "last and least important",
              "completely random",
              "easily broken"
            ]
          },
          {
            "word": "resource",
            "correct": "a supply that can be used when needed",
            "options": [
              "a supply that can be used when needed",
              "a permanent shortage",
              "a written rule",
              "a kind of error"
            ]
          },
          {
            "word": "transmit",
            "correct": "to send or pass something on",
            "options": [
              "to send or pass something on",
              "to receive only",
              "to destroy fully",
              "to hide away"
            ]
          }
        ]
      }
    },
    "5": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Lecture Lines",
      "blurb": "Repeat six lecture-style sentences aloud to refine pronunciation and pacing.",
      "data": {
        "items": [
          "Today we will examine how rivers shape the surrounding landscape.",
          "The data clearly suggest that the effect is not random at all.",
          "Let us consider three possible explanations for this result.",
          "As you can see from the chart, the trend has reversed completely.",
          "This discovery raises important questions about the earlier theory.",
          "In conclusion, the evidence strongly supports the original hypothesis."
        ]
      }
    },
    "6": {
      "skill": "listening",
      "engine": "word-cascade",
      "title": "Word Cascade: Audio",
      "blurb": "Catch falling lecture words and match each to its precise academic meaning.",
      "data": {
        "items": [
          {
            "word": "accumulate",
            "correct": "to gather or build up over time",
            "options": [
              "to gather or build up over time",
              "to scatter quickly",
              "to count once",
              "to repeat aloud"
            ]
          },
          {
            "word": "constitute",
            "correct": "to form or make up something",
            "options": [
              "to form or make up something",
              "to break apart",
              "to delay a task",
              "to hide away"
            ]
          },
          {
            "word": "deduce",
            "correct": "to reach a conclusion by reasoning",
            "options": [
              "to reach a conclusion by reasoning",
              "to guess randomly",
              "to forbid strictly",
              "to decorate richly"
            ]
          },
          {
            "word": "exceed",
            "correct": "to go beyond a limit",
            "options": [
              "to go beyond a limit",
              "to fall far short",
              "to stay the same",
              "to question loudly"
            ]
          },
          {
            "word": "facilitate",
            "correct": "to make a process easier",
            "options": [
              "to make a process easier",
              "to block completely",
              "to measure exactly",
              "to repeat often"
            ]
          },
          {
            "word": "inherent",
            "correct": "existing as a natural part of something",
            "options": [
              "existing as a natural part of something",
              "added from outside",
              "completely absent",
              "easily removed"
            ]
          },
          {
            "word": "objective",
            "correct": "not influenced by personal feelings",
            "options": [
              "not influenced by personal feelings",
              "based purely on emotion",
              "totally random",
              "strictly secret"
            ]
          },
          {
            "word": "undergo",
            "correct": "to experience or be subjected to",
            "options": [
              "to experience or be subjected to",
              "to avoid entirely",
              "to create from nothing",
              "to summarize briefly"
            ]
          }
        ]
      }
    },
    "7": {
      "skill": "listening",
      "engine": "dictation-arcade",
      "title": "Dictation Arcade V",
      "blurb": "Push your listening accuracy higher by transcribing six dense academic sentences.",
      "data": {
        "sentences": [
          "The survey revealed that most respondents favored the proposed reform.",
          "Tropical rainforests contain more than half of the world's plant species.",
          "The engineer explained why the bridge needed urgent repairs.",
          "Scholars still debate exactly when the manuscript was written.",
          "Renewable energy now supplies a growing share of the nation's power.",
          "The study tracked the same group of children for over a decade."
        ]
      }
    },
    "8": {
      "skill": "listening",
      "engine": "cube-match",
      "title": "Cube Match: Audio",
      "blurb": "Hear the word, rotate the cube, and snap each term to its academic meaning.",
      "data": {
        "items": [
          {
            "word": "adjacent",
            "correct": "next to or near something",
            "options": [
              "next to or near something",
              "very far away",
              "completely hidden",
              "strictly forbidden"
            ]
          },
          {
            "word": "coherent",
            "correct": "clear, logical, and well organized",
            "options": [
              "clear, logical, and well organized",
              "confusing and disordered",
              "extremely loud",
              "barely visible"
            ]
          },
          {
            "word": "deviate",
            "correct": "to move away from a usual course",
            "options": [
              "to move away from a usual course",
              "to stay exactly on track",
              "to count again",
              "to repeat aloud"
            ]
          },
          {
            "word": "equivalent",
            "correct": "equal in value or meaning",
            "options": [
              "equal in value or meaning",
              "totally different",
              "completely empty",
              "easily broken"
            ]
          },
          {
            "word": "finite",
            "correct": "having clear limits or an end",
            "options": [
              "having clear limits or an end",
              "without any limit",
              "strictly secret",
              "loud and sudden"
            ]
          },
          {
            "word": "infer",
            "correct": "to conclude from evidence",
            "options": [
              "to conclude from evidence",
              "to state directly",
              "to destroy fully",
              "to hide away"
            ]
          },
          {
            "word": "notion",
            "correct": "an idea or belief about something",
            "options": [
              "an idea or belief about something",
              "a proven fact",
              "a written contract",
              "a kind of machine"
            ]
          },
          {
            "word": "sustain",
            "correct": "to keep something going over time",
            "options": [
              "to keep something going over time",
              "to stop suddenly",
              "to count once",
              "to question loudly"
            ]
          }
        ]
      }
    },
    "9": {
      "skill": "listening",
      "engine": "dictation-arcade",
      "title": "Dictation Arcade VI",
      "blurb": "Test your trained ear on six fresh academic sentences across varied topics.",
      "data": {
        "sentences": [
          "The astronomer pointed out that the star had already begun to fade.",
          "Volunteers spent the weekend restoring the eroded riverbank.",
          "The textbook compares several theories of childhood development.",
          "A sudden frost destroyed nearly half of the region's orange crop.",
          "The dormitory will undergo renovations during the summer break.",
          "Ancient traders carried silk and spices along dangerous routes."
        ]
      }
    },
    "10": {
      "skill": "listening",
      "engine": "word-runner",
      "title": "Word Runner: Audio",
      "blurb": "Race through a stream of lecture words, picking the right meaning each time.",
      "data": {
        "items": [
          {
            "word": "allocate",
            "correct": "to assign resources for a purpose",
            "options": [
              "to assign resources for a purpose",
              "to waste carelessly",
              "to count again",
              "to repeat aloud"
            ]
          },
          {
            "word": "comprise",
            "correct": "to consist of or be made up of",
            "options": [
              "to consist of or be made up of",
              "to break apart",
              "to delay a task",
              "to hide away"
            ]
          },
          {
            "word": "depict",
            "correct": "to show or represent something",
            "options": [
              "to show or represent something",
              "to erase fully",
              "to question loudly",
              "to measure exactly"
            ]
          },
          {
            "word": "converse",
            "correct": "opposite in nature or order",
            "options": [
              "opposite in nature or order",
              "exactly the same",
              "completely silent",
              "strictly secret"
            ]
          },
          {
            "word": "feasible",
            "correct": "possible to do or achieve",
            "options": [
              "possible to do or achieve",
              "clearly impossible",
              "totally random",
              "easily broken"
            ]
          },
          {
            "word": "implement",
            "correct": "to put a plan into action",
            "options": [
              "to put a plan into action",
              "to abandon a plan",
              "to count once",
              "to summarize briefly"
            ]
          },
          {
            "word": "prominent",
            "correct": "important and well known",
            "options": [
              "important and well known",
              "obscure and ignored",
              "loud and harsh",
              "cheap and weak"
            ]
          },
          {
            "word": "valid",
            "correct": "based on sound reasoning or evidence",
            "options": [
              "based on sound reasoning or evidence",
              "clearly false",
              "strictly secret",
              "barely visible"
            ]
          }
        ]
      }
    },
    "11": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Discussion",
      "blurb": "Repeat six discussion-ready sentences aloud to build natural speaking flow.",
      "data": {
        "items": [
          "I agree with the author that small changes can have a big effect.",
          "One major advantage of online learning is its flexibility.",
          "From my own experience, group projects teach valuable teamwork skills.",
          "It is reasonable to assume that prices will continue to rise.",
          "The main drawback of this approach is that it takes a lot of time.",
          "Overall, I believe the benefits clearly outweigh the costs."
        ]
      }
    },
    "12": {
      "skill": "reading",
      "engine": "inference-detective",
      "title": "Inference Detective III",
      "blurb": "Read four academic paragraphs and pinpoint the conclusion each one supports.",
      "data": {
        "items": [
          {
            "passage": "When a particular species of beetle was removed from a forest plot, dead wood began piling up because no other organism broke it down at the same rate. Within a few years, fewer young trees were able to take root in the cluttered soil.",
            "question": "What can be inferred about the beetle?",
            "options": [
              "It harmed the forest by eating young trees.",
              "It played an important role in recycling dead wood.",
              "It had no effect on the forest at all.",
              "It only lived in cluttered soil."
            ],
            "correct": 1,
            "why": "Because dead wood piled up once the beetle was gone, it had been important for breaking that wood down."
          },
          {
            "passage": "Early maps of the coastline contained large errors in distance and shape. Later versions, drawn after sailors used more accurate instruments, matched the real geography far more closely.",
            "question": "What can be inferred from the passage?",
            "options": [
              "The coastline itself changed shape over time.",
              "Better instruments improved the accuracy of maps.",
              "Early mapmakers never sailed the coast.",
              "Maps are still highly inaccurate today."
            ],
            "correct": 1,
            "why": "Maps grew accurate after sailors used better instruments, so the instruments improved accuracy."
          },
          {
            "passage": "A company offered employees the option to work from home two days a week. Reported job satisfaction rose, and the number of workers leaving the company fell to its lowest level in a decade.",
            "question": "What can be inferred about the work from home policy?",
            "options": [
              "It made employees less productive.",
              "It was associated with happier, more loyal employees.",
              "It forced the company to hire fewer people.",
              "It was disliked by most workers."
            ],
            "correct": 1,
            "why": "Higher satisfaction and fewer departures after the policy suggest employees were happier and more loyal."
          },
          {
            "passage": "Fossils of tropical ferns have been discovered in rock layers found near the North Pole. These plants could only have grown in a warm, humid climate.",
            "question": "What can be inferred about the polar region?",
            "options": [
              "It has always been frozen.",
              "It once had a much warmer climate.",
              "Ferns can grow in ice today.",
              "The fossils were carried there by people."
            ],
            "correct": 1,
            "why": "Tropical ferns need warmth, so finding their fossils there means the region was once much warmer."
          }
        ]
      }
    },
    "13": {
      "skill": "listening",
      "engine": "dictation-arcade",
      "title": "Dictation Arcade VII",
      "blurb": "Near the chapter's end, transcribe six challenging academic sentences with care.",
      "data": {
        "sentences": [
          "The geologist explained how the canyon was carved over millions of years.",
          "Reliable data are essential before any firm conclusion can be drawn.",
          "The orchestra rehearsed the difficult passage until it sounded effortless.",
          "Urban planners are trying to make the city more friendly to pedestrians.",
          "The vaccine trial included thousands of volunteers from many countries.",
          "Careful note taking can make studying for exams far less stressful."
        ]
      }
    },
    "14": {
      "skill": "listening",
      "engine": "vocab-galaxy",
      "title": "Vocab Galaxy: Chapter Finale",
      "blurb": "Close the listening chapter by matching eight more academic words to their meanings.",
      "data": {
        "items": [
          {
            "word": "anticipate",
            "correct": "to expect something to happen",
            "options": [
              "to expect something to happen",
              "to forget completely",
              "to count again",
              "to repeat aloud"
            ]
          },
          {
            "word": "compile",
            "correct": "to gather information into one place",
            "options": [
              "to gather information into one place",
              "to scatter widely",
              "to destroy fully",
              "to hide away"
            ]
          },
          {
            "word": "definitive",
            "correct": "final and not able to be questioned",
            "options": [
              "final and not able to be questioned",
              "uncertain and open",
              "completely random",
              "strictly secret"
            ]
          },
          {
            "word": "evolve",
            "correct": "to develop gradually over time",
            "options": [
              "to develop gradually over time",
              "to stay unchanged",
              "to break apart",
              "to question loudly"
            ]
          },
          {
            "word": "fundamental",
            "correct": "forming a necessary base or core",
            "options": [
              "forming a necessary base or core",
              "entirely unimportant",
              "loud and harsh",
              "easily removed"
            ]
          },
          {
            "word": "hypothetical",
            "correct": "based on a possible idea rather than fact",
            "options": [
              "based on a possible idea rather than fact",
              "proven beyond doubt",
              "clearly visible",
              "strictly forbidden"
            ]
          },
          {
            "word": "reinforce",
            "correct": "to strengthen or support something",
            "options": [
              "to strengthen or support something",
              "to weaken greatly",
              "to count once",
              "to summarize briefly"
            ]
          },
          {
            "word": "subsequent",
            "correct": "coming after something else",
            "options": [
              "coming after something else",
              "happening first",
              "never happening",
              "completely hidden"
            ]
          }
        ]
      }
    },
    "15": {
      "skill": "reading",
      "engine": "inference-detective",
      "title": "Inference Detective IV",
      "blurb": "Open the reading chapter by inferring the implied meaning of four academic passages.",
      "data": {
        "items": [
          {
            "passage": "Archaeologists found grain stores far larger than a single household could consume in one of the settlement's oldest buildings. Nearby, they uncovered tablets recording who had deposited and withdrawn portions of grain.",
            "question": "What can be inferred about the settlement?",
            "options": [
              "Its people did not farm grain.",
              "It had some form of organized communal storage.",
              "The building was used only for housing.",
              "The tablets were purely decorative."
            ],
            "correct": 1,
            "why": "Oversized stores plus deposit-and-withdrawal records imply grain was managed communally rather than per household."
          },
          {
            "passage": "After a coastal city banned cars from its historic center, shopkeepers initially protested. A year later, foot traffic had risen and several owners reported their best sales in years.",
            "question": "What can be inferred about the car ban?",
            "options": [
              "It drove most shops out of business.",
              "It ended up benefiting many of the businesses there.",
              "Shopkeepers were correct to oppose it.",
              "It reduced the number of visitors."
            ],
            "correct": 1,
            "why": "Rising foot traffic and record sales after the ban show it ultimately helped the businesses."
          },
          {
            "passage": "A species of moth that once had pale wings became predominantly dark in regions where soot from factories coated the trees. In areas with clean air, the pale form remained common.",
            "question": "What can be inferred about the moths' coloring?",
            "options": [
              "Wing color is unrelated to surroundings.",
              "Coloring that blends with the trees offers an advantage.",
              "All moths eventually turn dark.",
              "Soot directly dyes the moths' wings."
            ],
            "correct": 1,
            "why": "Dark moths thrived on sooty trees while pale ones stayed common on clean trees, so blending in confers an advantage."
          },
          {
            "passage": "The diary of an eighteenth-century merchant lists frequent shipments of ice packed in sawdust traveling hundreds of miles inland during summer. The ice was sold at high prices to wealthy households.",
            "question": "What can be inferred from the diary?",
            "options": [
              "Ice was worthless in that era.",
              "There was a profitable trade in preserving and transporting ice.",
              "Only poor families could afford ice.",
              "Sawdust was used to melt the ice faster."
            ],
            "correct": 1,
            "why": "High prices and long-distance summer shipments imply a profitable trade in storing and moving ice."
          }
        ]
      }
    },
    "16": {
      "skill": "reading",
      "engine": "vocab-galaxy",
      "title": "Vocab Galaxy: Reading Words",
      "blurb": "Launch the reading chapter by matching eight academic words to their precise meanings.",
      "data": {
        "items": [
          {
            "word": "ambiguous",
            "correct": "open to more than one interpretation",
            "options": [
              "open to more than one interpretation",
              "perfectly clear and exact",
              "completely silent",
              "strictly forbidden"
            ]
          },
          {
            "word": "advocate",
            "correct": "to publicly support a cause or idea",
            "options": [
              "to publicly support a cause or idea",
              "to strongly oppose",
              "to count again",
              "to repeat aloud"
            ]
          },
          {
            "word": "scrutinize",
            "correct": "to examine closely and critically",
            "options": [
              "to examine closely and critically",
              "to glance at briefly",
              "to destroy fully",
              "to hide away"
            ]
          },
          {
            "word": "comprehensive",
            "correct": "complete and covering all parts",
            "options": [
              "complete and covering all parts",
              "narrow and partial",
              "completely random",
              "easily broken"
            ]
          },
          {
            "word": "mitigate",
            "correct": "to make something less severe",
            "options": [
              "to make something less severe",
              "to make far worse",
              "to keep secret",
              "to summarize briefly"
            ]
          },
          {
            "word": "plausible",
            "correct": "reasonable and likely to be true",
            "options": [
              "reasonable and likely to be true",
              "clearly impossible",
              "strictly secret",
              "loud and harsh"
            ]
          },
          {
            "word": "empirical",
            "correct": "based on observation or experiment",
            "options": [
              "based on observation or experiment",
              "based purely on guessing",
              "totally unrelated",
              "barely visible"
            ]
          },
          {
            "word": "arbitrary",
            "correct": "based on chance rather than reason",
            "options": [
              "based on chance rather than reason",
              "carefully justified",
              "clearly visible",
              "easily removed"
            ]
          }
        ]
      }
    },
    "17": {
      "skill": "reading",
      "engine": "word-cascade",
      "title": "Word Cascade: Reading",
      "blurb": "Catch falling academic words and pair each with its correct reading-level meaning.",
      "data": {
        "items": [
          {
            "word": "prevalent",
            "correct": "widespread or common in an area",
            "options": [
              "widespread or common in an area",
              "extremely rare",
              "completely hidden",
              "strictly forbidden"
            ]
          },
          {
            "word": "viable",
            "correct": "capable of working successfully",
            "options": [
              "capable of working successfully",
              "certain to fail",
              "totally random",
              "easily broken"
            ]
          },
          {
            "word": "redundant",
            "correct": "no longer needed because of repetition",
            "options": [
              "no longer needed because of repetition",
              "absolutely essential",
              "loud and harsh",
              "barely visible"
            ]
          },
          {
            "word": "concise",
            "correct": "expressing much in few words",
            "options": [
              "expressing much in few words",
              "long and wordy",
              "completely empty",
              "strictly secret"
            ]
          },
          {
            "word": "anomaly",
            "correct": "something that differs from the norm",
            "options": [
              "something that differs from the norm",
              "a perfectly typical case",
              "a written contract",
              "a kind of tool"
            ]
          },
          {
            "word": "pertinent",
            "correct": "clearly relevant to the matter",
            "options": [
              "clearly relevant to the matter",
              "completely off topic",
              "loud and sudden",
              "easily removed"
            ]
          },
          {
            "word": "transient",
            "correct": "lasting only a short time",
            "options": [
              "lasting only a short time",
              "permanent and fixed",
              "strictly secret",
              "clearly visible"
            ]
          },
          {
            "word": "lucid",
            "correct": "clear and easy to understand",
            "options": [
              "clear and easy to understand",
              "confusing and murky",
              "extremely loud",
              "barely visible"
            ]
          }
        ]
      }
    },
    "18": {
      "skill": "reading",
      "engine": "inference-detective",
      "title": "Inference Detective V",
      "blurb": "Sharpen your reading by deducing the conclusion supported by four new passages.",
      "data": {
        "items": [
          {
            "passage": "In a long-term study, gardens that left a strip of wildflowers along their edges attracted far more bees than tidy gardens with no flowering borders. The wildflower gardens also produced larger vegetable harvests.",
            "question": "What can be inferred from the study?",
            "options": [
              "Wildflowers harm vegetable plants.",
              "Attracting bees can improve vegetable yields.",
              "Tidy gardens always produce more food.",
              "Bees avoid wildflowers."
            ],
            "correct": 1,
            "why": "More bees and bigger harvests in wildflower gardens imply that attracting bees boosts vegetable yields."
          },
          {
            "passage": "A region that once relied on a single coal mine for most jobs invested heavily in retraining workers for technology firms. A decade later, unemployment there was lower than in similar towns that made no such investment.",
            "question": "What can be inferred about the retraining program?",
            "options": [
              "It had no measurable effect.",
              "It likely helped the region adapt to economic change.",
              "It forced the coal mine to expand.",
              "It increased unemployment."
            ],
            "correct": 1,
            "why": "Lower unemployment than comparable towns suggests the retraining helped the region adapt."
          },
          {
            "passage": "Sailors of the past noticed that ships disappeared from view hull-first, with the masts vanishing last as they sailed away. This observation troubled those who assumed the sea was perfectly flat.",
            "question": "What can be inferred from the sailors' observation?",
            "options": [
              "Ships sank as they sailed away.",
              "The surface of the sea is curved.",
              "Masts are heavier than hulls.",
              "The sailors had poor eyesight."
            ],
            "correct": 1,
            "why": "Hulls vanishing before masts is what a curved surface would cause, undermining the flat-sea assumption."
          },
          {
            "passage": "A museum replaced its harsh overhead lighting with softer, indirect light in one gallery. Visitors lingered noticeably longer in that gallery and rated their experience higher than in the brightly lit rooms.",
            "question": "What can be inferred about the lighting change?",
            "options": [
              "Bright light makes art easier to enjoy.",
              "Lighting can shape how visitors experience a gallery.",
              "Visitors prefer total darkness.",
              "The artworks were changed as well."
            ],
            "correct": 1,
            "why": "Longer visits and higher ratings after the change show lighting affects the gallery experience."
          }
        ]
      }
    },
    "19": {
      "skill": "reading",
      "engine": "bubble-match",
      "title": "Bubble Match: Reading",
      "blurb": "Pop the bubble that defines each academic word to expand your reading vocabulary.",
      "data": {
        "items": [
          {
            "word": "augment",
            "correct": "to increase the size or amount of",
            "options": [
              "to increase the size or amount of",
              "to reduce sharply",
              "to count once",
              "to repeat aloud"
            ]
          },
          {
            "word": "eradicate",
            "correct": "to remove or destroy completely",
            "options": [
              "to remove or destroy completely",
              "to gently encourage",
              "to delay a task",
              "to hide away"
            ]
          },
          {
            "word": "magnitude",
            "correct": "the great size or importance of something",
            "options": [
              "the great size or importance of something",
              "a tiny detail",
              "a written rule",
              "a quiet whisper"
            ]
          },
          {
            "word": "prone",
            "correct": "likely to do or suffer something",
            "options": [
              "likely to do or suffer something",
              "completely protected",
              "strictly secret",
              "loud and harsh"
            ]
          },
          {
            "word": "validate",
            "correct": "to confirm that something is true or sound",
            "options": [
              "to confirm that something is true or sound",
              "to prove false",
              "totally random",
              "easily broken"
            ]
          },
          {
            "word": "nuance",
            "correct": "a subtle difference in meaning",
            "options": [
              "a subtle difference in meaning",
              "a huge obvious gap",
              "a serious failure",
              "a kind of machine"
            ]
          },
          {
            "word": "paradigm",
            "correct": "a typical model or pattern of thinking",
            "options": [
              "a typical model or pattern of thinking",
              "a random exception",
              "a written reward",
              "a long delay"
            ]
          },
          {
            "word": "ubiquitous",
            "correct": "present everywhere at once",
            "options": [
              "present everywhere at once",
              "found in only one place",
              "completely hidden",
              "barely visible"
            ]
          }
        ]
      }
    },
    "20": {
      "skill": "writing",
      "engine": "sentence-builder",
      "title": "Sentence Builder III",
      "blurb": "Strengthen your writing by reordering six scrambled academic sentences correctly.",
      "data": {
        "items": [
          {
            "answer": "The researchers presented their findings to a skeptical audience."
          },
          {
            "answer": "Careful editing can transform a rough draft into clear prose."
          },
          {
            "answer": "The author compares two competing theories throughout the chapter."
          },
          {
            "answer": "Reliable evidence should always support a strong argument."
          },
          {
            "answer": "The committee reviewed each proposal before reaching a decision."
          },
          {
            "answer": "Reading critically helps students question what they encounter."
          }
        ]
      }
    },
    "21": {
      "skill": "reading",
      "engine": "word-runner",
      "title": "Word Runner: Reading",
      "blurb": "Run through a lane of academic words, choosing the right meaning at full speed.",
      "data": {
        "items": [
          {
            "word": "intrinsic",
            "correct": "belonging naturally to something",
            "options": [
              "belonging naturally to something",
              "added from outside",
              "completely absent",
              "easily removed"
            ]
          },
          {
            "word": "discrete",
            "correct": "separate and individually distinct",
            "options": [
              "separate and individually distinct",
              "blended into one mass",
              "strictly secret",
              "loud and sudden"
            ]
          },
          {
            "word": "catalyst",
            "correct": "something that speeds up a change",
            "options": [
              "something that speeds up a change",
              "something that halts change",
              "a written rule",
              "a quiet whisper"
            ]
          },
          {
            "word": "synthesize",
            "correct": "to combine ideas into a new whole",
            "options": [
              "to combine ideas into a new whole",
              "to take fully apart",
              "to count again",
              "to repeat aloud"
            ]
          },
          {
            "word": "candid",
            "correct": "honest and straightforward in speech",
            "options": [
              "honest and straightforward in speech",
              "secretive and evasive",
              "totally random",
              "barely visible"
            ]
          },
          {
            "word": "rigorous",
            "correct": "extremely thorough and demanding",
            "options": [
              "extremely thorough and demanding",
              "careless and loose",
              "completely empty",
              "easily broken"
            ]
          },
          {
            "word": "autonomy",
            "correct": "the ability to govern oneself",
            "options": [
              "the ability to govern oneself",
              "total dependence on others",
              "a serious failure",
              "a kind of machine"
            ]
          },
          {
            "word": "dynamic",
            "correct": "marked by constant change or activity",
            "options": [
              "marked by constant change or activity",
              "fixed and unchanging",
              "strictly forbidden",
              "clearly visible"
            ]
          }
        ]
      }
    },
    "22": {
      "skill": "reading",
      "engine": "inference-detective",
      "title": "Inference Detective VI",
      "blurb": "Test your reading instincts by inferring what each of four passages logically implies.",
      "data": {
        "items": [
          {
            "passage": "A bird native to a remote island lost the ability to fly over many generations, since the island had no ground predators. When rats were later introduced by ships, the bird's numbers fell rapidly.",
            "question": "What can be inferred about the flightless bird?",
            "options": [
              "It could easily escape the rats.",
              "Its loss of flight left it vulnerable to new predators.",
              "Rats helped the bird survive.",
              "The bird never lived on the ground."
            ],
            "correct": 1,
            "why": "A sharp decline after rats arrived implies that being flightless made the bird vulnerable to ground predators."
          },
          {
            "passage": "Two groups of students prepared for the same test. One group spread its study over two weeks, while the other crammed everything into the final night. The spaced group recalled far more a month later.",
            "question": "What can be inferred about studying?",
            "options": [
              "Cramming is the most effective method.",
              "Spreading study over time aids long-term recall.",
              "The test was unfair to one group.",
              "Memory does not depend on study habits."
            ],
            "correct": 1,
            "why": "Better month-later recall by the spaced group implies spacing study improves lasting memory."
          },
          {
            "passage": "A river that had been straightened decades ago to speed up boat traffic was recently allowed to wind naturally again. Within a few years, fish populations recovered and downstream flooding became less frequent.",
            "question": "What can be inferred about the straightened river?",
            "options": [
              "Straightening it had improved the ecosystem.",
              "The natural, winding form better supports the river's health.",
              "Boats can no longer use the river.",
              "Flooding is unrelated to river shape."
            ],
            "correct": 1,
            "why": "Recovering fish and reduced flooding after restoring the winding form imply that shape supports river health."
          },
          {
            "passage": "An ancient script remained unreadable for centuries until scholars found a stone carved with the same text in three languages, two of which were already understood. Soon after, translations of the unknown script appeared.",
            "question": "What can be inferred about the three-language stone?",
            "options": [
              "It made the script harder to read.",
              "It provided a key for decoding the unknown script.",
              "The unknown script was never deciphered.",
              "Only one language on it was useful."
            ],
            "correct": 1,
            "why": "Translations appearing soon after the stone's discovery imply it served as the key to decoding the script."
          }
        ]
      }
    },
    "23": {
      "skill": "reading",
      "engine": "cube-match",
      "title": "Cube Match: Reading",
      "blurb": "Rotate through academic words and lock each one to its precise meaning.",
      "data": {
        "items": [
          {
            "word": "integral",
            "correct": "necessary to make something complete",
            "options": [
              "necessary to make something complete",
              "entirely optional",
              "completely hidden",
              "strictly forbidden"
            ]
          },
          {
            "word": "contradict",
            "correct": "to state the opposite of something",
            "options": [
              "to state the opposite of something",
              "to fully agree with",
              "to count again",
              "to repeat aloud"
            ]
          },
          {
            "word": "ethical",
            "correct": "relating to right and wrong conduct",
            "options": [
              "relating to right and wrong conduct",
              "without any rules",
              "loud and harsh",
              "barely visible"
            ]
          },
          {
            "word": "negligible",
            "correct": "so small as to be unimportant",
            "options": [
              "so small as to be unimportant",
              "large and significant",
              "strictly secret",
              "easily broken"
            ]
          },
          {
            "word": "profound",
            "correct": "very deep or far-reaching",
            "options": [
              "very deep or far-reaching",
              "shallow and minor",
              "completely empty",
              "clearly visible"
            ]
          },
          {
            "word": "trivial",
            "correct": "of little value or importance",
            "options": [
              "of little value or importance",
              "deeply important",
              "a kind of machine",
              "a long delay"
            ]
          },
          {
            "word": "aggregate",
            "correct": "a total formed by combining parts",
            "options": [
              "a total formed by combining parts",
              "a single isolated piece",
              "a written reward",
              "a quiet whisper"
            ]
          },
          {
            "word": "simultaneous",
            "correct": "happening at the same time",
            "options": [
              "happening at the same time",
              "occurring one after another",
              "never happening",
              "strictly forbidden"
            ]
          }
        ]
      }
    },
    "24": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Reading Aloud",
      "blurb": "Build speaking fluency by reading six academic sentences aloud into the mic.",
      "data": {
        "items": [
          "The passage suggests that early cities grew up around reliable water sources.",
          "According to the author, careful reading begins with asking good questions.",
          "Each paragraph in the essay supports a single, clearly stated idea.",
          "The evidence presented here points toward an unexpected conclusion.",
          "Skimming a text first can help you locate its main argument quickly.",
          "A strong summary captures the central point in just a few sentences."
        ]
      }
    },
    "25": {
      "skill": "reading",
      "engine": "vocab-galaxy",
      "title": "Vocab Galaxy: Reading Depth",
      "blurb": "Deepen your reading vocabulary by matching eight more academic words to their meanings.",
      "data": {
        "items": [
          {
            "word": "cumulative",
            "correct": "increasing by successive additions",
            "options": [
              "increasing by successive additions",
              "shrinking steadily",
              "completely random",
              "strictly forbidden"
            ]
          },
          {
            "word": "deteriorate",
            "correct": "to become progressively worse",
            "options": [
              "to become progressively worse",
              "to steadily improve",
              "to count again",
              "to repeat aloud"
            ]
          },
          {
            "word": "exemplify",
            "correct": "to serve as a typical example of",
            "options": [
              "to serve as a typical example of",
              "to contradict entirely",
              "to destroy fully",
              "to hide away"
            ]
          },
          {
            "word": "hierarchy",
            "correct": "a system ranked by level or rank",
            "options": [
              "a system ranked by level or rank",
              "a group with no order",
              "a written reward",
              "a quiet whisper"
            ]
          },
          {
            "word": "intervene",
            "correct": "to step in to alter an outcome",
            "options": [
              "to step in to alter an outcome",
              "to stay completely out",
              "strictly secret",
              "easily broken"
            ]
          },
          {
            "word": "mutual",
            "correct": "shared by two or more parties",
            "options": [
              "shared by two or more parties",
              "held by one alone",
              "loud and harsh",
              "barely visible"
            ]
          },
          {
            "word": "refute",
            "correct": "to prove a claim to be false",
            "options": [
              "to prove a claim to be false",
              "to firmly support",
              "completely empty",
              "clearly visible"
            ]
          },
          {
            "word": "scope",
            "correct": "the range a subject covers",
            "options": [
              "the range a subject covers",
              "a single fixed point",
              "a kind of machine",
              "a long delay"
            ]
          }
        ]
      }
    },
    "26": {
      "skill": "reading",
      "engine": "grammar-invaders",
      "title": "Grammar Invaders: Hold the Line",
      "blurb": "Blast away faulty grammar to sharpen your reading accuracy.",
      "data": {
        "items": [
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "Neither the students nor the teacher were ready for the exam.",
              "Neither the students nor the teacher was ready for the exam.",
              "Neither the students or the teacher was ready for the exam.",
              "Neither the students nor the teacher are ready for the exam."
            ],
            "correct": 1,
            "why": "With 'neither...nor', the verb agrees with the nearer subject, here the singular 'teacher'."
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "The data suggests that the glacier is retreating rapidly.",
              "The data suggest that the glacier is retreating rapid.",
              "The data suggests that the glacier are retreating rapidly.",
              "The data suggesting that the glacier is retreating rapidly."
            ],
            "correct": 0,
            "why": "In standard academic English 'data' takes a singular verb here, and 'rapidly' must be an adverb."
          },
          {
            "passage": "Context: a lab report.",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "Having completed the experiment, the results were recorded by the team.",
              "Having completed the experiment, the team recorded the results.",
              "Having completing the experiment, the team recorded the results.",
              "Having completed the experiment, the results recorded the team."
            ],
            "correct": 1,
            "why": "The introductory participial phrase must modify the doer, 'the team', avoiding a dangling modifier."
          },
          {
            "passage": "",
            "question": "Which sentence uses the verb tense correctly?",
            "options": [
              "By the time the lecture ended, most students leave the hall.",
              "By the time the lecture ended, most students had left the hall.",
              "By the time the lecture ended, most students have left the hall.",
              "By the time the lecture ends, most students had left the hall."
            ],
            "correct": 1,
            "why": "The past perfect 'had left' marks an action completed before the past event 'ended'."
          },
          {
            "passage": "",
            "question": "Which sentence is free of errors?",
            "options": [
              "Each of the researchers have submitted their own proposal.",
              "Each of the researchers has submitted their own proposal.",
              "Each of the researchers has submitted his their own proposal.",
              "Each of the researchers having submitted their own proposal."
            ],
            "correct": 1,
            "why": "'Each' is singular, so it requires the singular verb 'has'."
          }
        ]
      }
    },
    "27": {
      "skill": "reading",
      "engine": "word-tower-3d",
      "title": "Word Tower 3D: Stack the Meaning",
      "blurb": "Build a towering vocabulary by matching each word to its true sense.",
      "data": {
        "items": [
          {
            "word": "accommodate",
            "correct": "to provide room or adjust for",
            "options": [
              "to provide room or adjust for",
              "to refuse outright",
              "to measure precisely",
              "to abandon gradually"
            ]
          },
          {
            "word": "accurate",
            "correct": "free from error; correct",
            "options": [
              "free from error; correct",
              "happening by chance",
              "extremely large",
              "openly hostile"
            ]
          },
          {
            "word": "acknowledge",
            "correct": "to admit or recognize as true",
            "options": [
              "to admit or recognize as true",
              "to hide deliberately",
              "to calculate quickly",
              "to travel abroad"
            ]
          },
          {
            "word": "adapt",
            "correct": "to adjust to new conditions",
            "options": [
              "to adjust to new conditions",
              "to repeat exactly",
              "to destroy completely",
              "to question loudly"
            ]
          },
          {
            "word": "adhere",
            "correct": "to stick firmly or follow closely",
            "options": [
              "to stick firmly or follow closely",
              "to drift apart",
              "to estimate the value of",
              "to announce publicly"
            ]
          },
          {
            "word": "advent",
            "correct": "the arrival or coming of something",
            "options": [
              "the arrival or coming of something",
              "a sudden departure",
              "a careful repair",
              "a strong dislike"
            ]
          },
          {
            "word": "affiliate",
            "correct": "to connect or associate with a group",
            "options": [
              "to connect or associate with a group",
              "to break away from",
              "to shorten in length",
              "to copy by hand"
            ]
          },
          {
            "word": "allege",
            "correct": "to claim without proof",
            "options": [
              "to claim without proof",
              "to prove beyond doubt",
              "to measure carefully",
              "to welcome warmly"
            ]
          }
        ]
      }
    },
    "28": {
      "skill": "reading",
      "engine": "sentence-surgeon",
      "title": "Sentence Surgeon: Cut the Errors",
      "blurb": "Operate on broken sentences to keep your reading grammar healthy.",
      "data": {
        "items": [
          {
            "passage": "Although the bridge was built in 1890, but it still carries heavy traffic today.",
            "question": "Choose the best correction.",
            "options": [
              "Although the bridge was built in 1890, it still carries heavy traffic today.",
              "Although the bridge was built in 1890, but it still carrying heavy traffic today.",
              "Although the bridge built in 1890, but it still carries heavy traffic today.",
              "Although the bridge was build in 1890, it still carries heavy traffic today."
            ],
            "correct": 0,
            "why": "'Although' already signals contrast, so the redundant 'but' must be removed."
          },
          {
            "passage": "The committee will discusses the proposal at the meeting tomorrow.",
            "question": "Choose the best correction.",
            "options": [
              "The committee will discusses the proposal at the meeting tomorrow.",
              "The committee will discuss the proposal at the meeting tomorrow.",
              "The committee will discussing the proposal at the meeting tomorrow.",
              "The committee will to discuss the proposal at the meeting tomorrow."
            ],
            "correct": 1,
            "why": "After the modal 'will', the verb must be in its base form 'discuss'."
          },
          {
            "passage": "The novel is more interesting than any book I have ever read it.",
            "question": "Choose the best correction.",
            "options": [
              "The novel is more interesting than any book I have ever read it.",
              "The novel is more interesting than any book I have ever readed.",
              "The novel is more interesting than any book I have ever read.",
              "The novel is interesting more than any book I have ever read."
            ],
            "correct": 2,
            "why": "The relative clause already refers to 'book', so the extra object pronoun 'it' is incorrect."
          },
          {
            "passage": "Scientists which study the ocean floor rely on remote-controlled vehicles.",
            "question": "Choose the best correction.",
            "options": [
              "Scientists which study the ocean floor rely on remote-controlled vehicles.",
              "Scientists who study the ocean floor rely on remote-controlled vehicles.",
              "Scientists whom study the ocean floor rely on remote-controlled vehicles.",
              "Scientists what study the ocean floor rely on remote-controlled vehicles."
            ],
            "correct": 1,
            "why": "People take the relative pronoun 'who', not 'which'."
          },
          {
            "passage": "Neither the painting nor the sculptures was displayed in the new wing.",
            "question": "Choose the best correction.",
            "options": [
              "Neither the painting nor the sculptures was displayed in the new wing.",
              "Neither the painting nor the sculptures were displayed in the new wing.",
              "Neither the painting or the sculptures were displayed in the new wing.",
              "Neither the painting nor the sculptures is displayed in the new wing."
            ],
            "correct": 1,
            "why": "With 'neither...nor', the verb agrees with the nearer noun, the plural 'sculptures'."
          }
        ]
      }
    },
    "29": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Say It Back",
      "blurb": "Repeat each line aloud to train your speaking fluency and rhythm.",
      "data": {
        "items": [
          "The library extends its hours during the final exam week.",
          "Many students prefer studying in small, focused groups.",
          "The professor posted the lecture slides before class today.",
          "Renewable energy could power most of the city by then.",
          "I usually review my notes right after every lecture.",
          "The campus shuttle runs every fifteen minutes on weekdays."
        ]
      }
    },
    "30": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Think and Speak",
      "blurb": "Answer quick prompts on the clock to build speaking confidence.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a place where you enjoy studying and explain why it works for you.",
          "Some students take online classes while others prefer the classroom. Which do you prefer and why?",
          "Talk about a skill you would like to learn and how you would learn it.",
          "Do you think universities should require physical education courses? Explain your view."
        ]
      }
    },
    "31": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Mirror the Lecture",
      "blurb": "Echo academic sentences to polish your speaking pronunciation.",
      "data": {
        "items": [
          "The experiment confirmed what the early model had predicted.",
          "Volunteers planted hundreds of trees along the river bank.",
          "Our research team meets every Thursday afternoon in the lab.",
          "The museum offers free admission on the first Sunday each month.",
          "Reading widely helps you understand unfamiliar academic topics.",
          "The committee approved the budget after a long discussion."
        ]
      }
    },
    "32": {
      "skill": "listening",
      "engine": "listening-quiz",
      "title": "Listening Quiz: Catch the Detail",
      "blurb": "Listen closely to short lectures and prove your listening comprehension.",
      "data": {
        "items": [
          {
            "audio": true,
            "passage": "Good morning. Today we'll look at how honeybees communicate. When a forager finds food, it returns to the hive and performs a waggle dance. The angle of the dance shows the direction of the food relative to the sun.",
            "question": "What does the angle of the waggle dance indicate?",
            "options": [
              "The amount of food available",
              "The direction of the food relative to the sun",
              "The distance to the nearest hive",
              "The age of the forager bee"
            ],
            "correct": 1,
            "why": "The lecturer states the angle shows the direction of the food relative to the sun."
          },
          {
            "audio": true,
            "passage": "Attention, residents. The water in the north building will be shut off on Friday from nine to noon for pipe repairs. Please store water in advance, and contact the front desk if you have any concerns.",
            "question": "Why will the water be shut off?",
            "options": [
              "To clean the storage tanks",
              "To install new sinks",
              "To repair the pipes",
              "To test the fire alarms"
            ],
            "correct": 2,
            "why": "The announcement says the shutoff is for pipe repairs."
          },
          {
            "audio": true,
            "passage": "In economics, supply and demand work together to set prices. When demand rises but supply stays the same, prices tend to climb. When supply grows faster than demand, prices usually fall.",
            "question": "According to the speaker, what happens when supply grows faster than demand?",
            "options": [
              "Prices usually fall",
              "Prices stay exactly the same",
              "Prices climb sharply",
              "Demand disappears entirely"
            ],
            "correct": 0,
            "why": "The speaker explains that when supply grows faster than demand, prices usually fall."
          },
          {
            "audio": true,
            "passage": "Hi, this is Professor Lin. I'm moving Thursday's office hours to Wednesday at two o'clock because of a faculty meeting. If that time doesn't work for you, please email me to set up another appointment.",
            "question": "What change does the professor announce?",
            "options": [
              "The exam date has moved",
              "Office hours are moved to Wednesday at two",
              "The faculty meeting is canceled",
              "Class will be held online"
            ],
            "correct": 1,
            "why": "The professor says office hours are moving to Wednesday at two o'clock."
          },
          {
            "audio": true,
            "passage": "Let's discuss volcanoes. Shield volcanoes form from runny lava that spreads far before cooling, creating wide, gently sloping mountains. This is why they look very different from the steep cones of stratovolcanoes.",
            "question": "Why do shield volcanoes have gentle slopes?",
            "options": [
              "Their lava is thick and cools quickly",
              "They erupt only once in their lifetime",
              "Their runny lava spreads far before cooling",
              "They are formed entirely from ash"
            ],
            "correct": 2,
            "why": "The lecturer says runny lava spreads far before cooling, producing wide gentle slopes."
          }
        ]
      }
    },
    "33": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Repeat with Rhythm",
      "blurb": "Speak each sentence aloud to strengthen your speaking delivery.",
      "data": {
        "items": [
          "The author argues that history often repeats familiar patterns.",
          "We collected the samples from three different lakes yesterday.",
          "A balanced diet supports both memory and concentration.",
          "The seminar was canceled because of the heavy snowstorm.",
          "Most early cities developed along major rivers and trade routes.",
          "She summarized the entire report in just two minutes."
        ]
      }
    },
    "34": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: On the Spot",
      "blurb": "Respond to surprise prompts to grow quick, clear speaking.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a book or article that changed how you think about something.",
          "Some people work best in the morning, others at night. When are you most productive and why?",
          "Should students be allowed to use phones during lectures? Give your reasons.",
          "Talk about a tradition in your community that you find meaningful."
        ]
      }
    },
    "35": {
      "skill": "listening",
      "engine": "dictation-arcade",
      "title": "Dictation Arcade: Type What You Hear",
      "blurb": "Transcribe academic sentences to sharpen your listening precision.",
      "data": {
        "sentences": [
          "The research team published its findings in a leading journal.",
          "Ancient farmers learned to rotate crops to protect the soil.",
          "The lecture explained how glaciers shape mountain valleys over time.",
          "Most participants completed the survey within twenty minutes.",
          "Coastal cities are investing heavily in flood defenses this decade.",
          "The professor encouraged students to question every assumption."
        ]
      }
    },
    "36": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Find Your Voice",
      "blurb": "Repeat clear sentences aloud to build steady speaking pace.",
      "data": {
        "items": [
          "The new policy takes effect at the start of next semester.",
          "Engineers tested the bridge under several heavy loads.",
          "Curiosity drives much of the progress we see in science.",
          "The choir rehearsed the same piece for nearly two hours.",
          "Good notes can save you hours of review before an exam.",
          "The river floods almost every spring after the snow melts."
        ]
      }
    },
    "37": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Speak Your Mind",
      "blurb": "Tackle open questions quickly to expand your speaking range.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a teacher who had a strong influence on you and explain how.",
          "Is it better to travel alone or with others? Support your opinion.",
          "Talk about a recent technology that has changed daily life for many people.",
          "Should cities invest more in public transportation or in roads? Explain."
        ]
      }
    },
    "38": {
      "skill": "reading",
      "engine": "vocab-tetris",
      "title": "Vocab Tetris: Drop the Right Meaning",
      "blurb": "Slot each word into its meaning to clear lines and grow vocabulary.",
      "data": {
        "items": [
          {
            "word": "amend",
            "correct": "to change or correct a text or rule",
            "options": [
              "to change or correct a text or rule",
              "to ignore on purpose",
              "to gather in one place",
              "to travel widely"
            ]
          },
          {
            "word": "analogous",
            "correct": "similar or comparable in some way",
            "options": [
              "similar or comparable in some way",
              "completely opposite",
              "very expensive",
              "highly secret"
            ]
          },
          {
            "word": "apparent",
            "correct": "clearly visible or easily understood",
            "options": [
              "clearly visible or easily understood",
              "deeply hidden",
              "rapidly moving",
              "strictly forbidden"
            ]
          },
          {
            "word": "append",
            "correct": "to add to the end of something",
            "options": [
              "to add to the end of something",
              "to remove the middle of",
              "to argue against",
              "to measure exactly"
            ]
          },
          {
            "word": "appraise",
            "correct": "to assess the value or quality of",
            "options": [
              "to assess the value or quality of",
              "to praise loudly",
              "to forget quickly",
              "to build from scratch"
            ]
          },
          {
            "word": "ascend",
            "correct": "to move or climb upward",
            "options": [
              "to move or climb upward",
              "to sink slowly",
              "to deny firmly",
              "to copy exactly"
            ]
          },
          {
            "word": "assert",
            "correct": "to state firmly and confidently",
            "options": [
              "to state firmly and confidently",
              "to ask politely",
              "to hide carefully",
              "to divide evenly"
            ]
          },
          {
            "word": "assimilate",
            "correct": "to absorb and integrate ideas or people",
            "options": [
              "to absorb and integrate ideas or people",
              "to reject and expel",
              "to delay repeatedly",
              "to count carefully"
            ]
          }
        ]
      }
    },
    "39": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Echo the Experts",
      "blurb": "Repeat each line aloud to refine your speaking clarity.",
      "data": {
        "items": [
          "The survey revealed a surprising shift in public opinion.",
          "Architects designed the hall to capture natural light.",
          "Many languages borrow words from one another over centuries.",
          "The storm delayed the launch by nearly three days.",
          "Practice and feedback together make the biggest difference.",
          "The trail climbs steeply before reaching the quiet summit."
        ]
      }
    },
    "40": {
      "skill": "listening",
      "engine": "listening-quiz",
      "title": "Listening Quiz: Tune Your Ear",
      "blurb": "Decode short spoken passages to test your listening skills.",
      "data": {
        "items": [
          {
            "audio": true,
            "passage": "Welcome to today's art history session. The Impressionists broke with tradition by painting outdoors. They wanted to capture the changing effects of light, so they worked quickly with loose, visible brushstrokes.",
            "question": "Why did the Impressionists use loose, quick brushstrokes?",
            "options": [
              "To save money on paint",
              "To capture the changing effects of light",
              "To copy older masters exactly",
              "To paint only at night"
            ],
            "correct": 1,
            "why": "The speaker says they worked quickly to capture the changing effects of light."
          },
          {
            "audio": true,
            "passage": "A quick reminder about the field trip. The bus leaves campus at seven sharp on Saturday, so arrive by six forty-five. Bring lunch and water, since there are no shops near the research site.",
            "question": "What are students told to bring?",
            "options": [
              "A laptop and headphones",
              "Lunch and water",
              "Cash for the gift shop",
              "Their own transportation"
            ],
            "correct": 1,
            "why": "The announcement tells students to bring lunch and water because there are no shops nearby."
          },
          {
            "audio": true,
            "passage": "In biology, we call animals that are active at night nocturnal. Many of them have large eyes and a strong sense of smell, which help them hunt and move safely in the dark.",
            "question": "What helps nocturnal animals move safely in the dark?",
            "options": [
              "Bright daytime vision only",
              "Large eyes and a strong sense of smell",
              "The ability to fly long distances",
              "A thick layer of fur"
            ],
            "correct": 1,
            "why": "The lecturer says large eyes and a strong sense of smell help them hunt and move in the dark."
          },
          {
            "audio": true,
            "passage": "Hi, it's the writing center. We've extended our weekend hours for the rest of the term. We're now open Saturdays from ten to four, but appointments fill fast, so please book online early.",
            "question": "What does the message advise students to do?",
            "options": [
              "Visit only on weekdays",
              "Book appointments online early",
              "Call after four o'clock",
              "Bring a printed essay"
            ],
            "correct": 1,
            "why": "The message says appointments fill fast, so students should book online early."
          },
          {
            "audio": true,
            "passage": "Let's talk about the water cycle. The sun heats the ocean, causing water to evaporate into the air. As that water vapor rises and cools, it condenses into clouds, which eventually release rain.",
            "question": "What causes water vapor to form clouds?",
            "options": [
              "It rises and cools, then condenses",
              "It sinks back into the ocean",
              "It freezes instantly at the surface",
              "It is pushed down by the wind"
            ],
            "correct": 0,
            "why": "The speaker explains that rising vapor cools and condenses into clouds."
          }
        ]
      }
    },
    "41": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Quick Takes",
      "blurb": "Give fast, focused answers to stretch your speaking skills.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a hobby you enjoy and explain what you gain from it.",
          "Some people prefer to plan everything; others act spontaneously. Which are you, and why?",
          "Should museums charge admission or be free to the public? Explain your view.",
          "Talk about a goal you hope to achieve in the next five years."
        ]
      }
    },
    "42": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Last Words",
      "blurb": "Repeat each sentence aloud to lock in your speaking fluency.",
      "data": {
        "items": [
          "The orchestra tuned their instruments before the concert began.",
          "Researchers tracked the birds across two continents.",
          "Clear writing usually starts with clear thinking.",
          "The factory switched to solar power to cut its costs.",
          "We compared the two studies before drawing any conclusion.",
          "The old clock tower still rings on the hour every day."
        ]
      }
    },
    "43": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Inbox: Office Hours",
      "blurb": "Sharpen your writing by drafting clear, polite academic emails.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to your professor asking to meet during office hours because you are confused about the topic of your upcoming research paper.",
            "scenario": "You are a first-year student in an introductory sociology course.",
            "checklist": [
              "Greets the professor by name or title",
              "States the purpose clearly",
              "Gives a specific reason for the meeting",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention a specific time you are available so the professor can reply quickly."
          },
          {
            "prompt": "Write an email to your academic advisor requesting permission to add a fourth course to your schedule this semester.",
            "scenario": "Adding the course would push you above the normal credit limit.",
            "checklist": [
              "Greets the advisor",
              "States the request clearly",
              "Explains why the extra course matters to you",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Be honest about why the extra workload is manageable for you."
          },
          {
            "prompt": "Write an email to your landlord reporting that the heating in your apartment has stopped working and asking for a repair.",
            "scenario": "It is winter and the apartment has been cold for two days.",
            "checklist": [
              "Greets the landlord",
              "Describes the problem clearly",
              "Explains the urgency",
              "Requests a specific action and closes politely"
            ],
            "minWords": 50,
            "tips": "Include when the problem started so the landlord understands the urgency."
          }
        ]
      }
    },
    "44": {
      "skill": "writing",
      "engine": "sentence-builder",
      "title": "Sentence Scramble I",
      "blurb": "Rebuild jumbled words into grammatical sentences to strengthen writing.",
      "data": {
        "items": [
          {
            "answer": "The committee approved the new budget after a long debate."
          },
          {
            "answer": "Researchers discovered a previously unknown species in the rainforest."
          },
          {
            "answer": "Many students prefer studying in the quiet library at night."
          },
          {
            "answer": "Rising temperatures threaten the survival of coral reefs worldwide."
          },
          {
            "answer": "The professor explained the experiment using a simple diagram."
          },
          {
            "answer": "Volunteers planted hundreds of trees along the riverbank yesterday."
          }
        ]
      }
    },
    "45": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Inbox: Asking for Help",
      "blurb": "Practice writing emails that request favors with the right tone.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to a classmate asking to borrow their lecture notes from the class you missed last week.",
            "scenario": "You were sick and could not attend the lecture.",
            "checklist": [
              "Greets the classmate",
              "Explains why you missed class",
              "Makes the request clearly",
              "Offers thanks and closes politely"
            ],
            "minWords": 50,
            "tips": "Offer to return the favor so the request feels fair."
          },
          {
            "prompt": "Write an email to the university library asking whether you can extend the due date for a book you borrowed.",
            "scenario": "You still need the book to finish a term paper.",
            "checklist": [
              "Greets the library staff",
              "Identifies the book or your account",
              "States the request clearly",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention how much longer you need the book."
          },
          {
            "prompt": "Write an email to your employer requesting a change in your work shift so you can attend an afternoon class.",
            "scenario": "You work part-time at a campus cafe.",
            "checklist": [
              "Greets the manager",
              "States the schedule change you want",
              "Gives a clear reason",
              "Closes politely and offers flexibility"
            ],
            "minWords": 50,
            "tips": "Suggest a specific alternative shift to make it easy to say yes."
          }
        ]
      }
    },
    "46": {
      "skill": "writing",
      "engine": "sentence-surgeon",
      "title": "Grammar ER I",
      "blurb": "Operate on flawed sentences to cure common writing mistakes.",
      "data": {
        "items": [
          {
            "passage": "Each of the students have submitted their assignment on time.",
            "question": "Choose the best correction.",
            "options": [
              "Each of the students has submitted their assignment on time.",
              "Each of the students have submit their assignment on time.",
              "Each of the student have submitted their assignment on time.",
              "Each of the students having submitted their assignment on time."
            ],
            "correct": 0,
            "why": "Subject-verb agreement: 'each' is singular and takes 'has'."
          },
          {
            "passage": "She is interested in study marine biology at the university.",
            "question": "Choose the best correction.",
            "options": [
              "She is interested in study marine biology at the university.",
              "She is interested in studying marine biology at the university.",
              "She is interesting in studying marine biology at the university.",
              "She is interested to study marine biology at the university."
            ],
            "correct": 1,
            "why": "After the preposition 'in', the verb must take the gerund form 'studying'."
          },
          {
            "passage": "Yesterday the team finish the project before the deadline.",
            "question": "Choose the best correction.",
            "options": [
              "Yesterday the team finish the project before the deadline.",
              "Yesterday the team finishes the project before the deadline.",
              "Yesterday the team finished the project before the deadline.",
              "Yesterday the team will finish the project before the deadline."
            ],
            "correct": 2,
            "why": "Past tense: 'yesterday' requires the past form 'finished'."
          },
          {
            "passage": "We were waiting at the station, the train was very late.",
            "question": "Choose the best correction.",
            "options": [
              "We were waiting at the station, the train was very late.",
              "We were waiting at the station the train was very late.",
              "We were waiting at the station; the train was very late.",
              "We were waiting at the station, but the train, was very late."
            ],
            "correct": 2,
            "why": "A run-on of two independent clauses should be joined by a semicolon."
          },
          {
            "passage": "He moved to United States to continue a education in engineering.",
            "question": "Choose the best correction.",
            "options": [
              "He moved to United States to continue a education in engineering.",
              "He moved to the United States to continue an education in engineering.",
              "He moved to the United States to continue a education in engineering.",
              "He moved to United States to continue an education in engineering."
            ],
            "correct": 1,
            "why": "Articles: 'the United States' and 'an education' (vowel sound) are required."
          }
        ]
      }
    },
    "47": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Inbox: Dorm Life",
      "blurb": "Write practical campus emails that get results, the polite way.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to the dorm office reporting that the laundry machine on your floor is broken and asking when it will be fixed.",
            "scenario": "Three students depend on that single machine.",
            "checklist": [
              "Greets the dorm office staff",
              "Describes the problem clearly",
              "Explains why it matters",
              "Requests a timeline and closes politely"
            ],
            "minWords": 50,
            "tips": "State which floor or building so the staff can locate the machine."
          },
          {
            "prompt": "Write an email to your roommate asking them to keep noise down on weeknights because you have early morning exams.",
            "scenario": "You share a small room and want to stay on good terms.",
            "checklist": [
              "Greets the roommate warmly",
              "Explains your situation",
              "Makes a polite request",
              "Closes on a friendly note"
            ],
            "minWords": 50,
            "tips": "Frame it as a shared solution, not a complaint."
          },
          {
            "prompt": "Write an email to the dorm office requesting permission to switch rooms because your current room is too noisy for studying.",
            "scenario": "A room on a quieter floor has just become available.",
            "checklist": [
              "Greets the office",
              "States the request clearly",
              "Gives a specific reason",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention the available room to make approval easier."
          }
        ]
      }
    },
    "48": {
      "skill": "writing",
      "engine": "grammar-invaders",
      "title": "Grammar Invaders I",
      "blurb": "Shoot down the wrong sentences and defend correct writing.",
      "data": {
        "items": [
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "Neither the teacher nor the students was ready for the test.",
              "Neither the teacher nor the students were ready for the test.",
              "Neither the teacher or the students were ready for the test.",
              "Neither the teacher nor the students is ready for the test."
            ],
            "correct": 1,
            "why": "With 'neither...nor', the verb agrees with the nearer subject ('students', plural)."
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "The amount of people at the concert surprised everyone.",
              "The number of people at the concert surprised everyone.",
              "The number of people at the concert surprise everyone.",
              "The amount of people at the concert surprise everyone."
            ],
            "correct": 1,
            "why": "Use 'number of' for countable nouns, and 'number' is singular ('surprised')."
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "If I had studied harder, I would have passed the exam.",
              "If I would have studied harder, I would have passed the exam.",
              "If I had studied harder, I would passed the exam.",
              "If I studied harder, I would have passed the exam."
            ],
            "correct": 0,
            "why": "Third conditional: 'if + past perfect' pairs with 'would have + past participle'."
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "The data shows that the climate are changing rapidly.",
              "The data show that the climate is changing rapidly.",
              "The data shows that the climate is changing rapidly.",
              "The data showing that the climate is changing rapidly."
            ],
            "correct": 2,
            "why": "'Climate' is singular ('is changing'); 'data shows' is widely accepted here."
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "She has lived in this city since five years.",
              "She has lived in this city for five years.",
              "She is living in this city since five years.",
              "She lives in this city for five years."
            ],
            "correct": 1,
            "why": "Use 'for' with a length of time and present perfect for duration up to now."
          }
        ]
      }
    },
    "49": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Inbox: Joining In",
      "blurb": "Compose emails to clubs and groups that introduce yourself clearly.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to the president of the campus photography club asking how to join and when the next meeting is.",
            "scenario": "You saw a flyer but it had no contact details.",
            "checklist": [
              "Greets the club president",
              "Introduces yourself briefly",
              "Asks clear questions",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention what interests you about the club to show genuine motivation."
          },
          {
            "prompt": "Write an email to your professor requesting a letter of recommendation for a summer internship.",
            "scenario": "The application is due in three weeks.",
            "checklist": [
              "Greets the professor",
              "States the request clearly",
              "Gives context and the deadline",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Offer to send your resume to make writing the letter easier."
          },
          {
            "prompt": "Write an email to the student employer service asking about part-time job openings on campus.",
            "scenario": "You want a job that fits around your class schedule.",
            "checklist": [
              "Greets the staff",
              "Explains what you are looking for",
              "Asks a clear question",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "State your available hours so they can suggest a good match."
          }
        ]
      }
    },
    "50": {
      "skill": "writing",
      "engine": "sentence-builder",
      "title": "Sentence Scramble II",
      "blurb": "Assemble scrambled words into solid sentences for stronger writing.",
      "data": {
        "items": [
          {
            "answer": "The ancient city was buried under volcanic ash for centuries."
          },
          {
            "answer": "Scientists believe the universe is still expanding today."
          },
          {
            "answer": "Reading widely can greatly improve your vocabulary over time."
          },
          {
            "answer": "The museum displayed paintings from several different historical periods."
          },
          {
            "answer": "Solar panels convert sunlight into usable electrical energy efficiently."
          },
          {
            "answer": "Regular exercise helps the brain form new neural connections."
          }
        ]
      }
    },
    "51": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Inbox: Smoothing Things Over",
      "blurb": "Draft emails that explain, apologize, and request with confidence.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to your professor apologizing for missing a deadline and asking for a short extension.",
            "scenario": "A family emergency prevented you from finishing the assignment.",
            "checklist": [
              "Greets the professor",
              "Apologizes sincerely",
              "Explains the reason briefly",
              "Requests an extension and closes politely"
            ],
            "minWords": 50,
            "tips": "Propose a realistic new submission date."
          },
          {
            "prompt": "Write an email to your landlord requesting your security deposit back after moving out of the apartment.",
            "scenario": "You left the apartment clean and undamaged.",
            "checklist": [
              "Greets the landlord",
              "States the request clearly",
              "Provides relevant details",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention your forwarding address so the deposit can be returned."
          },
          {
            "prompt": "Write an email to your academic advisor asking for advice about which courses to take next semester for your major.",
            "scenario": "You are unsure which electives best fit your goals.",
            "checklist": [
              "Greets the advisor",
              "Explains your situation",
              "Asks a clear question",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention your career interest so the advice can be tailored."
          }
        ]
      }
    },
    "52": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Debate Hall I",
      "blurb": "Join the class discussion and defend your view in strong writing.",
      "data": {
        "tasks": [
          {
            "prompt": "Do you think universities should require all students to take at least one online course before graduating?",
            "professor": "Prof. Reyes:",
            "posts": [
              {
                "name": "Kate",
                "text": "Yes, online courses teach the self-discipline and tech skills students will need in modern workplaces."
              },
              {
                "name": "Paul",
                "text": "I disagree; many students learn better face to face, and online courses can feel isolating."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Acknowledge one classmate's point before adding your own fresh argument."
          },
          {
            "prompt": "Should cities invest more money in public transportation or in building more roads for cars?",
            "professor": "Prof. Okafor:",
            "posts": [
              {
                "name": "Maya",
                "text": "Public transportation reduces traffic and pollution, so cities should prioritize buses and trains."
              },
              {
                "name": "Liam",
                "text": "Roads still matter because many people live far from transit lines and depend on cars daily."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Support your stance with a concrete example from a real city if you can."
          }
        ]
      }
    },
    "53": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Inbox: Getting Information",
      "blurb": "Practice writing concise inquiry emails that ask the right questions.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to the university library asking whether they offer a private room that students can reserve for group study.",
            "scenario": "Your study group of four needs a quiet place to meet.",
            "checklist": [
              "Greets the library staff",
              "States your question clearly",
              "Gives relevant context",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention your group size and preferred times to get a useful reply."
          },
          {
            "prompt": "Write an email to your employer asking about the procedure for requesting a week of unpaid leave for personal reasons.",
            "scenario": "You work part-time and need time off next month.",
            "checklist": [
              "Greets the manager",
              "States the request clearly",
              "Asks about the procedure",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Give the dates you need off so the manager can plan ahead."
          },
          {
            "prompt": "Write an email to the chemistry club asking whether non-members may attend the upcoming guest lecture.",
            "scenario": "You are not a member but are very interested in the topic.",
            "checklist": [
              "Greets the club",
              "Introduces yourself briefly",
              "Asks a clear question",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Explain why the lecture interests you to make a good impression."
          }
        ]
      }
    },
    "54": {
      "skill": "writing",
      "engine": "sentence-surgeon",
      "title": "Grammar ER II",
      "blurb": "Diagnose and repair broken sentences to keep your writing healthy.",
      "data": {
        "items": [
          {
            "passage": "The list of ingredients are printed on the back of the box.",
            "question": "Choose the best correction.",
            "options": [
              "The list of ingredients are printed on the back of the box.",
              "The list of ingredients is printed on the back of the box.",
              "The list of ingredient is printed on the back of the box.",
              "The list of ingredients were printed on the back of the box."
            ],
            "correct": 1,
            "why": "Subject-verb agreement: the subject is 'list' (singular), so use 'is'."
          },
          {
            "passage": "They have been living here since three years and love the city.",
            "question": "Choose the best correction.",
            "options": [
              "They have been living here since three years and love the city.",
              "They have been living here for three years and love the city.",
              "They are living here since three years and love the city.",
              "They lived here for three years and love the city."
            ],
            "correct": 1,
            "why": "Prepositions of time: use 'for' with a duration, not 'since'."
          },
          {
            "passage": "I look forward to meet you at the conference next month.",
            "question": "Choose the best correction.",
            "options": [
              "I look forward to meet you at the conference next month.",
              "I look forward meeting you at the conference next month.",
              "I look forward to meeting you at the conference next month.",
              "I am looking forward to meet you at the conference next month."
            ],
            "correct": 2,
            "why": "In 'look forward to', 'to' is a preposition, so the gerund 'meeting' follows."
          },
          {
            "passage": "She didn't went to the meeting because she felt unwell.",
            "question": "Choose the best correction.",
            "options": [
              "She didn't went to the meeting because she felt unwell.",
              "She didn't go to the meeting because she felt unwell.",
              "She doesn't went to the meeting because she felt unwell.",
              "She didn't go to the meeting because she feel unwell."
            ],
            "correct": 1,
            "why": "After the auxiliary 'did', the main verb stays in its base form 'go'."
          },
          {
            "passage": "An university degree can open many doors in todays job market.",
            "question": "Choose the best correction.",
            "options": [
              "An university degree can open many doors in todays job market.",
              "A university degree can open many doors in today's job market.",
              "An university degree can open many doors in today's job market.",
              "A university degree can open many doors in todays job market."
            ],
            "correct": 1,
            "why": "Use 'a' before the 'yoo' sound in 'university' and the possessive 'today's'."
          }
        ]
      }
    },
    "55": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Inbox: Following Up",
      "blurb": "Write polite follow-up and thank-you emails that build relationships.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to your professor following up on a question you asked after class that they did not have time to answer.",
            "scenario": "The professor said to email them for a fuller explanation.",
            "checklist": [
              "Greets the professor",
              "Reminds them of the context",
              "Restates the question clearly",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Keep the reminder brief; professors read many emails."
          },
          {
            "prompt": "Write an email to your landlord confirming the date and time of an apartment inspection they proposed.",
            "scenario": "The landlord suggested two possible dates.",
            "checklist": [
              "Greets the landlord",
              "Confirms a specific date and time",
              "Asks any needed questions",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Clearly pick one of the offered dates to avoid confusion."
          },
          {
            "prompt": "Write an email to your employer thanking them for the opportunity to lead a project and asking for feedback on your performance.",
            "scenario": "The project recently finished successfully.",
            "checklist": [
              "Greets the manager",
              "Expresses thanks sincerely",
              "Requests specific feedback",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Ask about one or two specific areas to get useful feedback."
          }
        ]
      }
    },
    "56": {
      "skill": "writing",
      "engine": "sentence-builder",
      "title": "Sentence Scramble III",
      "blurb": "Piece scrambled fragments into clear sentences and level up writing.",
      "data": {
        "items": [
          {
            "answer": "The economy slowly recovered after the long recession ended."
          },
          {
            "answer": "Bees play a vital role in pollinating many food crops."
          },
          {
            "answer": "The author revised the novel several times before publishing it."
          },
          {
            "answer": "Glaciers around the world are melting at an alarming rate."
          },
          {
            "answer": "A balanced diet supports both physical and mental health."
          },
          {
            "answer": "The orchestra performed the symphony to a packed concert hall."
          }
        ]
      }
    },
    "57": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Daily Choices",
      "blurb": "Sharpen your speaking by answering opinion questions on the clock.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Do you prefer studying in the morning or at night? Explain why.",
          "Some people like to plan their days carefully, while others prefer to be spontaneous. Which do you prefer, and why?",
          "What is one habit you would like to change about yourself? Explain.",
          "Is it better to live in a big city or a small town? Give reasons for your answer."
        ]
      }
    },
    "58": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Campus Conversations",
      "blurb": "Build speaking fluency by repeating natural spoken sentences aloud.",
      "data": {
        "items": [
          "I think the library closes at midnight on weekdays.",
          "Could you help me find the registration office, please?",
          "The professor moved our exam to the following Monday.",
          "Let's grab some coffee before the lecture starts.",
          "I really enjoyed the guest speaker's talk last night.",
          "We should sign up for the science fair this semester."
        ]
      }
    },
    "59": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Learning & School",
      "blurb": "Speak under pressure on familiar education topics.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a teacher who influenced you and explain why.",
          "Do you think students learn better in groups or alone? Why?",
          "Should schools require students to wear uniforms? Explain your opinion.",
          "What subject do you wish you had studied more, and why?"
        ]
      }
    },
    "60": {
      "skill": "listening",
      "engine": "listening-quiz",
      "title": "Listening Quiz: Short Lectures",
      "blurb": "Test your listening by answering questions on spoken mini-lectures.",
      "data": {
        "items": [
          {
            "passage": "Good morning, class. Today we'll discuss how honeybees communicate. When a bee finds food, it returns to the hive and performs a movement called the waggle dance, which tells other bees the direction and distance of the food source.",
            "question": "What is the main purpose of the waggle dance?",
            "options": [
              "To attract a mate",
              "To share the location of food",
              "To warn of predators",
              "To cool the hive"
            ],
            "correct": 1,
            "why": "The lecture states the dance tells other bees the direction and distance of food.",
            "audio": true
          },
          {
            "passage": "Attention, students. The campus shuttle schedule will change starting next week. Due to road construction, the morning route will skip the East Gate stop, and buses will run every twenty minutes instead of every fifteen.",
            "question": "Why is the shuttle schedule changing?",
            "options": [
              "A driver shortage",
              "Road construction",
              "Low ridership",
              "A holiday"
            ],
            "correct": 1,
            "why": "The announcement attributes the change to road construction.",
            "audio": true
          },
          {
            "passage": "In today's session we look at volcanoes. A shield volcano forms from runny lava that flows easily, creating wide, gently sloping sides. This contrasts with steep, cone-shaped volcanoes built from thick, sticky lava.",
            "question": "What gives a shield volcano its wide, gentle slopes?",
            "options": [
              "Thick, sticky lava",
              "Frequent earthquakes",
              "Runny lava that flows easily",
              "Heavy rainfall"
            ],
            "correct": 2,
            "why": "The lecture says runny lava flows easily, producing wide gentle sides.",
            "audio": true
          },
          {
            "passage": "Hi there. I wanted to remind everyone that the deadline for the research proposal is Friday. If you need an extension, email me before Thursday noon, and please attach your outline so I can review it in advance.",
            "question": "What must students do to request an extension?",
            "options": [
              "Visit during office hours",
              "Email before Thursday noon with an outline",
              "Submit a paper form",
              "Call the department"
            ],
            "correct": 1,
            "why": "The speaker asks students to email before Thursday noon and attach the outline.",
            "audio": true
          },
          {
            "passage": "Let's turn to economics. When demand for a product rises but supply stays the same, prices tend to increase. Sellers notice the shortage and raise prices, which is a basic example of supply and demand at work.",
            "question": "According to the lecture, what happens when demand rises and supply is unchanged?",
            "options": [
              "Prices fall",
              "Prices tend to rise",
              "Supply automatically increases",
              "Demand disappears"
            ],
            "correct": 1,
            "why": "The lecture explains rising demand with fixed supply pushes prices up.",
            "audio": true
          }
        ]
      }
    },
    "61": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Technology & Life",
      "blurb": "Voice your opinions quickly on modern technology questions.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Do you think smartphones make people more or less connected? Explain.",
          "What is one piece of technology you could not live without, and why?",
          "Some people read books on screens, others prefer paper. Which do you prefer, and why?",
          "Should children be allowed to use social media? Give your opinion."
        ]
      }
    },
    "62": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Everyday Errands",
      "blurb": "Practice speaking rhythm by echoing practical, natural sentences.",
      "data": {
        "items": [
          "I need to return these books before the weekend.",
          "Would you mind opening the window for some fresh air?",
          "The bus was late, so I missed my first class.",
          "Let's meet at the cafe across from the gym.",
          "Don't forget to bring your student card tomorrow.",
          "I'm planning to visit my grandparents next month."
        ]
      }
    },
    "63": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Society & Choices",
      "blurb": "Defend your views on everyday social questions against the clock.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Is it more important to be honest or to be kind? Explain.",
          "Do you think money can buy happiness? Why or why not?",
          "Should people volunteer in their community? Give your reasons.",
          "What is the most useful skill a young person can learn today, and why?"
        ]
      }
    },
    "64": {
      "skill": "reading",
      "engine": "vocab-dungeon",
      "title": "Vocab Dungeon: Words in Context",
      "blurb": "Decode tricky vocabulary by reading words in real academic context.",
      "data": {
        "items": [
          {
            "passage": "The bridge began to sway dangerously in the high winds, and engineers feared it might give way entirely.",
            "question": "In this context, 'give way' most nearly means to ___.",
            "options": [
              "collapse",
              "expand",
              "shine",
              "vibrate quietly"
            ],
            "correct": 0,
            "why": "Fearing the swaying bridge might 'give way entirely' means it might collapse."
          },
          {
            "passage": "Although the two scientists worked separately, their conclusions happened to coincide perfectly.",
            "question": "The word 'coincide' here means the conclusions ___.",
            "options": [
              "contradicted each other",
              "occurred at the same point",
              "were ignored",
              "were rejected"
            ],
            "correct": 1,
            "why": "To 'coincide' is to align or occur at the same point, fitting 'perfectly' matching results."
          },
          {
            "passage": "The new printer is not compatible with our older computers, so files will not transfer.",
            "question": "'Compatible' most nearly means ___.",
            "options": [
              "expensive",
              "able to work together",
              "fragile",
              "outdated"
            ],
            "correct": 1,
            "why": "If the printer is not compatible, it cannot work together with the old computers."
          },
          {
            "passage": "Drivers must comply with the new speed limits or face a fine.",
            "question": "To 'comply with' the limits means to ___.",
            "options": [
              "ignore them",
              "obey them",
              "question them",
              "create them"
            ],
            "correct": 1,
            "why": "Comply means to obey or follow rules, especially to avoid a penalty."
          },
          {
            "passage": "The committee chose to commence the project in spring, after the budget was approved.",
            "question": "'Commence' most nearly means ___.",
            "options": [
              "finish",
              "delay forever",
              "begin",
              "cancel"
            ],
            "correct": 2,
            "why": "To commence is to begin or start something."
          }
        ]
      }
    },
    "65": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Travel & Experience",
      "blurb": "Talk about experiences and goals while the timer runs.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a place you would like to visit and explain why.",
          "Do you prefer traveling alone or with friends? Why?",
          "What is the most memorable trip you have ever taken? Describe it.",
          "Is it better to plan a trip in detail or to travel without a plan? Explain."
        ]
      }
    },
    "66": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Group Projects",
      "blurb": "Strengthen your spoken delivery by repeating teamwork phrases.",
      "data": {
        "items": [
          "Let's divide the tasks so everyone has a fair share.",
          "Can we schedule a meeting for Thursday afternoon?",
          "I'll handle the introduction if you write the conclusion.",
          "We should double-check the sources before we submit.",
          "Thanks for finishing your part so quickly this week.",
          "Could you send me the slides by tonight, please?"
        ]
      }
    },
    "67": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Work & Goals",
      "blurb": "Speak fluently about ambitions and the working world.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Would you rather have a job you love with low pay or a job you dislike with high pay? Explain.",
          "Do you think it is better to work for a large company or a small one? Why?",
          "What career would you choose if money were not a concern, and why?",
          "Is teamwork or independent work more important for success? Explain."
        ]
      }
    },
    "68": {
      "skill": "listening",
      "engine": "listening-quiz",
      "title": "Listening Quiz: Talks & Announcements",
      "blurb": "Listen carefully and answer questions on spoken passages.",
      "data": {
        "items": [
          {
            "passage": "Welcome to the museum. Photography is allowed in most galleries, but flash is strictly prohibited because it can damage delicate paintings. Please keep your camera flash turned off throughout your visit.",
            "question": "What does the speaker ask visitors to avoid?",
            "options": [
              "Taking any photos",
              "Using flash",
              "Touching the walls",
              "Speaking loudly"
            ],
            "correct": 1,
            "why": "The speaker says flash is prohibited because it can damage paintings.",
            "audio": true
          },
          {
            "passage": "In biology today, we examine camouflage. Some insects resemble leaves or twigs so closely that predators overlook them. This protective resemblance increases the insect's chances of surviving long enough to reproduce.",
            "question": "How does camouflage help these insects?",
            "options": [
              "It makes them faster",
              "It helps them avoid being seen by predators",
              "It attracts more food",
              "It keeps them warm"
            ],
            "correct": 1,
            "why": "The lecture says resembling leaves makes predators overlook them, aiding survival.",
            "audio": true
          },
          {
            "passage": "Reminder for residents: the laundry room on the second floor will be closed for repairs all of next week. Please use the machines in the basement instead. We apologize for any inconvenience.",
            "question": "Why will the second-floor laundry room be closed?",
            "options": [
              "For cleaning",
              "For repairs",
              "For a private event",
              "For inspection"
            ],
            "correct": 1,
            "why": "The announcement states the room will be closed for repairs.",
            "audio": true
          },
          {
            "passage": "Today's history lecture covers the printing press. Before its invention, books were copied by hand, which was slow and costly. The press allowed identical books to be produced rapidly, spreading ideas far more widely.",
            "question": "What was one major effect of the printing press?",
            "options": [
              "Books became rarer",
              "Ideas spread more widely",
              "Handwriting improved",
              "Reading declined"
            ],
            "correct": 1,
            "why": "The lecture says the press spread ideas far more widely by producing books rapidly.",
            "audio": true
          },
          {
            "passage": "Hello, runners. Because of the heavy rain forecast, tomorrow's charity race has been moved to Sunday. Your registration remains valid, and the starting time stays the same at nine in the morning.",
            "question": "What change is being announced?",
            "options": [
              "The race is canceled",
              "The race is moved to Sunday",
              "The start time is later",
              "Registration must be redone"
            ],
            "correct": 1,
            "why": "The speaker says the race is moved to Sunday due to rain, with the same start time.",
            "audio": true
          }
        ]
      }
    },
    "69": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: Self & Reflection",
      "blurb": "Answer reflective opinion prompts smoothly within the time limit.",
      "data": {
        "seconds": 45,
        "prompts": [
          "What quality do you most admire in other people, and why?",
          "Do you think it is better to be a leader or a follower? Explain.",
          "What is one goal you hope to achieve in the next five years?",
          "How do you usually deal with stress? Describe your approach."
        ]
      }
    },
    "70": {
      "skill": "reading",
      "engine": "synonym-snake",
      "title": "Synonym Snake: C-Word Roundup",
      "blurb": "Grow your reading vocabulary by matching academic words to meanings.",
      "data": {
        "items": [
          {
            "word": "coincide",
            "correct": "occur at the same time",
            "options": [
              "occur at the same time",
              "fall apart suddenly",
              "argue strongly",
              "travel abroad"
            ]
          },
          {
            "word": "collapse",
            "correct": "fall down or fail suddenly",
            "options": [
              "fall down or fail suddenly",
              "agree fully",
              "begin a task",
              "limit closely"
            ]
          },
          {
            "word": "commence",
            "correct": "begin",
            "options": [
              "begin",
              "end abruptly",
              "doubt deeply",
              "repay money"
            ]
          },
          {
            "word": "compatible",
            "correct": "able to exist or work together",
            "options": [
              "able to exist or work together",
              "highly visible",
              "easily broken",
              "extremely rare"
            ]
          },
          {
            "word": "compel",
            "correct": "force someone to do something",
            "options": [
              "force someone to do something",
              "imagine an idea",
              "obey a rule",
              "happen by chance"
            ]
          },
          {
            "word": "compensate",
            "correct": "make up for or repay",
            "options": [
              "make up for or repay",
              "begin a journey",
              "agree completely",
              "stand out clearly"
            ]
          },
          {
            "word": "comply",
            "correct": "obey or act in accordance with",
            "options": [
              "obey or act in accordance with",
              "fall down",
              "force by pressure",
              "occur together"
            ]
          },
          {
            "word": "conspicuous",
            "correct": "easily seen or noticeable",
            "options": [
              "easily seen or noticeable",
              "kept within limits",
              "matching well",
              "started early"
            ]
          }
        ]
      }
    },
    "71": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "The Online Classroom",
      "blurb": "Sharpen your writing by joining a lively academic debate.",
      "data": {
        "tasks": [
          {
            "prompt": "Should universities replace large in-person lectures with recorded online videos that students watch at their own pace?",
            "professor": "Prof. Alvarez:",
            "posts": [
              {
                "name": "Kate",
                "text": "Recorded lectures let me pause and rewatch hard parts, so I learn more than I do sitting in a crowded hall."
              },
              {
                "name": "Paul",
                "text": "But I lose focus watching alone. The energy of a live room keeps me engaged and lets me ask questions instantly."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Pick one side firmly before you write your first sentence."
          },
          {
            "prompt": "Is it more valuable for students to study a wide range of subjects or to specialize deeply in one field early?",
            "professor": "Prof. Alvarez:",
            "posts": [
              {
                "name": "Maya",
                "text": "Broad study builds flexible thinkers who can connect ideas across disciplines and adapt to new careers."
              },
              {
                "name": "Devon",
                "text": "Early specialization produces real experts. Spreading yourself thin just delays the deep skill employers actually want."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Acknowledge the other view in one sentence, then argue your own."
          }
        ]
      }
    },
    "72": {
      "skill": "writing",
      "engine": "sentence-builder",
      "title": "Build the Argument",
      "blurb": "Strengthen your writing by reordering words into clean academic sentences.",
      "data": {
        "items": [
          {
            "answer": "Renewable energy could reduce our dependence on fossil fuels."
          },
          {
            "answer": "The researchers analyzed data from twenty different countries."
          },
          {
            "answer": "Critics argue that the policy harms small local businesses."
          },
          {
            "answer": "Students who manage their time perform far better academically."
          },
          {
            "answer": "Several historians question whether the documents are authentic."
          },
          {
            "answer": "Regular exercise improves both memory and emotional well-being."
          }
        ]
      }
    },
    "73": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Screens and Childhood",
      "blurb": "Build a persuasive case in writing about technology and young minds.",
      "data": {
        "tasks": [
          {
            "prompt": "Should children under the age of twelve be allowed to own personal smartphones?",
            "professor": "Prof. Nguyen:",
            "posts": [
              {
                "name": "Sara",
                "text": "A phone keeps kids safe by letting parents reach them anywhere, which matters in emergencies."
              },
              {
                "name": "Tom",
                "text": "Constant screen access at that age damages attention spans and steals time from real play and friendships."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "A specific personal or observed example makes your point convincing."
          },
          {
            "prompt": "Does social media do more to connect people or to isolate them?",
            "professor": "Prof. Nguyen:",
            "posts": [
              {
                "name": "Lena",
                "text": "It connects us. I keep in touch with relatives overseas and find communities I could never reach locally."
              },
              {
                "name": "Marcus",
                "text": "It isolates us. People scroll instead of talking face to face, and online comparison fuels loneliness."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Use a transition word like 'moreover' to add a second reason."
          }
        ]
      }
    },
    "74": {
      "skill": "writing",
      "engine": "grammar-invaders",
      "title": "Grammar Defense",
      "blurb": "Defend your writing accuracy by shooting down grammatically broken sentences.",
      "data": {
        "items": [
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "Each of the students have submitted their essay on time.",
              "Each of the students has submitted their essay on time.",
              "Each of the students have submitted his essay on time.",
              "Each of the student has submitted their essay on time."
            ],
            "correct": 1,
            "why": "'Each' is singular and takes 'has'; 'students' must stay plural after 'of the'."
          },
          {
            "passage": "",
            "question": "Which sentence uses the correct verb tense?",
            "options": [
              "By the time the lecture ended, most students already left.",
              "By the time the lecture ended, most students have already left.",
              "By the time the lecture ended, most students had already left.",
              "By the time the lecture ends, most students had already left."
            ],
            "correct": 2,
            "why": "The past perfect 'had left' shows the leaving happened before the past 'ended'."
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "The data suggests that the experiment were successful.",
              "The data suggest that the experiment was successful.",
              "The data suggests that the experiment was success.",
              "The data suggest that the experiment were successful."
            ],
            "correct": 1,
            "why": "'Data' takes the plural 'suggest' in formal academic usage, and 'experiment was successful' is correct."
          },
          {
            "passage": "",
            "question": "Which sentence has correct parallel structure?",
            "options": [
              "The course teaches reading, writing, and how to speak clearly.",
              "The course teaches reading, to write, and speaking clearly.",
              "The course teaches reading, writing, and speaking clearly.",
              "The course teaches to read, writing, and speaking clearly."
            ],
            "correct": 2,
            "why": "All three items in the list should share the same '-ing' gerund form."
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "Although the theory is popular, but it lacks solid evidence.",
              "Although the theory is popular, it lacks solid evidence.",
              "Although the theory is popular, however it lacks solid evidence.",
              "The theory is popular, although it lacks solid evidence, but."
            ],
            "correct": 1,
            "why": "'Although' already signals contrast, so adding 'but' or 'however' is redundant."
          }
        ]
      }
    },
    "75": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Cities of Tomorrow",
      "blurb": "Practice writing a focused opinion on the future of urban living.",
      "data": {
        "tasks": [
          {
            "prompt": "Should city governments ban private cars from downtown areas to reduce pollution and congestion?",
            "professor": "Prof. Okafor:",
            "posts": [
              {
                "name": "Hana",
                "text": "A car-free downtown means cleaner air and safer streets where people can walk and cycle freely."
              },
              {
                "name": "Eli",
                "text": "Banning cars punishes workers and the disabled who depend on them, especially where transit is unreliable."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Think about who is affected, not only the environment."
          },
          {
            "prompt": "Is it better for a growing city to build upward with tall apartment towers or outward with low suburban housing?",
            "professor": "Prof. Okafor:",
            "posts": [
              {
                "name": "Priya",
                "text": "Building upward saves green space and shortens commutes by keeping people near jobs and transit."
              },
              {
                "name": "Noah",
                "text": "Spreading outward gives families gardens and quiet, which crowded towers can never offer."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Name a real or imagined city to ground your example."
          }
        ]
      }
    },
    "76": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Inbox Diplomacy",
      "blurb": "Polish your writing by composing clear, polite real-world emails.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to your professor explaining that you must miss next week's exam due to a medical appointment, and ask about a make-up option.",
            "scenario": "You have a scheduled surgery that conflicts with the final exam.",
            "checklist": [
              "Greets the recipient",
              "States the purpose clearly",
              "Gives a specific reason",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Offer a solution, such as proposing an alternate date."
          },
          {
            "prompt": "Write an email to your landlord reporting that the heating in your apartment has stopped working and requesting a repair.",
            "scenario": "It is winter and the apartment is cold.",
            "checklist": [
              "Greets the recipient",
              "States the purpose clearly",
              "Gives a specific reason",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention when the problem started and how it affects you."
          },
          {
            "prompt": "Write an email to a classmate asking to borrow their lecture notes from a class you missed, and offer to return the favor.",
            "scenario": "You were sick and absent on Thursday.",
            "checklist": [
              "Greets the recipient",
              "States the purpose clearly",
              "Gives a specific reason",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "A friendly tone works well with a peer, but stay clear."
          }
        ]
      }
    },
    "77": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "The Price of Progress",
      "blurb": "Argue an economics question in writing with evidence and balance.",
      "data": {
        "tasks": [
          {
            "prompt": "Should governments raise the minimum wage even if it might lead some businesses to hire fewer workers?",
            "professor": "Prof. Bauer:",
            "posts": [
              {
                "name": "Rosa",
                "text": "A higher minimum wage lifts families out of poverty and lets them spend more, which helps the economy grow."
              },
              {
                "name": "Jack",
                "text": "If labor costs rise too fast, small shops cut jobs or close, hurting the very workers we want to protect."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Consider both workers and employers in your reasoning."
          },
          {
            "prompt": "Is free trade between countries generally good for ordinary people, or does it cost too many local jobs?",
            "professor": "Prof. Bauer:",
            "posts": [
              {
                "name": "Amara",
                "text": "Free trade lowers prices on everyday goods and gives consumers far more choice."
              },
              {
                "name": "Liam",
                "text": "It also moves factories abroad, leaving whole towns without the jobs that once supported them."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "A concrete cause-and-effect chain strengthens economic arguments."
          }
        ]
      }
    },
    "78": {
      "skill": "writing",
      "engine": "sentence-surgeon",
      "title": "Sentence Surgery",
      "blurb": "Operate on flawed sentences to make your writing precise and correct.",
      "data": {
        "items": [
          {
            "passage": "Walking through the museum, the paintings amazed her.",
            "question": "Choose the best correction.",
            "options": [
              "Walking through the museum, the paintings amazed her.",
              "Walking through the museum, she was amazed by the paintings.",
              "The paintings amazed her, walking through the museum.",
              "Walking through the museum amazed the paintings to her."
            ],
            "correct": 1,
            "why": "The introductory phrase must modify the person walking, not the paintings (a dangling modifier)."
          },
          {
            "passage": "The report was thorough, it lacked a clear conclusion.",
            "question": "Choose the best correction.",
            "options": [
              "The report was thorough, it lacked a clear conclusion.",
              "The report was thorough it lacked a clear conclusion.",
              "The report was thorough, but it lacked a clear conclusion.",
              "The report was thorough, however it lacked a clear conclusion."
            ],
            "correct": 2,
            "why": "A comma alone creates a run-on; a coordinating conjunction like 'but' joins the two clauses correctly."
          },
          {
            "passage": "Neither the teacher nor the students was prepared for the change.",
            "question": "Choose the best correction.",
            "options": [
              "Neither the teacher nor the students was prepared for the change.",
              "Neither the teacher nor the students were prepared for the change.",
              "Neither the teacher or the students were prepared for the change.",
              "Neither the teacher nor the students is prepared for the change."
            ],
            "correct": 1,
            "why": "With 'neither/nor', the verb agrees with the nearer subject 'students', which is plural."
          },
          {
            "passage": "The committee will review the proposal and they will vote tomorrow.",
            "question": "Choose the best correction.",
            "options": [
              "The committee will review the proposal and they will vote tomorrow.",
              "The committee will review the proposal and it will vote tomorrow.",
              "The committee will review the proposal and vote tomorrow.",
              "The committee will review the proposal, they will vote tomorrow."
            ],
            "correct": 2,
            "why": "Dropping the redundant pronoun keeps the sentence concise and the subject consistent."
          },
          {
            "passage": "Their going to present there findings at the conference.",
            "question": "Choose the best correction.",
            "options": [
              "Their going to present there findings at the conference.",
              "They're going to present their findings at the conference.",
              "There going to present their findings at the conference.",
              "They're going to present there findings at the conference."
            ],
            "correct": 1,
            "why": "'They're' means 'they are' and 'their' shows possession of the findings."
          }
        ]
      }
    },
    "79": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Wild Spaces",
      "blurb": "Write a reasoned environmental opinion that adds a fresh angle.",
      "data": {
        "tasks": [
          {
            "prompt": "Should developed nations pay developing nations to protect their rainforests instead of clearing them for farmland?",
            "professor": "Prof. Castellano:",
            "posts": [
              {
                "name": "Ines",
                "text": "Rich nations caused most past emissions, so paying to save forests is a fair way to share the burden."
              },
              {
                "name": "Owen",
                "text": "Such payments can become charity that ignores local needs; communities deserve to develop their own land."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Bring in a reason neither classmate raised, like biodiversity."
          },
          {
            "prompt": "Is it the responsibility of individuals or of governments to solve the problem of plastic waste?",
            "professor": "Prof. Castellano:",
            "posts": [
              {
                "name": "Bella",
                "text": "Individuals must change daily habits; recycling and reusable bags start with personal choices."
              },
              {
                "name": "Carlos",
                "text": "Governments hold real power through bans and producer rules; expecting individuals to fix it is unrealistic."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "You may argue both share responsibility if you justify it clearly."
          }
        ]
      }
    },
    "80": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "The Working Life",
      "blurb": "Compose a clear stance on how and where modern work should happen.",
      "data": {
        "tasks": [
          {
            "prompt": "Should companies allow employees to work from home permanently rather than returning to the office?",
            "professor": "Prof. Reyes:",
            "posts": [
              {
                "name": "Nadia",
                "text": "Remote work cuts commuting time and lets people focus, often raising productivity and well-being."
              },
              {
                "name": "Greg",
                "text": "Offices build teamwork and mentorship that video calls can't match, especially for new employees."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Consider both employee preference and company needs."
          },
          {
            "prompt": "Is it better to choose a career based on passion or on financial security?",
            "professor": "Prof. Reyes:",
            "posts": [
              {
                "name": "Tara",
                "text": "Following your passion keeps you motivated for decades; money alone can't sustain a long career."
              },
              {
                "name": "Sam",
                "text": "Financial security comes first. Passion fades when you can't pay rent or support a family."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "A short story about someone's career choice can illustrate your point."
          }
        ]
      }
    },
    "81": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Truth in the Feed",
      "blurb": "Argue a media-literacy question in clear, well-supported writing.",
      "data": {
        "tasks": [
          {
            "prompt": "Should social media platforms be held legally responsible for false information that users post?",
            "professor": "Prof. Lindqvist:",
            "posts": [
              {
                "name": "Yara",
                "text": "Platforms profit from engagement, so they should bear responsibility for the harmful lies they spread."
              },
              {
                "name": "Dmitri",
                "text": "Holding platforms liable would push them to censor heavily, silencing legitimate speech out of fear."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Weigh free expression against public harm in your answer."
          },
          {
            "prompt": "Do news outlets have a duty to report only verified facts, even if that means publishing stories more slowly than competitors?",
            "professor": "Prof. Lindqvist:",
            "posts": [
              {
                "name": "Mira",
                "text": "Accuracy must come first; a single false headline can spread panic and ruin reputations."
              },
              {
                "name": "Felix",
                "text": "In a fast world, slow reporting means the public stays uninformed while rumors fill the gap."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Cite the consequence of getting it wrong versus getting it late."
          }
        ]
      }
    },
    "82": {
      "skill": "writing",
      "engine": "sentence-builder",
      "title": "Rebuild the Thesis",
      "blurb": "Reinforce your writing fluency by assembling strong academic claims.",
      "data": {
        "items": [
          {
            "answer": "The author presents convincing evidence for her main claim."
          },
          {
            "answer": "Many ancient civilizations developed remarkably accurate calendars."
          },
          {
            "answer": "Technology has transformed the way we share information today."
          },
          {
            "answer": "The professor encouraged students to question their assumptions."
          },
          {
            "answer": "Climate change threatens coastal cities around the world."
          },
          {
            "answer": "Effective leaders listen carefully before making important decisions."
          }
        ]
      }
    },
    "83": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Lines We Draw",
      "blurb": "Take a defensible ethical position and back it in writing.",
      "data": {
        "tasks": [
          {
            "prompt": "Is it ever acceptable to break a rule or law if you believe it is unjust?",
            "professor": "Prof. Adeyemi:",
            "posts": [
              {
                "name": "Wei",
                "text": "History shows that civil disobedience, like peaceful protest, can end deeply unjust laws."
              },
              {
                "name": "Clara",
                "text": "If everyone broke rules they disliked, society would collapse; we should change laws through legal means."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "A historical example can make an ethical argument powerful."
          },
          {
            "prompt": "Should scientists be allowed to use animals in medical research if it could save human lives?",
            "professor": "Prof. Adeyemi:",
            "posts": [
              {
                "name": "Jonas",
                "text": "Animal testing has produced vaccines and treatments that saved millions; the benefit can justify it."
              },
              {
                "name": "Priscilla",
                "text": "Causing suffering to animals is wrong, and modern alternatives like cell models reduce the need for it."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Distinguish between necessary research and avoidable harm."
          }
        ]
      }
    },
    "84": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Living Together",
      "blurb": "Defend a view on how communities and society should function.",
      "data": {
        "tasks": [
          {
            "prompt": "Should volunteering in the community be a required part of every high school education?",
            "professor": "Prof. Hoffmann:",
            "posts": [
              {
                "name": "Zoe",
                "text": "Required service teaches empathy and connects young people to needs they would otherwise never see."
              },
              {
                "name": "Ravi",
                "text": "Forced volunteering isn't real generosity; making it mandatory turns a good act into another chore."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Decide whether the benefit outweighs the loss of free choice."
          },
          {
            "prompt": "Is a diverse society, where many cultures live side by side, stronger than a society with a single shared culture?",
            "professor": "Prof. Hoffmann:",
            "posts": [
              {
                "name": "Amina",
                "text": "Diversity brings new ideas, foods, and perspectives that make a society more creative and resilient."
              },
              {
                "name": "Lars",
                "text": "A shared culture builds trust and unity; too much difference can leave people feeling divided."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Define what makes a society 'strong' before you argue."
          }
        ]
      }
    },
    "85": {
      "skill": "reading",
      "engine": "vocab-dungeon",
      "title": "Vocab Dungeon: Module 1 Gate",
      "blurb": "Battle through reading puzzles that test the academic words and skills you have mastered.",
      "data": {
        "items": [
          {
            "passage": "The committee decided to curtail the program after funding fell short.",
            "question": "In this sentence, \"curtail\" most nearly means:",
            "options": [
              "expand",
              "cut back",
              "celebrate",
              "postpone"
            ],
            "correct": 1,
            "why": "To curtail something is to reduce or cut it back, which fits the loss of funding."
          },
          {
            "passage": "",
            "question": "Which word means \"to make a problem worse\"?",
            "options": [
              "alleviate",
              "exacerbate",
              "resolve",
              "ignore"
            ],
            "correct": 1,
            "why": "\"Exacerbate\" specifically means to intensify or worsen a problem."
          },
          {
            "passage": "Her argument was eloquent, persuading even the skeptics in the room.",
            "question": "The word \"eloquent\" suggests the argument was:",
            "options": [
              "confusing",
              "fluent and convincing",
              "brief",
              "dishonest"
            ],
            "correct": 1,
            "why": "Eloquent describes fluent, expressive, and persuasive speech, matching the persuasion of skeptics."
          },
          {
            "passage": "",
            "question": "Choose the best synonym for \"diverge\".",
            "options": [
              "to come together",
              "to branch apart",
              "to repeat exactly",
              "to remain fixed"
            ],
            "correct": 1,
            "why": "To diverge is to separate or branch in different directions."
          },
          {
            "passage": "The new evidence cast a dubious light on the original findings.",
            "question": "\"Dubious\" in this context means:",
            "options": [
              "certain",
              "doubtful",
              "brilliant",
              "official"
            ],
            "correct": 1,
            "why": "Dubious means doubtful or open to question, signaling uncertainty about the findings."
          }
        ]
      }
    },
    "86": {
      "skill": "listening",
      "engine": "listening-quiz",
      "title": "Listening Quiz: Lecture Lab",
      "blurb": "Train your listening by answering questions about short spoken lectures and announcements.",
      "data": {
        "items": [
          {
            "passage": "Good morning. Today's seminar on marine biology has been moved from Room 12 to the larger auditorium on the second floor. Please bring your lab notebooks, as we will sketch the specimens.",
            "audio": true,
            "question": "Why was the room changed?",
            "options": [
              "The original room was being painted",
              "A larger space was needed",
              "The professor was ill",
              "The class was cancelled"
            ],
            "correct": 1,
            "why": "The speaker moved the seminar to a larger auditorium, implying more space was needed."
          },
          {
            "passage": "In economics, opportunity cost refers to the value of the next best alternative you give up when making a choice. If you spend an hour studying, the opportunity cost might be the hour you could have worked for pay.",
            "audio": true,
            "question": "What is opportunity cost?",
            "options": [
              "The money spent on a purchase",
              "The value of the best forgone alternative",
              "The total cost of all options",
              "A tax on goods"
            ],
            "correct": 1,
            "why": "The lecture defines opportunity cost as the value of the next best alternative given up."
          },
          {
            "passage": "Attention, students. The library will close two hours early this Friday for system maintenance. All borrowed materials due that day may be returned the following Monday without penalty.",
            "audio": true,
            "question": "What should students do about items due Friday?",
            "options": [
              "Return them immediately",
              "Pay a small fine",
              "Return them Monday with no penalty",
              "Renew them online only"
            ],
            "correct": 2,
            "why": "The announcement states items due Friday may be returned Monday without penalty."
          },
          {
            "passage": "Photosynthesis converts light energy into chemical energy stored in glucose. The process occurs mainly in the chloroplasts of plant cells and releases oxygen as a byproduct.",
            "audio": true,
            "question": "What byproduct does photosynthesis release?",
            "options": [
              "Carbon dioxide",
              "Glucose",
              "Nitrogen",
              "Oxygen"
            ],
            "correct": 3,
            "why": "The speaker explicitly states oxygen is released as a byproduct."
          },
          {
            "passage": "Hi, this is the campus housing office returning your call. Your maintenance request for the leaking faucet has been scheduled for Wednesday afternoon. Please make sure someone can grant access to the apartment.",
            "audio": true,
            "question": "What is the purpose of the message?",
            "options": [
              "To deny a request",
              "To confirm a repair appointment",
              "To raise the rent",
              "To report a complaint"
            ],
            "correct": 1,
            "why": "The caller confirms the maintenance request has been scheduled for Wednesday."
          }
        ]
      }
    },
    "87": {
      "skill": "reading",
      "engine": "word-tower-3d",
      "title": "Word Tower 3D: Con- Climb",
      "blurb": "Build your reading vocabulary by stacking eight academic words onto their correct meanings.",
      "data": {
        "items": [
          {
            "word": "constrain",
            "correct": "to limit or restrict",
            "options": [
              "to limit or restrict",
              "to enlarge freely",
              "to celebrate openly",
              "to repeat often"
            ]
          },
          {
            "word": "contemplate",
            "correct": "to think about carefully",
            "options": [
              "to forget instantly",
              "to think about carefully",
              "to destroy quickly",
              "to shout loudly"
            ]
          },
          {
            "word": "contemporary",
            "correct": "belonging to the present time",
            "options": [
              "belonging to the present time",
              "very ancient",
              "completely fictional",
              "strictly secret"
            ]
          },
          {
            "word": "contingent",
            "correct": "dependent on certain conditions",
            "options": [
              "fixed and certain",
              "dependent on certain conditions",
              "openly hostile",
              "easily broken"
            ]
          },
          {
            "word": "conventional",
            "correct": "following accepted customs or norms",
            "options": [
              "highly unusual",
              "following accepted customs or norms",
              "entirely random",
              "deeply hidden"
            ]
          },
          {
            "word": "convey",
            "correct": "to communicate or transport",
            "options": [
              "to conceal",
              "to communicate or transport",
              "to abandon",
              "to measure"
            ]
          },
          {
            "word": "culminate",
            "correct": "to reach a final or highest point",
            "options": [
              "to begin slowly",
              "to reach a final or highest point",
              "to remain unchanged",
              "to fall apart"
            ]
          },
          {
            "word": "curtail",
            "correct": "to reduce or cut short",
            "options": [
              "to extend greatly",
              "to reduce or cut short",
              "to decorate",
              "to ignore"
            ]
          }
        ]
      }
    },
    "88": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Discussion Arena: Take a Stand",
      "blurb": "Strengthen your academic writing by joining online class debates with a clear, supported opinion.",
      "data": {
        "tasks": [
          {
            "prompt": "Should universities require all students to take at least one course in environmental science, even if it is unrelated to their major?",
            "professor": "Prof. Reyes:",
            "posts": [
              {
                "name": "Kate",
                "text": "I think it should be required. Climate issues affect every field, so all graduates need a basic understanding."
              },
              {
                "name": "Paul",
                "text": "I disagree. Students already have packed schedules, and forcing an extra course wastes time better spent on their specialty."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Pick a side in your first sentence, then defend it with a reason Kate and Paul did not raise."
          },
          {
            "prompt": "Some people believe remote work makes employees more productive, while others argue it harms teamwork. Which view do you support?",
            "professor": "Prof. Lin:",
            "posts": [
              {
                "name": "Maria",
                "text": "Remote work boosts productivity because people avoid long commutes and noisy offices."
              },
              {
                "name": "David",
                "text": "But working apart weakens collaboration; spontaneous conversations that spark good ideas rarely happen online."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Acknowledge the other side briefly, then add a fresh reason such as cost savings or scheduling flexibility."
          }
        ]
      }
    },
    "89": {
      "skill": "reading",
      "engine": "grammar-invaders",
      "title": "Grammar Invaders: Sentence Defense",
      "blurb": "Defend your reading score by zapping the grammatically correct sentence in each wave.",
      "data": {
        "items": [
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "Neither the students nor the teacher were ready.",
              "Neither the students nor the teacher was ready.",
              "Neither the students or the teacher was ready.",
              "Neither the student nor the teachers was ready."
            ],
            "correct": 1,
            "why": "With \"neither...nor,\" the verb agrees with the nearer subject \"teacher,\" so \"was\" is correct."
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "The data suggests that prices will rise.",
              "The data suggest that prices will rises.",
              "The data is suggesting prices rise.",
              "The data suggests that prices rises."
            ],
            "correct": 0,
            "why": "\"Data\" is treated as singular here and pairs with \"suggests\" and the base verb \"rise.\""
          },
          {
            "passage": "",
            "question": "Which sentence uses the article correctly?",
            "options": [
              "She is an university student.",
              "She is a honest person.",
              "She is an honest person.",
              "She is a hour late."
            ],
            "correct": 2,
            "why": "\"Honest\" begins with a silent h vowel sound, so it takes \"an.\""
          },
          {
            "passage": "",
            "question": "Which sentence is grammatically correct?",
            "options": [
              "If I would have known, I would have called.",
              "If I had known, I would have called.",
              "If I have known, I would call.",
              "If I knew, I would have call."
            ],
            "correct": 1,
            "why": "The third conditional uses \"had + past participle\" in the if-clause and \"would have called\" in the result."
          },
          {
            "passage": "",
            "question": "Which sentence has correct parallel structure?",
            "options": [
              "She likes reading, to swim, and biking.",
              "She likes to read, swimming, and to bike.",
              "She likes reading, swimming, and biking.",
              "She likes read, swim, and biking."
            ],
            "correct": 2,
            "why": "All three items are gerunds (reading, swimming, biking), keeping the list parallel."
          }
        ]
      }
    },
    "90": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Echo Mic: Repeat the Lecture",
      "blurb": "Polish your speaking by repeating six academic sentences aloud with clear pronunciation.",
      "data": {
        "items": [
          "The experiment confirmed our original hypothesis about plant growth.",
          "Many historians disagree about the causes of the revolution.",
          "Renewable energy could reduce our dependence on fossil fuels.",
          "The professor explained the theory using a simple example.",
          "Regular exercise improves both physical and mental health.",
          "Ancient trade routes connected distant cities across the continent."
        ]
      }
    },
    "91": {
      "skill": "reading",
      "engine": "vocab-tetris",
      "title": "Vocab Tetris: De- Drop",
      "blurb": "Boost your reading vocabulary by fitting eight academic words into their precise definitions.",
      "data": {
        "items": [
          {
            "word": "deficient",
            "correct": "lacking something necessary",
            "options": [
              "lacking something necessary",
              "fully complete",
              "extremely loud",
              "newly built"
            ]
          },
          {
            "word": "delegate",
            "correct": "to assign a task to another person",
            "options": [
              "to refuse a task",
              "to assign a task to another person",
              "to finish early",
              "to copy exactly"
            ]
          },
          {
            "word": "deliberate",
            "correct": "done on purpose",
            "options": [
              "done by accident",
              "done on purpose",
              "done very fast",
              "done in secret"
            ]
          },
          {
            "word": "denote",
            "correct": "to indicate or stand for",
            "options": [
              "to indicate or stand for",
              "to hide away",
              "to break apart",
              "to enlarge"
            ]
          },
          {
            "word": "deplete",
            "correct": "to use up or reduce greatly",
            "options": [
              "to fill completely",
              "to use up or reduce greatly",
              "to clean thoroughly",
              "to invent"
            ]
          },
          {
            "word": "devise",
            "correct": "to plan or invent",
            "options": [
              "to destroy",
              "to plan or invent",
              "to forget",
              "to follow"
            ]
          },
          {
            "word": "diffuse",
            "correct": "to spread out widely",
            "options": [
              "to gather tightly",
              "to spread out widely",
              "to freeze solid",
              "to count"
            ]
          },
          {
            "word": "discern",
            "correct": "to perceive or recognize clearly",
            "options": [
              "to overlook",
              "to perceive or recognize clearly",
              "to exaggerate",
              "to delay"
            ]
          }
        ]
      }
    },
    "92": {
      "skill": "reading",
      "engine": "inference-detective",
      "title": "Inference Detective: Read Between the Lines",
      "blurb": "Sharpen your reading by inferring what each academic passage implies but never states.",
      "data": {
        "items": [
          {
            "passage": "After the factory closed, the town's population fell sharply within a decade. Local shops shuttered one by one, and the once-busy main street grew quiet.",
            "question": "What can be inferred about the factory?",
            "options": [
              "It reopened later under new ownership.",
              "It was a major source of local employment.",
              "It polluted the town's water supply.",
              "It was located far from the town center."
            ],
            "correct": 1,
            "why": "The population drop and shop closures after the factory shut imply it employed many residents."
          },
          {
            "passage": "The novelist rewrote the final chapter seven times before sending it to her editor. Even then, she asked to see one more proof.",
            "question": "What can be inferred about the novelist?",
            "options": [
              "She disliked her editor.",
              "She was a perfectionist about her work.",
              "She wrote very quickly.",
              "She had never published before."
            ],
            "correct": 1,
            "why": "Repeated rewriting and a final proof check imply she was highly meticulous about quality."
          },
          {
            "passage": "Although the trail was marked as easy, several hikers turned back within an hour, breathing heavily and complaining about the steep climbs.",
            "question": "What can be inferred about the trail?",
            "options": [
              "It was far harder than its rating suggested.",
              "It was closed for repairs.",
              "It was extremely crowded.",
              "It offered no scenic views."
            ],
            "correct": 0,
            "why": "Hikers struggling and quitting on an \"easy\" trail imply the difficulty was underrated."
          },
          {
            "passage": "The museum's attendance doubled after it began offering free admission on Sundays. Weekday numbers, however, stayed the same.",
            "question": "What can be inferred about visitors?",
            "options": [
              "They preferred modern art exhibits.",
              "Cost influenced when many chose to visit.",
              "They came mostly from other cities.",
              "They disliked weekday hours."
            ],
            "correct": 1,
            "why": "A surge only on the free day, with flat weekday numbers, implies price affected visit timing."
          },
          {
            "passage": "The young scientist's paper was rejected by three journals before a fourth accepted it. Today it is among the most cited studies in her field.",
            "question": "What can be inferred from the passage?",
            "options": [
              "Early rejection does not always reflect a work's eventual value.",
              "Most journals never make mistakes.",
              "The scientist abandoned research afterward.",
              "The paper was poorly written."
            ],
            "correct": 0,
            "why": "A repeatedly rejected paper later becoming highly cited implies rejection can misjudge true value."
          }
        ]
      }
    },
    "93": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Rapid Interview: 45-Second Sprint",
      "blurb": "Build speaking fluency by answering four open-ended questions within forty-five seconds each.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a place you find relaxing and explain why it has that effect on you.",
          "Some students prefer studying in groups, while others prefer studying alone. Which do you prefer and why?",
          "If you could learn any new skill instantly, what would it be and how would you use it?",
          "Do you think technology has made communication between people better or worse? Explain your view."
        ]
      }
    },
    "94": {
      "skill": "reading",
      "engine": "synonym-snake",
      "title": "Synonym Snake: Dis- to E- Trail",
      "blurb": "Grow your reading vocabulary by guiding the snake to the meaning of eight academic words.",
      "data": {
        "items": [
          {
            "word": "disperse",
            "correct": "to scatter in different directions",
            "options": [
              "to scatter in different directions",
              "to gather closely",
              "to freeze",
              "to repeat"
            ]
          },
          {
            "word": "disrupt",
            "correct": "to interrupt or throw into disorder",
            "options": [
              "to organize neatly",
              "to interrupt or throw into disorder",
              "to praise highly",
              "to measure"
            ]
          },
          {
            "word": "distort",
            "correct": "to twist out of true shape or meaning",
            "options": [
              "to clarify fully",
              "to twist out of true shape or meaning",
              "to celebrate",
              "to delay"
            ]
          },
          {
            "word": "diverge",
            "correct": "to move or extend in different directions",
            "options": [
              "to converge",
              "to move or extend in different directions",
              "to remain still",
              "to enclose"
            ]
          },
          {
            "word": "dubious",
            "correct": "doubtful or uncertain",
            "options": [
              "clearly true",
              "doubtful or uncertain",
              "extremely large",
              "brightly colored"
            ]
          },
          {
            "word": "elaborate",
            "correct": "to add more detail",
            "options": [
              "to summarize briefly",
              "to add more detail",
              "to erase",
              "to hurry"
            ]
          },
          {
            "word": "elicit",
            "correct": "to draw out a response or reaction",
            "options": [
              "to suppress",
              "to draw out a response or reaction",
              "to ignore",
              "to construct"
            ]
          },
          {
            "word": "eloquent",
            "correct": "fluent and persuasive in speech",
            "options": [
              "silent and shy",
              "fluent and persuasive in speech",
              "rude and harsh",
              "dull and vague"
            ]
          }
        ]
      }
    },
    "95": {
      "skill": "listening",
      "engine": "dictation-arcade",
      "title": "Dictation Arcade: Module 1 Replay",
      "blurb": "Train your listening by typing out six academic sentences exactly as you hear them.",
      "data": {
        "sentences": [
          "The glacier has retreated nearly a mile over the past century.",
          "Researchers collected samples from twelve different lakes last summer.",
          "The lecture focused on the economic effects of urban migration.",
          "Volcanic ash can remain in the atmosphere for several years.",
          "Students must submit their proposals before the end of the month.",
          "The discovery challenged long-held assumptions about early human migration."
        ]
      }
    },
    "96": {
      "skill": "writing",
      "engine": "email-composer",
      "title": "Email Composer: Real-World Inbox",
      "blurb": "Practice writing by composing three clear, polite emails for everyday academic situations.",
      "data": {
        "tasks": [
          {
            "prompt": "Write an email to your professor explaining that you must miss next week's class for a medical appointment, and ask how to make up the work.",
            "scenario": "You are a student in Professor Adams's history course.",
            "checklist": [
              "Greets the recipient",
              "States the purpose clearly",
              "Gives a specific reason",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Keep the tone respectful and offer to complete any assignments in advance."
          },
          {
            "prompt": "Write an email to your landlord reporting that the heating in your apartment has stopped working, and request a repair as soon as possible.",
            "scenario": "It is winter and your apartment has been cold for two days.",
            "checklist": [
              "Greets the recipient",
              "States the purpose clearly",
              "Gives a specific reason",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Mention when the problem started and give times you are available for a repair visit."
          },
          {
            "prompt": "Write an email to a classmate asking to borrow their lecture notes from a session you missed, and suggest a way to return the favor.",
            "scenario": "You were absent on Tuesday and the exam is approaching.",
            "checklist": [
              "Greets the recipient",
              "States the purpose clearly",
              "Gives a specific reason",
              "Closes politely"
            ],
            "minWords": 50,
            "tips": "Be friendly and offer to share your own notes from another class in return."
          }
        ]
      }
    },
    "97": {
      "skill": "reading",
      "engine": "cube-match",
      "title": "Cube Match: E-Word Faces",
      "blurb": "Reinforce your reading vocabulary by matching eight academic words to the right cube faces.",
      "data": {
        "items": [
          {
            "word": "elucidate",
            "correct": "to make clear or explain",
            "options": [
              "to make clear or explain",
              "to confuse deliberately",
              "to shorten",
              "to repeat"
            ]
          },
          {
            "word": "embody",
            "correct": "to represent or give form to",
            "options": [
              "to represent or give form to",
              "to destroy",
              "to forget",
              "to measure"
            ]
          },
          {
            "word": "endorse",
            "correct": "to publicly support or approve",
            "options": [
              "to reject openly",
              "to publicly support or approve",
              "to hide",
              "to enlarge"
            ]
          },
          {
            "word": "endure",
            "correct": "to last or withstand over time",
            "options": [
              "to collapse quickly",
              "to last or withstand over time",
              "to celebrate",
              "to invent"
            ]
          },
          {
            "word": "enumerate",
            "correct": "to list items one by one",
            "options": [
              "to ignore",
              "to list items one by one",
              "to combine",
              "to soften"
            ]
          },
          {
            "word": "equate",
            "correct": "to treat as equal or the same",
            "options": [
              "to treat as equal or the same",
              "to separate",
              "to exaggerate",
              "to delay"
            ]
          },
          {
            "word": "erode",
            "correct": "to wear away gradually",
            "options": [
              "to build up",
              "to wear away gradually",
              "to brighten",
              "to count"
            ]
          },
          {
            "word": "evoke",
            "correct": "to call forth a feeling or memory",
            "options": [
              "to suppress",
              "to call forth a feeling or memory",
              "to construct",
              "to ignore"
            ]
          }
        ]
      }
    },
    "98": {
      "skill": "reading",
      "engine": "sentence-surgeon",
      "title": "Sentence Surgeon: Operate to Repair",
      "blurb": "Refine your reading grammar by choosing the cleanest correction for each flawed sentence.",
      "data": {
        "items": [
          {
            "passage": "Each of the volunteers were given a separate task to complete.",
            "question": "Choose the best correction.",
            "options": [
              "Each of the volunteers were given a separate task to complete.",
              "Each of the volunteers was given a separate task to complete.",
              "Each of the volunteers are given a separate task to complete.",
              "Each of the volunteers being given a separate task to complete."
            ],
            "correct": 1,
            "why": "\"Each\" is singular, so it requires the singular verb \"was.\""
          },
          {
            "passage": "The report was wrote by a team of three researchers.",
            "question": "Choose the best correction.",
            "options": [
              "The report was wrote by a team of three researchers.",
              "The report was written by a team of three researchers.",
              "The report was write by a team of three researchers.",
              "The report has wrote by a team of three researchers."
            ],
            "correct": 1,
            "why": "The passive voice needs the past participle \"written,\" not the past tense \"wrote.\""
          },
          {
            "passage": "Although she studied hard, but she did not pass the exam.",
            "question": "Choose the best correction.",
            "options": [
              "Although she studied hard, but she did not pass the exam.",
              "Although she studied hard, she did not pass the exam.",
              "She studied hard, but although she did not pass the exam.",
              "Although she studied hard so she did not pass the exam."
            ],
            "correct": 1,
            "why": "\"Although\" and \"but\" both signal contrast, so using both is redundant; drop \"but.\""
          },
          {
            "passage": "The number of students enrolled in the course have increased this year.",
            "question": "Choose the best correction.",
            "options": [
              "The number of students enrolled in the course have increased this year.",
              "The number of students enrolled in the course has increased this year.",
              "The number of students enrolled in the course are increasing this year.",
              "The number of students enrolled in the course were increased this year."
            ],
            "correct": 1,
            "why": "\"The number\" is singular and takes the singular verb \"has increased.\""
          },
          {
            "passage": "Walking through the park, the flowers looked beautiful to the visitors.",
            "question": "Choose the best correction.",
            "options": [
              "Walking through the park, the flowers looked beautiful to the visitors.",
              "Walking through the park, the visitors thought the flowers looked beautiful.",
              "The flowers, walking through the park, looked beautiful.",
              "Walking through the park, beautiful flowers were looked at."
            ],
            "correct": 1,
            "why": "The original dangles the modifier; the visitors, not the flowers, are walking through the park."
          }
        ]
      }
    },
    "99": {
      "skill": "reading",
      "engine": "mock-gauntlet",
      "title": "Mock 1 · Reading Gauntlet",
      "blurb": "Run a full exam-length reading set and prove your stamina.",
      "data": {
        "items": [
          {
            "passage": "Coral reefs occupy less than one percent of the ocean floor, yet they shelter roughly a quarter of all marine species. This biodiversity arises because the reef's complex structure provides countless niches for feeding, hiding, and breeding.",
            "question": "According to the passage, why do coral reefs support so many species?",
            "options": [
              "They cover most of the ocean floor.",
              "Their complex structure creates many habitats.",
              "They are located only in cold water.",
              "They produce most of the ocean's oxygen."
            ],
            "correct": 1,
            "why": "The passage attributes biodiversity to the reef's complex structure offering many niches."
          },
          {
            "passage": "Coral reefs occupy less than one percent of the ocean floor, yet they shelter roughly a quarter of all marine species. This biodiversity arises because the reef's complex structure provides countless niches for feeding, hiding, and breeding.",
            "question": "The word 'niches' in the passage is closest in meaning to",
            "options": [
              "predators",
              "temperatures",
              "specialized spaces",
              "ocean currents"
            ],
            "correct": 2,
            "why": "A niche here is a specialized space or role used for feeding, hiding, and breeding."
          },
          {
            "passage": "The printing press did not merely speed up copying; it standardized texts. Before its spread, manuscripts copied by hand accumulated errors, so two copies of the same work often differed. Identical printed editions allowed scholars across cities to discuss the very same page.",
            "question": "What was a key consequence of standardized printed texts?",
            "options": [
              "Scholars could reference identical pages across locations.",
              "Hand copying became more accurate than before.",
              "Books became more expensive to produce.",
              "Manuscripts disappeared immediately."
            ],
            "correct": 0,
            "why": "The passage states identical editions let scholars discuss the very same page."
          },
          {
            "passage": "The printing press did not merely speed up copying; it standardized texts. Before its spread, manuscripts copied by hand accumulated errors, so two copies of the same work often differed. Identical printed editions allowed scholars across cities to discuss the very same page.",
            "question": "What can be inferred about hand-copied manuscripts?",
            "options": [
              "They were always identical to one another.",
              "They were free of errors.",
              "They could contain differences from copy to copy.",
              "They were faster to make than printed books."
            ],
            "correct": 2,
            "why": "Because copying introduced errors, two copies often differed."
          },
          {
            "passage": "Desert plants survive extreme dryness through several strategies. Some, like cacti, store water in thick stems. Others have tiny leaves or shed them in drought to limit water loss. A few simply remain dormant as seeds until rain triggers rapid growth.",
            "question": "Which strategy is NOT mentioned in the passage?",
            "options": [
              "Storing water in stems",
              "Shedding leaves during drought",
              "Growing deep underground tubers",
              "Remaining dormant as seeds"
            ],
            "correct": 2,
            "why": "Deep tubers are not listed; the passage names stems, leaf-shedding, and seed dormancy."
          },
          {
            "passage": "Desert plants survive extreme dryness through several strategies. Some, like cacti, store water in thick stems. Others have tiny leaves or shed them in drought to limit water loss. A few simply remain dormant as seeds until rain triggers rapid growth.",
            "question": "Why might a desert plant have tiny leaves?",
            "options": [
              "To attract more pollinators",
              "To reduce water loss",
              "To store extra sunlight",
              "To anchor itself in sand"
            ],
            "correct": 1,
            "why": "Tiny leaves limit water loss, as the passage explains."
          },
          {
            "passage": "Economists distinguish between nominal and real wages. A nominal wage is the amount of money received, while a real wage measures what that money can actually buy. If prices rise faster than pay, a worker's nominal wage may climb even as the real wage falls.",
            "question": "What does a real wage measure?",
            "options": [
              "The total hours an employee works",
              "The purchasing power of the money earned",
              "The number of jobs in an economy",
              "The amount of tax deducted from pay"
            ],
            "correct": 1,
            "why": "The real wage measures what the money can actually buy, its purchasing power."
          },
          {
            "passage": "Economists distinguish between nominal and real wages. A nominal wage is the amount of money received, while a real wage measures what that money can actually buy. If prices rise faster than pay, a worker's nominal wage may climb even as the real wage falls.",
            "question": "When can a nominal wage rise while the real wage falls?",
            "options": [
              "When taxes are abolished",
              "When prices rise faster than pay",
              "When the worker changes jobs",
              "When wages are paid in gold"
            ],
            "correct": 1,
            "why": "If prices outpace pay, money buys less even though the nominal figure rises."
          }
        ]
      }
    },
    "100": {
      "skill": "listening",
      "engine": "listening-quiz",
      "title": "Mock 1 · Listening Quiz",
      "blurb": "Train your ear under exam pressure with spoken academic clips.",
      "data": {
        "items": [
          {
            "audio": true,
            "passage": "Good morning. Today's lecture covers volcanic soil. When lava breaks down over centuries, it releases minerals like potassium and phosphorus, which makes the resulting soil unusually fertile. That's why farmers often settle near old volcanoes despite the obvious risks.",
            "question": "Why do farmers settle near old volcanoes according to the lecture?",
            "options": [
              "The land is cheaper there.",
              "Volcanic soil is unusually fertile.",
              "Volcanoes prevent flooding.",
              "The climate is always warm."
            ],
            "correct": 1,
            "why": "The speaker says broken-down lava releases minerals, making soil unusually fertile."
          },
          {
            "audio": true,
            "passage": "Attention all students: the library will close two hours early this Friday for system maintenance. Books due that day can be returned on Monday with no late fee. Please plan your study sessions accordingly.",
            "question": "What should students do about books due Friday?",
            "options": [
              "Pay a small late fee online.",
              "Return them by noon Friday.",
              "Return them Monday with no penalty.",
              "Renew them for a full month."
            ],
            "correct": 2,
            "why": "The announcement allows Monday return with no late fee."
          },
          {
            "audio": true,
            "passage": "So in marketing, the term anchoring describes how the first price a customer sees shapes their judgment of later prices. If a store shows an expensive item first, a mid-priced one afterward suddenly seems reasonable, even if it isn't a bargain at all.",
            "question": "What is the effect of anchoring described here?",
            "options": [
              "Customers ignore the first price they see.",
              "The first price shapes how later prices feel.",
              "All prices seem equally fair.",
              "Customers always buy the cheapest item."
            ],
            "correct": 1,
            "why": "Anchoring means the first price shapes judgments of later prices."
          },
          {
            "audio": true,
            "passage": "Hi, this is the advising office returning your call. Your request to switch from the Tuesday to the Thursday seminar has been approved, but you'll need to pick up a new schedule slip from the front desk before the end of the week.",
            "question": "What must the student do before the end of the week?",
            "options": [
              "Email the seminar professor.",
              "Pick up a new schedule slip.",
              "Pay a transfer fee.",
              "Re-apply for the switch."
            ],
            "correct": 1,
            "why": "The message says to pick up a new schedule slip from the front desk."
          },
          {
            "audio": true,
            "passage": "Let's talk about migration. Many songbirds navigate using the Earth's magnetic field, but recent studies suggest they also rely on the position of the setting sun to calibrate their internal compass each evening before a night of flying.",
            "question": "What do songbirds use to calibrate their compass each evening?",
            "options": [
              "The temperature of the air",
              "The position of the setting sun",
              "The sound of other birds",
              "Ocean wave patterns"
            ],
            "correct": 1,
            "why": "The lecture says they use the setting sun's position to calibrate before night flight."
          }
        ]
      }
    },
    "101": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Mock 1 · Speaking Sprint",
      "blurb": "Answer four exam-style speaking prompts on the clock.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a place you find relaxing and explain why it helps you unwind.",
          "Some students prefer studying alone, while others prefer group study. Which do you prefer and why?",
          "Talk about a skill you would like to learn in the future and how you would go about learning it.",
          "Do you think technology has made communication between people better or worse? Explain your view."
        ]
      }
    },
    "102": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Mock 1 · Writing Arena",
      "blurb": "Build full written arguments under exam conditions.",
      "data": {
        "tasks": [
          {
            "prompt": "Should universities require all students to take at least one course in environmental science?",
            "professor": "Prof. Nguyen:",
            "posts": [
              {
                "name": "Kate",
                "text": "Yes. Climate issues affect every career, so everyone should understand the basics."
              },
              {
                "name": "Paul",
                "text": "I disagree. Students have limited time and should focus on courses for their own majors."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Pick one side firmly rather than sitting on the fence."
          },
          {
            "prompt": "Is it better for cities to invest in public transportation or in expanding roads for cars?",
            "professor": "Prof. Alvarez:",
            "posts": [
              {
                "name": "Mia",
                "text": "Public transit reduces traffic and pollution for everyone, so it's the smarter investment."
              },
              {
                "name": "Tom",
                "text": "But many people live far from transit lines and genuinely need wider roads."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Acknowledge the other side briefly, then defend your own."
          }
        ]
      }
    },
    "103": {
      "skill": "reading",
      "engine": "mock-gauntlet",
      "title": "Mock 2 · Reading Gauntlet",
      "blurb": "Push your reading endurance across a second full exam set.",
      "data": {
        "items": [
          {
            "passage": "The honeybee waggle dance is a remarkable form of animal communication. A returning forager moves in a figure-eight pattern, and the angle of its central run relative to vertical encodes the direction of food relative to the sun. The duration of the run signals distance.",
            "question": "What does the duration of the waggle run communicate?",
            "options": [
              "The type of flower found",
              "The distance to the food",
              "The number of bees needed",
              "The time of day"
            ],
            "correct": 1,
            "why": "The passage states the duration of the run signals distance."
          },
          {
            "passage": "The honeybee waggle dance is a remarkable form of animal communication. A returning forager moves in a figure-eight pattern, and the angle of its central run relative to vertical encodes the direction of food relative to the sun. The duration of the run signals distance.",
            "question": "The angle of the central run encodes information about",
            "options": [
              "the freshness of the nectar",
              "the direction of food relative to the sun",
              "the age of the forager",
              "the size of the hive"
            ],
            "correct": 1,
            "why": "The angle relative to vertical encodes direction relative to the sun."
          },
          {
            "passage": "In the early twentieth century, assembly-line production transformed manufacturing. By keeping each worker at a single repeated task while the product moved past, factories cut the time to build a car dramatically. The trade-off was monotonous, narrowly skilled labor.",
            "question": "What was a drawback of assembly-line production mentioned in the passage?",
            "options": [
              "Cars became more expensive.",
              "Workers performed monotonous, narrow tasks.",
              "Production slowed considerably.",
              "Factories needed fewer machines."
            ],
            "correct": 1,
            "why": "The trade-off named is monotonous, narrowly skilled labor."
          },
          {
            "passage": "In the early twentieth century, assembly-line production transformed manufacturing. By keeping each worker at a single repeated task while the product moved past, factories cut the time to build a car dramatically. The trade-off was monotonous, narrowly skilled labor.",
            "question": "How did the assembly line reduce build time?",
            "options": [
              "By hiring far more workers",
              "By having each worker repeat one task as the product moved",
              "By using fully automated robots",
              "By building cars one at a time by a single craftsman"
            ],
            "correct": 1,
            "why": "Each worker stayed at one repeated task while the product passed by."
          },
          {
            "passage": "Glaciers act as natural archives of climate. As snow compacts into ice year after year, it traps tiny bubbles of ancient air. Scientists drill ice cores and analyze these bubbles to reconstruct atmospheric conditions from thousands of years ago.",
            "question": "Why are ice cores valuable to climate scientists?",
            "options": [
              "They contain fossils of ancient plants.",
              "They trap bubbles of ancient air for analysis.",
              "They reveal the depth of past oceans.",
              "They store fresh drinking water."
            ],
            "correct": 1,
            "why": "The trapped air bubbles let scientists reconstruct past atmospheres."
          },
          {
            "passage": "Glaciers act as natural archives of climate. As snow compacts into ice year after year, it traps tiny bubbles of ancient air. Scientists drill ice cores and analyze these bubbles to reconstruct atmospheric conditions from thousands of years ago.",
            "question": "What can be inferred about deeper layers of an ice core?",
            "options": [
              "They are generally younger than surface layers.",
              "They generally hold older trapped air than surface layers.",
              "They contain no air at all.",
              "They form faster than surface layers."
            ],
            "correct": 1,
            "why": "Since ice builds year after year, deeper layers are older."
          },
          {
            "passage": "Linguists note that languages constantly borrow words from one another. English, for instance, absorbed thousands of words from French after the Norman Conquest. Such borrowing often happens when one culture introduces new objects, foods, or ideas to another.",
            "question": "According to the passage, when does word borrowing often occur?",
            "options": [
              "When two cultures stop trading",
              "When new objects, foods, or ideas are introduced",
              "When a language has too few speakers",
              "When grammar rules are simplified"
            ],
            "correct": 1,
            "why": "Borrowing often happens when a culture introduces new objects, foods, or ideas."
          },
          {
            "passage": "Linguists note that languages constantly borrow words from one another. English, for instance, absorbed thousands of words from French after the Norman Conquest. Such borrowing often happens when one culture introduces new objects, foods, or ideas to another.",
            "question": "The example of the Norman Conquest is used to illustrate",
            "options": [
              "how grammar becomes simpler over time",
              "how one language can borrow heavily from another",
              "why French replaced English entirely",
              "why borrowing is rare in modern times"
            ],
            "correct": 1,
            "why": "It illustrates English borrowing thousands of words from French."
          }
        ]
      }
    },
    "104": {
      "skill": "listening",
      "engine": "listening-quiz",
      "title": "Mock 2 · Listening Quiz",
      "blurb": "Stay sharp through a second round of spoken comprehension.",
      "data": {
        "items": [
          {
            "audio": true,
            "passage": "In today's session we examine sleep. During deep sleep, the brain consolidates memories formed during the day, transferring them from temporary storage into longer-term networks. This is partly why students who sleep after studying often recall material better.",
            "question": "What happens to memories during deep sleep?",
            "options": [
              "They are erased to save space.",
              "They are consolidated into longer-term storage.",
              "They are replaced by dreams.",
              "They become impossible to recall."
            ],
            "correct": 1,
            "why": "The lecture says deep sleep consolidates memories into longer-term networks."
          },
          {
            "audio": true,
            "passage": "This is a reminder that the campus shuttle route is changing next Monday. The stop outside the science building will move one block north to the new parking structure. Older signs will be removed by the weekend.",
            "question": "What change to the shuttle is announced?",
            "options": [
              "The shuttle will run less often.",
              "A stop is moving one block north.",
              "The fare is increasing.",
              "The service is ending entirely."
            ],
            "correct": 1,
            "why": "The stop outside the science building moves one block north."
          },
          {
            "audio": true,
            "passage": "Now, in art history, chiaroscuro refers to the strong contrast between light and dark. Painters used it not just for realism but to direct the viewer's eye, lighting the most important figure brightly while leaving the rest in shadow.",
            "question": "Besides realism, why did painters use chiaroscuro?",
            "options": [
              "To save on expensive paint",
              "To direct the viewer's attention",
              "To paint faster",
              "To avoid using color"
            ],
            "correct": 1,
            "why": "It was used to direct the eye by lighting the key figure."
          },
          {
            "audio": true,
            "passage": "Hello, this message is for chemistry lab students. Because of a delayed equipment delivery, Thursday's experiment is postponed to next Tuesday. Please still attend Thursday for a safety briefing that you don't want to miss.",
            "question": "What should students do this Thursday?",
            "options": [
              "Skip class entirely.",
              "Attend a safety briefing.",
              "Complete the postponed experiment.",
              "Submit a lab report early."
            ],
            "correct": 1,
            "why": "Although the experiment is postponed, students should attend the safety briefing Thursday."
          },
          {
            "audio": true,
            "passage": "Let's consider rivers. A meandering river slowly erodes its outer bank while depositing sediment on the inner bank. Over many years this process can carve dramatic loops, and sometimes the river cuts a new straight path, leaving behind a curved oxbow lake.",
            "question": "How is an oxbow lake formed according to the lecture?",
            "options": [
              "By a dam built across the river",
              "When the river cuts a new path and abandons a loop",
              "By heavy rainfall in a single storm",
              "When sediment blocks the river's source"
            ],
            "correct": 1,
            "why": "An oxbow lake forms when the river cuts a straight path, leaving a curved loop behind."
          }
        ]
      }
    },
    "105": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Mock 2 · Speaking Sprint",
      "blurb": "Deliver four more timed responses to sharpen fluency.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a teacher or mentor who influenced you and explain how they did so.",
          "Some people enjoy planning their days in detail; others prefer to be spontaneous. Which are you, and why?",
          "If your city received funding for one new public facility, what should it build and why?",
          "Do you agree that people learn more from failure than from success? Explain your answer."
        ]
      }
    },
    "106": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Mock 2 · Writing Arena",
      "blurb": "Compose two complete essays against the exam clock.",
      "data": {
        "tasks": [
          {
            "prompt": "Should employees be allowed to work from home permanently rather than returning to an office?",
            "professor": "Prof. Okafor:",
            "posts": [
              {
                "name": "Lena",
                "text": "Remote work saves commuting time and lets people focus without office distractions."
              },
              {
                "name": "Diego",
                "text": "I think offices build teamwork and mentoring that are hard to replicate online."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "A concrete personal example makes your reason stronger."
          },
          {
            "prompt": "Is it more important for schools to teach practical life skills or traditional academic subjects?",
            "professor": "Prof. Bauer:",
            "posts": [
              {
                "name": "Sara",
                "text": "Skills like budgeting and cooking matter daily, yet schools rarely teach them."
              },
              {
                "name": "Omar",
                "text": "Academic subjects train deep thinking that practical lessons alone cannot."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Define what you mean by 'important' early in your answer."
          }
        ]
      }
    },
    "107": {
      "skill": "reading",
      "engine": "mock-gauntlet",
      "title": "Mock 3 · Reading Gauntlet",
      "blurb": "Tackle a third full reading set and lock in your pacing.",
      "data": {
        "items": [
          {
            "passage": "Photosynthesis and respiration are complementary processes. In photosynthesis, plants use sunlight to convert carbon dioxide and water into sugar and oxygen. In respiration, organisms break down that sugar with oxygen to release energy, producing carbon dioxide and water again.",
            "question": "How are photosynthesis and respiration described in the passage?",
            "options": [
              "As identical processes",
              "As complementary processes",
              "As unrelated processes",
              "As processes that both require darkness"
            ],
            "correct": 1,
            "why": "The passage opens by calling them complementary processes."
          },
          {
            "passage": "Photosynthesis and respiration are complementary processes. In photosynthesis, plants use sunlight to convert carbon dioxide and water into sugar and oxygen. In respiration, organisms break down that sugar with oxygen to release energy, producing carbon dioxide and water again.",
            "question": "What does respiration produce according to the passage?",
            "options": [
              "Sugar and sunlight",
              "Carbon dioxide and water",
              "Oxygen only",
              "Nitrogen and salt"
            ],
            "correct": 1,
            "why": "Respiration produces carbon dioxide and water while releasing energy."
          },
          {
            "passage": "The Silk Road was never a single paved road but a web of trade routes linking East Asia to the Mediterranean. Along it traveled not only silk and spices but also technologies, religions, and diseases, making it a powerful channel for cultural exchange.",
            "question": "Which statement best reflects the passage's view of the Silk Road?",
            "options": [
              "It was a single paved highway.",
              "It carried only luxury goods like silk.",
              "It was a network that spread goods and ideas alike.",
              "It connected only neighboring villages."
            ],
            "correct": 2,
            "why": "The passage stresses it was a web of routes carrying goods, technologies, religions, and diseases."
          },
          {
            "passage": "The Silk Road was never a single paved road but a web of trade routes linking East Asia to the Mediterranean. Along it traveled not only silk and spices but also technologies, religions, and diseases, making it a powerful channel for cultural exchange.",
            "question": "The phrase 'a powerful channel for cultural exchange' suggests the Silk Road",
            "options": [
              "blocked the spread of new ideas",
              "moved more than just trade goods",
              "was used only by religious leaders",
              "existed for a single decade"
            ],
            "correct": 1,
            "why": "Cultural exchange here means technologies, religions, and diseases also traveled, not just goods."
          },
          {
            "passage": "Bioluminescence, the production of light by living organisms, serves many functions in the deep sea. Some fish use it to lure prey toward a glowing bait, while others flash light to startle predators or to signal potential mates in the dark water.",
            "question": "Which function of bioluminescence is mentioned in the passage?",
            "options": [
              "Generating heat for warmth",
              "Luring prey with a glowing bait",
              "Filtering food from the water",
              "Building protective shells"
            ],
            "correct": 1,
            "why": "The passage says some fish lure prey toward a glowing bait."
          },
          {
            "passage": "Bioluminescence, the production of light by living organisms, serves many functions in the deep sea. Some fish use it to lure prey toward a glowing bait, while others flash light to startle predators or to signal potential mates in the dark water.",
            "question": "Why might a deep-sea fish flash light at a predator?",
            "options": [
              "To attract more predators",
              "To startle it and gain a chance to escape",
              "To warm the surrounding water",
              "To attract prey for the predator"
            ],
            "correct": 1,
            "why": "Flashing to startle predators implies it helps the fish avoid being eaten."
          },
          {
            "passage": "Urban planners increasingly favor mixed-use neighborhoods, where homes, shops, and offices share the same blocks. Such designs let residents walk to many destinations, which can reduce car dependence and create livelier streets throughout the day.",
            "question": "What is one benefit of mixed-use neighborhoods named in the passage?",
            "options": [
              "They eliminate the need for any housing.",
              "They can reduce car dependence.",
              "They lower the cost of all goods.",
              "They require residents to drive farther."
            ],
            "correct": 1,
            "why": "Walking to many destinations can reduce car dependence."
          },
          {
            "passage": "Urban planners increasingly favor mixed-use neighborhoods, where homes, shops, and offices share the same blocks. Such designs let residents walk to many destinations, which can reduce car dependence and create livelier streets throughout the day.",
            "question": "Why might mixed-use blocks create livelier streets all day?",
            "options": [
              "Because all buildings are closed at night",
              "Because different uses bring people out at different times",
              "Because cars are banned entirely",
              "Because shops never open"
            ],
            "correct": 1,
            "why": "Mixing homes, shops, and offices means people are present throughout the day."
          }
        ]
      }
    },
    "108": {
      "skill": "listening",
      "engine": "listening-quiz",
      "title": "Mock 3 · Listening Quiz",
      "blurb": "Decode three more spoken passages with exam focus.",
      "data": {
        "items": [
          {
            "audio": true,
            "passage": "Today we look at tides. The moon's gravity pulls on the ocean, creating a bulge of water on the side facing it. As the Earth rotates, coastlines pass through these bulges, which is why most shores experience two high tides each day.",
            "question": "Why do most coastlines have two high tides daily?",
            "options": [
              "The sun rises twice a day.",
              "The Earth rotates through the moon-caused water bulges.",
              "Rivers flow into the sea twice daily.",
              "The wind reverses every twelve hours."
            ],
            "correct": 1,
            "why": "Rotation carries coastlines through the moon-caused bulges, giving two daily highs."
          },
          {
            "audio": true,
            "passage": "Attention students in the dormitory: the laundry room on the second floor will be repainted this weekend. Machines there will be unavailable, but the basement laundry will stay open and is free to use during the closure.",
            "question": "What is offered during the laundry room closure?",
            "options": [
              "A discount on new machines",
              "Free use of the basement laundry",
              "A laundry pickup service",
              "Extended quiet hours"
            ],
            "correct": 1,
            "why": "The basement laundry stays open and is free during the closure."
          },
          {
            "audio": true,
            "passage": "In economics, opportunity cost is the value of the next best option you give up when making a choice. If you spend an evening studying instead of working a paid shift, the lost wages are part of the true cost of studying.",
            "question": "What does opportunity cost represent?",
            "options": [
              "The money spent on a purchase",
              "The value of the best alternative given up",
              "The total of all options combined",
              "A fee charged by employers"
            ],
            "correct": 1,
            "why": "Opportunity cost is the value of the next best option forgone."
          },
          {
            "audio": true,
            "passage": "Hi, this is the writing center confirming your appointment. Your tutor noticed your draft is missing a works-cited page, so please bring your sources to the session on Wednesday so the two of you can build it together.",
            "question": "What should the student bring on Wednesday?",
            "options": [
              "A printed final essay",
              "Their sources for the works-cited page",
              "A new topic proposal",
              "Payment for the session"
            ],
            "correct": 1,
            "why": "The tutor asks the student to bring sources to build the works-cited page."
          },
          {
            "audio": true,
            "passage": "Let's discuss insulation. Materials like wool and foam trap pockets of still air, and because still air conducts heat poorly, these pockets slow the flow of warmth out of a building, keeping interiors comfortable with less energy.",
            "question": "Why do trapped air pockets help insulate a building?",
            "options": [
              "Still air conducts heat poorly.",
              "Air pockets generate their own heat.",
              "The pockets reflect sunlight away.",
              "Air pockets absorb all sound."
            ],
            "correct": 0,
            "why": "Still air conducts heat poorly, so trapped pockets slow heat loss."
          }
        ]
      }
    },
    "109": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Mock 3 · Speaking Sprint",
      "blurb": "Voice four timed answers and keep your delivery smooth.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a book, film, or show that changed how you see something, and explain how.",
          "Some people prefer to save money; others prefer to spend on experiences now. Which approach do you favor?",
          "What is one change you would make to your school or workplace, and why would it help?",
          "Do you think it is better to be a specialist in one field or a generalist across many? Explain."
        ]
      }
    },
    "110": {
      "skill": "reading",
      "engine": "mock-gauntlet",
      "title": "Mock 4 · Reading Gauntlet",
      "blurb": "Conquer your final full reading set with confidence.",
      "data": {
        "items": [
          {
            "passage": "Antibiotic resistance arises through natural selection. When antibiotics kill most bacteria in a population, the few with resistant traits survive and reproduce. Over time, the resistant strain dominates, which is why doctors urge patients to finish their full course of medication.",
            "question": "Why does antibiotic resistance spread according to the passage?",
            "options": [
              "Bacteria choose to become resistant.",
              "Resistant survivors reproduce and come to dominate.",
              "Antibiotics create new bacteria.",
              "Resistance is caused by the weather."
            ],
            "correct": 1,
            "why": "Survivors with resistant traits reproduce, so the resistant strain dominates."
          },
          {
            "passage": "Antibiotic resistance arises through natural selection. When antibiotics kill most bacteria in a population, the few with resistant traits survive and reproduce. Over time, the resistant strain dominates, which is why doctors urge patients to finish their full course of medication.",
            "question": "Why do doctors urge patients to finish their full course?",
            "options": [
              "To make the medication taste better",
              "To kill bacteria that might otherwise survive and spread resistance",
              "To use up the supply quickly",
              "To avoid wasting money"
            ],
            "correct": 1,
            "why": "Finishing the course helps eliminate survivors that could spread resistance."
          },
          {
            "passage": "The Renaissance saw a revival of interest in classical Greek and Roman ideas. Wealthy patrons funded artists and scholars, and the rediscovery of ancient texts inspired new approaches to art, science, and government across Europe.",
            "question": "What role did wealthy patrons play in the Renaissance?",
            "options": [
              "They banned ancient texts.",
              "They funded artists and scholars.",
              "They opposed scientific study.",
              "They ruled all of Europe."
            ],
            "correct": 1,
            "why": "The passage states patrons funded artists and scholars."
          },
          {
            "passage": "The Renaissance saw a revival of interest in classical Greek and Roman ideas. Wealthy patrons funded artists and scholars, and the rediscovery of ancient texts inspired new approaches to art, science, and government across Europe.",
            "question": "The word 'revival' in the passage is closest in meaning to",
            "options": [
              "rejection",
              "renewed interest",
              "translation",
              "destruction"
            ],
            "correct": 1,
            "why": "A revival of interest means a renewed interest in classical ideas."
          },
          {
            "passage": "Wetlands are sometimes called the kidneys of a landscape. As water moves slowly through marsh plants and soil, sediments settle out and pollutants are filtered, so the water that eventually flows onward is noticeably cleaner.",
            "question": "Why are wetlands compared to kidneys?",
            "options": [
              "They are shaped like kidneys.",
              "They filter pollutants from water.",
              "They store blood for animals.",
              "They produce drinking water for cities."
            ],
            "correct": 1,
            "why": "Like kidneys, wetlands filter pollutants and clean the water."
          },
          {
            "passage": "Wetlands are sometimes called the kidneys of a landscape. As water moves slowly through marsh plants and soil, sediments settle out and pollutants are filtered, so the water that eventually flows onward is noticeably cleaner.",
            "question": "What allows sediments to settle out in a wetland?",
            "options": [
              "The water moves slowly through plants and soil.",
              "The water is heated by the sun.",
              "Strong currents push them downstream.",
              "Animals eat the sediments."
            ],
            "correct": 0,
            "why": "Slow movement through plants and soil lets sediments settle."
          },
          {
            "passage": "Behavioral economists have found that people often value avoiding a loss more strongly than achieving an equivalent gain. This tendency, called loss aversion, can lead investors to hold failing stocks too long simply to avoid admitting a loss.",
            "question": "What does loss aversion describe?",
            "options": [
              "Preferring gains over avoiding losses",
              "Valuing the avoidance of loss more than equal gains",
              "Ignoring both gains and losses",
              "Always selling stocks immediately"
            ],
            "correct": 1,
            "why": "Loss aversion means people weigh avoiding a loss more heavily than an equal gain."
          },
          {
            "passage": "Behavioral economists have found that people often value avoiding a loss more strongly than achieving an equivalent gain. This tendency, called loss aversion, can lead investors to hold failing stocks too long simply to avoid admitting a loss.",
            "question": "What behavior does loss aversion lead investors to in the passage?",
            "options": [
              "Selling winning stocks too early",
              "Holding failing stocks too long",
              "Avoiding the stock market entirely",
              "Buying only government bonds"
            ],
            "correct": 1,
            "why": "Investors hold failing stocks too long to avoid admitting a loss."
          }
        ]
      }
    },
    "111": {
      "skill": "writing",
      "engine": "discussion-arena",
      "title": "Mock 4 · Writing Arena",
      "blurb": "Write your final two timed essays at full strength.",
      "data": {
        "tasks": [
          {
            "prompt": "Should governments invest more heavily in space exploration or in solving problems on Earth first?",
            "professor": "Prof. Reyes:",
            "posts": [
              {
                "name": "Hana",
                "text": "Space research drives technology that ends up improving life on Earth too."
              },
              {
                "name": "Victor",
                "text": "We have urgent problems like poverty here, so Earth should come first."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "You can argue the two goals are not entirely separate."
          },
          {
            "prompt": "Is social media doing more to connect people or to isolate them?",
            "professor": "Prof. Lindqvist:",
            "posts": [
              {
                "name": "Ravi",
                "text": "It keeps me close to friends abroad I would otherwise lose touch with."
              },
              {
                "name": "Chloe",
                "text": "Yet many people scroll alone for hours and feel lonelier afterward."
              }
            ],
            "checklist": [
              "States a clear position",
              "Adds a NEW reason not already mentioned",
              "Gives a specific example",
              "Writes 100+ words",
              "Uses academic tone"
            ],
            "minWords": 100,
            "tips": "Distinguish how social media is used, not just whether it is used."
          }
        ]
      }
    },
    "112": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Mock 4 · Speaking Sprint",
      "blurb": "Finish the mock series with four confident timed answers.",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe a goal you achieved that you are proud of and explain how you reached it.",
          "Some people prefer living in a big city; others prefer a small town. Which suits you better, and why?",
          "What advice would you give to a student who is about to start at your school?",
          "Do you think rules are meant to be followed strictly or adapted to circumstances? Explain."
        ]
      }
    },
    "113": {
      "skill": "reading",
      "engine": "inference-detective",
      "title": "Taper · Inference Detective",
      "blurb": "Ease into the taper by reading between the lines.",
      "data": {
        "items": [
          {
            "passage": "The lecture hall emptied within minutes of the final bell, yet one student remained, rereading her notes and circling terms she had underlined. She glanced repeatedly at the exam schedule pinned by the door.",
            "question": "What can be inferred about the student?",
            "options": [
              "She dislikes the subject.",
              "She is preparing for an upcoming exam.",
              "She is waiting for a friend.",
              "She forgot her belongings."
            ],
            "correct": 1,
            "why": "Rereading notes and checking the exam schedule imply she is preparing for an exam."
          },
          {
            "passage": "Although the new bridge cost far more than predicted, traffic accidents at the old crossing fell sharply once it opened, and nearby businesses reported their best year in a decade.",
            "question": "What can be inferred about the bridge?",
            "options": [
              "It was a complete failure.",
              "Despite its cost, it brought real benefits.",
              "It increased accidents.",
              "It harmed local businesses."
            ],
            "correct": 1,
            "why": "Fewer accidents and better business suggest benefits despite the high cost."
          },
          {
            "passage": "The botanist labeled each seedling, watered them on a strict schedule, and recorded their height every morning for six weeks before drawing any conclusions about the fertilizer.",
            "question": "What can be inferred about the botanist's approach?",
            "options": [
              "It was careless and rushed.",
              "It was careful and systematic.",
              "It ignored measurement entirely.",
              "It relied only on guesswork."
            ],
            "correct": 1,
            "why": "Labeling, scheduling, and daily records over weeks indicate a careful, systematic method."
          },
          {
            "passage": "When the museum introduced free evening hours, attendance among young adults rose noticeably, and the gift shop, open during those hours, saw a matching jump in sales.",
            "question": "What can be inferred from the passage?",
            "options": [
              "Free hours had no effect on visitors.",
              "The free evening hours attracted more young adults and boosted sales.",
              "The gift shop closed in the evenings.",
              "Older visitors stopped coming."
            ],
            "correct": 1,
            "why": "Rising attendance and matching gift-shop sales link the free hours to the increase."
          },
          {
            "passage": "The hikers checked the weather report twice, packed extra water, and turned back when clouds gathered earlier than expected over the ridge.",
            "question": "What can be inferred about the hikers?",
            "options": [
              "They were reckless and unprepared.",
              "They were cautious and responsive to conditions.",
              "They ignored the weather completely.",
              "They had never hiked before."
            ],
            "correct": 1,
            "why": "Checking weather, packing extra water, and turning back show caution and responsiveness."
          }
        ]
      }
    },
    "114": {
      "skill": "speaking",
      "engine": "echo-mic",
      "title": "Taper · Echo Mic",
      "blurb": "Warm up your speaking muscles by echoing clear sentences.",
      "data": {
        "items": [
          "The committee will announce the results early next week.",
          "Researchers gathered samples from three different mountain regions.",
          "A balanced diet supports both your body and your mind.",
          "The professor explained the theory using a simple diagram.",
          "Many cities are investing in cleaner public transportation systems.",
          "Practice a little every day and your confidence will grow."
        ]
      }
    },
    "115": {
      "skill": "reading",
      "engine": "vocab-tetris",
      "title": "Taper · Vocab Tetris",
      "blurb": "Lock in high-value words with a relaxed vocabulary drill.",
      "data": {
        "items": [
          {
            "word": "furnish",
            "correct": "to provide or supply",
            "options": [
              "to provide or supply",
              "to remove quickly",
              "to question harshly",
              "to delay on purpose"
            ]
          },
          {
            "word": "gauge",
            "correct": "to measure or estimate",
            "options": [
              "to measure or estimate",
              "to ignore completely",
              "to repair a machine",
              "to celebrate loudly"
            ]
          },
          {
            "word": "generic",
            "correct": "general; not specific or branded",
            "options": [
              "general; not specific or branded",
              "extremely rare",
              "highly detailed",
              "brightly colored"
            ]
          },
          {
            "word": "hamper",
            "correct": "to hinder or obstruct",
            "options": [
              "to hinder or obstruct",
              "to assist eagerly",
              "to announce publicly",
              "to clean thoroughly"
            ]
          },
          {
            "word": "homogeneous",
            "correct": "uniform; of the same kind",
            "options": [
              "uniform; of the same kind",
              "varied and mixed",
              "very expensive",
              "easily broken"
            ]
          },
          {
            "word": "illustrate",
            "correct": "to make clear with examples",
            "options": [
              "to make clear with examples",
              "to hide from view",
              "to argue against",
              "to count precisely"
            ]
          },
          {
            "word": "imminent",
            "correct": "about to happen very soon",
            "options": [
              "about to happen very soon",
              "far in the past",
              "completely impossible",
              "slow and gradual"
            ]
          },
          {
            "word": "incentive",
            "correct": "something that motivates action",
            "options": [
              "something that motivates action",
              "a strict punishment",
              "a written apology",
              "a sudden accident"
            ]
          }
        ]
      }
    },
    "116": {
      "skill": "speaking",
      "engine": "rapid-interview",
      "title": "Final Day · Victory Lap Speaking",
      "blurb": "You made it to day 116 — speak with the confidence you have earned!",
      "data": {
        "seconds": 45,
        "prompts": [
          "Describe how your English has improved over the last 116 days of practice.",
          "What part of the TOEFL exam now feels easiest to you, and why?",
          "Imagine you just finished the real test. Tell a friend how it went and what helped most.",
          "Give one piece of encouragement to someone just starting their own 116-day study journey."
        ]
      }
    }
  }
};
