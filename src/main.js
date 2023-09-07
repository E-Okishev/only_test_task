import "../src/style.css"

const dots = document.querySelector('.dot');
const text = document.createElement('p');
const image = dots.querySelector('#image');

dots.addEventListener('click', () => {
  if (dots.id === '1') {
    minus();
  } else {
    plus();
  }
})


function minus(){
  image.classList.replace('img-plus', 'img-minus');
  text.classList.add('text')
  text.textContent = 'Стадион';
  dots.append(text);
  
  dots.setAttribute('id', '2')
}

function plus() {
  image.classList.replace('img-minus', 'img-plus');

  text.remove()
  dots.setAttribute('id', '1')
}