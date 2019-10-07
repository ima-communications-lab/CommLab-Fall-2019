let player = document.getElementById("player");
let message = document.getElementById("message");

let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let volumeUpBtn = document.getElementById("volumeUpBtn");  // ***
let volumeDownBtn = document.getElementById("volumeDownBtn");  // ***

playBtn.addEventListener("click", playVideo);
pauseBtn.addEventListener("click", pauseVideo);
stopBtn.addEventListener("click", stopVideo);
volumeUpBtn.addEventListener("click", volumeUp);  // ***
volumeDownBtn.addEventListener("click", volumeDown);  // ***


let volume = 1.0;


function volumeUp() {
  volume += 0.1;
  if (volume > 1.0) {
    volume = 1.0;
  }
  player.volume = volume;
  updateMessage();
}

function volumeDown() {
  volume -= 0.1;
  if (volume < 0.0) {
    volume = 0.0;
  }
  player.volume = volume;
  updateMessage();
}

function playVideo() {
  player.play();
  updateMessage();
}

function pauseVideo() {
  player.pause();
  updateMessage();
}

function stopVideo() {
  player.currentTime = 0;
  player.pause();
  updateMessage();
}

function updateMessage() {
  message.innerHTML = "time: " + player.currentTime
  message.innerHTML += "<br>";
  message.innerHTML += "volume: " + player.volume;
}
