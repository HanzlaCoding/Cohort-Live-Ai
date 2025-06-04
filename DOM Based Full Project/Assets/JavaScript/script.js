const allCards = document.querySelectorAll('.main-cards .elem');

allCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
        if(idx === 0){
            location.href = `./pages/todo.html`;
        }
    });
});