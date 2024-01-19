const btnSubmit = document.querySelector(".Submit-button");

btnSubmit.addEventListener("click", () => {
    document.querySelector(".container-top").classList.add("hidden");
    document.querySelector(".container-under").classList.remove("hidden");
})

