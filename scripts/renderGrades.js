// Grab the container where grades will be displayed
const container = document.getElementById("grades-container");

// Safety checks
if (!container) {
  console.error("No container found for grades!");
} else if (!gradesData || gradesData.length === 0) {
  console.error("gradesData is empty or not loaded!");
} else {

  gradesData.forEach(grade => {
    // Create a div for each grade
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("grade");
    gradeDiv.innerHTML = `<h2>${grade.grade}</h2>`;

    // Loop through subjects
    grade.subjects.forEach(subject => {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject");
      subjectDiv.innerHTML = `<h3>${subject.name}</h3>`;

      // Make sure each subject has at least one game
      const games = subject.games && subject.games.length ? subject.games : ["Coming Soon"];

      games.forEach(game => {
        const btn = document.createElement("button");
        btn.classList.add("game-btn");
        btn.textContent = game;

        // Disable the button if it's a Coming Soon placeholder
        if (game === "Coming Soon") btn.disabled = true;

        // Click listener
        btn.addEventListener("click", function() {
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