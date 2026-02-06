const lessonContainer = document.getElementById('lesson-container');
lessonContainer.innerHTML = "";

// Title
const title = document.createElement('h2');
title.textContent = "Lesson 1: Kindergarten Overview";
lessonContainer.appendChild(title);

// Reading Section
const readingTitle = document.createElement('h3');
readingTitle.textContent = "Reading: Letters A & B";
lessonContainer.appendChild(readingTitle);

const readingDesc = document.createElement('p');
readingDesc.textContent = "Click a letter to hear its sound!";
lessonContainer.appendChild(readingDesc);

const lettersDiv = document.createElement('div');
lettersDiv.className = "section-buttons";
['A','B'].forEach(l => {
  const btn = document.createElement('button');
  btn.textContent = l;
  btn.className = "lesson-button";
  btn.onclick = () => alert(`You clicked "${l}"! Its sound is "${l.toLowerCase()}"`);
  lettersDiv.appendChild(btn);
});
lessonContainer.appendChild(lettersDiv);

// Math Section
const mathTitle = document.createElement('h3');
mathTitle.textContent = "Math: Count 1–5";
lessonContainer.appendChild(mathTitle);

const mathDesc = document.createElement('p');
mathDesc.textContent = "Click the correct number of apples:";
lessonContainer.appendChild(mathDesc);

const mathDiv = document.createElement('div');
mathDiv.className = "section-buttons";
for(let i=1;i<=5;i++){
  const btn = document.createElement('button');
  btn.textContent = i;
  btn.className = "lesson-button";
  btn.onclick = () => {
    if(i===3) alert("Correct! There are 3 apples 🍎");
    else alert("Try again!");
  };
  mathDiv.appendChild(btn);
}
lessonContainer.appendChild(mathDiv);

// Science Section
const scienceTitle = document.createElement('h3');
scienceTitle.textContent = "Science: Identify the Animal";
lessonContainer.appendChild(scienceTitle);

const scienceDesc = document.createElement('p');
scienceDesc.textContent = "Click the animal that says 'Meow':";
lessonContainer.appendChild(scienceDesc);

const animalsDiv = document.createElement('div');
animalsDiv.className = "section-buttons";
['Dog','Cat','Bird'].forEach(a=>{
  const btn = document.createElement('button');
  btn.textContent = a;
  btn.className = "lesson-button";
  btn.onclick = () => {
    if(a==='Cat') alert("Correct! Cats say Meow 🐱");
    else alert("Try again!");
  };
  animalsDiv.appendChild(btn);
});
lessonContainer.appendChild(animalsDiv);