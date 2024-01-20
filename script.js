
const btnSubmit = document.querySelector(".Submit-button");
const containerTop = document.querySelector(".container-top");
const containerUnder = document.querySelector(".container-under");

const rating = document.querySelectorAll(".rating button");

const onBack =()=>{
 containerTop.classList.remove("hidden");
        containerUnder.classList.add("hidden");
}
    
const handleClickOutside = (e) => {
    if (e.target.tagName === "BODY") onBack();
}


document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' || e.key == 'ArrowLeft') {
        onBack()
    }
})
document.querySelector('body').addEventListener('click', (e) => {
    handleClickOutside(e)
    // onBack()
})

// Changing card    
btnSubmit.addEventListener("click", (e) => {
    e.stopPropagation();
    
    const activeRate = document.querySelectorAll("button.active");
    if (activeRate.length == 0) return alert("Please select a rating");
    
    containerTop.classList.add("hidden");
    containerUnder.classList.remove("hidden");
});


const writeOnSpan = (number) => {
    localStorage.setItem("rating-active", number);
    document.querySelector('span').innerHTML = number;
}

const setRatingInactive = () => {
    rating.forEach((rate) => {
        rate.classList.remove("active");
    });
}

const loadPreviousRating = () => {
    return localStorage.getItem("rating-active");
}

rating.forEach((rate, index) => {
    const activeRating = loadPreviousRating()
    if(activeRating)  rating[activeRating -1].classList.add('active');

    rate.addEventListener("click", () => {
        setRatingInactive()
        writeOnSpan(index + 1)
        rate.classList.add("active");
    });
})



// document.addEventListener('keyup', (e) => { 
//     console.log(e)
// })

// document.addEventListener('click', (e) => { console.log(e) })
// document.addEventListener('scroll', (e) => { console.log(e) })
