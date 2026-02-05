function launchGame(grade, subject, game) {
  alert(`Launching: ${grade} → ${subject} → ${game}`);
  const bar = document.getElementById("progress-bar");
  const width = Math.floor(Math.random() * 100);
  bar.style.width = width + "%";

  // Future: replace alert with actual interactive games
}