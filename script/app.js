$(document).ready(function() {
  //fullpage option
  $('#fullpage').fullpage({
    autoScrolling: false,
    scrollHorizontally: true,
    lockAnchors : false,
    anchors:['first', 'second', 'third', 'forth' ,'fifth', 'sixth' ],
    navigation : true,
    navigationPosition :'right',
    sectionsColor : ['#eee', '#fff' , '#eee', '#fff' , '#eee', '#fff'],
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
