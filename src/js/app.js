const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1140;

function isWebp() {
    // Проверка поддержки webp
    const testWebp = (callback) => {
        const webP = new Image();

        webP.onload = webP.onerror = () => callback(webP.height === 2);
        webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    // Добавление класса _webp или _no-webp для HTML
    testWebp((support) => {
        const className = support ? 'webp' : 'no-webp';
        document.querySelector('html').classList.add(className);

        console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
    });
}

function initEquipmentAccordion() {
    const equipmentCards = document.querySelectorAll('.equipment__card');
    if(equipmentCards.length > 0) {
        equipmentCards.forEach((card) => {
            const button = card.querySelector('.equipment-card__button');
            button.addEventListener('click', (event) => {
                card.classList.toggle('equipment-card_active');
                button.classList.toggle('accordion-button_active')
            })
        })
    }
}

function initStickyHeader() {
    //----
}

isWebp();

document.addEventListener('DOMContentLoaded', (event) => {
    initStickyHeader();
})