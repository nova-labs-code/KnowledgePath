document.addEventListener("DOMContentLoaded", () => {
  const gradesData = [
    { 
      grade: "Pre-K", 
      description: "Introduce children to basic numbers, shapes, letters, and simple problem-solving through fun activities and games.", 
      duration: "6 months" 
    },
    { 
      grade: "Kindergarten", 
      description: "Develop early literacy and numeracy skills, learn to recognize letters and numbers, and explore basic science concepts.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 1", 
      description: "Build foundational math and reading skills, start understanding simple science and history concepts, and develop critical thinking.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 2", 
      description: "Enhance reading comprehension, basic writing, arithmetic, and explore natural sciences and community history.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 3", 
      description: "Learn multiplication, fractions, ecosystems, force and energy, storytelling, and vocabulary expansion.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 4", 
      description: "Develop skills in decimals, measurement, electricity, food webs, writing paragraphs, and exploring historical explorers.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 5", 
      description: "Master fractions, volume, human body systems, simple machines, research projects, and early government basics.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 6", 
      description: "Understand ratios, rates, cells, microbiology, literary elements, argument writing, and world geography.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 7", 
      description: "Explore proportional relationships, genetics, ecosystems, theme analysis, research writing, and medieval history.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 8", 
      description: "Learn linear equations, physics, energy transformations, text analysis, and key events in American history.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 9", 
      description: "Study Algebra I, biology, cell structure, literary analysis, and world history foundations.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 10", 
      description: "Advance in geometry, trigonometry, chemistry, essay writing, and explore modern world history.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 11", 
      description: "Focus on Algebra II, physics concepts, American literature, argument writing, and U.S. history.", 
      duration: "1 year" 
    },
    { 
      grade: "Grade 12", 
      description: "Learn pre-calculus, advanced physics, environmental science, literary criticism, civics, and economics basics.", 
      duration: "1 year" 
    },
    { 
      grade: "Extra Courses", 
      description: "Explore optional subjects including art, music, culinary, computer science, internet safety, and foreign languages.", 
      duration: "Varies" 
    }
  ];

  const container = document.getElementById("grades-container");

  gradesData.forEach(item => {
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("grade-card");

    const link = document.createElement("a");
    link.href = `games/${item.grade.replace(/\s+/g,"")}/index.html`;
    link.classList.add("grade-link");

    const gradeName = document.createElement("h2");
    gradeName.textContent = item.grade;
    gradeName.classList.add("grade-name");

    const desc = document.createElement("p");
    desc.textContent = item.description;
    desc.classList.add("grade-desc");

    const dur = document.createElement("p");
    dur.textContent = `Recommended: ${item.duration}`;
    dur.classList.add("grade-duration");

    link.appendChild(gradeName);
    link.appendChild(desc);
    link.appendChild(dur);
    gradeDiv.appendChild(link);
    container.appendChild(gradeDiv);
  });
});