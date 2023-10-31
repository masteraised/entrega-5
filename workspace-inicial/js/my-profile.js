// Boostrap Utility: Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


// Listener para click button send y guardar datos de formulario, entrega7

const formButton = document.getElementById('saveChanges')
const firstName = document.getElementById('nameInput1')
const lastName = document.getElementById('lastName1')
const phoneNumber = document.getElementById('phoneNumber')
const eMail = localStorage.getItem('username');

formButton.addEventListener("click", (event) => {
    
   
   
    if (firstName.value !== '' && lastName.value !== '' && phoneNumber.value !== '') {

        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('secondName', nameInput2.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('lastName2', lastName2.value);
        localStorage.setItem('phoneNumber', phoneNumber.value);
      
        
    }
});

const name1 = localStorage.getItem('firstName')
const name2 = localStorage.getItem('secondName')
const surname = localStorage.getItem('lastName')
const surname2 = localStorage.getItem('lastName2')
const phone = localStorage.getItem('phoneNumber')

document.addEventListener("DOMContentLoaded", () => {

    phoneNumber.value = phone;
    lastName.value = surname;
    firstName.value = name1;
    nameInput2.value = name2;
    lastName2.value = surname2;


})

// Listener para click button send y guardar datos de formulario, entrega7

