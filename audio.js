var nyan = document.getElementById("nyan");
var nyanBtn = document.getElementById("nyan-btn");

function playPause(song) {
  if (song.paused && song.currentTime >= 0 && !song.ended) {
    song.play();
  } else {
    song.pause();
  }
}

function reset(btn, song) {
  if (btn.classList.contains("playing")) {
    btn.classList.toggle("playing");
  }
  song.pause();
  song.currentTime = 0;
}

function progress(btn, song) {
  setTimeout(function () {
    var end = song.duration;
    var current = song.currentTime;
    var percent = current / (end / 100);
    //check if song is at the end
    if (current == end) {
      reset(btn, song);
    }
    //set inset box shadow
    btn.style.boxShadow =
      "inset " +
      btn.offsetWidth * (percent / 100) +
      "px 0px 0px 0px rgba(0,0,0,0.125)";
    //call function again
    progress(btn, song);
  }, 1000);
}

nyanBtn.addEventListener("click", function () {
  nyanBtn.classList.toggle("playing");
  playPause(nyan);
  progress(nyanBtn, nyan);
});