document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".online-text");
    var btn1 = document.querySelector(".custom-btn");
    var btn2 = document.querySelector(".custom-border-btn");
    
    setTimeout(function () {
        btn.classList.add("show");
        btn1.classList.add("show");
        btn2.classList.add("show");
    }, 500);
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var about = document.querySelector(".img");
        var about1 = document.querySelector(".img1");

        if (scroll >= 500) {
            about.classList.add("show");
            about1.classList.add("show");
        }
        if (scroll <= 500) {
            about.classList.remove("show");
            about1.classList.remove("show");
        }
    });
});

function applyStyles() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var mobile = document.querySelector(".hero-section1");
    var about1 = document.querySelector(".img1");

    if (screenWidth <= 750) {
        mobile.classList.add("mobile");
        mobile.classList.remove("ipad");
    } else if (screenWidth >= 768 && screenWidth < 1660) {
        mobile.classList.remove("mobile");
        mobile.classList.add("ipad");
    } else {
        mobile.classList.remove("mobile");
        mobile.classList.remove("ipad");
    }
}

window.onload = applyStyles;
window.onresize = applyStyles;

