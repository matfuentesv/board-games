const gameDetails = {
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
            <p class="modal-description">${game.description}</p>
            <div class="modal-actions">
                <input type="number" value="1" min="1" class="quantity-input">
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

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
