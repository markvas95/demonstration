$(function(){

   $(document).ready(function() {
      $('.header-menu__btn').click(function(event) {
         $('.header-menu__btn, .header-menu, .header-menu__line').toggleClass('active');
         $('body').toggleClass('lock');
      }); 
   });

   $('.slider').slick({
      infinite: true,
      centerMode: true,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      useTransform: false,
      dots: false,
      arrows: false,
      responsive: [
         {
            breakpoint: 830,
            settings: {
              sliderToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
         }   
      ]
   });
  
   $(".slider .slider-item").on("click", function() {
      const index = $(this).attr("data-slick-index");
      $(".slider").slick("slickGoTo", index);
    });

   // let btn = document.querySelector('.header-menu__btn, .header-menu, .header-menu__line');
   //     btn.addEventListener('click', function () {
   //     btn.classList.toggle('.active')
   // });
});