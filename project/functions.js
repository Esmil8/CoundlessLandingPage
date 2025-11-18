var form = document.querySelector('form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var errorName = document.querySelector('#error-name');
var errorEmail = document.querySelector('#error-email');
function validateField(input, errorElement) {
    if (!input.validity.valid) {
        errorElement.textContent = input.validationMessage;
        errorElement.classList.remove('hidden');
        input.classList.add('border-red-500');
        input.setAttribute('aria-invalid', 'true');
    }
    else {
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
        input.classList.remove("border-red-500");
        input.setAttribute('aria-invalid', 'false');
    }
    ;
}
nameInput.addEventListener('input', function () {
    validateField(nameInput, errorName);
});
nameInput.addEventListener('invalid', function (e) {
    e.preventDefault();
    validateField(nameInput, errorName);
});
emailInput.addEventListener('input', function () {
    validateField(emailInput, errorEmail);
});
emailInput.addEventListener('invalid', function (e) {
    e.preventDefault();
    validateField(emailInput, errorEmail);
});
nameInput.addEventListener('blur', function () {
    validateField(nameInput, errorName);
});
emailInput.addEventListener('blur', function () {
    validateField(emailInput, errorEmail);
});
form.addEventListener('submit', function (Event) {
    Event.preventDefault();
    validateField(nameInput, errorName);
    validateField(emailInput, errorEmail);
    if (!form.checkValidity()) {
        var firstInvalid = form.querySelector(':invalid');
        firstInvalid === null || firstInvalid === void 0 ? void 0 : firstInvalid.focus();
    }
    alert('Form submitted');
});
function validateCamp(input, errorElement) {
    var customValidityMessage = '';
    input.setCustomValidity('');
    errorElement.textContent = '';
    var validaty = input.validity;
    if (validaty.tooShort) {
        var min = input.minLength;
        customValidityMessage = ("Name should be at least ".concat(min, " characters; you entered ").concat(input.value.length, "."));
    }
    else if (validaty.tooLong) {
        var max = input.maxLength;
        customValidityMessage = ("Name should be at most ".concat(max, " characters; you entered ").concat(input.value.length, "."));
    }
    else if (validaty.valueMissing) {
        customValidityMessage = ('This field could not be empty.');
    }
    input.setCustomValidity(customValidityMessage);
    validateField(input, errorElement);
}
nameInput.addEventListener('input', function () {
    validateCamp(nameInput, errorName);
});
nameInput.addEventListener('blur', function () {
    validateCamp(nameInput, errorName);
});
