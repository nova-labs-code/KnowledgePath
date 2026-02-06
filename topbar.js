// ------------------- Grades / Sections -------------------
const gradesData = [
  { grade: "Pre-K" },
  { grade: "Kindergarten" },
  { grade: "Grade 1" },
  { grade: "Grade 2" },
  { grade: "Grade 3" },
  { grade: "Grade 4" },
  { grade: "Grade 5" },
  { grade: "Grade 6" },
  { grade: "Grade 7" },
  { grade: "Grade 8" },
  { grade: "Grade 9" },
  { grade: "Grade 10" },
  { grade: "Grade 11" },
  { grade: "Grade 12" },
  { grade: "Extra Courses" }
];

// ------------------- Create Top Bar -------------------
const topBar = document.createElement("nav");
topBar.classList.add("top-bar");

// Logo on left
const logo = document.createElement("img");
logo.src = "logos/btnLogo.png";
logo.alt = "Knowledge Path Logo";
logo.classList.add("top-logo");
topBar.appendChild(logo);

// Container for links
const linksContainer = document.createElement("div");
linksContainer.classList.add("links-container");

// Create a link for each grade
gradesData.forEach(item => {
  const link = document.createElement("a");
  link.href = `#${item.grade.replace(/\s+/g, "")}`;
  link.textContent = item.grade;
  link.classList.add("top-link");
  linksContainer.appendChild(link);
});

// Append links to top bar
topBar.appendChild(linksContainer);

// Insert top bar at top of body
document.body.prepend(topBar);