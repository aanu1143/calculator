let x = 0;
let y = null;
let temp = "0";

const screen = document.querySelector('.screen');

function buttonClick(value) {
  if (isNaN(value)) {
    sym(value);
  } 
  else {
    num(value);
  }
  screen.innerText = temp;
}


function num(str) {
    if (temp === "0") {
      temp = str;
    } 
    else {
      temp += str;
    }
}
  

function sym(symbol) {
    switch (symbol) {
      case 'C':
        temp = '0';
        x = 0;
        break;
      case '=':
        if (y === null) {
          return;
        }
        flush(parseInt(temp));
        y = null;
        temp = x;
        x = 0;
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        calculation(symbol);
        break;
    }
  }

  function flush(tempvar) {
    if (y === '+') {
      x += tempvar;
    } 
    else if (y === '-') {
      x -= tempvar;
    } 
    else if (y === '×') {
      x *= tempvar;
    } 
    else {
      x /= tempvar;
    }
  }
  
  function calculation(symbol) {
    if (temp === '0') {
     return;
    }
    const z = parseInt(temp);
    if (x === 0) {
      x = z;
    } 
    else {
      flush(z);
    }
    y = symbol;
    temp = '0';
  }

function calc () {
  document.querySelector('.keypad')
    .addEventListener('click', (event) => {
      buttonClick(event.target.innerText);
    })
}

calc();