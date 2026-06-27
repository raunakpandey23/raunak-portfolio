// Welcome Message
window.onload = function () {
    console.log("Welcome to Raunak Pandey's Portfolio");
};

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial Style
sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

// Dark Mode Button
const darkBtn = document.createElement("button");
darkBtn.innerHTML = "🌙";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "12px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.cursor = "pointer";
darkBtn.style.fontSize = "20px";
darkBtn.style.background = "#1976d2";
darkBtn.style.color = "#fff";

document.body.appendChild(darkBtn);

let dark = false;

darkBtn.onclick = function () {
    if (!dark) {
        document.body.style.background = "#121212";
        document.body.style.color = "#ffffff";
        darkBtn.innerHTML = "☀️";
        dark = true;
    } else {
        document.body.style.background = "#f5f7fa";
        document.body.style.color = "#222";
        darkBtn.innerHTML = "🌙";
        dark = false;
    }
};

// Back to Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆️";
topBtn.style.position = "fixed";
topBtn.style.bottom = "80px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#0d47a1";
topBtn.style.color = "#fff";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};