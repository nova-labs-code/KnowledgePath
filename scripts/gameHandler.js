// ============================
// LAUNCH GAME FUNCTION
// ============================
function launchGame(grade, subject, game) {
  const gameMap = {
    // Pre-K Math
    "Number Fun": playNumberFun,
    "Shape Explorer": playShapeExplorer,
    // Pre-K Language
    "Alphabet Adventure": playAlphabetAdventure,
    "Word Match": playWordMatch,
    // Pre-K Science
    "Senses Game": playSensesGame,
    "Animal Explorer": playAnimalExplorer
  };

  if (gameMap[game]) gameMap[game]();
  else alert(`${game} is coming soon!`);
}

// ============================
// PRE-K MATH
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

// ============================
// PRE-K LANGUAGE
// ============================
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

// ============================
// PRE-K SCIENCE
// ============================
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