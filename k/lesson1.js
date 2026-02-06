const lessonContainer = document.getElementById("lesson-container");
lessonContainer.innerHTML = "";

/* ---------- Helper: play sound ---------- */
function playSound(file) {
  const audio = new Audio(`sfxs/${file}.mp3`);
  audio.play();
}

/* ---------- Lesson Title ---------- */
const title = document.createElement("h2");
title.textContent = "Lesson 1";
lessonContainer.appendChild(title);

/* ==================================================
   READING
================================================== */
const reading = document.createElement("div");
reading.className = "lesson-section";

reading.innerHTML = `
  <h3>Reading</h3>
  <p>Tap a letter and say the sound out loud.</p>
`;

["A", "B"].forEach(letter => {
  const btn = document.createElement("button");
  btn.textContent = letter;
  btn.onclick = () => playSound(letter);
  reading.appendChild(btn);
});

lessonContainer.appendChild(reading);

/* ==================================================
   MATH
================================================== */
const math = document.createElement("div");
math.className = "lesson-section";

math.innerHTML = `
  <h3>Math</h3>
  <p>Tap a number to practice counting.</p>
`;

const numPad = document.createElement("div");
numPad.className = "lesson-section";

[1, 2, 3, 4, 5].forEach(num => {
  const btn = document.createElement("button");
  btn.textContent = num;
  btn.onclick = () => playSound(num);
  numPad.appendChild(btn);
});

math.appendChild(numPad);
lessonContainer.appendChild(math);

/* ==================================================
   SCIENCE
================================================== */
const science = document.createElement("div");
science.className = "lesson-section";

science.innerHTML = `
  <h3>Science</h3>
  <p>Tap a button to learn animal sounds.</p>
`;

[
  { emoji: "🐶", sound: "Dog" },
  { emoji: "🐱", sound: "Cat" },
  { emoji: "🐦", sound: "Bird" }
].forEach(item => {
  const btn = document.createElement("button");
  btn.textContent = item.emoji;
  btn.style.fontSize = "2rem";
  btn.onclick = () => playSound(item.sound);
  science.appendChild(btn);
});

lessonContainer.appendChild(science);