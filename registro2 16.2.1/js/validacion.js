

(function () {
    'use strict'

    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')

    const pass2 = document.getElementById('password2')
    const pass1 = document.getElementById('password1')


    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                pass2.addEventListener("input", (event) =>
                { if ((pass2.value != pass1.value) || (!pass1.checkValidity()))
                    { pass2.setCustomValidity(' Las contraseñas deben de ser iguales'); } 
                    else
                     { // input is fine -- reset the error message
                       pass2.setCustomValidity(''); } })

                form.classList.add('was-validated')
            }, false)
        })
})()








