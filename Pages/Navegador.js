/*Navegador web*/
document.getElementById('programSearch').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const programs = document.querySelectorAll('.program-item');

    let found = false;
    programs.forEach(program => {
        const text = program.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            program.style.display = '';
            found = true;
        } else {
            program.style.display = 'none';
        }
    });

    if (!found && searchValue !== '') {
        Swal.fire({
            icon: 'error',
            title: 'No encontrado',
            text: 'No se encontraron programas que coincidan con la búsqueda.',
            confirmButtonText: 'Aceptar',
            background: '#f1f3c2',
            confirmButtonColor: '#084c61'
        });
    }
});

