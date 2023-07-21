$(document).ready(function() {
  // Function to slow down the scroll speed
  function slowScrollToBottom() {
    // Get the height of the content container
    var contentHeight = $("body")[0].scrollHeight;
    
    // Calculate the duration based on the height of the content (adjust the value as per your requirement)
    var duration = contentHeight * 2; // 2 milliseconds per pixel, you can adjust this factor
    
    // Animate the scrolling of the whole body
    $("html, body").animate({ scrollTop: contentHeight }, duration);
  }
  
  // Attach click event to the button to initiate the slow scroll
  $("#scrollButton").on("click", function() {
    slowScrollToBottom();
  });
});
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
$(document).ready(function(){
    $('#recent').owlCarousel({
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
          items: 2
        },
        900: {
          items: 3
        },
        1000:{
            items:3
        }
      }
    });
  });