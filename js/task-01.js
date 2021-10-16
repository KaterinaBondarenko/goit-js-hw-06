const categoriesRef = document.querySelectorAll('.item');
console.log('Number of categories:' + categoriesRef.length );

const searchElement = document.querySelectorAll('.item');
searchElement.forEach(el =>
  console.log(
    ' Category:',
    el.firstElementChild.textContent,
    '\n',
    'Elements:',
    el.lastElementChild.children.length,
  ),
);