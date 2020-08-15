const orderPieces = prompt('Сколько дроидов вы хотите купить?');
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
const ACCESS_IS_ALLOWED = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
let message;

if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (totalPrice > credits) {
  message = ACCESS_DENIED;
} else if (totalPrice <= credits && totalPrice >= 0) {
  message = ACCESS_IS_ALLOWED;
}
console.log(message);

// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';
// let totalPrice = orderPieces * pricePerDroid;
// let balanceCredit = credits - totalPrice;
// let message; // Write code under this line
// if (orderPieces == null) {
//   message = CANCELED_BY_USER;
// } else if (totalPrice > credits) {
//   message = ACCESS_DENIED;
// } else if (totalPrice <= credits && totalPrice >= 0) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// }
// console.log(message);
