// K-12 grades data
const grades = [
  { name: "Kindergarten", link: "k.html" },
  { name: "Grade 1", link: "grade1.html" },
  { name: "Grade 2", link: "grade2.html" },
  { name: "Grade 3", link: "grade3.html" },
  { name: "Grade 4", link: "grade4.html" },
  { name: "Grade 5", link: "grade5.html" },
  { name: "Grade 6", link: "grade6.html" },
  { name: "Grade 7", link: "grade7.html" },
  { name: "Grade 8", link: "grade8.html" },
  { name: "Grade 9", link: "grade9.html" },
  { name: "Grade 10", link: "grade10.html" },
  { name: "Grade 11", link: "grade11.html" },
  { name: "Grade 12", link: "grade12.html" }
];

// Select the container
const container = document.getElementById('grades-container');

// Generate cards dynamically
grades.forEach(grade => {
  const card = document.createElement('div');
  card.className = 'grade-card';

  const link = document.createElement('a');
  link.className = 'grade-link';
  link.href = grade.link;

  link.innerHTML = `<h3 class="grade-name">${grade.name}</h3>`;

  card.appendChild(link);
  container.appendChild(card);
});