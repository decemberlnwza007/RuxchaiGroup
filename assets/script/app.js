document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight = document.querySelector("nav").offsetHeight;
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");

  mobileMenuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("hidden");
  });
});

const typed = new Typed("#typed-output", {
  strings: ["Society."],
  typeSpeed: 80,
  backSpeed: 30,
  loop: false,
  showCursor: false,
});

function createSnowAndObjects() {
  const container = document.getElementById("object-container");
  const snowCount = 50;

  for (let i = 0; i < snowCount; i++) {
    const snowCrystal = document.createElement("div");
    snowCrystal.classList.add("snow-crystal");

    const size = Math.random() * 5 + 2;
    snowCrystal.style.width = `${size}px`;
    snowCrystal.style.height = `${size}px`;
    snowCrystal.style.left = `${Math.random() * 100}%`;
    snowCrystal.style.top = `${Math.random() * 100}%`;

    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;
    snowCrystal.style.animationDuration = `${duration}s`;
    snowCrystal.style.animationDelay = `-${delay}s`;

    container.appendChild(snowCrystal);
  }
}

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
    @keyframes fall {
        0% {
            transform: translateY(-10vh) rotate(0deg);
        }
        100% {
            transform: translateY(110vh) rotate(360deg);
        }
    }
`,
  styleSheet.cssRules.length
);

window.addEventListener("load", createSnowAndObjects);