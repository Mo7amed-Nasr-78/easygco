const slider = document.querySelector(".slider_cards");
const slideRight = document.querySelector(".btn.right");
const slideLeft = document.querySelector(".btn.left");
const upBtn = document.querySelector(".up_btn");
const headerIcon = document.querySelector(".header_icon");
const menu = document.querySelector("header .menu");

// header's script
headerIcon.addEventListener("click", ( ) => {
    menu.classList.toggle("active");
})

// upBtn's script
window.onscroll = () => {
    if (window.scrollY > (window.innerHeight * 0.75)) {
        upBtn.classList.add("active");
    } else {
        upBtn.classList.remove("active");
    }
}

upBtn.onclick = () => {
    window.scrollTo({
        top: 0
    })
}


// slider's script
slideLeft.addEventListener( "click", leftMove );
slideRight.addEventListener( "click", rightMove );

let scrolled = 0;
let leftMaximumMove = 0;
let rightMaximumMove = slider.scrollWidth - slider.parentElement.clientWidth;

window.onresize = () => {
    scrolled = 0;
    sliderMove();
}

function rightMove()  {
    const cardWidth = document.querySelector(".slider_card").clientWidth + 15;
    if (scrolled < rightMaximumMove) {
        scrolled += cardWidth;
        console.log(scrolled)
        sliderMove();
    }
}

function leftMove()  {
    const cardWidth = document.querySelector(".slider_card").clientWidth + 15;
    if (scrolled > leftMaximumMove) {
        scrolled -= cardWidth;
        sliderMove();
    }
}

function sliderMove() {
    slider.style.cssText = `transform: translateX(-${scrolled}px);`;
}