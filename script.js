// All buttons navigate to their game HTML page
document.querySelectorAll(".game-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});