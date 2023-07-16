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
    const equipmentCards = document.querySelectorAll('.accordion__elem');
    if(equipmentCards.length > 0) {
        equipmentCards.forEach((card) => {
            const button = card.querySelector('.accordion-button');
            button.addEventListener('click', (event) => {
                card.classList.toggle('accordion__elem_active');
                button.classList.toggle('accordion-button_active')
            })
        })
    }
}

function initStickyHeader() {
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header__logo');
    const headerLinks = document.querySelectorAll('.header__link');
    const headerIcons = document.querySelectorAll('.header__icon');
    document.addEventListener("scroll", (event) => {
        if (window.scrollY > 10)
        {
            header.classList.add('header_fill');
            headerLogo.classList.add('header__logo_fill-white');
            headerLinks.forEach((link) => {
                link.classList.add('header__link_black');
              });
            headerIcons.forEach((icon) => {
                icon.classList.add('header__icon_fill');
            });  
        }
        else
        {
            header.classList.remove('header_fill');
            headerLogo.classList.remove('header__logo_fill-white');
            headerLinks.forEach((link) => {
                link.classList.remove('header__link_black');
              });
            headerIcons.forEach((icon) => {
                icon.classList.remove('header__icon_fill');
            });  
        }
      });
}

function initVariationsCalc() {
    var plus = document.querySelector('.plus');
    var minus = document.querySelector('.minus');
    var field = document.querySelector('.quantity');
    var fieldValue = parseInt(field.innerText);
    minus.addEventListener('click', function() {
      if (fieldValue > 1) {
        fieldValue--;
        field.innerText = fieldValue;
      } else {
        return 1;
      }
    });
    plus.addEventListener('click', function() {
      fieldValue++;
      field.innerText = fieldValue;
    });
  }



isWebp();

document.addEventListener('DOMContentLoaded', (event) => {
    initStickyHeader();
    initEquipmentAccordion();
    initVariationsCalc();
})