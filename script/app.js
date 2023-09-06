$(function() {
  //스크롤 이벤트
    $(document).on("scroll", function() {
    let scrollTop = $(window).scrollTop();
      if (scrollTop > 100) {
        $("nav, .dropdown>ul li").addClass("nav_active");
      } else {
        $("nav, .dropdown>ul li").removeClass("nav_active");
      }
    });

    //Fullpage 세팅
    new $('#fullpage').fullpage({
      autoScrolling: true,
      scrollHorizontally: false,
      lockAnchors : false,
      anchors:['first', 'second', 'third', 'forth' ,'fifth', 'sixth', 'seventh', 'eighth'],
      navigation : true,
      navigationPosition :'right',
      sectionsColor : ['#eee', '#fff' , '#eee', '#fff' , '#eee', '#fff', '#eee', '#fff'],
      showActiveTooltip: true,
      sectionSeletor:'.section',
      slideSelector:'.slide',
      slidesNavigation: false,
      responsiveSlides : true,
      responsiveWidth: 0
    });

  // 드롭다운 메뉴
  $('.dropdown').hover(
    function() {
      $(this).children('ul').slideDown(500);
    },
    function() {
      $(this).children('ul').slideUp(500);
    }
  );

  // TypeIt 세팅
  new TypeIt("#Introtext", {
      strings: [""],
      speed: 50,
      deleteSpeed: 30,
      loop : true
    })
    .pause(2000)
    .go();

  // 디자인 썸네일 팝업
  $('[class^="design_thumb"]').click(function() {
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

  // 팝업 클릭
  for (let i = 1; i <= 7; i++) {
    $(`.design_thumb${i}`).click(function() {
      $(`.popup_bg${i}, .container${i}`).show();
    });
    $(`.container${i} .close_btn`).click(function() {
      $(`.popup_bg${i}, .container${i}`).hide();
    });
  }

  // 팝업 오버플로우
  if (".popup_bg1, .popup_bg2, .popup_bg3, .popup_bg4, .popup_bg5, .popup_bg6, .popup_bg7") {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

});