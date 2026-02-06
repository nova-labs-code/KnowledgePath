const lessonContainer = document.getElementById('lesson-container');
lessonContainer.innerHTML = "";

// --- Lesson Title ---
const title = document.createElement('h2');
title.textContent = "Lesson 1: Kindergarten Overview";
lessonContainer.appendChild(title);

// --- Reading Section ---
const readingTitle = document.createElement('h3');
readingTitle.textContent = "Reading: Letters A & B";
lessonContainer.appendChild(readingTitle);

const readingDesc = document.createElement('p');
readingDesc.textContent = "Click a letter to hear its sound!";
lessonContainer.appendChild(readingDesc);

const letters = ['A', 'B'];
const lettersDiv = document.createElement('div');
lettersDiv.className = "section-buttons";

letters.forEach(letter => {
  const btn = document.createElement('button');
  btn.textContent = letter;
  btn.className = "lesson-button";
  btn.addEventListener('click', () => alert(`You clicked "${letter}"! Its sound is "${letter.toLowerCase()}"`));
  lettersDiv.appendChild(btn);
});

lessonContainer.appendChild(lettersDiv);

// --- Math Section ---
const mathTitle = document.createElement('h3');
mathTitle.textContent = "Math: Count 1–5";
lessonContainer.appendChild(mathTitle);

const mathDesc = document.createElement('p');
mathDesc.textContent = "Click the correct number of apples:";
lessonContainer.appendChild(mathDesc);

const mathPad = document.createElement('div');
mathPad.className = "section-buttons";

for (let i = 1; i <= 5; i++) {
  const btn = document.createElement('button');
  btn.textContent = i;
  btn.className = "lesson-button";
  btn.addEventListener('click', () => {
    if (i === 3) alert("Correct! There are 3 apples 🍎");
    else alert("Try again!");
  });
  mathPad.appendChild(btn);
}

lessonContainer.appendChild(mathPad);

// --- Science Section ---
const scienceTitle = document.createElement('h3');
scienceTitle.textContent = "Science: Identify the Animal";
lessonContainer.appendChild(scienceTitle);

const scienceDesc = document.createElement('p');
scienceDesc.textContent = "Click the animal that says 'Meow':";
lessonContainer.appendChild(scienceDesc);

const animals = ['Dog', 'Cat', 'Bird'];
const animalsDiv = document.createElement('div');
animalsDiv.className = "section-buttons";

animals.forEach(animal => {
  const btn = document.createElement('button');
  btn.textContent = animal;
  btn.className = "lesson-button";
  btn.addEventListener('click', () => {
    if (animal === 'Cat') alert("Correct! Cats say Meow 🐱");
    else alert("Try again!");
  });
  animalsDiv.appendChild(btn);
});

lessonContainer.appendChild(animalsDiv);