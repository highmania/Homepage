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
$(function(){
  $(".design_thumb1").click(function(){
    $(".popup_bg1, .container1").show();
  });
  
  $(".container1 .close_btn").click(function(){
    $(".popup_bg1, .container1").hide();
  });
  $(".design_thumb2").click(function(){
    $(".popup_bg2, .container2").show();
  });
  
  $(".container2 .close_btn").click(function(){
    $(".popup_bg2, .container2").hide();
  });
  $(".design_thumb3").click(function(){
    $(".popup_bg3, .container3").show();
  });
  
  $(".container3 .close_btn").click(function(){
    $(".popup_bg3, .container3").hide();
  });
});

$(function(){
  if (".popup_bg1,.popup_bg2,.popup_bg3") {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});