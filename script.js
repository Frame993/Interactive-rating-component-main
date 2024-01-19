
const btnSubmit = document.querySelector(".Submit-button");
const containerTop = document.querySelector(".container-top");
const containerUnder = document.querySelector(".container-under");
const rating = document.querySelectorAll(".rating button");

const ratingOne = document.getElementById("one");
const ratingTwo = document.getElementById("two");
const ratingThree = document.getElementById("three");
const ratingFour = document.getElementById("four");
const ratingFive = document.getElementById("five");

// Changing card    
btnSubmit.addEventListener("click", (e) => {
    e.stopPropagation();
    containerTop.classList.add("hidden");
    containerUnder.classList.remove("hidden");
});
document.addEventListener('click', () => {
    containerTop.classList.remove("hidden");
    containerUnder.classList.add("hidden");
});

// Rating state start

rating.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.forEach((rate) => {
            rate.classList.remove("active");
        });
        rate.classList.add("active");
    }); 
})

ratingOne.addEventListener("click", () => {
    document.querySelector('span').innerHTML = '1';
})

ratingTwo.addEventListener("click", () => {
    document.querySelector('span').innerHTML = '2';
})

ratingThree.addEventListener("click", () => {
    document.querySelector('span').innerHTML = '3';
})

ratingFour.addEventListener("click", () => {
    document.querySelector('span').innerHTML = '4';
})

ratingFive.addEventListener("click", () => {
    document.querySelector('span').innerHTML = '5';
})