document.addEventListener("DOMContentLoaded", function () {
  const heroLink = document.querySelector(".hero__link");
  const heroImageContainer = document.querySelector(".hero-image");
  const heroImage = document.querySelector(".hero-image img");
  const originalImageSrc = "./img/hero.jpg";
  const hoverImageSrc = "./img/hero-switch.png";

  const hoverImage = new Image();
  hoverImage.src = hoverImageSrc;

  heroLink.addEventListener("mouseenter", function () {
    heroImageContainer.classList.add("fade-out");
    setTimeout(() => {
      heroImage.src = hoverImageSrc;
      heroImageContainer.classList.remove("fade-out");
    }, 300);
  });

  heroLink.addEventListener("mouseleave", function () {
    heroImageContainer.classList.add("fade-out");
    setTimeout(() => {
      heroImage.src = originalImageSrc;
      heroImageContainer.classList.remove("fade-out");
    }, 300);
  });

  heroLink.addEventListener("click", function (e) {
    e.preventDefault();
    const interiorSection = document.querySelector(".interior");
    if (interiorSection) {
      interiorSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );

  document.querySelectorAll(".scroll-animate").forEach((element) => {
    observer.observe(element);
  });

  document.querySelectorAll(".gallery-item.scroll-animate").forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });
});