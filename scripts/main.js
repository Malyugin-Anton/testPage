// mouseAnimation
(function() {
  var elements = document.querySelectorAll(".js-mouseAnimation");

  document.addEventListener("mousemove", e => {
    var xValue = e.screenX;
    var yValue = e.screenY;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      var transformValue = `transform: translate3d(${xValue/60}px, ${yValue/60}px, 10px)`;

      element.setAttribute("style", transformValue);
    }
  });
})();

// swipe tuda(left) and suda(right)
(function() {
  var pozXstart = 0,
      pozXend = 0,
      bies = 0,
      activeSlide = 0,
      transformValue = "",
      swipeBar = document.querySelectorAll(".slide-line"),
      swipeConteiner = document.querySelector(".wrapper");

  function moveRight() {
    if (activeSlide === 0) {
      activeSlide++;

      transformValue = `transform: translateX(-50%)`;

      swipeBar.forEach((el, idx) => {
        if (activeSlide === idx) {
          el.classList.add("slide-line_active");
        } else {
          el.classList.remove("slide-line_active");
        }
      });
    }
  }

  function moveLeft() {
    if (activeSlide === 1) {
      activeSlide--;

      transformValue = `transform: translateX(0%)`;

      swipeBar.forEach((el, idx) => {
        if (activeSlide === idx) {
          el.classList.add("slide-line_active");
        } else {
          el.classList.remove("slide-line_active");
        }
      });
    }
  }

  swipeConteiner.addEventListener("touchstart", function(e) {
    pozXstart = e.changedTouches[0].pageX;
  });

  swipeConteiner.addEventListener("touchend", function(e) {
    pozXend = e.changedTouches[0].pageX;
    bies = pozXstart - pozXend;

    if (bies > 5) {
      moveRight();
    } else if (bies < 5) {
      moveLeft();
    }

    swipeConteiner.setAttribute("style", transformValue);
  });
})();
