const gameDetails = {
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

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
