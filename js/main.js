document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.fichas li');
    let currentIndex = 0;
    const initialVisibleCount = 6;
    const increment = 2;
    const button = document.getElementById('loadMore');

    function showItems(count) {
        for (let i = currentIndex; i < currentIndex + count && i < items.length; i++) {
            items[i].style.display = 'flex';
            items[i].style.opacity = 1;
        }
        currentIndex += count;
    }

    function hideItems(count) {
        const totalItems = items.length;
        //garante que ocultaremos todos os itens
        for (let i = currentIndex - count; i < currentIndex && i >= 0; i++) {
            items[i].classList.remove('visible');
            items[i].style.display = 'none'; 
        }
        currentIndex -= count;
    }
    

    function toggleItems() {
        if (button.textContent === 'Mais Personagens') {
            showItems(increment);
            if (currentIndex >= items.length) {
                button.textContent = 'Ocultar';
            }
        } else {
            hideItems(6);
            if (currentIndex <= initialVisibleCount) {
                button.textContent = 'Mais Personagens';
            }
        }
        adjustContentHeight();
    }

    function adjustContentHeight() {
        const conteudoSection = document.querySelector('.conteudo');
        conteudoSection.style.height = 'auto';
    }

    showItems(initialVisibleCount);

    button.addEventListener('click', toggleItems);

    adjustContentHeight();
    
});
