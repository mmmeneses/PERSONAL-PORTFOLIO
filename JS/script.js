function updateBackgroundColor() {
    const currentHour = new Date().getHours();
    const body = document.body;
    const navbar = document.getElementById('navbar'); // selecciona la barra de navegacion
    const textElements = document.querySelectorAll('h1, h2, h3, p, a, li, buttom, footer'); // selecciona los elementos de texto

    if(currentHour >= 18 || currentHour < 6) {
        
        // de 6 PM a 12 AM y de 12 AM a 6AM
        
        body.style.backgroundColor = 'midnightblue';

        navbar.style.backgroundColor = 'midnightblue'; // Fondo de la barra de navegacion

        textElements.forEach(element => {
            element.style.color = 'white'; // cambia el texto a blanco
        });
    } else {
        // De 6 AM a 6 PM

        body.style.backgroundColor = '#f8f870';

        navbar.style.backgroundColor = '#f8f870';
        
        textElements.styleforEach(element => {
            element.style.color = 'black'; // cambia el color del texto a negro
        });
    }
}

// Actualiza el fondo y el texto cuando se carga la pagina

updateBackgroundColor();

// Configura un temporizador para verificar cada minuto

setInterval(updateBackgroundColor, 60000);