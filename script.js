/* -------------------------------------------
   APPLE SWITCH LOGIC
------------------------------------------- */
const appleSwitch = document.getElementById("appleSwitch");
const themeLabel = document.getElementById("themeLabel");

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  themeLabel.textContent = mode === "dark" ? "Dark Mode" : "Light Mode";
  localStorage.setItem("theme", mode);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

// Toggle logic
appleSwitch.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
});

/* -----------------------------------------------
   REVEAL ON SCROLL
----------------------------------------------- */
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  for (let r of reveals) {
    const rect = r.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      r.classList.add("visible");
    }
  }
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Vision Pro 3D Hover Card
const card = document.getElementById("visionCard");

if (card) {
  card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 20;
      const rotateX = -((y / rect.height) - 0.5) * 20;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  });

  card.addEventListener("mouseleave", () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
}
