let displayValue = '';

function appendToDisplay(value) {
  if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(displayValue.slice(-1))) {
    return;
  }
  
  if (displayValue === '0' && value !== '.') {
    displayValue = value; 
  } else {
    displayValue += value;
  }

  document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
  displayValue = '0'; 
  document.getElementById('display').textContent = displayValue;
}

function calculateResult() {
  try {
    displayValue = displayValue.replace(/[^0-9+\-*/().]/g, ''); 
    let result = eval(displayValue);
    displayValue = result % 1 === 0 ? result.toString() : result.toFixed(2).toString();
    document.getElementById('display').textContent = displayValue;
  } catch (error) {
    document.getElementById('display').textContent = 'Error';
    displayValue = '';
  }
}
