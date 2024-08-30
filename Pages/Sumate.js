/*Conexión de formulario con mi API*/
document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        Nombre: document.getElementById('nombre').value,
        Apellido: document.getElementById('apellido').value,
        Mail: document.getElementById('mail').value,
        Edad: parseInt(document.getElementById('edad').value),
        Aceptas: document.getElementById('aceptas').checked
    };

    fetch('https://66cf9a1c901aab248422a03d.mockapi.io/Users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
    // Mostrar alerta de Success con SweetAlert2
         Swal.fire({
            title: '¡Gracias por sumarte!',
            text: 'Nos estaremos comunicando con vos pronto.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
    // Redireccionar a la página de inicio cuando hago clic en Aceptar
                window.location.href = '../index.html';
        }});
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Ocurrió un error al enviar el formulario');
    });
});

