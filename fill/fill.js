//В этом упражнении вам предстоит попрактиковаться в подходе "Разработка через тестирование". 
//Вам нужно будет написать и тесты и реализацию функции. Сначала напишите тесты и запуcтите тестирование. 
//Тесты должны упасть. Затем напишите решение, которое будет проходить тесты.


//Напишите тесты для функции fill(coll, value, start, end), 
//которая заполняет элементы массива переданным значением, начиная со старта и заканчивая 
//(но не включая) конечной позицией. Функция меняет исходный массив!

//Функция принимает следующие аргументы:

//coll – массив, элементы которого будут заполнены
//value – значение, которым будут заполнены элементы массива
//start – стартовая позиция, по умолчанию равна нулю
//end – конечная позиция, по умолчанию равна длине массива

// все вызовы нужно рассматривать, как независимые
 
//const array =  [1, 2, 3, 4];
 
//fill(array, '*', 1, 3);
//console.log(array); // => [1, '*', '*', 4]
 
//fill(array, '*');
//console.log(array); // => ['*', '*', '*', '*']
 
//fill(array, '*', 4);
//console.log(array); // => [1, 2, 3, 4]
 
//fill(array, '*', 0, 10);
//console.log(array); // => ['*', '*', '*', '*']



// BEGIN (write your solution here)
export default function fill(coll, value, start = 0, end = coll.length) {
    const collLength = coll.length;
    const normalizedStart = start > collLength ? end : start;
    const normalizedEnd = end > collLength ? collLength : end;
    for (let i = normalizedStart; i < normalizedEnd; i += 1) {
      coll[i] = value;
    }
    return coll;
  
  
  };
  // END