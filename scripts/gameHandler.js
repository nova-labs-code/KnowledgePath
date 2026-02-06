console.log("✅ gameHandler.js loaded");

/* =====================================================
   MAIN ENTRY POINT
   ===================================================== */
function launchGame(grade, subject, game) {
  console.log("🎮 launchGame called:", grade, subject, game);

  // Normalize values to avoid invisible mismatch bugs
  const g = grade.trim();
  const s = subject.trim();
  const gm = game.trim();

  if (g === "Pre-K") {
    playPreKGame(s, gm);
    return;
  }

  alert(`${gm} is coming soon!`);
}

/* =====================================================
   PRE-K GAME ENGINE (ALL PRE-K GAMES)
   ===================================================== */
function playPreKGame(subject, game) {
  console.log("🧩 playPreKGame:", subject, game);

  /* ---------- MATH ---------- */
  if (subject === "Math") {

    if (game === "Number Fun") {
      const number = Math.floor(Math.random() * 5) + 1;
      const answer = prompt(`Count the number:\n\n${number}`);
      alert(
        Number(answer) === number
          ? "Correct! 🎉"
          : `Nice try! It was ${number}`
      );
      return;
    }

    if (game === "Shape Explorer") {
      const shapes = ["Circle", "Square", "Triangle"];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const answer = prompt(
        `Guess the shape:\n\nIt starts with "${shape[0]}"`
      );
      alert(
        answer?.toLowerCase() === shape.toLowerCase()
          ? "Correct! 🎉"
          : `It was ${shape}`
      );
      return;
    }
  }

  /* ---------- LANGUAGE ---------- */
  if (subject === "Language") {

    if (game === "Alphabet Adventure") {
      const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      const answer = prompt(`What letter is this?\n\n${letter}`);
      alert(
        answer?.toUpperCase() === letter
          ? "Correct! 🎉"
          : `That was ${letter}`
      );
      return;
    }

    if (game === "Word Match") {
      const words = ["cat", "dog", "sun"];
      const word = words[Math.floor(Math.random() * words.length)];
      const answer = prompt(`Type the word:\n\n${word}`);
      alert(
        answer?.toLowerCase() === word
          ? "Correct! 🎉"
          : `The word was "${word}"`
      );
      return;
    }
  }

  /* ---------- SCIENCE ---------- */
  if (subject === "Science") {

    if (game === "Senses Game") {
      const questions = [
        { q: "Which sense helps you see?", a: "see" },
        { q: "Which sense helps you hear?", a: "hear" },
        { q: "Which sense helps you smell?", a: "smell" }
      ];
      const item = questions[Math.floor(Math.random() * questions.length)];
      const answer = prompt(item.q);
      alert(
        answer?.toLowerCase().includes(item.a)
          ? "Correct! 🎉"
          : `The answer was "${item.a}"`
      );
      return;
    }

    if (game === "Animal Explorer") {
      const animals = ["lion", "elephant", "giraffe"];
      const animal = animals[Math.floor(Math.random() * animals.length)];
      const answer = prompt(
        `Guess the animal:\n\nIt starts with "${animal[0]}"`
      );
      alert(
        answer?.toLowerCase() === animal
          ? "Correct! 🎉"
          : `It was a ${animal}`
      );
      return;
    }
  }

  /* ---------- FALLBACK ---------- */
  console.warn("⚠️ Pre-K game not implemented:", subject, game);
  alert(`${game} is coming soon!`);
}