const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music   = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');


const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// music
const songs = [
  {
    name:'Surat-Al-Fatihah',
    displayName:'Surat Al-Fatihah',
    artist:'Mishari Rashid al-`Afasy',
  },
  {
    name:'4-Quls',
    displayName:'4-Quls',
    artist:'Mishari Rashid al-`Afasy',
  },

  {
    name:'Ayatal-Kursi-7-Qaris',
    displayName:'Ayatal Kursi',
    artist:'Masnoon Duain',
  },
  {
    name:'Ayatal-Kursi-7-Qaris',
    displayName:'Ayatal Kursi',
    artist:'Masnoon Duain',
  },
  {
    name:'Surat-Al-Ikhlas',
    displayName:'Surat Al-Ikhlas',
    artist:'AbdulMuhsin al-Qasim',
  },
  {
    name:'Surat-An-Nasr',
    displayName:'Surat An-Nasr',
    artist:'AbdulMuhsin al-Qasim',
  },
  {
    name:'Surat-Ya-Sin',
    displayName:'Surat Ya-Sin',
    artist:'AbdulMuhsin al-Qasim',
  }
];

// check if playing
let isPlaying = false;

// Play
function playSong( ){
  isPlaying = true;
  playBtn.classList.replace('fa-play','fa-pause');
  playBtn.setAttribute('title','Pause');
  music.play();
}
// Pause
function pauseSong( ){
  isPlaying = false;
  playBtn.classList.replace('fa-pause','fa-play');
  playBtn.setAttribute('title','Play');
  music.pause();
}

// play and pause Event Listener
playBtn.addEventListener('click',() => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song){
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jfif`;
}

// current songs

let songIndex = 0;

// previous songs
function prevSong() {
songIndex--;
if (songIndex < 0){
  songIndex = songs.length -1;
}
console.log(songIndex);
loadSong(songs[songIndex]);
playSong();
}

// next songs
function nextSong() {
songIndex++;
if (songIndex > songs.length -1){
  songIndex =0;
}
console.log(songIndex);
loadSong(songs[songIndex]);
playSong();
}

// On load - select first songs
loadSong(songs[0]);

// Update progress Bar and Time
function updateProgressBar(e){
  if (isPlaying){
    const {duration, currentTime} = e.srcElement;
    console.log(duration, currentTime);

    // update progress bar width
    const progressPercent = (currentTime / duration)*100;
    progress.style.width = `${progressPercent}%`;
  }
}

// Event addEventListener
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
music.addEventListener('timeupdate',updateProgressBar)
