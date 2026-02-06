// This JS runs when the user clicks Lesson 1
const lessonContainer = document.getElementById('lesson-container');

// Add title
const title = document.createElement('h2');
title.textContent = "Lesson 1: Letters A & B, Counting 1–5, Animals";
lessonContainer.appendChild(title);

// Reading Section
const readingTitle = document.createElement('h3');
readingTitle.textContent = "Reading: Letters A & B";
lessonContainer.appendChild(readingTitle);

const lettersDiv = document.createElement('div');
lettersDiv.className = "lesson-section";
['A','B'].forEach(letter => {
  const btn = document.createElement('button');
  btn.textContent = letter;
  btn.onclick = () => alert(`You clicked "${letter}"!`);
  lettersDiv.appendChild(btn);
});
lessonContainer.appendChild(lettersDiv);

// Math Section
const mathTitle = document.createElement('h3');
mathTitle.textContent = "Math: Count 1–5";
lessonContainer.appendChild(mathTitle);

const mathDiv = document.createElement('div');
mathDiv.className = "lesson-section";
for(let i=1;i<=5;i++){
  const btn = document.createElement('button');
  btn.textContent = i;
  btn.onclick = () => {
    if(i===3) alert("Correct! There are 3 apples 🍎");
    else alert("Try again!");
  };
  mathDiv.appendChild(btn);
}
lessonContainer.appendChild(mathDiv);

// Science Section
const sciTitle = document.createElement('h3');
sciTitle.textContent = "Science: Identify the Animal";
lessonContainer.appendChild(sciTitle);

const sciDiv = document.createElement('div');
sciDiv.className = "lesson-section";
['Dog','Cat','Bird'].forEach(animal=>{
  const btn=document.createElement('button');
  btn.textContent=animal;
  btn.onclick = () => {
    if(animal==='Cat') alert("Correct! Cats say Meow 🐱");
    else alert("Try again!");
  };
  sciDiv.appendChild(btn);
});
lessonContainer.appendChild(sciDiv);