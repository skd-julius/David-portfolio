// Theme toggle with memory
const html = document.documentElement;
const themeIcon = document.getElementById("themeIcon");

function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
}

themeIcon.addEventListener("click", () => {
    const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});
