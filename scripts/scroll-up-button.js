const arrowUpButton = document.querySelector('.up-button');

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return (rect.top + scrollTop);
}

arrowUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.scrollIntoView({block: 'start', behavior: 'smooth'});
    console.log(offset(arrowUpButton));
})

if (offset(arrowUpButton) < 500) {
    // arrowUpButton.setAttribute('disabled', 'true');
        arrowUpButton.style.display = 'none';
}