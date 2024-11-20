function updateBackgroundColor() {
    
    const currentHour = new Date().getHours();
    
    const body = document.body;
    
    const navbar = document.getElementById('navbar'); // selecciona la barra de navegacion
    
    const textElements = document.querySelectorAll('h1, h2, h3, p, a, ul, i, buttom, footer'); // selecciona los elementos de texto

    const dropdownLinks = document.querySelectorAll('.dropdown-content a'); // Selecciona los enlances dentro del dropdown

    if(currentHour >= 18 || currentHour < 6) {
        
        // de 6 PM a 12 AM y de 12 AM a 6AM
        
        body.style.backgroundColor = 'midnightblue';

        navbar.style.backgroundColor = 'midnightblue'; // Fondo de la barra de navegacion

        textElements.forEach(element => {
            element.style.color = 'white'; // cambia el texto a blanco
        });

        dropdownLinks.forEach(link => {
            link.style.color = 'white'; // Cambia el color de los enlaces dentro del dropdown a blanco

            link.style.backgorundColor = 'midnightblue';
        });
    } else {
        // De 6 AM a 6 PM

        body.style.backgroundColor = '#f8f870';

        navbar.style.backgroundColor = '#f8f870';

        textElements.forEach(element => {
            element.style.color = 'black'; // cambia el color del texto a negro
        });

        dropdownLinks.forEach(link => {
            link.style.color = 'black'; // Cambia el color de los enlaces dentro del dropdpwn a negro

            link.style.backgroundColor = 'midnightblue'; // Cambia el color del fondo de los enlaces en el dropdown 
        })
    }
}

// Actualiza el fondo y el texto cuando se carga la pagina

updateBackgroundColor();

// Configura un temporizador para verificar cada minuto

setInterval(updateBackgroundColor, 60000);