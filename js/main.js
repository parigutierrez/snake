
document.addEventListener("keydown", avanzar);
var cabeza = document.getElementById('cabezaSerpiente');
var reiniciar = document.getElementById("reset");
reiniciar.addEventListener("click", reset);

var posicionX = 0;
var posicionY = 0;
var desplazamiento = 50;

function avanzar(evento){
  switch (evento.keyCode) {

    case 37://LEFT
    posicionX = posicionX - desplazamiento;
    if(posicionX < 0){
      alert("Juego terminado. Presiona Reset para volver a comenzar");
      gameOver();
    }
    else {
      cabeza.style.marginLeft = posicionX+"px";
    }
    break;

    case 38://UP
    posicionY = posicionY - desplazamiento;
    if(posicionY < 0){
      alert("Juego terminado. Presiona Reset para volver a comenzar");
      gameOver();
    }
      else {
        cabeza.style.marginTop = posicionY+"px";
      }
      break;

    case 39: //RIGHT
    posicionX = posicionX + desplazamiento;
    if(posicionX > 450){
      alert("Juego terminado. Presiona Reset para volver a comenzar");
      gameOver();
      }
      else {
        cabeza.style.marginLeft = posicionX + "px";
      }
    break;

    case 40: //DOWN
      posicionY = posicionY + desplazamiento;
      if(posicionY > 450){
        alert("Juego terminado. Presiona Reset para volver a comenzar");
        gameOver();
      }
      else {
        cabeza.style.marginTop = posicionY + "px";
      }
        break;

    default:
      alert("Utilizar sólo las flechas del teclado");
    break;
  }
}

function gameOver(){
  document.removeEventListener("keydown", avanzar);
}

function reset() {
  posicionX = 0;
  posicionY = 0;
  cabeza.style.marginTop = posicionY;
  cabeza.style.marginLeft = posicionX;
  document.addEventListener("keydown", avanzar);

}
