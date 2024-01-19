const btnSubmit = document.querySelector(".Submit-button");
const containerTop =   document.querySelector(".container-top")
const containerUnder = document.querySelector(".container-under")

btnSubmit.addEventListener("click", () => {
    containerTop.classList.add("hidden");
    containerUnder.classList.remove("hidden");
})


document.addEventListener('click', () => {
    
 
})