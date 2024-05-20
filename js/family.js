const gameDetails = {
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
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
