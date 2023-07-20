
//js for preloader
$(window).on("load", function() {
    $("#loader").fadeOut("slow");
  });
  


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

$(document).ready(function(){
    $('#brands').owlCarousel({
    //   nav: true, // Enable navigation arrows
      dots: true, // Enable dots navigation
      autoplay:true,
      loop:true,
    //   navText: [
    //     '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
    //     '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
    //   ],
      responsive: {
        0: {
          items: 2 // Number of items to show at different screen sizes
        },
        600: {
          items: 3
        },
        900: {
          items: 4
        },
        1000:{
            items:6
        }
      }
    });
  });
$(document).ready(function(){
    $('#banner').owlCarousel({
      nav: false, // Enable navigation arrows
      dots: false, // Enable dots navigation
      autoplay:true,
      loop:true,
    //   navText: [
    //     '<i class="ri-arrow-left-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>', // Remix icon for previous button
    //     '<i class="ri-arrow-right-s-line" style="color: #787878;font-size: 2rem; background-color: #fff;"></i>' // Remix icon for next button
    //   ],
      responsive: {
        0: {
          items: 1 // Number of items to show at different screen sizes
        },
        600: {
          items: 1
        },
        900: {
          items: 1
        },
        1000:{
            items:1
        }
      }
    });
  });