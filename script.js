// ===============================
// KURSOR KUSTOM
// ===============================
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    cursorDot.style.left = `${clientX}px`;
    cursorDot.style.top = `${clientY}px`;

    cursorOutline.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 200, fill: "forwards" }
    );
});

// Hover effect
const interactiveElements = document.querySelectorAll(
    "a, button, .btn, .project-item, .certificate-item, .language-card, .info-card"
);

interactiveElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursorDot.classList.add("link-hover");
        cursorOutline.classList.add("link-hover");
    });
    el.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("link-hover");
        cursorOutline.classList.remove("link-hover");
    });
});

// ===============================
// HEADER SCROLL EFFECT
// ===============================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// ===============================
// MOBILE NAVIGATION
// ===============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// ===============================
// PROJECT FILTER
// ===============================
const projectFilterButtons = document.querySelectorAll(".project-filter-btn");
const projectItems = document.querySelectorAll(".project-item");

projectFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        projectFilterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.projectFilter;

        projectItems.forEach(item => {
            const show =
                filter === "all" ||
                item.dataset.projectCategory === filter;

            item.style.display = show ? "block" : "none";
            item.style.opacity = show ? "1" : "0";
            item.style.transform = show ? "translateY(0)" : "translateY(20px)";
        });
    });
});

// ===============================
// CERTIFICATE FILTER
// ===============================
const certificateFilterButtons = document.querySelectorAll(".certificate-filter-btn");
const certificateItems = document.querySelectorAll(".certificate-item");

certificateFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        certificateFilterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.certificateFilter;

        certificateItems.forEach(item => {
            const show =
                filter === "all" ||
                item.dataset.certificateCategory === filter;

            item.style.display = show ? "block" : "none";
            item.style.opacity = show ? "1" : "0";
            item.style.transform = show ? "translateY(0)" : "translateY(20px)";
        });
    });
});

// ===============================
// LIGHTBOX
// ===============================
lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    showImageNumberLabel: true,
    positionFromTop: 100,
    fadeDuration: 300,
    imageFadeDuration: 300
});

// ===============================
// COUNTER ANIMATION (PROJECTS)
// ===============================
function animateCounters() {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const step = Math.ceil(target / 100);

        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = current;
            }
        }, 20);
    });
}

// ===============================
// SCROLL ANIMATION HANDLER
// ===============================
function handleScrollAnimations() {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < windowHeight - 150) {
            section.classList.add("active");

            if (
                section.id === "projects" &&
                !section.classList.contains("counter-animated")
            ) {
                animateCounters();
                section.classList.add("counter-animated");
            }
        }
    });
}

window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("DOMContentLoaded", handleScrollAnimations);

// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        });
    });
});

// ===============================
// FLOATING SHAPES
// ===============================
document.querySelectorAll(".floating-shape").forEach(shape => {
    shape.style.animationDelay = `${Math.random() * 5}s`;
});

// ===============================
// FORM SUBMISSION (SIMULASI)
// ===============================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();

        const button = contactForm.querySelector('button[type="submit"]');
        const original = button.textContent;

        button.textContent = "Mengirim...";
        button.disabled = true;

        setTimeout(() => {
            alert("Pesan berhasil dikirim. Saya akan menghubungi Anda.");
            contactForm.reset();
            button.textContent = original;
            button.disabled = false;
        }, 1500);
    });
}
