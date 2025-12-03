// THEME TOGGLE ----------------------------------------------------
const htmlEl = document.documentElement;
const themeIcon = document.getElementById("themeIcon");
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  htmlEl.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeIcon.textContent = theme === "light" ? "☀️" : "🌙";
}

const storedTheme = localStorage.getItem("theme") || "dark";
applyTheme(storedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

// 3D TILT FOR VISION CARD ----------------------------------------
const visionCard = document.getElementById("visionCard");

if (visionCard) {
  const maxRotate = 14;

  visionCard.addEventListener("mousemove", (e) => {
    const rect = visionCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * maxRotate;
    const rotateX = -((y - centerY) / centerY) * maxRotate;

    visionCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  visionCard.addEventListener("mouseleave", () => {
    visionCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

// PARALLAX ORBS ---------------------------------------------------
const orbs = document.querySelectorAll(".orb");

document.addEventListener("mousemove", (e) => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  orbs.forEach((orb, index) => {
    const depth = (index + 1) * 12;
    const translateX = -dx * depth;
    const translateY = -dy * depth;
    orb.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  });
});

// SMOOTH SCROLL ---------------------------------------------------
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// SCROLL REVEAL ---------------------------------------------------
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("visible"));
}
