const nav = document.querySelector(".navbar");

document.addEventListener("scroll", () => window.scrollY > 100 ? nav.classList.add("bg-secondary") : nav.classList.remove("bg-secondary") )