//Para que las fotos se agranden al hacer click en ellas
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        const src = event.target.src;
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <span class="close">&times;</span>
            <img class="modal-content" src="${src}">
        `;
        document.body.appendChild(modal);

        const closeModal = document.querySelector('.close');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });
    });
});
