const inputRef = document.querySelector('#validation-input');
const lengthRef = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', onInputRefChangeColor);

function onInputRefChangeColor(event) {
  if (event.currentTarget.value.length === Number(lengthRef)) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.replace('invalid', 'valid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.replace('valid', 'invalid');
  }
}
