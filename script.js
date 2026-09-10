/* ================= MOBILE MENU ================= */

const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

    });

});



/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navLinks.forEach(function (link) {

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


sections.forEach(function (section) {

    navObserver.observe(section);

});



/* ================= SCROLL ANIMATION ================= */

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right")
    .forEach(function (element) {

        revealObserver.observe(element);

    });



/* ================= PROJECT MODAL ================= */

const modal = document.getElementById("projectModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalClose =
    document.getElementById("modalClose");


document.querySelectorAll(".work-btn").forEach(function (button) {

    button.addEventListener("click", function () {

        modalTitle.textContent =
            button.dataset.title;

        modalText.textContent =
            button.dataset.text;

        modal.classList.add("show");

    });

});


/* Close modal */

modalClose.addEventListener("click", function () {

    modal.classList.remove("show");

});


/* Click outside modal */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/* Escape key */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const status =
        document.getElementById("formStatus");


    if (!name || !email || !message) {

        status.textContent =
            "Please fill in all fields.";

        return;

    }


    status.textContent =
        `Thanks, ${name}! Your message is ready to be sent.`;


    contactForm.reset();

});



/* ================= MOUSE PURPLE GLOW ================= */

const glow =
    document.querySelector(".cursor-glow");


window.addEventListener("mousemove", function (event) {

    glow.style.left =
        `${event.clientX}px`;

    glow.style.top =
        `${event.clientY}px`;

});