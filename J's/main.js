/* =========================================================
   ZERAMOTH PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================================================
   LOADING SCREEN
   ========================================================= */

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


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });

}


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                });

                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${entry.target.id}"]`
                    );

                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },

    {
        threshold: 0.35
    }

);

sections.forEach(section => {

    navObserver.observe(section);

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   TYPING EFFECT
   ========================================================= */

const typingElement =
    document.getElementById("typing-text");

const roles = [
    "GAMEPLAY PROGRAMMER",
    "GAME DEVELOPER",
    "SYSTEM DESIGNER",
    "CODE ENTHUSIAST",
    "DIGITAL CREATOR"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {

    if (!typingElement) {
        return;
    }

    const currentRole =
        roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;
        }
    }

    const speed =
        deleting ? 45 : 80;

    setTimeout(typeRole, speed);
}

setTimeout(typeRole, 1200);


/* =========================================================
   CHARACTER CARD PARALLAX
   ========================================================= */

const characterCard =
    document.querySelector(".character-card");

if (characterCard && window.matchMedia("(pointer: fine)").matches) {

    characterCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                characterCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            characterCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );

    characterCard.addEventListener(
        "mouseleave",
        () => {

            characterCard.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        }
    );
}


/* =========================================================
   PROJECT CARD TILT
   ========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");

if (window.matchMedia("(pointer: fine)").matches) {

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - 0.5) * 5;

                const rotateX =
                    ((y / rect.height) - 0.5) * -5;

                card.style.transform =
                    `perspective(1000px)
                     translateY(-8px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   TERMINAL RANDOM STATUS
   ========================================================= */

const terminalOutput =
    document.querySelectorAll(".terminal-output");

const terminalMessages = [

    "gameplay_developer_in_training",
    "building_new_mechanics",
    "learning_game_systems",
    "compiling_ideas...",
    "quest_progress++",
    "experience_gained"
];

let terminalIndex = 0;

setInterval(() => {

    if (!terminalOutput.length) {
        return;
    }

    const message =
        terminalMessages[terminalIndex];

    terminalOutput[1].textContent =
        message;

    terminalIndex =
        (terminalIndex + 1) %
        terminalMessages.length;

}, 3500);


/* =========================================================
   SMOOTH BACK TO TOP
   ========================================================= */

document
    .querySelectorAll('a[href="#inicio"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    });


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    new Date().getFullYear();

const footerParagraph =
    document.querySelector("footer p");

if (footerParagraph) {

    footerParagraph.innerHTML =
        `© ${currentYear} — Leandro Miguel Lima Mayor`;

}


/* =========================================================
   CONSOLE EASTER EGG
   ========================================================= */

console.log(
    "%c◆ ZERAMOTH SYSTEM",
    "color:#69f5d0;font-size:20px;font-weight:bold;"
);

console.log(
    "%cWelcome, developer.",
    "color:#8c9998;font-size:12px;"
);

console.log(
    "%cQuest: Become a Gameplay Developer",
    "color:#69f5d0;font-size:12px;"
);
