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
    },
    exploradores: {
        name: 'Exploradores',
        price: '$32.990',
        discount: '10%',
        description: 'Embárcate en una aventura emocionante con tu familia explorando mundos desconocidos.',
        image: '../img/exploradores.jpg'
    },
    'dias-de-radio': {
        name: 'Días de Radio',
        price: '$25.000',
        discount: '15%',
        description: 'Revive los días dorados de la radio en este juego nostálgico y educativo para todas las edades.',
        image: '../img/dias-de-radio.jpg'
    },
    'formula-d': {
        name: 'Formula D',
        price: '$30.000',
        discount: '20%',
        description: 'Compite en emocionantes carreras de autos en pistas alrededor del mundo.',
        image: '../img/formula-d.jpg'
    },
    sumatra: {
        name: 'Sumatra',
        price: '$30.000',
        discount: '20%',
        description: 'Explora la exótica isla de Sumatra en este juego de aventura familiar.',
        image: '../img/sumatra.jpg'
    },
    viceroy: {
        name: 'Viceroy',
        price: '$30.000',
        discount: '20%',
        description: 'Conviértete en el gran viceroy y construye tu imperio en este juego de estrategia.',
        image: '../img/viceroy.jpg'
    },
    century: {
        name: 'Century',
        price: '$30.000',
        discount: '20%',
        description: 'Viaja a través de los siglos en este juego épico de comercio y aventura.',
        image: '../img/century.jpg'
    },
    'catan-junior': {
        name: 'Catan Junior',
        price: '$32.990',
        discount: '10%',
        description: 'Un juego para los más pequeños donde exploran islas y buscan tesoros escondidos.',
        image: '../img/catan-junior.jpg'
    },
    'leo-va-al-barbero': {
        name: 'Leo',
        price: '$25.000',
        discount: '15%',
        description: 'Ayuda a Leo el león a llegar a tiempo a su cita con el barbero en este divertido juego para niños.',
        image: '../img/leo-va-al-barbero.jpg'
    },
    'concept-kids-animales': {
        name: 'Concept Kids Animales',
        price: '$30.000',
        discount: '20%',
        description: 'Un juego cooperativo donde los niños describen y adivinan animales usando iconos y pistas.',
        image: '../img/concept-kids-animales.jpg'
    },
    'fabulantica': {
        name: 'Fabulantica',
        price: '$30.000',
        discount: '20%',
        description: 'Explora el mágico mundo de Fabulantica y ayuda a los personajes a encontrar sus amigos desaparecidos.',
        image: '../img/fabulantica.jpg'
    },
    'fantasma-blitz': {
        name: 'Fantasma Blitz',
        price: '$30.000',
        discount: '20%',
        description: 'Un juego de reacción rápida donde los jugadores atrapan objetos antes que sus oponentes.',
        image: '../img/fantasma-blitz-dados.jpg'
    },
    'ghost-adventure': {
        name: 'Ghost Adventure',
        price: '$30.000',
        discount: '20%',
        description: 'Un emocionante juego de aventuras donde los jugadores guían a un pequeño fantasma a través de misiones.',
        image: '../img/ghost-adventure.jpg'
    },
    'adventures-games-monocromo': {
        name: 'Adventures Games Monocromo',
        price: '$32.990',
        discount: '10%',
        description: 'Un juego de exploración para toda la familia, donde los jugadores descubren nuevas tierras y buscan tesoros escondidos.',
        image: '../img/adventures-games-monocromo-sa.jpg'
    },
    exit: {
        name: 'Exit',
        price: '$25.000',
        discount: '15%',
        description: 'Resuelve puzzles y escapa de las habitaciones en este emocionante juego de aventuras.',
        image: '../img/exit.jpg'
    },
    'night-of-the-living-dead': {
        name: 'Night of the Living Dead',
        price: '$30.000',
        discount: '20%',
        description: 'Sobrelleva la invasión zombie cooperando con otros jugadores en este juego lleno de terror y estrategia.',
        image: '../img/night-of-the-living-dead-espanol.jpg'
    },
    rescate: {
        name: 'Rescate',
        price: '$30.000',
        discount: '20%',
        description: 'Trabaja en equipo para salvar vidas en situaciones de emergencia.',
        image: '../img/rescate.jpg'
    },
    'la-tripulacion': {
        name: 'La Tripulación',
        price: '$30.000',
        discount: '20%',
        description: 'Embárcate en una misión espacial con tu equipo en este juego de cartas cooperativo.',
        image: '../img/la-tripulacion.jpg'
    },
    undo: {
        name: 'Undo',
        price: '$30.000',
        discount: '20%',
        description: 'Viaja en el tiempo y cambia la historia en este juego de misterio y cooperación.',
        image: '../img/undo-4-fiebre-del-tesoro.jpg'
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
            <div class="add-to-cart-container">
                <input type="number" class="quantity-input" min="1" value="1">
                <button class="add-to-cart-btn">Añadir al Carrito</button>
            </div>
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


