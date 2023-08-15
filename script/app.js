$(document).ready(function() {
  //fullpage option
  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
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
    responsiveWidth: 900,
  });
  $.fn.fullpage.setAllowScrolling(false);
});
$(function(){
  $('[class^="design_thumb"]').click(function(){
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
});


$(function(){
    $(document).on("scroll", function() {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > 100) {
        $("nav, .dropdown>ul li").addClass("active");
      } else {
        $("nav, .dropdown>ul li").removeClass("active");
      }
    });
});

$(function(){
  $('.dropdown').hover(
    function() {
      $(this).children('ul').slideDown(500);
    },
    function() {
      $(this).children('ul').slideUp(500);
    }
  );
});

document.addEventListener('DOMContentLoaded', () =>{
  new TypeIt("#Introtext", {
    strings: [""],
    speed: 50,
    deleteSpeed: 30,
    loop : true
  })
  .pause(2000)
  .go();
});

$(function() {
  for (let i = 1; i <= 7; i++) {
    $(`.design_thumb${i}`).click(function() {
      $(`.popup_bg${i}, .container${i}`).show();
    });

    $(`.container${i} .close_btn`).click(function() {
      $(`.popup_bg${i}, .container${i}`).hide();
    });
  }
});

$(function(){
  if (".popup_bg1,.popup_bg2,.popup_bg3") {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
