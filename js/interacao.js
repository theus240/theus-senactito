//slider

$('#destaque').slick({
    dots: true,
    autoplay: true,
    autoplayspeed: 4000,
    arrows: false

});

// interação menu
function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }
    else {
        itens.style.display = 'block'
    }
}

document.addEventListener('DOMContentLoaded', (event) => { const openModalButtons = document.querySelectorAll('.open-modal'); const closeModalButtons = document.querySelectorAll('.close'); const modals = document.querySelectorAll('.modal'); openModalButtons.forEach(button => { button.addEventListener('click', (event) => { event.preventDefault(); const modalId = button.getAttribute('data-modal'); document.getElementById(modalId).style.display = 'block'; }); }); closeModalButtons.forEach(button => { button.addEventListener('click', () => { button.closest('.modal').style.display = 'none'; }); }); window.addEventListener('click', (event) => { modals.forEach(modal => { if (event.target == modal) { modal.style.display = 'none'; } }); }); });
