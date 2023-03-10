const form = document.querySelector('form');

const email = document.getElementById('mail');
const email_error = document.querySelector('#mail + span.error');

const country = document.getElementById('country');
const country_error = document.querySelector('#country + span.error');

const zip = document.getElementById('zip');
const zip_error = document.querySelector('#zip + span.error');

const password = document.getElementById('password');
const password_error = document.querySelector('#password + span.error')

const confirmation = document.getElementById('confirm')
const confirmation_error = document.querySelector('#confirm + span.error')


email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        email_error.textContent = '';
        email_error.className = 'error'
    } else {
        showError(email, email_error)
    }
});

country.addEventListener('input', (e) => {
    if (country.validity.valid) {
        country_error.textContent = '';
        country_error.className = 'error'
    } else {
        showError(country, country_error);
    }
});

zip.addEventListener('input', (e) => {
    if (zip.validity.valid) {
        zip_error.textContent = ''
        zip_error.className = 'error'
    } else {
        showError(zip, zip_error)
    }
});

password.addEventListener('input', (e) => {
    if (password.validity.valid) {
        password_error.textContent = '';
        password_error.className = 'error';
    } else {
        showError(password, password_error);
    }
})

confirmation.addEventListener('input', (e) => {
    if (confirmation.validity.valid) {
        confirmation_error.textContent = '';
        confirmation_error.className = 'error';
    } else {
        showError(confirmation, confirmation_error);
    }
})

form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        showError(email, email_error);
        e.preventDefault();
    } else if (!country.validity.valid) {
        showError(country, country_error);
        e.preventDefault();
    } else if (!zip.validity.valid) {
        showError(zip, zip_error)
        e.preventDefault()
    } else if (!password.validity.valid) {
        showError(password, password_error);
        e.preventDefault();
    } else if (!confirmation.validity.valid) {
        showError(confirmation, confirmation_error);
        e.preventDefault()
    } else if (password.value != confirmation.value) {
        password_error.textContent = "Passwords do not match, please try again";
        e.preventDefault();
    }
});


function showError(element, error) {
    if (element.validity.valueMissing) {
        error.textContent = `Please Enter Valid ${element.name}`;
    } else if (element.validity.typeMismatch) {
        error.textContent = 'Entered value does not look right';
    } else if (element.validity.tooShort) {
        error.textContent = `This should be atleast ${element.minLength} characters long,
         You have entered only ${element.value.length},
         g You need ${element.minLength - element.value.length} more characters`
    }
}

console.log(confirmation.innerHTML)