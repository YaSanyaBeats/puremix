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
        if (window.scrollY > 100)
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

class ProductCounter {
    constructor(root) {
        this.root = root;
        this.plusNode = this.root.querySelector('.plus');
        this.minusNode = this.root.querySelector('.minus');
        this.quantityNode = this.root.querySelector('.quantity');
        this._count = 1;

        this.bindListeners();
        console.log(1);
    }

    bindListeners() {
        this.plusNode.addEventListener('click', (event) => {
            this.count++;
            this.update();
        })
        this.minusNode.addEventListener('click', (event) => {
            this.count--;
            this.update();
        })
    }

    get count() {
        return this._count;
    }

    set count(value) {
        if(value >= 0) {
            this._count = value;
        }
    }

    update() {
        this.quantityNode.innerText = this.count;
    }
}

function initVariationsCalc() {
    let productCounterNodes = document.querySelectorAll('.variations-calc');
    if(productCounterNodes.length > 0) {
        productCounterNodes.forEach((counter) => {
            console.log(counter);
            new ProductCounter(counter);
        })
    }
}

function initTabs() {
    const tabLinks = document.querySelectorAll(".tabs-button__link");
    const tabPanels = document.querySelectorAll(".tabs__panel");
    for(let link of tabLinks) {
        link.addEventListener("click", e => {
            e.preventDefault();
            
            document.querySelector('.tabs__button.tabs__active').classList.remove("tabs__active");
            document.querySelector('.tabs__panel.tabs__active').classList.remove("tabs__active");
            const parentListItem = link.parentElement;
            parentListItem.classList.add("tabs__active");
            const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
            const panel = [...tabPanels].filter(link => link.getAttribute("data-index") == index);
            panel[0].classList.add("tabs__active");
        });
    }
}
function initBurgerButton() {
    const button = document.querySelector('.header__burger-button');
    button.addEventListener("click", e => {
        e.preventDefault();

        if (document.querySelector('.header__burger-button_active'))
        {
        document.querySelector('.header_active').classList.remove("header_active");
        document.querySelector('.header__burger-button_active').classList.remove("header__burger-button_active");
        document.querySelector(".header__menu_active").classList.remove("header__menu_active");
        document.querySelector(".header__container_active").classList.remove("header__container_active");
        document.querySelector(".header__icons_active").classList.remove("header__icons_active");
        }
        else
        {
        document.querySelector('.header').classList.add("header_active");
        button.classList.add("header__burger-button_active");
        document.querySelector('.header__menu').classList.add("header__menu_active");
        document.querySelector('.header__container').classList.add("header__container_active");
        document.querySelector('.header__icons').classList.add("header__icons_active");
        }
    });
}
function initSliderButtons() {
    const left = document.querySelector(".product-slider__button_left");
    const right = document.querySelector(".product-slider__button_right");
    const slider = document.querySelector(".product__slides");
    const slides = document.querySelector(".product-slider__img");
    left.addEventListener("click", e => {
        slider.scrollRight += 300;
    });
    right.addEventListener("click", e => {
        slider.scrollLeft += 300;
    });
}

function initProductSwiper() {
    const productSwiper = document.querySelector('.product__slider');
    if(productSwiper) {
        const swiper = new Swiper('.product__slider', {
          
            // If we need pagination
            pagination: {
              el: '.product__pagination',
              clickable: true
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.product__slider .product__button_next',
              prevEl: '.product__slider .product__button_prev',
            },
        });
    }
}

isWebp();

document.addEventListener('DOMContentLoaded', (event) => {
    initStickyHeader();
    initEquipmentAccordion();
    initVariationsCalc();
    initTabs();
    initBurgerButton();
    initProductSwiper();
})