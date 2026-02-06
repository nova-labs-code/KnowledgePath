// Get the lesson container
const lessonContainer = document.getElementById('lesson-container');
lessonContainer.innerHTML = ""; // clear previous

// --- Lesson Title ---
const title = document.createElement('h2');
title.textContent = "Lesson 1: Letters, Counting, and Animals";
lessonContainer.appendChild(title);

// --- Reading Section ---
const readingTitle = document.createElement('h3');
readingTitle.textContent = "Reading: Letters A & B";
lessonContainer.appendChild(readingTitle);

const readingInstructions = document.createElement('p');
readingInstructions.textContent = "Click a letter to hear its sound. Try to pronounce it yourself!";
lessonContainer.appendChild(readingInstructions);

const lettersDiv = document.createElement('div');
lettersDiv.className = "lesson-section";

['A','B'].forEach(letter => {
  const btn = document.createElement('button');
  btn.textContent = letter;
  btn.onclick = () => {
    // Speak the letter
    const utter = new SpeechSynthesisUtterance(letter);
    speechSynthesis.speak(utter);

    alert("Try saying the letter out loud!");
  };
  lettersDiv.appendChild(btn);
});
lessonContainer.appendChild(lettersDiv);

// --- Math Section ---
const mathTitle = document.createElement('h3');
mathTitle.textContent = "Math: Count Objects";
lessonContainer.appendChild(mathTitle);

const mathInstructions = document.createElement('p');
mathInstructions.textContent = "Count the apples and click the number you think is correct.";
lessonContainer.appendChild(mathInstructions);

const mathDiv = document.createElement('div');
mathDiv.className = "lesson-section";

// Example: show 3 apples
const apples = document.createElement('span');
apples.textContent = "🍎 🍎 🍎";
apples.style.fontSize = "2rem";
lessonContainer.appendChild(apples);

for(let i = 1; i <= 5; i++){
  const btn = document.createElement('button');
  btn.textContent = i;
  btn.onclick = () => {
    // Speak number clicked
    const utter = new SpeechSynthesisUtterance(i.toString());
    speechSynthesis.speak(utter);

    alert("Did you count carefully? Try again if unsure!");
  };
  mathDiv.appendChild(btn);
}
lessonContainer.appendChild(mathDiv);

// --- Science Section ---
const scienceTitle = document.createElement('h3');
scienceTitle.textContent = "Science: Identify the Animal Sound";
lessonContainer.appendChild(scienceTitle);

const sciInstructions = document.createElement('p');
sciInstructions.textContent = "Click an animal to hear its sound. Try to guess which animal it is!";
lessonContainer.appendChild(sciInstructions);

const sciDiv = document.createElement('div');
sciDiv.className = "lesson-section";

['Dog','Cat','Bird'].forEach(animal=>{
  const btn = document.createElement('button');
  btn.textContent = animal;
  btn.onclick = () => {
    let sound;
    if(animal === 'Dog') sound = "Woof!";
    else if(animal === 'Cat') sound = "Meow!";
    else if(animal === 'Bird') sound = "Tweet!";
    
    // Speak the sound
    const utter = new SpeechSynthesisUtterance(sound);
    speechSynthesis.speak(utter);

    alert("What animal makes this sound?");
  };
  sciDiv.appendChild(btn);
});
lessonContainer.appendChild(sciDiv);