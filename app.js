let boxruido = document.getElementById("logoruido")

boxruido.addEventListener('mousemove', (event) => {
    const sound = document.getElementById('chicken-sound');
    if (sound.paused) {
        sound.currentTime = 0;
        sound.play();
    }
});

boxruido.addEventListener('mouseleave', () => {
    // Detener el sonido cuando el mouse sale de la ventana
    const sound = document.getElementById('chicken-sound');
    sound.pause();
});