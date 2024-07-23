const formEl = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    if (formEl.elements.email.value.trim().length === 0) {
        alert('Invalid email value');
    }
    else if (formEl.elements.password.value.trim().length === 0) {
      alert('Invalid password value');  
    }
    else {
          const formData = {
        email: formEl.elements.email.value.trim(),
        password: formEl.elements.password.value.trim(),
    };
    console.log(formData);
    }

  
}

formEl.addEventListener('submit', onFormSubmit)
