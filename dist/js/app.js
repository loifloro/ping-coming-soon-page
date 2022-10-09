const btn = document.querySelector('.hero__btn');
const alert = document.querySelector('.hero__alert');
const heroInput = document.querySelector('.hero__input');
const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

btn.addEventListener('click', () => {
    const inputValue = document.querySelector('.hero__input').value;
    if (inputValue == '') {
        alert.innerText = 'Whoops! It looks like you forgot to add your email';
        alert.classList.remove('hero__alert--hide');
        heroInput.classList.add('hero__input--error');

    }
    else if (!(inputValue.match(validEmail))) {
        alert.innerText = 'Please provide a valid email address';
        alert.classList.remove('hero__alert--hide');
        heroInput.classList.add('hero__input--error');
    }
    else {
        alert.classList.add('hero__alert--hide');
        heroInput.classList.remove('hero__input--error');
    }
})