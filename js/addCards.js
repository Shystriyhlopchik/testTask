const interfaceContent = document.querySelector('.interface__content');

/*---------Добавление названия карты------------*/
function addCardName(lastElement, initialCards) {
    let cardFooterName = lastElement.querySelector('.card__footer-name');
    cardFooterName.textContent = initialCards.name;
}

/*---------Добавление логотипа---------*/
function addCardLogo(lastElement, initialCards) {
    let placeCardImage = lastElement.querySelector('.card__footer-log');
    placeCardImage.setAttribute('src', `${initialCards.logo}`);
}

/*---------Добавление номера---------*/
function addCardNumber(lastElement, initialCards) {
    let cardNumber = lastElement.querySelector('.card__number');
    cardNumber.textContent = initialCards.number;
}

/*------------------Добавление карт---------------------*/
function addCards() {
    for (let i = 0; i < initialCards.length; i++) {
        interfaceContent.innerHTML += `
        <div class="card">
            <div class="card__footer">
                <img src="./images/icons/48 Icon-VISA.png" class="card__footer-log" alt="">
                <p class="card__footer-name"></p>
            </div>
            <p class="card__number"></p>
        </div>`
        
        let lastCard = interfaceContent.lastElementChild;
        
        addCardName(lastCard, initialCards[i]);
        addCardLogo(lastCard, initialCards[i]);
        addCardNumber(lastCard, initialCards[i]);
    }
}

addCards();