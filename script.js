document.addEventListener("DOMContentLoaded", () => {
  const gradesData = [
    { grade: "Pre-K", description: "Basics of numbers, letters, and exploration.", duration: "6 months" },
    { grade: "Kindergarten", description: "Counting, letter sounds, and simple science.", duration: "1 year" },
    { grade: "Grade 1", description: "Addition, reading comprehension, and history basics.", duration: "1 year" },
    { grade: "Grade 2", description: "Math, science, English, and local history.", duration: "1 year" },
    { grade: "Grade 3", description: "Multiplication, ecosystems, and storytelling.", duration: "1 year" },
    { grade: "Grade 4", description: "Decimals, electricity, and paragraph writing.", duration: "1 year" },
    { grade: "Grade 5", description: "Fractions, human body, research projects.", duration: "1 year" },
    { grade: "Grade 6", description: "Ratios, cells, and literary elements.", duration: "1 year" },
    { grade: "Grade 7", description: "Proportions, genetics, and research writing.", duration: "1 year" },
    { grade: "Grade 8", description: "Linear equations, physics, and argument writing.", duration: "1 year" },
    { grade: "Grade 9", description: "Algebra I, biology, and world history.", duration: "1 year" },
    { grade: "Grade 10", description: "Geometry, chemistry, and modern history.", duration: "1 year" },
    { grade: "Grade 11", description: "Algebra II, physics, and government basics.", duration: "1 year" },
    { grade: "Grade 12", description: "Pre-Calculus, advanced science, and civics.", duration: "1 year" },
    { grade: "Extra Courses", description: "Art, music, culinary, coding, and more.", duration: "Varies" }
  ];

  const container = document.getElementById("grades-container");

  gradesData.forEach(item => {
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("grade-card");

    const link = document.createElement("a");
    link.href = `games/${item.grade.replace(/\s+/g,"")}/index.html`;
    link.classList.add("grade-link");

    // Grade name
    const gradeName = document.createElement("h2");
    gradeName.textContent = item.grade;
    gradeName.classList.add("grade-name");

    // Description
    const desc = document.createElement("p");
    desc.textContent = item.description;
    desc.classList.add("grade-desc");

    // Duration
    const dur = document.createElement("p");
    dur.textContent = `Recommended: ${item.duration}`;
    dur.classList.add("grade-duration");

    // Add all elements to link
    link.appendChild(gradeName);
    link.appendChild(desc);
    link.appendChild(dur);

    // Add link to card
    gradeDiv.appendChild(link);

    // Add card to container
    container.appendChild(gradeDiv);
  });
});