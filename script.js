// Grades data
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

// Render grade links
const container = document.getElementById("grades-container");

if (!container) {
  console.error("No container found for grades!");
} else {
  gradesData.forEach(item => {
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("grade-link");

    const link = document.createElement("a");
    link.href = `${item.grade.replace(/\s+/g,"")}.html`; // HTML file for the grade
    link.textContent = item.grade;
    link.classList.add("grade-btn");

    gradeDiv.appendChild(link);
    container.appendChild(gradeDiv);
  });
}