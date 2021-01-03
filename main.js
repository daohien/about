// function about_us(){
//     var about_us = document.getElementsByClassName("about-us");  
//     window.addEventListener("scroll", function(){
//         var react = about_us[0].getBoundingClientRect();
//         var t = react.top;
//         var h = window.innerHeight;
//         if (t < h) {
//             about_us[0].classList.add("active")
//         }
//     })
// }

// about_us()

// End About-us

// function specialization(){
//     var our_spec = document.getElementsByClassName("our-specialization")
//     window.addEventListener("scroll", function(){
//         var react = our_spec[0].getBoundingClientRect();
//         var t = react.top;
//         var h = window.innerHeight;
//         if (t < h) {
//             our_spec[0].classList.add("active")
//         }
//     })

// }
// specialization()

// End Specialization

new WOW().init();



$('#testimonial-carousel').owlCarousel({
    autoplay: true,
    dots: false,
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

// $('#logo-carousel').owlCarousel({
//     autoplay: true,
//     dots: false,
//     loop:true,
//     margin:30,
//     nav:true,
//     responsive:{
//         0:{
//             items:2
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })

function header(){
    var header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
        var y = window.scrollY;
        if (y > 100) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
}

header()

function nav() {
    var nav_bar = document.getElementsByClassName("navbar");
    var nav_menu = document.getElementsByClassName("nav-menu");
    var close = document.getElementsByClassName("close");
    var check = "check1";
    nav_bar[0].addEventListener("click", function () {
        nav_menu[0].classList.add("active");
        nav_bar[0].classList.add("active");
    });
    close[0].addEventListener("click", function () {
        nav_menu[0].classList.remove("active");
        nav_bar[0].classList.remove("active");
        // if (check == "check1") {
        //     check = "check2";
        //     nav_menu[0].classList.add("active");
        //     nav_menu[0].classList.remove("active");
        // } else {
        //     check = "check1";
        //     close[0].classList.remove("active")
        // }
    });
}
nav();