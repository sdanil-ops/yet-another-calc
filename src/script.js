let op; //выбранный оператор
function func() {
  let result;
  let firstNum = Number(document.getElementById("firstNum").value)
  let secondNum = Number(document.getElementById("secondNum").value)
  switch (op) {
    case '+':
      result = firstNum + secondNum
      break
    case '-':
      result = firstNum - secondNum
      break
    case '*':
      result = firstNum * secondNum
      break
    case '/':
      if (secondNum) {
        result = firstNum / secondNum;
      } else {
        result = 'infinity'
      }
      break;
    default:
      result = 'Choose operation'
  }

  document.getElementById("result").innerHTML = result;
}
