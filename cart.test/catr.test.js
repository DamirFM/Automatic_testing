//Напишите тесты для корзины интернет-магазина. Интерфейс:

//makeCart() – создаёт новую пустую корзину (объект).
//addItem(good, count) – добавляет в корзину товары и их количество. Товар – это объект с двумя свойствами: name (имя) и price (стоимость).
//getItems() – возвращает список товаров в формате [{ good, count }, { good, count }, ...]
//getCost() – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учётом их количества.
//getCount() – возвращает количество товаров в корзине.

// const cart = makeCart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// cart.getItems().length; // 2
// cart.getCost(); // 35
// cart.getCount(); // 7
// cart.addItem({ name: 'house', price: 10 }, 1);
// cart.getItems().length; // 3
// cart.getCost(); // 45

const makeCart = getImpelementation();

// BEGIN (write your solution here)
test('isValid', () => {
  const cart = makeCart();
  expect(cart.addItem({ name: 'car', price: 3 }, 5)).toBe();
  expect(cart.addItem({ name: 'house', price: 10 }, 2)).toBe();
  expect((cart.getItems().length)).toBe(2);
  expect(cart.getCost()).toBe(35);
  expect(cart.getCount()).toBe(7);
});
// END