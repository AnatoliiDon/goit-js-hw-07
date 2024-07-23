const fieldEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output')
const onFieldChange = () => {
    titleEl.textContent = fieldEl.value.trim();
    if (fieldEl.value.trim().length === 0) {
      titleEl.textContent = "Anonymous";  
    }
}

fieldEl.addEventListener('change', onFieldChange);
