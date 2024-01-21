//CONSTANTES:

//CAPTURO BOTÓN PARA PASAR AL MINIJUEGO
const btnPlayArray = document.querySelectorAll('.btn-play');

//CAPTURO LA ETIQUETA AUDIO PARA APLICARLE EL EFECTO DE SONIDO
const soundEffect = document.querySelector('.button_sound');


//FUNCIONES:

//CAPTURO EVENTO PARA LOS BOTONES DE LA VERSIÓN WEB Y MOBILE
btnPlayArray.forEach(btnPlay => {
    btnPlay.addEventListener('click', playMinigame);
});

//FUNCIÓN PARA ACTIVAR EL SONIDO Y COMENZAR A JUGAR
function playMinigame() {
    soundEffect.play();

    setTimeout(function(){
        window.location.href= "minigame.html";
    }, 200);
}