// Add classes to fade in elements
const blockList = [
    document.querySelector('.fe-block-6885fb0258679b340548'),
    document.querySelector('.fe-block-6885fb0258679b340548'),
    document.querySelector('.fe-block-08072733066f34a09717'),
    document.querySelector('.fe-block-631356fb13c409dac22024d6'),
    document.querySelector('.fe-block-631356e8e986304147f9f7ff'),
    document.querySelector('.fe-block-63135c2a2a04d0e60a0df2f1'),
    document.querySelector('.fe-block-63135c2a2a04d0e60a0df2f1'),
    document.querySelector('.fe-block-63135c3a36c665b182fa0099'),
    document.querySelector('.fe-block-cbef530f52274b7e6e9f'),
    document.querySelector('.fe-block-63135c475c19ad3fb19c387b')
]

blockList.forEach((element) => {
    document.querySelector
    if (element) {
        element.classList.add('appear');
    }
});

// Animations
const items = document.querySelectorAll('.appear');

const active = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
        }
    });
}
const io = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
    io.observe(items[i]);
}

// Add svg logo
const logoPos = document.querySelectorAll('.header-title-logo a');
logoPos[0].innerHTML = '<img src="https://jochen3000.github.io/podojo/img/logo-podojo-black.svg" alt="podojo">';
logoPos[1].innerHTML = '<img src="https://jochen3000.github.io/podojo/img/logo-podojo-black.svg" alt="podojo">';

// Styling Quote Images
const quoteImage = document.querySelectorAll('.list-item-media');

quoteImage.forEach(item => {
    item.style.width = "120px";
});

//
// Localise navigation
//

// get navigation items mobile and desktop
const menuItemMobile = document.querySelectorAll('.header-menu-nav-item');
const menuItemMobileLink = document.querySelectorAll('.header-menu-nav-item a');
const menuItemDesktop = document.querySelectorAll('.header-nav-item');
const menuItemDesktopLink = document.querySelectorAll('.header-nav-item a');
const urlPattern = "-de";

// get current url path
const pathName = window.location.pathname;

// remove all navi items that are not path language
if(pathName.includes(urlPattern)){
    menuItemMobile.forEach((item, index) => {
        if(!menuItemMobileLink[index].href.includes(urlPattern)){
            item.remove();
            menuItemDesktop[index].remove();
        } 
     })
} else {
   menuItemMobile.forEach((item, index) => {
        if(menuItemMobileLink[index].href.includes(urlPattern)){
            item.remove();
            menuItemDesktop[index].remove();
        } 
     }) 
}

// show a language switcher
// const navWrapper = document.querySelector('.header-title-nav-wrapper');
// const navWrapperMobile = document.querySelector('.header-menu-nav-folder-content');

// navWrapper.insertAdjacentHTML('beforebegin', `<div class="language-switch">
    // <a href="/home-de" class="de-link">DE</a>
    // <a href="home" class="en-link">/EN</a></div>`);
// navWrapperMobile.insertAdjacentHTML('beforeend', `<div class="language-switch-mobile">
//    <a href="/home-de" class="de-link">DE</a>/
//    <a href="home" class="en-link">EN</a>
//    </div>`);

// add class to active language
// const languageSwitchDE = document.querySelectorAll('.de-link');
// const languageSwitchEN = document.querySelectorAll('.en-link');

// if(pathName.includes(urlPattern)){
//    languageSwitchDE[0].classList.add('active-lang');
//    languageSwitchDE[1].classList.add('active-lang');
// } 








