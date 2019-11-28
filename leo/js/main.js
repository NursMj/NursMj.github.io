const burger = document.querySelector('.burger'),
        nav = document.querySelector('.mobile-menu'),
        links = document.querySelectorAll('header-menu_link');

function slider() {
    burger.addEventListener('click', () => {

        nav.classList.toggle('mobile-menu-active');
    
        burger.classList.toggle('toggle');

    })
}

slider();