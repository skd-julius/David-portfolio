/* THEME TOKENS --------------------------------------------------- */

:root {
    --bg: radial-gradient(circle at top, #050816 0, #020205 50%, #000000 100%);
    --fg: #f5f5f7;
    --card-bg: rgba(12, 12, 25, 0.8);
    --card-border: rgba(255, 255, 255, 0.15);
    --shadow: rgba(0, 0, 0, 0.6);
    --accent: #4ea8ff;
    --accent-soft: rgba(78, 168, 255, 0.3);
}

[data-theme="light"] {
    --bg: radial-gradient(circle at top, #f5f5f7 0, #f0f0f5 50%, #e7e7ed 100%);
    --fg: #111111;
    --card-bg: rgba(255, 255, 255, 0.85);
    --card-border: rgba(0, 0, 0, 0.06);
    --shadow: rgba(0, 0, 0, 0.1);
    --accent: #0071e3;
    --accent-soft: rgba(0, 113, 227, 0.15);
}

/* GLOBAL --------------------------------------------------------- */

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
    background: var(--bg);
    color: var(--fg);
    transition: background 0.6s ease, color 0.4s ease;
}

a {
    color: var(--accent);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* NAV ------------------------------------------------------------ */

.nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(24px);
    background: rgba(5, 5, 10, 0.6);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    z-index: 100;
}

[data-theme="light"] .nav {
    background: rgba(255, 255, 255, 0.7);
}

.nav-logo {
    font-size: 18px;
    font-weight: 600;
}

.nav-links {
    display: flex;
    gap: 26px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
}

.nav-links a {
    color: var(--fg);
    font-weight: 500;
}

.nav-links a:hover {
    opacity: 0.7;
}

.theme-toggle button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
}

/* HERO + VISION PRO CARD ---------------------------------------- */

.hero {
    min-height: 100vh;
    padding-top: 80px; /* allow for nav */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.hero-orbits {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
}

.orb {
    position: absolute;
    border-radius: 999px;
    filter: blur(40px);
    opacity: 0.7;
    transform: translate3d(0,0,0);
    transition: transform 0.4s ease-out;
}

.orb-1 {
    width: 420px;
    height: 420px;
    top: -80px;
    left: -40px;
    background: radial-gradient(circle, #4ea8ff, transparent);
}

.orb-2 {
    width: 360px;
    height: 360px;
    bottom: -80px;
    right: -50px;
    background: radial-gradient(circle, #ff7ee5, transparent);
}

.orb-3 {
    width: 260px;
    height: 260px;
    top: 40%;
    left: 60%;
    background: radial-gradient(circle, #7cf4ff, transparent);
}

.hero-inner {
    position: relative;
    z-index: 2;
    text-align: center;
}

.vision-card {
    perspective: 1800px;
    transform-style: preserve-3d;
    display: inline-block;
    transition: transform 0.3s ease-out;
}

.vision-frame {
    width: min(600px, 90vw);
    border-radius: 40px;
    padding: 1px;
    background: conic-gradient(from 180deg, #ffffff 0, #4ea8ff 25%, #ff7ee5 50%, #7cf4ff 75%, #ffffff 100%);
    box-shadow: 0 30px 80px var(--shadow);
    position: relative;
}

.vision-glow {
    position: absolute;
    inset: 20px;
    border-radius: 36px;
    background: radial-gradient(circle at top, rgba(255,255,255,0.16), transparent 60%);
    pointer-events: none;
}

.vision-screen {
    position: relative;
    border-radius: 38px;
    background: radial-gradient(circle at top, rgba(0,0,0,0.75), rgba(0,0,0,0.95));
    padding: 34px 40px 38px;
    color: #f5f5f7;
}

[data-theme="light"] .vision-screen {
    background: radial-gradient(circle at top, rgba(255,255,255,0.9), rgba(240,240,245,0.96));
    color: #111;
}

.vision-tagline {
    font-size: 14px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.8;
    margin-bottom: 12px;
}

.vision-title {
    font-size: clamp(32px, 4vw, 40px);
    margin: 0;
    font-weight: 700;
}

.vision-subtitle {
    margin-top: 12px;
    font-size: 16px;
    opacity: 0.85;
}

.vision-meta {
    margin-top: 20px;
    font-size: 13px;
    opacity: 0.75;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.hero-actions {
    margin-top: 36px;
    display: flex;
    justify-content: center;
    gap: 16px;
}

/* BUTTONS -------------------------------------------------------- */

.btn {
    display: inline-block;
    padding: 12px 26px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;
}

.primary {
    background: #ffffff;
    color: #000000;
}

.secondary {
    background: transparent;
    color: #f5f5f7;
    border-color: rgba(255, 255, 255, 0.6);
}

[data-theme="light"] .secondary {
    color: #000;
    border-color: rgba(0, 0, 0, 0.2);
}

/* MAIN SECTIONS -------------------------------------------------- */

main {
    padding-top: 40px;
}

.section {
    max-width: 1100px;
    margin: 80px auto;
    padding: 0 22px;
}

.section-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 26px;
}

/* GLASS CARDS ---------------------------------------------------- */

.glass-card {
    background: var(--card-bg);
    border-radius: 22px;
    border: 1px solid var(--card-border);
    box-shadow: 0 18px 60px var(--shadow);
    padding: 24px 26px;
    margin-bottom: 26px;
    backdrop-filter: blur(20px);
}

.glass-card h3 {
    margin-top: 0;
    margin-bottom: 6px;
}

.date {
    font-size: 13px;
    opacity: 0.7;
    margin-bottom: 12px;
}

/* VISION GRID ---------------------------------------------------- */

.vision-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
}

.vision-note {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 10px;
}

/* SKILLS --------------------------------------------------------- */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
}

.skills-grid span {
    background: var(--card-bg);
    border-radius: 999px;
    padding: 10px 16px;
    text-align: center;
    border: 1px solid var(--card-border);
    font-size: 13px;
}

/* CONTACT -------------------------------------------------------- */

.contact-card p {
    margin: 8px 0;
}

/* FOOTER --------------------------------------------------------- */

footer {
    text-align: center;
    padding: 36px 18px 46px;
    font-size: 13px;
    opacity: 0.6;
}

/* REVEAL ANIMATION ---------------------------------------------- */

.reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* RESPONSIVE ----------------------------------------------------- */

@media (max-width: 768px) {
    .nav {
        padding: 10px 16px;
    }
    .nav-links {
        display: none; /* keep it simple for now on mobile */
    }
    .vision-screen {
        padding: 26px 20px 28px;
    }
}
