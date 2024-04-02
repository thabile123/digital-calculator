let screen = document.getElementById('screen');
  let currentInput = '';

  function appendNumber(number) {
    currentInput += number;
    screen.textContent = currentInput;
  }

  function appendOperator(operator) {
    currentInput += operator;
    screen.textContent = currentInput;
  }

  function clearScreen() {
    currentInput = '';
    screen.textContent = '';
  }

function calculate() {}
    try {
      let result = eval(currentInput);
      screen.textContent = result;
      currentInput = result;
    } catch (error) {
      screen.textContent = 'Error';
      currentInput = '';
    }
  

