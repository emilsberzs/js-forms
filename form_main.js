const form = document.querySelector('form');

const email = document.getElementById('mail');
const email_error = document.querySelector('#mail + span.error');

const country = document.getElementById('country');
const country_error = document.querySelector('#country + span.error');

const zip = document.getElementById('zip');
const zip_error = document.querySelector('#zip + span.error');

const password = document.getElementById('password');
const password_error = document.querySelector('#password + span.error')

const confirm = document.getElementById('confirm')
const confirm_error = document.querySelector('#confirm + span.error')


email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        email_error.textContent = '';
        email_error.className = 'error'
    } else {
        showError(email, email_error)
    }
})

form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        showError(email, email_error);
        e.preventDefault()
    }
})

function showError(element, error) {
    if (element.validity.valueMissing) {
        error.textContent = 'Please Enter Valid Email Address';
    } else if (element.validity.typeMismatch) {
        error.textContent = 'Entered value does not look right';
    } else if (element.validity.tooShort) {
        error.textContent = `This should be atleast ${element.minLength} characters long,
         You have entered only ${element.value.length},
         g You need ${element.minLength - element.value.length} more characters`
    }
}