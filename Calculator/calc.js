let display = document.querySelector('#display');
let res = document.querySelector('#result');
clr();


//basic addition
function addition(numIni, numSub) {
  return parseFloat(numIni) + parseFloat(numSub);

}

//basic subtraction
function subtraction(numIni, numSub) {
  return parseFloat(numIni) - parseFloat(numSub);
}

//basic Multiplication
function multiply(numIni, numSub) {
  return parseFloat(numIni) * parseFloat(numSub);
}

//basic division
function divide(numIni, numSub) {
        return parseFloat(numIni) / parseFloat(numSub);
}

//operator function
function operate(op, numIni, numSub) {
  let result = 0;
  switch (op) {
    case "+":
      result = addition(numIni, numSub);
      break;
    case "-":
      result = subtraction(numIni, numSub);
      break;
    case "*":
      result = multiply(numIni, numSub);
      break;
    case "/":
      if (numSub == 0) {
        result = "Can't do that";
      } else {
        result = divide(numIni, numSub);
      }
      break;
    default:
      result = "Null";
  }
  return result;
}
//button display functions
function disNum(val) {
  parseFloat(display.value += val);
}

function disOp(val) {
  //Get last result
  let value = (res.value == '') ? '0' : res.value;
  //search for valid operator stored previously
  let tmp = value.split('').pop();
  //valid previous operator?
  op = (['+', '-', '*', '/'].indexOf(tmp) == -1) ? '' : tmp;
  let numIni = parseFloat(value) || 0;
  let numSub = parseFloat(display.value) || 0;
  if(op == ''){
    // No operators
    if (res.value == "Can't do that" || res.value == "Null"){
      res.value = '';
    }else if (res.value != ''){
      // if there is a value to show
      res.value = numSub;
    }
    // "=" is not a previous operator
    if (val != '='){
      res.value += val;
    }
  }else if (display.value != ''){
    // only operate if there is a value
    res.value = operate(op, numIni, numSub);
    // "=" is not an operator
    if (val != '='){
      res.value += val;
    }
  }
  // clear display, numIni becomes result
  display.value = '';

}

function clr() {
   document.getElementById("display").value = "";
   document.getElementById("result").value = "";
}


