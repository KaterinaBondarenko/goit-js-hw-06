const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() === '') {
    return (outputRef.textContent = 'Anonymous');
  }
  return (outputRef.textContent = event.currentTarget.value);
}
