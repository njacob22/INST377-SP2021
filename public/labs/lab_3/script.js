let position = 0;
const width = 130;
const count = 3;

const picsList = document.querySelector('ul');
// let pics = document.querySelectorAll('li');

function carousel() {
  const next = document.querySelector('#right');
  next.addEventListener('click', (event) => {
    position -= width * count;
    picsList.style.marginLeft = `${position}px`;
  });

  const prev = document.querySelector('#left');
  prev.addEventListener('click', (event) => {
    position += width * count;
    picsList.style.marginLeft = `${position}px`;
  });
}

window.onload = carousel;