// ============================
// LAUNCH GAME FUNCTION
// ============================
function launchGame(grade, subject, game) {
  const gameMap = {
    // ===================== PRE-K =====================
    "Number Fun": playNumberFun,
    "Shape Explorer": playShapeExplorer,
    "Alphabet Adventure": playAlphabetAdventure,
    "Word Match": playWordMatch,
    "Senses Game": playSensesGame,
    "Animal Explorer": playAnimalExplorer,

    // ===================== Kindergarten =====================
    "Counting Challenge": playCountingChallenge,
    "Pattern Builder": playPatternBuilder,
    "Letter Sounds": playLetterSounds,
    "Sight Words": playSightWords,
    "Seasons Game": playSeasonsGame,
    "Body Parts Puzzle": playBodyPartsPuzzle,

    // ===================== Grade 1 =====================
    "Addition Race": playAdditionRace,
    "Subtraction Puzzle": playSubtractionPuzzle,
    "Plant Explorer": playPlantExplorer,
    "Animal Match": playAnimalMatch,
    "Sentence Builder": playSentenceBuilder,
    "Reading Comprehension": playReadingComprehension1,
    "Ancient Civilizations Quiz": playAncientCivilizationsQuiz1,
    "Timeline Challenge": playTimelineChallenge1,

    // ===================== Grade 2 =====================
    "Number Bonds": playNumberBonds,
    "Money Mania": playMoneyMania,
    "Earth Materials": playEarthMaterials,
    "Life Cycles": playLifeCycles,
    "Reading Comprehension": playReadingComprehension2,
    "Spelling Bee": playSpellingBee,
    "Local History Quiz": playLocalHistoryQuiz,
    "Community Explorer": playCommunityExplorer,

    // ===================== Grade 3 =====================
    "Multiplication Challenge": playMultiplicationChallenge,
    "Fractions Fun": playFractionsFun,
    "Ecosystem Adventure": playEcosystemAdventure,
    "Force Explorer": playForceExplorer,
    "Story Summary": playStorySummary,
    "Vocabulary Builder": playVocabularyBuilder,
    "Ancient Civilizations Quiz": playAncientCivilizationsQuiz3,
    "Timeline Challenge": playTimelineChallenge3,

    // ===================== Grade 4 =====================
    "Decimals Fun": playDecimalsFun,
    "Area & Perimeter": playAreaPerimeter,
    "Electricity Explorer": playElectricityExplorer,
    "Food Web Challenge": playFoodWebChallenge,
    "Figurative Language Game": playFigurativeLanguage,
    "Paragraph Builder": playParagraphBuilder,
    "Explorers Quiz": playExplorersQuiz,
    "Colonial Times Challenge": playColonialTimes,

    // ===================== Grade 5 =====================
    "Volume & Measurement": playVolumeMeasurement,
    "Fractions Operations": playFractionsOperations,
    "Human Body Systems": playHumanBodySystems,
    "Simple Machines": playSimpleMachines,
    "Compare Texts Game": playCompareTexts,
    "Research Project": playResearchProject,
    "Revolution Quiz": playRevolutionQuiz,
    "Government Basics": playGovernmentBasics,

    // ===================== Grade 6 =====================
    "Ratios & Rates": playRatiosRates,
    "Expressions & Equations": playExpressionsEquations,
    "Cells & Microbiology": playCellsMicrobiology,
    "Matter Explorer": playMatterExplorer,
    "Literary Elements Quiz": playLiteraryElements,
    "Argument Writing": playArgumentWriting,
    "World Geography Quiz": playWorldGeography,
    "Ancient Civilizations": playAncientCivilizations6,

    // ===================== Grade 7 =====================
    "Proportional Relationships": playProportionalRelationships,
    "Scale Drawings": playScaleDrawings,
    "Genetics Basics": playGeneticsBasics,
    "Ecosystem Diversity": playEcosystemDiversity,
    "Theme Analysis": playThemeAnalysis,
    "Research Writing": playResearchWriting,
    "Medieval History Quiz": playMedievalHistory,
    "Renaissance Explorer": playRenaissanceExplorer,

    // ===================== Grade 8 =====================
    "Linear Equations": playLinearEquations,
    "Pythagorean Challenge": playPythagoreanChallenge,
    "Physics Intro": playPhysicsIntro,
    "Energy Transformations": playEnergyTransformations,
    "Text Analysis": playTextAnalysis,
    "Argument Writing": playArgumentWriting8,
    "American Revolution Quiz": playAmericanRevolution,
    "Civil War Explorer": playCivilWarExplorer,

    // ===================== Grade 9 =====================
    "Algebra I Challenge": playAlgebra1,
    "Linear Functions": playLinearFunctions,
    "Biology Basics": playBiologyBasics,
    "Cell Explorer": playCellExplorer,
    "Literary Analysis": playLiteraryAnalysis9,
    "Research Paper": playResearchPaper9,
    "World History Quiz": playWorldHistoryQuiz,
    "Map Skills": playMapSkills,

    // ===================== Grade 10 =====================
    "Geometry Quest": playGeometryQuest,
    "Trigonometry Challenge": playTrigonometryChallenge,
    "Chemistry Basics": playChemistryBasics,
    "Genetics Puzzle": playGeneticsPuzzle,
    "Essay Builder": playEssayBuilder,
    "Literary Analysis": playLiteraryAnalysis10,
    "Modern World History": playModernWorldHistory,
    "Timeline Challenge": playTimelineChallenge10,

    // ===================== Grade 11 =====================
    "Algebra II Challenge": playAlgebraII,
    "Quadratic Functions": playQuadraticFunctions,
    "Physics Concepts": playPhysicsConcepts,
    "Chemistry Explorer": playChemistryExplorer,
    "American Literature Quiz": playAmericanLiterature,
    "Argument Builder": playArgumentBuilder,
    "U.S. History Quiz": playUSHistory,
    "Government Basics": playGovernmentBasics11,

    // ===================== Grade 12 =====================
    "Pre-Calculus Puzzle": playPreCalculusPuzzle,
    "Trig Functions Challenge": playTrigFunctionsChallenge,
    "Advanced Physics Game": playAdvancedPhysics,
    "Environmental Science Quiz": playEnvironmentalScience,
    "Literary Criticism Challenge": playLiteraryCriticism,
    "Research Essay Game": playResearchEssay,
    "Civics Simulation": playCivicsSimulation,
    "Economics Puzzle": playEconomicsPuzzle,

    // ===================== Extra Courses =====================
    "Drawing Basics": playDrawingBasics,
    "Coloring Challenge": playDrawingBasics,
    "Note Recognition": playNoteRecognition,
    "Rhythm Practice": playNoteRecognition,
    "Simple Recipes": playSimpleRecipes,
    "Fruit Tasting Game": playSimpleRecipes,
    "Nutrition Basics": playNutritionBasics,
    "Exercise Fun": playExerciseFun,
    "Acting Faces": playActingFaces,
    "Story Role Play": playStoryRolePlay,
    "Intro Coding": playIntroCoding,
    "Logic Puzzles": playIntroCoding,
    "Safe Clicking": playSafeClicking,
    "Digital Rules": playSafeClicking,
    "Spanish Basics": playSpanishBasics,
    "French Basics": playFrenchBasics,
    "Money Basics": playMoneyBasics,
    "Buying & Selling": playBuyingSelling,
    "Logic Game": playLogicGame,
    "Critical Thinking": playCriticalThinking,
    "Plant Sorting": playPlantSorting,
    "Animal Habitats": playAnimalHabitats
  };

  if (gameMap[game]) gameMap[game]();
  else alert(`${game} is coming soon!`);
}

