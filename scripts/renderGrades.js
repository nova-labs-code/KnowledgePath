const container = document.getElementById("grades-container");

if (!container) {
  console.error("No container found for grades!");
} else if (!gradesData || gradesData.length === 0) {
  console.error("gradesData is empty or not loaded!");
} else {
  gradesData.forEach(grade => {
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("grade");
    gradeDiv.innerHTML = `<h2>${grade.grade}</h2>`;

    grade.subjects.forEach(subject => {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject");
      subjectDiv.innerHTML = `<h3>${subject.name}</h3>`;

      subject.games.forEach(game => {
        const btn = document.createElement("button");
        btn.classList.add("game-btn");
        btn.textContent = game;
        btn.addEventListener("click", () => launchGame(grade.grade, subject.name, game));
        subjectDiv.appendChild(btn);
      });

      gradeDiv.appendChild(subjectDiv);
    });

    container.appendChild(gradeDiv);
  });
}