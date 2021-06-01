const btnMenu = document.getElementsByClassName("btn-menu");
const popupMenu = document.querySelector('.popup-menu');
const body = document.body
for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
        popupMenu.classList.toggle('active');
        
        if (popupMenu.classList.contains('active') ) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        }
    });
}

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 1200 ) {
        body.classList.remove('menu-open');
        popupMenu.classList.remove('active');
        document.body.style.overflow = "";
    }
});