// script.js

document.getElementById('comfortButton').addEventListener('click', function() {
    var message = "Aunque hoy parezca un día gris, recuerda que el sol siempre está detrás de las nubes, esperando para brillar. " +
                  "Tú eres como ese sol, y aunque ahora estés pasando por un momento difícil, sé que pronto volverás a brillar con toda tu luz. " +
                  "TE QUIERO MUCHO. ATT: MARCO";
    
    var container = document.querySelector('.container');
    var button = document.getElementById('comfortButton');
    var body = document.querySelector('body');

    document.getElementById('message').textContent = message;
    document.getElementById('message').classList.add('visible');
    container.classList.add('alegre');
    button.classList.add('alegre');
    body.classList.add('alegre');

    createFlowers();
});

function createFlowers() {
    var flowerContainer = document.getElementById('flowerContainer');
    for (let i = 0; i < 30; i++) {
        let flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 2 + 's';
        flowerContainer.appendChild(flower);
    }
}
