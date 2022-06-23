("use strict");
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 15,
  initialSlide: 1,
  speed: 800,
  freeMode: true,
  watchSlidesProgress: false,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 0,
  grabCursor: true,
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  breakpoints: {
    800: {
      speed: 800,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    },
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  thumbs: {
    swiper: swiper,
  },
});
//==========================================================================
// full slider
var swiper = new Swiper(".fullSwiper", {
  grabCursor: true,
  spaceBetween: 15,
  slidesPerView: 1.3,
  centeredSlides: true,
  initialSlide: 1,
  navigation: {
    prevEl: ".prev2",
    nextEl: ".next2",
  },
  breakpoints: {
    800: {
      slidesPerView: 3.8,
    },
    1600: {
      slidesPerView: 4.2,
    },
  },
});

//=======================================================================
// header active link
let menuLink = document.querySelectorAll(".header-menu-link");
if (menuLink) {
  menuLink.forEach((elMenu) => {
    elMenu.addEventListener("click", () => {
      menuLink.forEach((item) => {
        item.classList.remove("active-link");
      });
      elMenu.classList.add("active-link");
    });
  });
}
//=========================================================================
// video player
jQuery(document).on("click", ".video-play-icon", function (e) {
  var video = jQuery(this).parents(".video-custom-play").find("video")[0];
  if (video.paused === false) {
    video.pause();
    jQuery(this).parents(".video-custom-play").removeClass("is-video-playing");
  } else {
    video.play();

    jQuery(this).parents(".video-custom-play").addClass("is-video-playing");
  }
  return false;
});
//=========================================================================
// menu burger
$(".burger-btn").click(function () {
  $("body").toggleClass("overflow");
  $(".burger").toggleClass("open");
  $(".header-nav").toggleClass("menu-sm");
});
//========================================================================
let filterLink = document.querySelectorAll(".filter-btn");
if (filterLink) {
  filterLink.forEach((elMenu) => {
    elMenu.addEventListener("click", () => {
      filterLink.forEach((item) => {
        item.classList.remove("active-filter");
      });
      elMenu.classList.add("active-filter");
    });
  });
}
//=======================================================================

// let galleryImg = document.querySelectorAll(".slide-tour-img");

// galleryImg.forEach((elImg) => {
  
//   elImg.addEventListener("click", () => {
   
//     galleryImg.forEach((itemImg) => {
//       itemImg.classList.remove("scaleImg");
//     });
//     elImg.classList.add("scaleImg");
//   });
// });
$('.works-slideshow .team-item').each(function() {
  var slider = $(this);
  slider.slick({
    centerMode: false,
    arrows: false,
    dots: false,
    accessibility: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 3.6,
    slidesToScroll: 1,
   
    responsive: [{
      mobileFirst:true,
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });

  var sLightbox = $(this);
  sLightbox.slickLightbox({
    src: 'src',
    itemSelector: '.team-image img'
  });
});