// ============================
// PLACEHOLDER FUNCTIONS FOR ALL GAMES
// ============================
function playPreKGame(subject, game) {

  // ---------- MATH ----------
  if (subject === "Math" && game === "Number Fun") {
    const num = Math.floor(Math.random() * 5) + 1;
    const stars = "⭐".repeat(num);
    const answer = prompt(`Count the stars:\n\n${stars}`);
    alert(parseInt(answer) === num ? "Correct! 🎉" : `Nice try! It was ${num}`);
    return;
  }

  if (subject === "Math" && game === "Shape Explorer") {
    const shapes = ["Circle", "Square", "Triangle"];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const answer = prompt(`Guess the shape:\n\nStarts with "${shape[0]}"`);
    alert(answer?.toLowerCase() === shape.toLowerCase()
      ? "Correct! 🎉"
      : `Good try! It was ${shape}`);
    return;
  }

  // ---------- LANGUAGE ----------
  if (subject === "Language" && game === "Alphabet Adventure") {
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const answer = prompt(`What letter is this?\n\n${letter}`);
    alert(answer?.toUpperCase() === letter
      ? "Correct! 🎉"
      : `Nice try! That was ${letter}`);
    return;
  }

  if (subject === "Language" && game === "Word Match") {
    const words = ["cat", "dog", "sun"];
    const word = words[Math.floor(Math.random() * words.length)];
    const answer = prompt(`Type this word:\n\n${word}`);
    alert(answer?.toLowerCase() === word
      ? "Correct! 🎉"
      : `Good try! It was "${word}"`);
    return;
  }

  // ---------- SCIENCE ----------
  if (subject === "Science" && game === "Senses Game") {
    const questions = [
      { q: "Which sense helps you hear?", a: "hear" },
      { q: "Which sense helps you smell?", a: "smell" },
      { q: "Which sense helps you see?", a: "see" }
    ];
    const item = questions[Math.floor(Math.random() * questions.length)];
    const answer = prompt(item.q);
    alert(answer?.toLowerCase() === item.a
      ? "Correct! 🎉"
      : `Nice try! The answer was ${item.a}`);
    return;
  }

  if (subject === "Science" && game === "Animal Explorer") {
    const animals = ["lion", "elephant", "giraffe"];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    const answer = prompt(`Guess the animal:\n\nStarts with "${animal[0]}"`);
    alert(answer?.toLowerCase() === animal
      ? "Correct! 🎉"
      : `Good try! It was a ${animal}`);
    return;
  }

  // ---------- FALLBACK ----------
  alert(`${game} is coming soon!`);
}

