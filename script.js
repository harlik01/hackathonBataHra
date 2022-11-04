window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 1,
    speed: 400,
    auto: 3000,
    draggable: true,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function(index, elem, dir) {},
    transitionEnd: function(index, elem) {}
  });