// Navigate buttons
document.querySelectorAll(".game-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});

// Remove.bg for banner
const banner = document.querySelector(".banner");
const apiKey = "YOUR_REMOVE_BG_API_KEY"; // Replace with your actual key
const imageUrl = banner.src; // current logo image

// Remove.bg expects multipart/form-data
const formData = new FormData();
formData.append("image_url", imageUrl);
formData.append("size", "auto");

// Send POST request
fetch("https://api.remove.bg/v1.0/removebg", {
  method: "POST",
  headers: {
    "X-Api-Key": apiKey
  },
  body: formData
})
.then(async response => {
  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Remove.bg failed: ${err}`);
  }
  return response.blob();
})
.then(blob => {
  // Convert the blob to a URL and set as banner src
  const url = URL.createObjectURL(blob);
  banner.src = url;
  banner.style.borderRadius = "50%"; // make circular
  banner.style.display = "block";
})
.catch(err => console.error("Remove.bg API error:", err));