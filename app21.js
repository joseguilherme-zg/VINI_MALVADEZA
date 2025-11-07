const vini = document.getElementById('vini')

vini.addEventListener("click",() => {
  const audio = document.createElement('audio');
  audio.src = 'hino.mp3';
  audio.volume = 0.5; 
  audio.play();
})