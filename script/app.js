$(document).ready(function() {
  $('#fullpage').fullpage({
    autoScrolling: false,
    scrollHorizontally: true,
    lockAnchors : false,
    anchors:['first', 'second', 'third', 'forth'],
    navigation : true,
    navigationPosition :'right',
    sectionsColor : ['#fcc', '#ffc', '#fec', '#fea'],
    showActiveTooltip: true,
    sectionSeletor:'.section',
    slideSelector:'.slide',
    slidesNavigation: false,
  });
});
    