const total = 100;
const order = 20;

const message =
  order <= total
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';
console.log(message);
