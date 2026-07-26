// ===========================================
// KMG KOPELA TRADING ENTERPRISE
// script.js
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // MOBILE MENU
    // ===========================

    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }

    // ===========================
    // CLOSE MENU WHEN LINK CLICKED
    // ===========================

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (nav) {

                nav.classList.remove("active");

            }

            if (menuBtn) {

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    });

    // ===========================
    // FAQ
    // ===========================

    document.querySelectorAll(".faq-item").forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            document.querySelectorAll(".faq-item").forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    // ===========================
    // SCROLL HEADER
    // ===========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.padding = "12px 8%";
            header.style.background = "#ffffff";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.padding = "18px 8%";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.06)";

        }

    });

    // ===========================
    // SCROLL REVEAL
    // ===========================

    const revealElements = document.querySelectorAll(
        ".service-card,.why-card,.value-card,.membership-card,.testimonial-card,.contact-card,.leader,.about-preview"
    );

    const reveal = () => {

        const trigger = window.innerHeight * 0.85;

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < trigger) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    };

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = ".7s ease";

    });

    window.addEventListener("scroll", reveal);

    reveal();

    // ===========================
    // COUNTERS
    // ===========================

    const counters = document.querySelectorAll(".stat h2");

    counters.forEach(counter => {

        const text = counter.innerText;

        const number = parseInt(text);

        if (isNaN(number)) return;

        let current = 0;

        const update = () => {

            current += Math.ceil(number / 50);

            if (current >= number) {

                counter.innerText = text;

            } else {

                counter.innerText = current;

                requestAnimationFrame(update);

            }

        };

        update();

    });

    // ===========================
    // ACTIVE NAVIGATION
    // ===========================

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href && href.includes(current)) {

                link.classList.add("active");

            }

        });

    });

    // ===========================
    // SMOOTH SCROLL
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});

// ===========================================
// END OF SCRIPT.JS
// ===========================================
