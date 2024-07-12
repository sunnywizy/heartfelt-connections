const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav-items");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
})