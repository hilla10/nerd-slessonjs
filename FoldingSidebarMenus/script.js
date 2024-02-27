let subMenus = document.querySelectorAll('ul li ul');

function hideSubMenu() {
    
    for(let i = 0; i < subMenus.length; i++) {
        subMenus[i].className = 'hide-menu';
    }
}

hideSubMenu();

let menuLink = document.querySelectorAll('.menuLink');

for(let i = 0; i< menuLink.length; i++) {
    menuLink[i].addEventListener('click', function(event) {
        event.preventDefault();

        let thisMenu = this.parentNode.querySelector('ul');
        
        if(thisMenu.classList.contains('hide-menu')) {
            hideSubMenu();

            thisMenu.className = 'show-menu';
        } else {
            thisMenu.className = 'hide-menu';
        }

    });
};

// subMenus
// menuLink
// 
// thisMenu