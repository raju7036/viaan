// $('.your-class').slick({
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     autoplay:true,
//     autoplaySpeed: 3000,
//     adaptiveHeight: true,
//     // navs:true, 
//     // nextArrow: '<button class="navs next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
//     // prevArrow: '<button class="navs previous"><i class="bi bi-arrow-left-circle-fill"></i></button>',
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });

  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    // autoplaySpeed: 2000,
    navs:true, 
    prevArrow: '<button class="navs next"><i class="bi bi-arrow-left"></i></button>',
    nextArrow: '<button class="navs previous"><i class="bi bi-arrow-right"></i></button>',
  });


  // $('.gallery-class').slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: '60px',
  //   // autoplaySpeed: 2000,
  //   navs:true, 
  //   nextArrow: '<button class="navs next"><i class="bi bi-arrow-left"></i></button>',
  //   prevArrow: '<button class="navs previous"><i class="bi bi-arrow-right"></i></button>',
  // });

  $('.gallery-class').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay:true,
    autoplaySpeed: 3000,
    // variableWidth: true,
    prevArrow: '<button class="navs next"><i class="bi bi-chevron-left"></i></button>',
    nextArrow: '<button class="navs previous"><i class="bi bi-chevron-right"></i></button>',
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });


  