function playCountingChallenge() { alert("Counting Challenge!"); }
function playPatternBuilder() { alert("Pattern Builder!"); }
function playLetterSounds() { alert("Letter Sounds!"); }
function playSightWords() { alert("Sight Words!"); }
function playSeasonsGame() { alert("Seasons Game!"); }
function playBodyPartsPuzzle() { alert("Body Parts Puzzle!"); }

function playAdditionRace() { alert("Addition Race!"); }
function playSubtractionPuzzle() { alert("Subtraction Puzzle!"); }
function playPlantExplorer() { alert("Plant Explorer!"); }
function playAnimalMatch() { alert("Animal Match!"); }
function playSentenceBuilder() { alert("Sentence Builder!"); }
function playReadingComprehension1() { alert("Reading Comprehension!"); }
function playAncientCivilizationsQuiz1() { alert("Ancient Civilizations Quiz!"); }
function playTimelineChallenge1() { alert("Timeline Challenge!"); }

function playNumberBonds() { alert("Number Bonds!"); }
function playMoneyMania() { alert("Money Mania!"); }
function playEarthMaterials() { alert("Earth Materials!"); }
function playLifeCycles() { alert("Life Cycles!"); }
function playReadingComprehension2() { alert("Reading Comprehension!"); }
function playSpellingBee() { alert("Spelling Bee!"); }
function playLocalHistoryQuiz() { alert("Local History Quiz!"); }
function playCommunityExplorer() { alert("Community Explorer!"); }

function playMultiplicationChallenge() { alert("Multiplication Challenge!"); }
function playFractionsFun() { alert("Fractions Fun!"); }
function playEcosystemAdventure() { alert("Ecosystem Adventure!"); }
function playForceExplorer() { alert("Force Explorer!"); }
function playStorySummary() { alert("Story Summary!"); }
function playVocabularyBuilder() { alert("Vocabulary Builder!"); }
function playAncientCivilizationsQuiz3() { alert("Ancient Civilizations Quiz!"); }
function playTimelineChallenge3() { alert("Timeline Challenge!"); }

function playDecimalsFun() { alert("Decimals Fun!"); }
function playAreaPerimeter() { alert("Area & Perimeter!"); }
function playElectricityExplorer() { alert("Electricity Explorer!"); }
function playFoodWebChallenge() { alert("Food Web Challenge!"); }
function playFigurativeLanguage() { alert("Figurative Language!"); }
function playParagraphBuilder() { alert("Paragraph Builder!"); }
function playExplorersQuiz() { alert("Explorers Quiz!"); }
function playColonialTimes() { alert("Colonial Times Challenge!"); }

function playVolumeMeasurement() { alert("Volume & Measurement!"); }
function playFractionsOperations() { alert("Fractions Operations!"); }
function playHumanBodySystems() { alert("Human Body Systems!"); }
function playSimpleMachines() { alert("Simple Machines!"); }
function playCompareTexts() { alert("Compare Texts Game!"); }
function playResearchProject() { alert("Research Project!"); }
function playRevolutionQuiz() { alert("Revolution Quiz!"); }
function playGovernmentBasics() { alert("Government Basics!"); }

// ...and so on for Grades 6 → 12 + Extra Courses
function playRatiosRates() { alert("Ratios & Rates!"); }
function playExpressionsEquations() { alert("Expressions & Equations!"); }
function playCellsMicrobiology() { alert("Cells & Microbiology!"); }
function playMatterExplorer() { alert("Matter Explorer!"); }
function playLiteraryElements() { alert("Literary Elements Quiz!"); }
function playArgumentWriting() { alert("Argument Writing!"); }
function playWorldGeography() { alert("World Geography Quiz!"); }
function playAncientCivilizations6() { alert("Ancient Civilizations!"); }

