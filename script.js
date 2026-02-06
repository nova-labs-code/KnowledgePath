document.addEventListener("DOMContentLoaded", () => {
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

  const container = document.getElementById("grades-container");

  if (!container) {
    console.error("No container found for grades!");
    return;
  }

  gradesData.forEach(item => {
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("grade-link");

    const link = document.createElement("a");
    // Now points to the correct folder inside games/
    link.href = `games/${item.grade.replace(/\s+/g,"")}/index.html`;
    link.textContent = item.grade;
    link.classList.add("grade-btn");

    gradeDiv.appendChild(link);
    container.appendChild(gradeDiv);
  });
});