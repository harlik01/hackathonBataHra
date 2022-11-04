window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 1,
    speed: 300,
    auto: 0,
    draggable: true,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function(index, elem, dir) {
    },
    transitionEnd: function(index, elem) {
        // 0 - right (NO), 2 - left (YES), 1 - ignore
        answered(index, elem);
        nextCard();
    }
  });

function answered(index, elem) {
    console.log(index);
    // window.mySwipe.slide(1, 250);
}

function nextCard() {

}

// Fade effect
let target = document.getElementById("card");
let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        fadeEffect(target);
    });    
});
observer.observe(target, { attributes : true, attributeFilter : ['style'] });


async function fadeEffect(target) {
    let value = target.style.translateX;
    console.log("value");
}