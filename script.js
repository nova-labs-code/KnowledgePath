// Navigate buttons
document.querySelectorAll(".game-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});

// Remove.bg integration for banner
const banner = document.querySelector(".banner");
const apiKey = "YOUR_REMOVE_BG_API_KEY"; // Replace with your API key
const imageUrl = banner.src; // original logo

// Use fetch with FormData (Remove.bg recommends POST with multipart/form-data)
const formData = new FormData();
formData.append("image_url", imageUrl);
formData.append("size", "auto");
formData.append("format", "png");

fetch("https://api.remove.bg/v1.0/removebg", {
  method: "POST",
  headers: {
    "X-Api-Key": apiKey
  },
  body: formData
})
.then(response => {
  if (!response.ok) throw new Error("Failed to remove background");
  return response.blob();
})
.then(blob => {
  const url = URL.createObjectURL(blob);
  banner.src = url;
  banner.style.borderRadius = "50%"; // make it circular
})
.catch(err => console.error("Remove.bg error:", err));