let input;
let total = 0;
do {
  input = prompt('Введи число');
  if (isNaN(input)) {
    alert('Введите именно число!');
  } else {
    total += Number(input);
  }
} while (input !== null);
alert(`Общая сумма введенных чисел ${total}`);
