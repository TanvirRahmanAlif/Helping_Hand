// Navbar Scroll
let nav = document.querySelector(".nav-color");

window.addEventListener("scroll", function () {
    let p = window.scrollY;

    if (p > 100) {
        nav.classList.add("stiky-nav");
    } else {
        nav.classList.remove("stiky-nav");
    }
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//   Date
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();

let d = date.getDate();
let m = months[date.getMonth()];
let y = date.getFullYear();

let full = d + " " + m + " " + y;


document.getElementById("date").innerHTML = "Date : " + full;

// Time
setInterval(clock, 1000);

function clock() {

    let lock = new Date();
    let text = lock.toLocaleTimeString();

    document.getElementById("time").innerHTML = "Time : " + text;
}