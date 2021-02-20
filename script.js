const numbers = document.querySelectorAll('.numbers');
const output = document.getElementById('output');
const historyInput = document.getElementById('history');
const buttonResult = document.querySelector('.btn-result');
const operations = document.querySelectorAll('.operations');
var showedResult = false;
var sameOperation = true;

function start() {
  listenNumbers();
  listenOperations();
  clear();
  result();
}

function getOutputValue() {
  return output.value;
}

function setOutputValue(value) {
  output.value = value;
}

function getHistoryValue() {
  return historyInput.value;
}

function setHistoryValue(value) {
  historyInput.value += value;
}

function clear() {
 const clearButton = document.querySelector('.btn-clear');
 clearButton.addEventListener('click', () => {
   output.value = '';
   historyInput.value = '';
 })
}

function listenNumbers() {
  numbers.forEach(number => {
    number.addEventListener('click', () => {
      if(showedResult) {
        historyInput.value = '';
        output.value = '';
        showedResult = false;
      }

      if(!sameOperation){
        output.value = '';
      } else {
        output.value += number.value;
      }
    })
  }); 
}

function listenOperations() {
  operations.forEach(operation => {
    operation.addEventListener('click', () => {
      if(showedResult) {
        showedResult = false;
        setHistoryValue(` ${operation.value}`);
      } else {
        setHistoryValue(` ${output.value} ${operation.value}`);
        output.value = '';
      }
      
    })
  });
}

function result() {
  const btnResult = document.querySelector('.btn-result');

  btnResult.addEventListener('click', () => {
    if(!output.value && !historyInput.value) {
      return;
    }
    var string = historyInput.value + output.value;
    historyInput.value = eval(string);
    output.value = historyInput.value;
    showedResult = true;
  });
}


start();