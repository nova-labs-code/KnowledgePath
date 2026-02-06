// ------------------- Top Bar -------------------
const gradesData = [
  "Pre-K", "Kindergarten", "Grade 1", "Grade 2", "Grade 3",
  "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8",
  "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Extra Courses"
];

const topBar = document.createElement("nav");
topBar.classList.add("top-bar");

// Logo (btnLogo) goes to home
const logo = document.createElement("img");
logo.src = "logos/btnLogo.png";
logo.alt = "Knowledge Path Logo";
logo.classList.add("top-logo");
logo.addEventListener("click", () => {
  window.location.href = "index.html"; // btnLogo takes user home
});
topBar.appendChild(logo);

// Links container
const linksContainer = document.createElement("div");
linksContainer.classList.add("links-container");

// Create a horizontal link for each grade
gradesData.forEach(grade => {
  const link = document.createElement("a");
  link.href = `${grade.replace(/\s+/g, "")}.html`; // each grade has own html
  link.textContent = grade;
  link.classList.add("top-link");
  linksContainer.appendChild(link);
});

topBar.appendChild(linksContainer);

// Add top bar to body
document.body.prepend(topBar);