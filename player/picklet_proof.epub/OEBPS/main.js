var slider;
var svg;
var body;
var output;
var dragging = false;
window.addEventListener("DOMContentLoaded", reset, false);
function setBegin(value) {
  ["animate", "animateTransform"].forEach(function (tag) {
    console.log(tag);
    var c = svg.getElementsByTagName(tag);
    var i;
    for (i = 0; i < c.length; i++) {
      var el = c[i];
      // if (el.getAttribute("class") == "ambient") continue;
      el.setAttribute("begin", value);
    }
  })
  // var s = document.getElementsByTagName("svg");
  // for (var i = 0; i < s.length; i++) {
  //   var el = s[i];
  //   el.pauseAnimations();
  // }
  svg.pauseAnimations();
}
function setCurrentTime(evt) {
  if (!dragging) {
    setBegin("0s");
  }
  output.innerHTML = evt.target.value;
  svg.setCurrentTime(evt.target.value);
  dragging = true;
}
function reset(evt) {
  body = document.getElementsByTagName("body")[0];
  var innerwidth = window.innerWidth;
  var innerHeight = window.innerHeight;

  output = document.getElementById("output");

  // NOTE: hardcoded svg element id... svg_document
  svg = document.getElementById("svg_document");

  // visibilitychange is the event fired when switching away from this page
  document.onvisibilitychange = release;
  slider = document.getElementById("slider");

  // for touch based Books range input which doesn't work with touch events,
  // fake the range input events
  slider.ontouchstart = setCurrentTime;
  slider.ontouchmove = function (evt) {
    slider.value = (evt.touches[0].clientX - 40) / (220); // slider.clientWidth;
    evt.preventDefault();
    setCurrentTime(evt);
    output.innerHTML = evt.touches[0].clientX;
  };
  // for normal mouse-based range input events
  slider.oninput = setCurrentTime;

  function release(evt) {
    if(document.visibilityState) {
      console.log(document.visibilityState);
      output.innerHTML = document.visibilityState;
    }
    setBegin("indefinite");
    slider.value = 0.9999;
    slider.dispatchEvent(new window.Event("input", { bubbles: true }));
    dragging = false;
  };

  // explicit touch drag and mouse-based reset slider
  slider.ontouchend = slider.onchange = release;

  // mouse-based drag end reset slider
  // slider.onchange = release;

  // set initial value to max (setting value=1 would wrap the animation)
  slider.value = 0.9999;

  // set initial state of svg by faking a touch input event on the slider
  slider.dispatchEvent(new window.Event("input", { bubbles: true }));
}