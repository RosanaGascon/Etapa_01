function validateForm() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const comentarios = document.getElementById('comentarios').value;
    const errorMessages = document.getElementById('error-messages');
    let errors = [];

    // Validación del nombre
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        errors.push("El nombre debe contener solo letras y espacios.");
    }

    // Validación del email
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errors.push("Introduce una dirección de correo electrónico válida.");
    }

    // Validación de comentarios
    if (comentarios.length < 10 || comentarios.length > 500) {
        errors.push("Los comentarios deben tener entre 10 y 500 caracteres.");
    }

    // Mostrar errores o enviar el formulario
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join("<br>");
        return false; // Evita que el formulario se envíe
    }

    return true; // Permite el envío del formulario
}