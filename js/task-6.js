  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('button[data-create]');
  const destroyButton = controls.querySelector('button[data-destroy]');
  const boxes = document.getElementById('boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    const elements = [];
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      elements.push(div);
      size += 10;
    }
    boxes.append(...elements);
  }

  function destroyBoxes() {
    boxes.innerHTML = '';
  }

  createButton.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100');
    }
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
    input.value = '';
  });