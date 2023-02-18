/*************************** header*******************/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobliemmenu);

function mobliemmenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

/************* gallery *************/
$('.owl-theme').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    responsive: {
    0: {
        items: 1
    },
     768: {
        items: 3
    },
    1000: {
        items: 5
    }
    }
})
/************* testimonials *********/
$('.owl-theme2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 4000,
    dots: false,
    navText: ["<i class='far fa-long-arrow-alt-left'></i>", "<i class='far fa-long-arrow-alt-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
})