
const btnSubmit = document.querySelector(".Submit-button");
const containerTop = document.querySelector(".container-top");
const containerUnder = document.querySelector(".container-under");
const rating = document.querySelectorAll(".rating button");

btnSubmit.addEventListener("click", (e) => {
    e.stopPropagation();
    containerTop.classList.add("hidden");
    containerUnder.classList.remove("hidden");
});

document.addEventListener('click', () => {
    containerTop.classList.remove("hidden");
    containerUnder.classList.add("hidden");
});

rating.forEach((btn) => {
btn.addEventListener("click", () => {
    btn.classList.add("active");
    
})

})
