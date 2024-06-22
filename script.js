// script.js

document.getElementById('messageButton').addEventListener('click', function() {
    const container = document.getElementById('container');
    const messageDiv = document.getElementById('message');
    const button = this;
    const body = document.body;

    // Mostrar el mensaje y cambiar a la decoración feliz
    if (messageDiv.classList.contains('hidden')) {
        messageDiv.classList.remove('hidden');
        messageDiv.style.display = 'block';
        container.classList.remove('sad-theme');
        container.classList.add('happy-theme');
        body.classList.remove('sad-background');
        body.classList.add('happy-background');
        button.style.display = 'none';

        // Crear flores y mostrar animación
        for (let i = 0; i < 5; i++) {
            let flower = document.createElement('div');
            flower.classList.add('flower');
            flower.style.left = `${50 + i * 60}px`;
            flower.style.top = `${200}px`;
            flower.style.animationDelay = `${i * 0.5}s`;
            document.body.appendChild(flower);
            setTimeout(() => {
                flower.style.display = 'block';
            }, i * 500);
        }
    }
});
