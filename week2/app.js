// Get the button and container
const showFormButton = document.getElementById('show-form-btn');
const formContainer = document.getElementById('form-container');

// Listen for click on the button
showFormButton.addEventListener('click', showFormHandler);

// Function that shows the form
function showFormHandler() {
  // If a form already exists inside the container, do nothing
  if (formContainer.innerHTML !== '') return; 

  // Remove the hidden class to make the form container visible
  formContainer.classList.remove('hidden');

  const form = document.createElement('form');

  // -Name-
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';

  // Error message for live
  const nameError = document.createElement('p');
  nameError.id = 'name-error';
  nameError.className = 'error-message';
  nameError.style.color = 'red';

  // Show error if name is less than 3 chars
  nameInput.addEventListener('input', () => {
    if (nameInput.value.length < 3) {
      nameError.textContent = 'Name Cannot be less than 3 characters';
    } else {
      nameError.textContent = '';
    }
  });

  // -Age-
  const ageLabel = document.createElement('label');
  ageLabel.textContent = 'Age:';
  const ageInput = document.createElement('input');
  ageInput.type = 'number';
  ageInput.id = 'age';

  // -Email-
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';

  // invalid form error message  
  const genericError = document.createElement('p');
  genericError.id = 'generic-error';
  genericError.className = 'error-message';
  genericError.style.color = 'red';

  // -Clear Button-
  const clearButton = document.createElement('button');
  clearButton.type = 'button'; // So it doesn't submit the form
  clearButton.textContent = 'Clear';
  clearButton.className = 'btn';

  // reset all fields and clear errors
  clearButton.addEventListener('click', () => {
    nameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';
    nameError.textContent = '';
    genericError.textContent = '';
  });

  // -Submit-
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitButton.className = 'btn';

  // Add fields and buttons to the form
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(nameError);

  form.appendChild(ageLabel);
  form.appendChild(ageInput);

  form.appendChild(emailLabel);
  form.appendChild(emailInput);

  form.appendChild(genericError);

  form.appendChild(clearButton);
  form.appendChild(submitButton);

  // Add form to container
  formContainer.appendChild(form);

  // Handle form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nameInput.value.length < 3 || ageInput.value === '' || emailInput.value === '') {
      genericError.textContent = 'Form is invalid. Please correct the errors.';
    } else {
      formContainer.innerHTML = '';
      formContainer.classList.add('hidden');
    }
  });
}
