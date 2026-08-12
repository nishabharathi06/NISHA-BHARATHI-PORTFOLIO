```javascript id="8nq2kx"
/* =====================================================
   NISHA BHARATHI PORTFOLIO
   INTERACTIVE JAVASCRIPT
===================================================== */


/* ================= TYPING ANIMATION ================= */

const typingElement = document.getElementById("typing");

const words = [
    "IT Graduate",
    "Python Developer",
    "Web Developer",
    "AI Enthusiast",
    "Tech Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ================= SCROLL TO TOP ================= */

const topButton =
    document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= THEME TOGGLE ================= */

const themeButton =
    document.getElementById("theme-btn");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeButton.querySelector("i");

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/* ================= PROJECT CARD EFFECT ================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 25;

        const rotateY =
            (centerX - x) / 25;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/* ================= SKILL CARD EFFECT ================= */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "5";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "1";

    });

});


/* ================= CONTACT BUTTON EFFECT ================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        button.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        button.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "Welcome to Nisha Bharathi's Portfolio 🚀"
);
```
