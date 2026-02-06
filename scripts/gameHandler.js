// ============================
// LAUNCH GAME FUNCTION
// ============================
function launchGame(grade, subject, game) {
  const gameMap = {
    // ========== PRE-K ==========
    "Number Fun": playNumberFun,
    "Shape Explorer": playShapeExplorer,
    "Alphabet Adventure": playAlphabetAdventure,
    "Word Match": playWordMatch,
    "Senses Game": playSensesGame,
    "Animal Explorer": playAnimalExplorer,

    // ========== Kindergarten ==========
    "Counting Challenge": playCountingChallenge,
    "Pattern Builder": playPatternBuilder,
    "Letter Sounds": playLetterSounds,
    "Sight Words": playSightWords,
    "Seasons Game": playSeasonsGame,
    "Body Parts Puzzle": playBodyPartsPuzzle,

    // ========== Grade 1 ==========
    "Addition Race": playAdditionRace,
    "Subtraction Puzzle": playSubtractionPuzzle,
    "Plant Explorer": playPlantExplorer,
    "Animal Match": playAnimalMatch,
    "Sentence Builder": playSentenceBuilder,
    "Reading Comprehension": playReadingComprehension1,

    // ========== Extra Courses ==========
    "Drawing Basics": playDrawingBasics,
    "Coloring Challenge": playDrawingBasics,
    "Note Recognition": playNoteRecognition,
    "Rhythm Practice": playNoteRecognition,
    "Simple Recipes": playSimpleRecipes,
    "Fruit Tasting Game": playSimpleRecipes,
    "Safe Clicking": playSafeClicking,
    "Digital Rules": playSafeClicking,
    "Intro Coding": playIntroCoding,
    "Logic Puzzles": playIntroCoding
  };

  if (gameMap[game]) gameMap[game]();
  else alert(`${game} is coming soon!`);
}

// ============================
// PRE-K GAMES
// ============================
function playNumberFun() {
  let number = Math.floor(Math.random() * 5) + 1;
  let answer = prompt(`Count these stars: ${'⭐'.repeat(number)}`);
  if (parseInt(answer) === number) alert("Correct! 🎉");
  else alert(`Oops! The correct answer was ${number}`);
}

function playShapeExplorer() {
  const shapes = ["Circle", "Square", "Triangle"];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  let answer = prompt(`Guess the shape: First letter is "${shape[0]}"`);
  if (answer.toLowerCase() === shape.toLowerCase()) alert("Correct! 🎉");
  else alert(`Oops! It was a ${shape}`);
}

function playAlphabetAdventure() {
  const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  let answer = prompt(`Which letter is this? "${letter}"`);
  if (answer.toUpperCase() === letter) alert("Correct! 🎉");
  else alert(`Oops! It was ${letter}`);
}

function playWordMatch() {
  const words = ["cat", "dog", "sun"];
  const word = words[Math.floor(Math.random() * words.length)];
  let answer = prompt(`Type this word: "${word}"`);
  if (answer.toLowerCase() === word) alert("Correct! 🎉");
  else alert(`Oops! It was "${word}"`);
}

function playSensesGame() {
  const senses = ["touch", "smell", "hear"];
  const sense = senses[Math.floor(Math.random() * senses.length)];
  let answer = prompt(`Which sense is this? Hint: "${sense[0]}..."`);
  if (answer.toLowerCase() === sense) alert("Correct! 🎉");
  else alert(`Oops! It was ${sense}`);
}

function playAnimalExplorer() {
  const animals = ["lion", "elephant", "giraffe"];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  let answer = prompt(`Guess the animal: First letter is "${animal[0]}"`);
  if (answer.toLowerCase() === animal) alert("Correct! 🎉");
  else alert(`Oops! It was ${animal}`);
}

// ============================
// KINDERGARTEN GAMES
// ============================
function playCountingChallenge() {
  let count = Math.floor(Math.random() * 10) + 1;
  let answer = prompt(`Count these apples: ${'🍎'.repeat(count)}`);
  if (parseInt(answer) === count) alert("Correct! 🎉");
  else alert(`Oops! The correct answer was ${count}`);
}

function playPatternBuilder() {
  const pattern = ["⭐", "🌟", "⭐"];
  let answer = prompt(`What comes next? ${pattern.join(" ")} ...`);
  if (answer === "🌟") alert("Correct! 🎉");
  else alert("Oops! It was 🌟");
}

