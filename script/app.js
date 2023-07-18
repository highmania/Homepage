$(document).ready(function() {
  //fullpage option
  $('#fullpage').fullpage({
    autoScrolling: false,
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
$(function() {
  for (let i = 1; i <= 6; i++) {
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