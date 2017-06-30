//apiKey
// var apiKey = require('.env').apiKey;

//styling videos
var vid = document.getElementById("bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {
  // only functional if "loop" is removed
  vid.pause();
  // to capture IE10
  vidFade();
});

$("document").ready(function() {

  /*Start: Prevent the default white background on blur of top navigation */
  $(".dropdown-menu li a").mousedown(function() {
    var dropdown = $(this).parents('.dropdown');
    var link = dropdown.children(':first-child');
    link.css('background-color', "#2E3436");
    link.css('color', 'white');
  });
  /*End: Prevent the default white background on blur of top navigation */

  /*Start : Automatically start the slider */
  $('.carousel').carousel({
    interval: 4000
  });
  /*End: Automatically start the slider */

});
