const gradesData = [
  { grade: "Pre-K", label: "Pre-K" },
  { grade: "Kindergarten", label: "K" },
  { grade: "Grade 1", label: "G1" },
  { grade: "Grade 2", label: "G2" },
  { grade: "Grade 3", label: "G3" },
  { grade: "Grade 4", label: "G4" },
  { grade: "Grade 5", label: "G5" },
  { grade: "Grade 6", label: "G6" },
  { grade: "Grade 7", label: "G7" },
  { grade: "Grade 8", label: "G8" },
  { grade: "Grade 9", label: "G9" },
  { grade: "Grade 10", label: "G10" },
  { grade: "Grade 11", label: "G11" },
  { grade: "Grade 12", label: "G12" },
  { grade: "Extra Courses", label: "Extras" }
];

const topBar = document.createElement("nav");
topBar.classList.add("top-bar");

// btnLogo goes home
const logo = document.createElement("img");
logo.src = "logos/btnLogo.png";
logo.alt = "Knowledge Path Logo";
logo.classList.add("top-logo");
logo.addEventListener("click", () => window.location.href = "index.html");
topBar.appendChild(logo);

// Scroll container for links
const scrollWrapper = document.createElement("div");
scrollWrapper.classList.add("scroll-wrapper");

// Left arrow
const leftArrow = document.createElement("button");
leftArrow.classList.add("scroll-btn", "left-arrow");
leftArrow.innerHTML = "&#10094;";
scrollWrapper.appendChild(leftArrow);

// Links container
const linksContainer = document.createElement("div");
linksContainer.classList.add("links-container");

gradesData.forEach(item => {
  const link = document.createElement("a");
  const url = item.grade.replace(/\s+/g,""); // remove spaces for href
  link.href = `${url}.html`;
  link.textContent = item.label;
  link.classList.add("top-link");
  linksContainer.appendChild(link);
});

scrollWrapper.appendChild(linksContainer);

// Right arrow
const rightArrow = document.createElement("button");
rightArrow.classList.add("scroll-btn", "right-arrow");
rightArrow.innerHTML = "&#10095;";
scrollWrapper.appendChild(rightArrow);

topBar.appendChild(scrollWrapper);
document.body.prepend(topBar);

// Scroll functionality
leftArrow.addEventListener("click", () => {
  linksContainer.scrollBy({ left: -150, behavior: "smooth" });
});
rightArrow.addEventListener("click", () => {
  linksContainer.scrollBy({ left: 150, behavior: "smooth" });
});