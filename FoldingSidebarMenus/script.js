(function () {

    'use strict';

    const subMenu = document.querySelectorAll('ul li ul');

    function hideSubMenu() {
        for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].className = 'hide-menu'
        };
    }

    hideSubMenu();

    const menuLink = document.querySelectorAll('.menuLink');

    for (let i = 0; i < menuLink.length; i++) {

        menuLink[i].addEventListener('click', function (event) {
            event.preventDefault();

            let thisMenu = this.parentNode.querySelector('ul');

            if (thisMenu.classList.contains('hide-menu')) {
                hideSubMenu();
                thisMenu.className = 'show-menu';
            } else {
                thisMenu.className = 'hide-menu';
            }
        })
    }
})();