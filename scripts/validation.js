const submitButton = document.querySelector('.subscription__button');
const errorMessage = document.querySelector('.subscription__error');



submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    validate('form_id','email');

    
})

function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
        errorMessage.innerText = 'Введите корректный e-mail';
        setTimeout(() => {
            errorMessage.innerText = '';
        }, 3000); 
        return false;
    } 
}
