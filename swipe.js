window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 1,
    speed: 300,
    auto: 0,
    draggable: true,
    continuous: false,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function(index, elem, dir) {
    },
    transitionEnd: function(index, elem) {
        // 0 - right (NO), 2 - left (YES), 1 - ignore
        answered(index, elem);
    }
  });

function answered(index, elem) {
    console.log(index);
    if(index != 1) {
        updateValues(index);
        nextCard(index);
        window.mySwipe.slide(1, 250);
    }
}