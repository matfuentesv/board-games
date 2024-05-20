let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Cambiar de slide cada 3 segundos
});

const gameDetails = {
    azul: {
        name: 'Azul',
        price: '$32.990',
        discount: '10%',
        description: 'Juego de mesa abstracto diseñado por Michael Kiesling en el que 2 a 4 jugadores compiten por rellenar un mural con azulejos de la manera más óptima posible.',
        image: '../img/azul.jpg'
    },
    catan: {
        name: 'Catan',
        price: '$25.000',
        discount: '15%',
        description: 'Un juego emocionante que desafía tus habilidades tácticas.',
        image: '../img/catan.jpg'
    },
    wonders: {
        name: '7 Wonders',
        price: '$30.000',
        discount: '20%',
        description: 'Construye una civilización que resistirá la prueba del tiempo.',
        image: '../img/wonders.jpg'
    },
    stone: {
        name: 'Stone Age',
        price: '$30.000',
        discount: '20%',
        description: 'Un juego de estrategia que te transportará a la Edad de Piedra.',
        image: '../img/stone.jpg'
    },
    carcassonne: {
        name: 'Carcassonne',
        price: '$30.000',
        discount: '20%',
        description: 'Un juego de colocación de losetas que construye ciudades medievales.',
        image: '../img/carcasonne.jpg'
    },
    pandemic: {
        name: 'Pandemic',
        price: '$30.000',
        discount: '20%',
        description: 'Trabaja en equipo para detener la propagación de enfermedades mundiales.',
        image: '../img/pandemic.jpg'
    }
};

function openModal(gameId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    const game = gameDetails[gameId];

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${game.image}" alt="${game.name}">
        </div>
        <div class="modal-details">
            <h2>${game.name}</h2>
            <p class="modal-price">${game.price}</p>
            <p class="modal-discount">Descuento: ${game.discount}</p>
            <p>${game.description}</p>
            <button class="add-to-cart-btn">Añadir al Carrito</button>
        </div>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
