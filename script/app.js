$(function() {
    $(document).on("scroll", function() {
    //...scroll event code...
    let scrollTop = $(window).scrollTop();
      if (scrollTop > 100) {
        $("nav, .dropdown>ul li").addClass("nav_active");
      } else {
        $("nav, .dropdown>ul li").removeClass("nav_active");
      }
    });
    
    // Fullpage option
    new $('#fullpage').fullpage({
      autoScrolling: true,
      scrollHorizontally: false,
      lockAnchors : false,
      anchors:['first', 'second', 'third', 'forth' ,'fifth', 'sixth', 'seventh'],
      navigation : true,
      navigationPosition :'right',
      sectionsColor : ['#eee', '#fff' , '#eee', '#fff' , '#eee', '#fff', '#eee'],
      showActiveTooltip: true,
      sectionSeletor:'.section',
      slideSelector:'.slide',
      slidesNavigation: false,
      responsiveSlides : true,
      responsiveWidth: 0
    });

   // Code for design_thumb
  $('[class^="design_thumb"]').click(function() {
    // ...design_thumb click code...
      let num = parseInt($(this).attr('class').match(/\d+/));
      $('.popup_bg' + num).stop().fadeIn();
      $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    });
    $('.close_btn').click(function(){
      let num = parseInt($(this).closest('.popup_bg').attr('class').match(/\d+/));
      $('.popup_bg' + num).stop().fadeOut();
      $('body').off('scroll touchmove mousewheel');
    });

  // Scroll event code
  

  // Dropdown hover
  $('.dropdown').hover(
    function() {
      // ...dropdown hover in code...
      $(this).children('ul').slideDown(500);
    },
    function() {
      // ...dropdown hover out code...
      $(this).children('ul').slideUp(500);
    }
  );

  // TypeIt instance code
  new TypeIt("#Introtext", {
    // ...TypeIt options...
      strings: [""],
      speed: 50,
      deleteSpeed: 30,
      loop : true
    })
    .pause(2000)
    .go();

  // Design popup click event
  for (let i = 1; i <= 7; i++) {
    $(`.design_thumb${i}`).click(function() {
      //...design_thumb click code...
      $(`.popup_bg${i}, .container${i}`).show();
    });

    $(`.container${i} .close_btn`).click(function() {
      //...close_btn click code...
      $(`.popup_bg${i}, .container${i}`).hide();
    });
  }

  // Overflow control
  if (".popup_bg1,.popup_bg2,.popup_bg3") {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});