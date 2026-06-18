/* ==================================================
   WANDERVISTA - index.js
================================================== */

/* ==================================================
   LOADER
================================================== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1500);
});

/* ==================================================
   STICKY NAVBAR
================================================== */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

/* ==================================================
   MOBILE MENU
================================================== */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* ==================================================
   DARK MODE
================================================== */
const themeBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

/* ==================================================
   DESTINATION SEARCH
================================================== */
const searchInput = document.getElementById("destinationSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".destination-card");

        cards.forEach(card => {

            const title = card.querySelector("h3")
                .textContent
                .toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

/* ==================================================
   GALLERY LIGHTBOX
================================================== */
const galleryImages =
    document.querySelectorAll(".gallery-grid img");

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox img");

const closeLightbox =
    document.querySelector(".close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

/* ==================================================
   TESTIMONIAL SLIDER
================================================== */
const testimonials =
    document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showSlide(index) {

    testimonials.forEach(item => {
        item.classList.remove("active");
    });

    testimonials[index].classList.add("active");

}

if (testimonials.length > 0) {

    showSlide(currentSlide);

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= testimonials.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 4000);

}

/* ==================================================
   ANIMATED COUNTERS
================================================== */
const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.floor(count).toLocaleString();

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText =
                    target.toLocaleString();

            }

        };

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const statsSection =
        document.querySelector(".stats");

    if (!statsSection) return;

    const top =
        statsSection.getBoundingClientRect().top;

    if (top < window.innerHeight && !counterStarted) {

        startCounters();
        counterStarted = true;

    }

});

/* ==================================================
   CONTACT FORM VALIDATION
================================================== */
const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const destination =
            document.getElementById("destination").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            destination === "" ||
            message === ""
        ) {

            alert("Please fill all fields.");
            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email.");
            return;

        }

        alert(
            "Thank you! Your travel inquiry has been submitted."
        );

        contactForm.reset();

    });

}

/* ==================================================
   BACK TO TOP BUTTON
================================================== */
const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==================================================
   SCROLL REVEAL ANIMATION
================================================== */
const revealElements = document.querySelectorAll(
    ".destination-card, .package-card, .feature-card, .testimonial, .contact, .gallery-grid img"
);

revealElements.forEach(el => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==================================================
   SMOOTH SCROLL FOR NAVIGATION
================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* ==================================================
   PACKAGE BOOK BUTTONS
================================================== */
const bookButtons =
    document.querySelectorAll(".package-card button");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Booking system coming soon. Thank you for choosing WanderVista!"
        );

    });

});

/* ==================================================
   DESTINATION EXPLORE BUTTONS
================================================== */
const exploreButtons =
    document.querySelectorAll(".card-btn");

exploreButtons.forEach(button => {

    button.addEventListener("click", () => {

        const destination =
            button.parentElement.querySelector("h3")
            .textContent;

        alert(`Explore more about ${destination}!`);

    });

});

/* ==================================================
   ESC KEY CLOSE LIGHTBOX
================================================== */
document.addEventListener("keydown", (e) => {

    if (
        e.key === "Escape" &&
        lightbox.classList.contains("active")
    ) {

        lightbox.classList.remove("active");

    }

});

/* ==================================================
   PRELOAD ANIMATION
================================================== */
document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});

/* ==================================================
   WANDERVISTA READY
================================================== */
console.log(
    "🌍 WanderVista Travel Website Loaded Successfully!"
);