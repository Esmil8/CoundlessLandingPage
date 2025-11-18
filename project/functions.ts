const form = document.querySelector('form') as HTMLFormElement;

const nameInput = document.querySelector('#name') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const errorName = document.querySelector('#error-name') as HTMLSpanElement;
const errorEmail = document.querySelector('#error-email') as HTMLSpanElement;

 function validateField(input: HTMLInputElement, errorElement: HTMLElement) {

    if(!input.validity.valid) {

        errorElement.textContent = input.validationMessage;

        errorElement.classList.remove('hidden');

        input.classList.add('border-red-500');

        input.setAttribute('aria-invalid', 'true');
    
    }else{
        errorElement.textContent= '';
        
        errorElement.classList.add('hidden')

        input.classList.remove( "border-red-500");
        input.setAttribute( 'aria-invalid', 'false');

        
        
    };
 }


    nameInput.addEventListener('input', () => {
        validateField(nameInput, errorName);
    })

    nameInput.addEventListener('invalid', (e) => {
        e.preventDefault();
        validateField(nameInput, errorName);
    })

    emailInput.addEventListener('input', () => {
        validateField(emailInput, errorEmail);
    })

    emailInput.addEventListener('invalid', (e) => {
        e.preventDefault();
        validateField(emailInput, errorEmail);
    })

    nameInput.addEventListener('blur', () => {
        validateField(nameInput, errorName);
    })

    emailInput.addEventListener('blur', () => {
        validateField(emailInput, errorEmail);
    })

    form.addEventListener('submit', (Event) => {
        Event.preventDefault();

        validateField(nameInput, errorName);
        validateField(emailInput, errorEmail);

        if(!form.checkValidity()) {
            const firstInvalid = form.querySelector(':invalid') as HTMLInputElement;
            firstInvalid?.focus();
        }

        alert('Form submitted');
    })


    function validateCamp (input: HTMLInputElement, errorElement: HTMLElement) {

        let customValidityMessage = '';

        input.setCustomValidity('');

        errorElement.textContent = '';

        const validaty = input.validity;

        if (validaty.tooShort) {
            
            const min = input.minLength;
            customValidityMessage = (`Name should be at least ${min} characters; you entered ${input.value.length}.`);
        }
        else if (validaty.tooLong) {

            const max = input.maxLength;

            customValidityMessage = (`Name should be at most ${max} characters; you entered ${input.value.length}.`);
        }
        else if (validaty.valueMissing){
           customValidityMessage = ('This field could not be empty.');
        }

        input.setCustomValidity(customValidityMessage);

        validateField (input, errorElement);
    }


    nameInput.addEventListener('input', () => {
        validateCamp(nameInput, errorName);
    })
    nameInput.addEventListener('blur', () => {
        validateCamp(nameInput, errorName);
    })

    