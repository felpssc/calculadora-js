const numbers = document.querySelectorAll('.numbers');
const output = document.getElementById('output');
const historyInput = document.getElementById('history');
const buttonResult = document.querySelector('.btn-result');
const operations = document.querySelectorAll('.operations');
var showedResult = false;
var sameOperation = false;

function start() {
  listenNumbers();
  listenOperations();
  clear();
  result();
}

function setHistoryValue(value) {
  historyInput.value += value;
}

function clear() {
 const clearButton = document.querySelector('.btn-clear');
 clearButton.addEventListener('click', () => {
   sameOperation = true;
   output.value = '';
   historyInput.value = '';
 })
}

function listenNumbers() {
  numbers.forEach(number => {
    number.addEventListener('click', () => {
      if(!sameOperation && showedResult) {
        output.value = '';
        historyInput.value = '';
        output.value += number.value;
        setHistoryValue(output.value);
        return

      }

      if(showedResult && sameOperation) {
        output.value = '';
        output.value += number.value;
        showedResult = false;
        sameOperation = false;
      } else {
        output.value += number.value;
      }
    })
  }); 
}

function listenOperations() {
  operations.forEach(operation => {
    operation.addEventListener('click', () => {
      if(sameOperation) {
        output.value = '';
      }

      if(showedResult) {
        sameOperation = true;
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