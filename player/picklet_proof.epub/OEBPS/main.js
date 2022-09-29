// window.onload = reset
// window.onmousedown = function (evt) {
//   // output.innerHTML = "onmousedown";
//   // evt.preventDefault();
//   dump(evt);
// };
// window.onpointerover = function (evt) {
//   // evt.preventDefault();
//   dump(evt);
// };
// window.onpointerdown = function (evt) {
//   // evt.preventDefault();
//   dump(evt);
// };
// window.ongotpointercapture = function (evt) {
//   // evt.preventDefault();
//   dump(evt);
// };
// document.onpointermove = function (evt) {
//   // evt.preventDefault();
//   dump(evt);
// };
function dump(evt) {
  // evt.stopImmediatePropagation();
  if (evt.target == slider) {
    evt.preventDefault();
    // TODO: do something to update the value based on the event coordinates
    slider.value = evt.clientX / evt.target.clientWidth;
    svg.setCurrentTime(slider.value);
  }
  var p = document.createElement("p");
  // output.innerHTML = "gotpointermove";
  p.innerHTML = evt.type + " " + evt.clientX;
  // output.insertBefore(p, output.firstChild);
  return true;
}
var output;
var svg;
var slider;
var body;
function setCurrentTime(evt) {
  // output.innerHTML = evt.target.value;
  svg.setCurrentTime(evt.target.value);
}

function reset(evt) {
  body = document.getElementsByTagName("body")[0];
  // body.onmousedown = dump;

  output = document.getElementById("output");
  // document.body.style.backgroundColor = "yellow";
  document.body.style.cssText = "background-color: yellow !important";

  console.log("reset()");
  // NOTE: hardcoded svg element id... svg_document
  svg = document.getElementById("svg_document");
  console.log(svg)
  // output.innerHTML = slider.id;
  svg.pauseAnimations();

  // if (
  //   navigator.epubReadingSystem &&
  //   navigator.epubReadingSystem.hasFeature("touch-events")
  // ) {
  //   output.innerHTML = "has touch-events";
  // }

  // var output = document.getElementById("output");
  // output.innerHTML = "started"
  // output.innerHTML = navigator.epubReadingSystem

  // document.body.style.backgroundColor = colors[color]
  // color = color == 1 ? 0 : 1

  slider = document.getElementById("slider");
  // body.ontouchstart = dump;
  // slider.onmousedown = dump;
  // body.ondragstart = dump;
  // slider.ontouchstart = dump;
  // slider.oninput = function (evt) {
  //   el.setCurrentTime(evt.target.value);
  //   output.innerHTML = "" + evt.target.value;
  // };
  // slider.value = 0.999;
  // window.onmousemove = function (evt) {
  //   // evt.preventDefault()
  //   output.innerHTML = "onmousemove";
  // };
  // slider.ontouchmove = function (evt) {
  //   // update
  //   console.log(evt.target.value)
  //   el.setCurrentTime(evt.target.value)
  // }
}
