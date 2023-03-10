const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error')

email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError();
    }
});

form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        showError();
        e.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Please enter Email address';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value doesn\'t look like email address';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters, You entered ${email.value.length} characters`
    }
}

emailError.className = 'error active';
