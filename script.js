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
   SKILLS SHOW/HIDE
----------------------------------------------- */
const skillsBtn = document.getElementById("skillsToggleBtn");
const moreSkills = document.getElementById("moreSkills");

skillsBtn.addEventListener("click", () => {
  if (moreSkills.classList.contains("hidden")) {
    moreSkills.classList.remove("hidden");
    skillsBtn.textContent = "▲ Show Fewer Skills";
  } else {
    moreSkills.classList.add("hidden");
    skillsBtn.textContent = "▲ Show More Skills";
  }
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
