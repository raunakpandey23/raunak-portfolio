/* =====================================================
   RAUNAK PANDEY - PORTFOLIO JAVASCRIPT
   ===================================================== */


/* =========================
   MOBILE MENU
   ========================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    // Close menu after clicking a navigation link

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}



/* =========================
   TYPING EFFECT
   ========================= */

const typingElement = document.getElementById("typing");

const typingWords = [

    "BCA AIML Student",
    "Front-End Developer",
    "Java Learner",
    "AI Enthusiast",
    "Cyber Security Enthusiast"

];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }


    const currentWord = typingWords[wordIndex];


    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    typingElement.textContent =
        currentWord.substring(0, characterIndex);


    let typingSpeed = isDeleting ? 60 : 100;


    // Word completed

    if (!isDeleting && characterIndex === currentWord.length) {

        typingSpeed = 1800;

        isDeleting = true;

    }


    // Word completely deleted

    else if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex >= typingWords.length) {

            wordIndex = 0;

        }

        typingSpeed = 400;

    }


    setTimeout(typeEffect, typingSpeed);

}


typeEffect();



/* =========================
   ACTIVE NAVIGATION
   ========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =========================
   HEADER SCROLL EFFECT
   ========================= */

const header = document.querySelector("header");


window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }


    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 8, 16, 0.97)";

        header.style.boxShadow =
            "0 5px 30px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.background =
            "rgba(7, 11, 20, 0.88)";

        header.style.boxShadow =
            "none";

    }

});



/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const animatedElements = document.querySelectorAll(

    ".skill-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".certificate-card, " +
    ".research-card, " +
    ".contact-item, " +
    ".about-content"

);


const animationObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-animation"
                    );

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    animationObserver.observe(element);

});



/* =========================
   ADD ANIMATION CLASS
   ========================= */

const animationStyle =
    document.createElement("style");


animationStyle.innerHTML = `

    .show-animation {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;


document.head.appendChild(animationStyle);



/* =========================
   SKILL BAR ANIMATION
   ========================= */

const skillSection =
    document.querySelector("#skills");

const skillBars =
    document.querySelectorAll(".skill-bar span");


let skillAnimated = false;


function animateSkills() {

    if (!skillSection || skillAnimated) {
        return;
    }


    const sectionPosition =
        skillSection.getBoundingClientRect();


    if (
        sectionPosition.top <
        window.innerHeight * 0.85
    ) {

        skillBars.forEach(function (bar) {

            const targetWidth =
                bar.style.width;

            bar.style.width = "0";


            setTimeout(function () {

                bar.style.transition =
                    "width 1.2s ease";

                bar.style.width =
                    targetWidth;

            }, 200);

        });


        skillAnimated = true;

    }

}


window.addEventListener(
    "scroll",
    animateSkills
);


animateSkills();



/* =========================
   CONTACT FORM
   ========================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            alert(
                "Thank you, " +
                name +
                "! Your message has been submitted."
            );


            contactForm.reset();

        }
    );

}



/* =========================
   SMOOTH SCROLL
   ========================= */

const allAnchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


allAnchorLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                !targetId
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                const headerHeight =
                    document.querySelector(
                        "header"
                    ).offsetHeight;


                const targetPosition =
                    target.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        }
    );

});



/* =========================
   BACK TO TOP BUTTON
   ========================= */

// Create button automatically

const backToTop =
    document.createElement("button");


backToTop.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';


backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


backToTop.id = "backToTop";


document.body.appendChild(backToTop);



/* Back to top button styling */

const backToTopStyle =
    document.createElement("style");


backToTopStyle.innerHTML = `

    #backToTop {

        position: fixed;

        right: 25px;

        bottom: 25px;

        width: 45px;

        height: 45px;

        border: none;

        border-radius: 50%;

        background: linear-gradient(
            135deg,
            #00bfff,
            #7c3aed
        );

        color: white;

        font-size: 16px;

        cursor: pointer;

        display: flex;

        align-items: center;

        justify-content: center;

        opacity: 0;

        visibility: hidden;

        transform: translateY(20px);

        transition: all 0.3s ease;

        z-index: 999;

        box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.3);

    }


    #backToTop.show {

        opacity: 1;

        visibility: visible;

        transform: translateY(0);

    }


    #backToTop:hover {

        transform: translateY(-5px);

    }

`;


document.head.appendChild(backToTopStyle);



/* Show / Hide Back to Top */

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);



/* Back to top click */

backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
    "Welcome to Raunak Pandey's Portfolio 🚀"
);
