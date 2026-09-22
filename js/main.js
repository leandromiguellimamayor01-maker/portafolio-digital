
/* PANTALLA DE CARGA */
const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loader-progress");
const loaderPercent = document.getElementById("loader-percent");

let progress = 0;

const loadingInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 3;
    if (progress >= 100) {
        progress = 100;
        clearInterval(loadingInterval);
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 400);
    }
    loaderProgress.style.width = `${progress}%`;
    loaderPercent.textContent = `${progress}%`;
}, 80);

/* MENU MOVIL */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

/* Cerrar menu movil cuando se clickee un enlace */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

/* NAVEGACIÓN ACTIVA */
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navigationLinks.forEach(link => {
                    link.classList.remove("active");
                });
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    },
    { threshold: 0.35 }
);

sections.forEach(section => {
    navObserver.observe(section);
});

/* REVELAR CON SCROLL */
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});

/* EFECTO DE TIPEADO */
const typingElement = document.getElementById("typing-text");
const roles = [
    "BACKEND DEVELOPER",
    "NODE.JS ENTHUSIAST",
    "TYPESCRIPT LEARNER",
    "PROBLEM SOLVER",
    "FUTURO GAME DEV"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent = currentRole.substring(0, characterIndex + 1);
        characterIndex++;
        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeRole, 1800);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, characterIndex - 1);
        characterIndex--;
        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    const speed = deleting ? 45 : 80;
    setTimeout(typeRole, speed);
}

setTimeout(typeRole, 1200);

/* EFECTO DE PARALELAJE EN LA TARJETA DE PERFIL */
const characterCard = document.querySelector(".character-card");
if (characterCard && window.matchMedia("(pointer: fine)").matches) {
    characterCard.addEventListener("mousemove", (event) => {
        const rect = characterCard.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 6;
        const rotateX = ((y / rect.height) - 0.5) * -6;
        characterCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    characterCard.addEventListener("mouseleave", () => {
        characterCard.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
}

/* EFECTO DE INCLINACIÓN DE LAS TARJETAS DE PROYECTOS */
const projectCards = document.querySelectorAll(".project-card");
if (window.matchMedia("(pointer: fine)").matches) {
    projectCards.forEach(card => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * 4;
            const rotateX = ((y / rect.height) - 0.5) * -4;
            card.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

/* ESTADO RANDOM DE LA TERMINAL */
const terminalOutput = document.querySelectorAll(".terminal-output");
const terminalMessages = [
    "npm install express",
    "git push origin main",
    "const server = app.listen(3000)",
    "conectando_a_mongodb...",
    "aprendiendo_typescript",
    "build_successful"
];

let terminalIndex = 0;

setInterval(() => {
    if (!terminalOutput.length) return;
    const message = terminalMessages[terminalIndex];
    // Actualiza el segundo output de la terminal
    if (terminalOutput[1]) {
        terminalOutput[1].textContent = message;
    }
    terminalIndex = (terminalIndex + 1) % terminalMessages.length;
}, 3500);

/* VOLVER AL INICIO */
document.querySelectorAll('a[href="#inicio"]').forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* AÑO ACTUAL */
const currentYear = new Date().getFullYear();
const footerParagraph = document.querySelector("footer p");
if (footerParagraph) {
    footerParagraph.innerHTML = `© ${currentYear} — Leandro Miguel Lima Mayor`;
}

/* CONSOLA */
console.log(
    "%c◆ LEANDRO.DEV",
    "color:#58a6ff;font-size:20px;font-weight:bold;"
);
console.log(
    "%cBackend Developer Portfolio",
    "color:#8b949e;font-size:12px;"
);
console.log(
    "%cQuest: Become a Game Dev",
    "color:#58a6ff;font-size:12px;"
);
