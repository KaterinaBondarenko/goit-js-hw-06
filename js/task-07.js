const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', function () {
  const size = inputRef.value;
  textRef.style.fontSize = size + 'px';
}); 