const fieldEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output')
const onFieldInput  = () => {
    titleEl.textContent = fieldEl.value.trim();
    if (fieldEl.value.trim().length === 0) {
      titleEl.textContent = "Anonymous";  
    }
}

fieldEl.addEventListener('input', onFieldInput);
