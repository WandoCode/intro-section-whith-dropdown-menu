const menuBurger = document.getElementsByClassName("menu__burger-icon")[0];
const menuMobile = document.getElementsByClassName("menu__links--mobile")[0];
const iconCloseMenu = document.getElementsByClassName("menu__links__close-menu")[0]
const subMenusDesktop = document.getElementsByClassName('menu__links')[0].getElementsByClassName("submenu");
const subMenusMobile = document.getElementsByClassName('menu__links--mobile')[0].getElementsByClassName("submenu");

// Open mobile menu with burger img
menuBurger.addEventListener('click', e => {
    openMenuMobile(e.target)
})

// Open desktop submenu hoovering on submenu titles
for (let i = 0; i < subMenusDesktop.length; i++) {
    subMenusDesktop[i].addEventListener('mouseenter', e => {
        toggleSubmenuDesktop(e.target);
    })
    subMenusDesktop[i].addEventListener('mouseleave', e => {
        toggleSubmenuDesktop(e.target);
    })
}

// Open mobile submenu clicking on submenu titles
for (let i = 0; i < subMenusMobile.length; i++) {
    subMenusMobile[i].addEventListener('click', e => {
        toggleSubmenuMobile(e.target);
    })
}


const openMenuMobile = (target) => {
    menuMobile.style.display = 'flex';
    menuMobile.addEventListener('click', e => {
        closeMenuMobile(e.target)
    })
}

const closeMenuMobile = (target) => {
    if (target === menuMobile || target === iconCloseMenu) {
        menuMobile.style.display = "none";
    }
    menuMobile.removeEventListener('click', openMenuMobile);
}

const toggleSubmenuDesktop = (target) => {
    if (target.classList.contains("single-link")) return;

    const subItems = target.children[1];
    const arrowElement = target.children[0].children[0];

    toogleSubmenus(subItems, arrowElement);
}


const toggleSubmenuMobile = (target) => {
    if (target.parentNode.classList.contains("single-link")) return;

    const submenu = (target.classList.contains("submenu__title__arrow") ? target.parentNode.parentNode : target.parentNode)
    const subItems = submenu.children[1];
    const arrowElement = submenu.children[0].children[0];

    toogleSubmenus(subItems, arrowElement);
}

function toogleSubmenus(subItems, arrowElement) {
    if (!subItems.style.display) subItems.style.display = "flex";
    else if (subItems.style.display === "none") subItems.style.display = "flex";
    else if (subItems.style.display === "flex") subItems.style.display = "none";

    if (arrowElement.classList.contains("open-menu")) {
        arrowElement.classList.remove("open-menu")
    } else {
        arrowElement.classList.add("open-menu")
    }
}