function playLetterSounds() {
  const letters = ["A", "B", "C"];
  const letter = letters[Math.floor(Math.random() * letters.length)];
  let answer = prompt(`Type the sound of "${letter}"`);
  if (answer.toLowerCase() === letter.toLowerCase()) alert("Correct! 🎉");
  else alert(`Oops! It was "${letter}"`);
}

function playSightWords() {
  const words = ["the", "and", "see"];
  const word = words[Math.floor(Math.random() * words.length)];
  let answer = prompt(`Type this word: "${word}"`);
  if (answer.toLowerCase() === word) alert("Correct! 🎉");
  else alert(`Oops! It was "${word}"`);
}

function playSeasonsGame() {
  const seasons = ["Winter", "Spring", "Summer", "Fall"];
  const season = seasons[Math.floor(Math.random() * seasons.length)];
  let answer = prompt(`Which season is it? "${season[0]}..."`);
  if (answer.toLowerCase() === season.toLowerCase()) alert("Correct! 🎉");
  else alert(`Oops! It was ${season}`);
}

function playBodyPartsPuzzle() {
  const parts = ["hand", "foot", "eye"];
  const part = parts[Math.floor(Math.random() * parts.length)];
  let answer = prompt(`Guess the body part: First letter "${part[0]}"`);
  if (answer.toLowerCase() === part) alert("Correct! 🎉");
  else alert(`Oops! It was ${part}`);
}

// ============================
// GRADE 1 GAMES
// ============================
function playAdditionRace() {
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  let answer = prompt(`What is ${a} + ${b}?`);
  if (parseInt(answer) === a + b) alert("Correct! 🎉");
  else alert(`Oops! The correct answer was ${a + b}`);
}

function playSubtractionPuzzle() {
  let a = Math.floor(Math.random() * 10) + 5;
  let b = Math.floor(Math.random() * 5);
  let answer = prompt(`What is ${a} - ${b}?`);
  if (parseInt(answer) === a - b) alert("Correct! 🎉");
  else alert(`Oops! The correct answer was ${a - b}`);
}

function playPlantExplorer() {
  const plants = ["rose", "sunflower", "tulip"];
  const plant = plants[Math.floor(Math.random() * plants.length)];
  let answer = prompt(`Which plant is this? First letter "${plant[0]}"`);
  if (answer.toLowerCase() === plant) alert("Correct! 🎉");
  else alert(`Oops! It was ${plant}`);
}

function playAnimalMatch() {
  const animals = ["dog", "cat", "cow"];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  let answer = prompt(`Guess the animal: First letter "${animal[0]}"`);
  if (answer.toLowerCase() === animal) alert("Correct! 🎉");
  else alert(`Oops! It was ${animal}`);
}

function playSentenceBuilder() {
  const words = ["I", "see", "a", "cat"];
  let answer = prompt(`Arrange these words into a sentence: ${words.join(", ")}`);
  if (answer.toLowerCase().includes("i") && answer.toLowerCase().includes("cat")) alert("Correct! 🎉");
  else alert("Try again!");
}

function playReadingComprehension1() {
  let answer = prompt(`What color is the sun?`);
  if (answer.toLowerCase() === "yellow") alert("Correct! 🌞");
  else alert("Oops! The correct answer was yellow");
}

// ============================
// EXTRA COURSES (Examples)
// ============================
function playDrawingBasics() {
  alert("Pretend to draw a shape on paper! 🎨");
}

function playNoteRecognition() {
  const notes = ["C", "D", "E"];
  let note = notes[Math.floor(Math.random() * notes.length)];
  let answer = prompt(`Which note is this? ${note[0]}...`);
  if (answer.toUpperCase() === note) alert("Correct! 🎶");
  else alert(`Oops! It was ${note}`);
}

function playSimpleRecipes() {
  alert("Pretend to make a sandwich 🍞🧀");
}

function playSafeClicking() {
  let answer = prompt("Should you click unknown links? yes/no");
  if (answer.toLowerCase() === "no") alert("Correct! ✅");
  else alert("Incorrect! Always avoid unknown links.");
}

function playIntroCoding() {
  alert("Try typing this in console: console.log('Hello World!');");
}