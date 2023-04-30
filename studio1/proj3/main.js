const scrollBtn = document.querySelector('.scroll-btn');
const botContainer = document.querySelector('.bot-container');

scrollBtn.addEventListener('click', () => {
    botContainer.scrollIntoView({ behavior: 'smooth' });
});
