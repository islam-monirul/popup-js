const btn = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

btn.addEventListener('click', () => {
     popup.style.display = 'block';
});

const closeBtn = document.querySelector('.popup-close');
closeBtn.addEventListener('click', () => {
     popup.style.display = 'none';
});

popup.addEventListener('click', () => {
     popup.style.display = 'none';
});