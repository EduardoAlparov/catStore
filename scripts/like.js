window.onclick = function(e) {
    if (e.target.classList.contains('image-block__like')) {
        (e.target.closest('div').lastChild.previousElementSibling).innerText = "Добавлено в избранное"
        e.target.classList.toggle('active');
        (e.target.closest('div').lastChild.previousElementSibling).classList.toggle('active');
        e.target.disabled = true;

        setTimeout(() => {
            (e.target.closest('div').lastChild.previousElementSibling).classList.toggle('active');
            e.target.disabled = false;
        }, 2000);

        if (e.target.classList.contains('active') == false) {
            (e.target.closest('div').lastChild.previousElementSibling).innerText = "Удалено из избранного"
        }
    }
}