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

      const games = subject.games && subject.games.length ? subject.games : ["Coming Soon"];
      games.forEach(game => {
        const btn = document.createElement("button");
        btn.classList.add("game-btn");
        btn.textContent = game;

        if (game === "Coming Soon") btn.disabled = true;

        btn.addEventListener("click", () => {
          console.log(`Launching game: ${game} | Grade: ${grade.grade} | Subject: ${subject.name}`);
          try {
            launchGame(grade.grade, subject.name, game);
          } catch (err) {
            console.error(`Error launching game: ${game}`, err);
            alert(`${game} is coming soon!`);
          }
        });

        subjectDiv.appendChild(btn);
      });

      gradeDiv.appendChild(subjectDiv);
    });

    container.appendChild(gradeDiv);
  });
}