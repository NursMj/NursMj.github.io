window.onscroll = function headerItem() {
    let menuItems = document.querySelectorAll('.menu__item');
    let screenWidth = screen.width;

    if (screenWidth >= 1600) {
        if(window.pageYOffset > 820) {
            menuItems.forEach(item => {
                item.classList.add('menu__item_scroled')
            })
        } else {
            menuItems.forEach(item => {
                item.classList.remove('menu__item_scroled')
            })
        }
    } else if (screenWidth >= 1200) {
        if(window.pageYOffset > 670) {
            menuItems.forEach(item => {
                item.classList.add('menu__item_scroled')
            })
        } else {
            menuItems.forEach(item => {
                item.classList.remove('menu__item_scroled')
            })
        }
    } else if (screenWidth >= 992) {
        if(window.pageYOffset > 570) {
            menuItems.forEach(item => {
                item.classList.add('menu__item_scroled')
            })
        } else {
            menuItems.forEach(item => {
                item.classList.remove('menu__item_scroled')
            })
        }
    } else if (screenWidth >= 768) {
        if(window.pageYOffset > 450) {
            menuItems.forEach(item => {
                item.classList.add('menu__item_scroled')
            })
        } else {
            menuItems.forEach(item => {
                item.classList.remove('menu__item_scroled')
            })
        }
    }
}

function toggleClass(elem, activeClass) {
    elem.classList.toggle(activeClass);
}

let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');
let body = document.querySelector('.body');

burger.addEventListener('click', () =>{
    toggleClass(menu, 'menu_active');
    toggleClass(burger, 'burger_active');
    toggleClass(body, 'body_block')
});


