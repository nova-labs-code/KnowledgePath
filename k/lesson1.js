// Export a function so it can be called multiple times
export function renderLesson1(container) {
  container.innerHTML = ""; // clear existing content

  // Title
  const title = document.createElement('h2');
  title.textContent = "Lesson 1: Introduction to Letters, Numbers, and Animals";
  container.appendChild(title);

  // Reading Section
  const readingTitle = document.createElement('h3');
  readingTitle.textContent = "Subject: Reading";
  container.appendChild(readingTitle);

  const readingDesc = document.createElement('p');
  readingDesc.textContent = "Today we will learn about the letters A and B. Click each letter to hear its pronunciation.";
  container.appendChild(readingDesc);

  const lettersDiv = document.createElement('div');
  lettersDiv.className = "lesson-section";
  ['A','B'].forEach(letter => {
    const btn = document.createElement('button');
    btn.textContent = letter;
    btn.onclick = () => alert(`Letter "${letter}" is pronounced "${letter.toLowerCase()}"`);
    lettersDiv.appendChild(btn);
  });
  container.appendChild(lettersDiv);

  // Math Section
  const mathTitle = document.createElement('h3');
  mathTitle.textContent = "Subject: Math";
  container.appendChild(mathTitle);

  const mathDesc = document.createElement('p');
  mathDesc.textContent = "We will practice counting from 1 to 5. Click the correct number of apples.";
  container.appendChild(mathDesc);

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
  container.appendChild(mathDiv);

  // Science Section
  const sciTitle = document.createElement('h3');
  sciTitle.textContent = "Subject: Science";
  container.appendChild(sciTitle);

  const sciDesc = document.createElement('p');
  sciDesc.textContent = "Identify the animal that says 'Meow'. Click the correct animal.";
  container.appendChild(sciDesc);

  const sciDiv = document.createElement('div');
  sciDiv.className = "lesson-section";
  ['Dog','Cat','Bird'].forEach(animal => {
    const btn = document.createElement('button');
    btn.textContent = animal;
    btn.onclick = () => {
      if(animal==='Cat') alert("Correct! Cats say Meow 🐱");
      else alert("Try again!");
    };
    sciDiv.appendChild(btn);
  });
  container.appendChild(sciDiv);
}