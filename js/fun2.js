//CONSTANTES:

// CAPTURO LOS RECURSOS
const resourcePower = document.querySelector('.counter__power');
const resourceChip = document.querySelector('.counter__chip');
const resourceCrystal = document.querySelector('.counter__crystal');
const resourceNeeded = 10 //mínimo de recursos necesarios para cada uno

//CAPTURO EL SVG DEL PLANETA
const planetUp = document.querySelector('.planet');

//CAPTURO EL BOTÓN DE CONSTRUCCIÓN
const buildButton = document.querySelector('.container__minigame--button');
buildButton.disabled = true; //se deshabilita el botón de manera inicial

//CAPTURO LAS VARIABLES PARA QUE EL PLANETA APAREZCA DE MANERA ALEATORIA
const maxX = 80; //porcentaje máximo en el que se situa el planeta teniendo en cuenta los márgenes izq y der.
const maxY = 337; //px máximo en el que se situa el planeta
const maxDeg = 359; //grados de rotación máximos del svg
const maxSize = 5; //tamaño máximo del planeta

//CAPTURO EL CONTADOR DE NAVES
const counterShips = document.querySelector('.ships__box--counter');

//VARIABLES:

//ESTABLEZCO LOS RECURSOS INICIALES EN 0
var counterPower = 0;
var counterChip = 0;
var counterCrystal = 0;

//ESTABLEZCO EL NÚMERO INICIAL DE NAVES EN 1
var currentShip = 1;


//FUNCIONES:

//CREO LA FUNCIÓN PARA EXPLORAR EL PLANETA Y RECOLECTAR LOS RECURSOS
function explorePlanet() {
    let resourcesRandomizeArray = new Array(3) //Array con los 3 recursos para generarlos aleatoriamente

    for (let i = 0; i < resourcesRandomizeArray.length; i++) {
        resourcesRandomizeArray[i] = Math.floor(Math.random() * 4) + 1;
    } 

    counterPower += resourcesRandomizeArray[0];
    counterChip += resourcesRandomizeArray[1];
    counterCrystal += resourcesRandomizeArray[2];
  
    resourcePower.innerHTML = counterPower;
    resourceChip.innerHTML = counterChip;
    resourceCrystal.innerHTML = counterCrystal;
    //Cuando detecta que se ha llegado a los recursos necesarios avisa de que se puede construir una nueva nave y activa el botón de construcción 
    if (counterPower >= resourceNeeded && counterChip >= resourceNeeded && counterCrystal >= resourceNeeded) {
        alert("¡Puedes construir una nave!");
        
        buildButton.style.opacity = 1;
        buildButton.style.cursor = 'pointer';
        buildButton.disabled = false;//se activa el botón de contrucción 
    }

    planetUp.style.opacity = "0"; //oculta el planeta actual

    //vuelve a generar otro planeta
    setTimeout(function () {
        generatePlanet();
      }, 200);
}

//FUNCIÓN PARA GENERAR PLANETAS
function generatePlanet() {

    const randomY = Math.floor(Math.random() * maxY);//0-337
    const randomX = Math.floor(Math.random() * maxX);//0-80
    const randomDeg = Math.floor(Math.random() * maxDeg);//0-359
    const randomSize = Math.floor(Math.random() * maxSize) + 10;//10-15

    //Vuelve a aparecer el planeta con otros parámetros
    setTimeout(function(){
        planetUp.style.opacity= "1";
        planetUp.style.transform = `rotate(${randomDeg}deg)`;
        planetUp.style.width = `${randomSize}%`;
        planetUp.style.top = `${randomY}px`;
        planetUp.style.left = `${randomX}%`;
    }, 200);
}

//FUNCIÓN PARA CONSTRUIR LA NAVE
function buildShip() {
    
    //resto los recursos necesarios para la construcción
    counterPower -= resourceNeeded;
    counterChip -= resourceNeeded;
    counterCrystal -= resourceNeeded;

    resourcePower.innerHTML = counterPower;
    resourceChip.innerHTML = counterChip;
    resourceCrystal.innerHTML = counterCrystal;

    currentShip++;//se suma una nave al contador

    counterShips.innerHTML = currentShip;

    //vuelvo a deshabilitar el botón una vez se ha construido la nave
    buildButton.style.opacity = "0.5";
    buildButton.style.cursor = "pointer";
    buildButton.disabled = true;
}

//LISTENERS:

//EVENTO PARA PULSAR EN EL PLANETA
planetUp.addEventListener("click", explorePlanet);

//EVENTO DE CONTRUCCIÓN
buildButton.addEventListener('click', buildShip);


