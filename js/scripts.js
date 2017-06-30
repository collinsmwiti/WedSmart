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

$(document).ready(function() {
  $(".carousel-inner").swiperight(function() {
    $(this).parent().carousel('prev');
  });
  $(".carousel-inner").swipeleft(function() {
    $(this).parent().carousel('next');
  });
});
