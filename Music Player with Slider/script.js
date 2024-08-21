const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");
const songs = [
  {
    title: "Badan Pe Sitare",
    name: "Badan Pe Sitare",
    source:
      "Music/Badan Pe Sitare Lapete Huye.mp3",
  },
  {
    title: "Chand Ke Par Chlo",
    name: "Chand Ke Par Chlo",
    source:
      "Music/Chand Ke Paar Chalo.mp3",
  },
  {
    title: "Gold Tamba",
    name: "Gold Tamba",
    source:
      "Music/ɢᴏʟᴅ ᴛᴀᴍʙᴀ.mp3",
  },
  {
    title: "Mere Sapno Ki Rani",
    name: "Mere Sapno Ki Rani",
    source:
      "Music/Mere Sapno Ki Rani.mp3",
  },
  {
    title: "Tera Mera hai Pyar Amar",
    name: "Tera Mera hai Pyar Amar",
    source:
      "Music/Tera Mera Hai Payar Amar.mp3",
  },
  {
    title: "Tu hi Haqeeqat",
    name: "Tu hi Haqeeqat",
    source:
      "Music/Tu Hi Haqeeqat.mp3",
  },
  {
    title: "Tu jo Has Has",
    name: "Tu jo Has Has",
    source:
      "Music/Tu Jo Hans Hans Ke.mp3",
  },
];
let currentSongIndex = 3;
function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;
  song.addEventListener("loadeddata", function () {});
}
song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});
song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});
function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}
function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}
function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}
playPauseButton.addEventListener("click", playPause);
progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});
progress.addEventListener("change", function () {
  playSong();
});
forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});
backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});
updateSongInfo();
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});