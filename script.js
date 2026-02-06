// All buttons navigate to their respective game HTML pages
document.querySelectorAll(".game-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});