function playProportionalRelationships() { alert("Proportional Relationships!"); }
function playScaleDrawings() { alert("Scale Drawings!"); }
function playGeneticsBasics() { alert("Genetics Basics!"); }
function playEcosystemDiversity() { alert("Ecosystem Diversity!"); }
function playThemeAnalysis() { alert("Theme Analysis!"); }
function playResearchWriting() { alert("Research Writing!"); }
function playMedievalHistory() { alert("Medieval History Quiz!"); }
function playRenaissanceExplorer() { alert("Renaissance Explorer!"); }

function playLinearEquations() { alert("Linear Equations!"); }
function playPythagoreanChallenge() { alert("Pythagorean Challenge!"); }
function playPhysicsIntro() { alert("Physics Intro!"); }
function playEnergyTransformations() { alert("Energy Transformations!"); }
function playTextAnalysis() { alert("Text Analysis!"); }
function playArgumentWriting8() { alert("Argument Writing!"); }
function playAmericanRevolution() { alert("American Revolution Quiz!"); }
function playCivilWarExplorer() { alert("Civil War Explorer!"); }

function playAlgebra1() { alert("Algebra I Challenge!"); }
function playLinearFunctions() { alert("Linear Functions!"); }
function playBiologyBasics() { alert("Biology Basics!"); }
function playCellExplorer() { alert("Cell Explorer!"); }
function playLiteraryAnalysis9() { alert("Literary Analysis!"); }
function playResearchPaper9() { alert("Research Paper!"); }
function playWorldHistoryQuiz() { alert("World History Quiz!"); }
function playMapSkills() { alert("Map Skills!"); }

function playGeometryQuest() { alert("Geometry Quest!"); }
function playTrigonometryChallenge() { alert("Trigonometry Challenge!"); }
function playChemistryBasics() { alert("Chemistry Basics!"); }
function playGeneticsPuzzle() { alert("Genetics Puzzle!"); }
function playEssayBuilder() { alert("Essay Builder!"); }
function playLiteraryAnalysis10() { alert("Literary Analysis!"); }
function playModernWorldHistory() { alert("Modern World History!"); }
function playTimelineChallenge10() { alert("Timeline Challenge!"); }

function playAlgebraII() { alert("Algebra II Challenge!"); }
function playQuadraticFunctions() { alert("Quadratic Functions!"); }
function playPhysicsConcepts() { alert("Physics Concepts!"); }
function playChemistryExplorer() { alert("Chemistry Explorer!"); }
function playAmericanLiterature() { alert("American Literature Quiz!"); }
function playArgumentBuilder() { alert("Argument Builder!"); }
function playUSHistory() { alert("U.S. History Quiz!"); }
function playGovernmentBasics11() { alert("Government Basics!"); }

function playPreCalculusPuzzle() { alert("Pre-Calculus Puzzle!"); }
function playTrigFunctionsChallenge() { alert("Trig Functions Challenge!"); }
function playAdvancedPhysics() { alert("Advanced Physics Game!"); }
function playEnvironmentalScience() { alert("Environmental Science Quiz!"); }
function playLiteraryCriticism() { alert("Literary Criticism Challenge!"); }
function playResearchEssay() { alert("Research Essay Game!"); }
function playCivicsSimulation() { alert("Civics Simulation!"); }
function playEconomicsPuzzle() { alert("Economics Puzzle!"); }

// ===================== Extra Courses =====================
function playDrawingBasics() { alert("Drawing Basics!"); }
function playNoteRecognition() { alert("Note Recognition!"); }
function playSimpleRecipes() { alert("Simple Recipes!"); }
function playSafeClicking() { alert("Safe Clicking!"); }
function playNutritionBasics() { alert("Nutrition Basics!"); }
function playExerciseFun() { alert("Exercise Fun!"); }
function playActingFaces() { alert("Acting Faces!"); }
function playStoryRolePlay() { alert("Story Role Play!"); }
function playIntroCoding() { alert("Intro Coding!"); }
function playLogicPuzzles() { alert("Logic Puzzles!"); }
function playSpanishBasics() { alert("Spanish Basics!"); }
function playFrenchBasics() { alert("French Basics!"); }
function playMoneyBasics() { alert("Money Basics!"); }
function playBuyingSelling() { alert("Buying & Selling!"); }
function playLogicGame() { alert("Logic Game!"); }
function playCriticalThinking() { alert("Critical Thinking!"); }
function playPlantSorting() { alert("Plant Sorting!"); }
function playAnimalHabitats() { alert("Animal Habitats!"); }