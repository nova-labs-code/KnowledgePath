// Complete K–12 grade, subject, and game structure
const gradesData = [
  // Pre-K
  {
    grade: "Pre-K",
    subjects: [
      {name: "Math", games: ["Number Fun", "Shape Explorer"]},
      {name: "Language", games: ["Alphabet Adventure", "Word Match"]},
      {name: "Science", games: ["Senses Game", "Animal Explorer"]}
    ]
  },

  // Kindergarten
  {
    grade: "Kindergarten",
    subjects: [
      {name: "Math", games: ["Counting Challenge", "Pattern Builder"]},
      {name: "Language", games: ["Letter Sounds", "Sight Words"]},
      {name: "Science", games: ["Seasons Game", "Body Parts Puzzle"]}
    ]
  },

  // Grade 1
  {
    grade: "Grade 1",
    subjects: [
      {name: "Math", games: ["Addition Race", "Subtraction Puzzle"]},
      {name: "Science", games: ["Plant Explorer", "Animal Match"]},
      {name: "Language", games: ["Sentence Builder", "Reading Comprehension"]},
      {name: "History", games: ["Ancient Civilizations Quiz", "Timeline Challenge"]}
    ]
  },

  // Grade 2
  {
    grade: "Grade 2",
    subjects: [
      {name: "Math", games: ["Number Bonds", "Money Mania"]},
      {name: "Science", games: ["Earth Materials", "Life Cycles"]},
      {name: "English", games: ["Reading Comprehension", "Spelling Bee"]},
      {name: "History", games: ["Local History Quiz", "Community Explorer"]}
    ]
  },

  // Grade 3
  {
    grade: "Grade 3",
    subjects: [
      {name: "Math", games: ["Multiplication Challenge", "Fractions Fun"]},
      {name: "Science", games: ["Ecosystem Adventure", "Force Explorer"]},
      {name: "English", games: ["Story Summary", "Vocabulary Builder"]},
      {name: "History", games: ["Ancient Civilizations Quiz", "Timeline Challenge"]}
    ]
  },

  // Grade 4
  {
    grade: "Grade 4",
    subjects: [
      {name: "Math", games: ["Decimals Fun", "Area & Perimeter"]},
      {name: "Science", games: ["Electricity Explorer", "Food Web Challenge"]},
      {name: "English", games: ["Figurative Language Game", "Paragraph Builder"]},
      {name: "History", games: ["Explorers Quiz", "Colonial Times Challenge"]}
    ]
  },

  // Grade 5
  {
    grade: "Grade 5",
    subjects: [
      {name: "Math", games: ["Volume & Measurement", "Fractions Operations"]},
      {name: "Science", games: ["Human Body Systems", "Simple Machines"]},
      {name: "English", games: ["Compare Texts Game", "Research Project"]},
      {name: "History", games: ["Revolution Quiz", "Government Basics"]}
    ]
  },

  // Grade 6
  {
    grade: "Grade 6",
    subjects: [
      {name: "Math", games: ["Ratios & Rates", "Expressions & Equations"]},
      {name: "Science", games: ["Cells & Microbiology", "Matter Explorer"]},
      {name: "English", games: ["Literary Elements Quiz", "Argument Writing"]},
      {name: "History", games: ["World Geography Quiz", "Ancient Civilizations"]}
    ]
  },

  // Grade 7
  {
    grade: "Grade 7",
    subjects: [
      {name: "Math", games: ["Proportional Relationships", "Scale Drawings"]},
      {name: "Science", games: ["Genetics Basics", "Ecosystem Diversity"]},
      {name: "English", games: ["Theme Analysis", "Research Writing"]},
      {name: "History", games: ["Medieval History Quiz", "Renaissance Explorer"]}
    ]
  },

  // Grade 8
  {
    grade: "Grade 8",
    subjects: [
      {name: "Math", games: ["Linear Equations", "Pythagorean Challenge"]},
      {name: "Science", games: ["Physics Intro", "Energy Transformations"]},
      {name: "English", games: ["Text Analysis", "Argument Writing"]},
      {name: "History", games: ["American Revolution Quiz", "Civil War Explorer"]}
    ]
  },

  // Grade 9 (Freshman)
  {
    grade: "Grade 9",
    subjects: [
      {name: "Math", games: ["Algebra I Challenge", "Linear Functions"]},
      {name: "Science", games: ["Biology Basics", "Cell Explorer"]},
      {name: "English", games: ["Literary Analysis", "Research Paper"]},
      {name: "Social Studies", games: ["World History Quiz", "Map Skills"]}
    ]
  },

  // Grade 10 (Sophomore)
  {
    grade: "Grade 10",
    subjects: [
      {name: "Math", games: ["Geometry Quest", "Trigonometry Challenge"]},
      {name: "Science", games: ["Chemistry Basics", "Genetics Puzzle"]},
      {name: "English", games: ["Essay Builder", "Literary Analysis"]},
      {name: "Social Studies", games: ["Modern World History", "Timeline Challenge"]}
    ]
  },

  // Grade 11 (Junior)
  {
    grade: "Grade 11",
    subjects: [
      {name: "Math", games: ["Algebra II Challenge", "Quadratic Functions"]},
      {name: "Science", games: ["Physics Concepts", "Chemistry Explorer"]},
      {name: "English", games: ["American Literature Quiz", "Argument Builder"]},
      {name: "Social Studies", games: ["U.S. History Quiz", "Government Basics"]}
    ]
  },

  // Grade 12 (Senior)
  {
    grade: "Grade 12",
    subjects: [
      {name: "Math", games: ["Pre-Calculus Puzzle", "Trig Functions Challenge"]},
      {name: "Science", games: ["Advanced Physics Game", "Environmental Science Quiz"]},
      {name: "English", games: ["Literary Criticism Challenge", "Research Essay Game"]},
      {name: "Social Studies", games: ["Civics Simulation", "Economics Puzzle"]}
    ]
  }
];