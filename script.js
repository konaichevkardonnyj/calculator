let one = document.querySelector('#one'),
    two = document.querySelector('#two'),
    results = document.querySelector('#result'),
    oneValue,
    twoValue;
one.oninput = calculate;
two.oninput = calculate;
function calculate(a, b) {
   oneValue = one.value;
   twoValue = two.value;
   a = oneValue.split('').reverse().map(parseFloat);  // split запись посимвольно элементов в массив, reverse переварачивает элементы в массиве противоположно*!/
   b = twoValue.split('').reverse().map(parseFloat);  // split запись посимвольно элементов в массив, reverse переварачивает элементы в массиве противоположно*!/
   let result = [];
   let c = 0;
   let length = a.length;      // количество символов в аргумете а*!
   for (let i = 0; i < length; i++) {        // Цикл i = увеличивыется на 1 пока не совпадет с  length = количество символов в аргумете а*!/
      if (c) {                               // условия с*!/
         a[i] = a[i] - (b[i] || 0) + c;      // a = a - b (b не 0) + 0*!/
      } else {
         a[i] = a[i] - (b[i] || 0);          // a = a - b (b не 0)*!/
      }
      //result[i] = a[i] + (c = (a[i] < 0) ? 1 : 0) * 10;  //!** ? 1 : 0 условный тернарным оператором, условия соответствует вывести 1 если нет 0 *!/!*!/
      result[i] = a[i] < 0 ? (c = -1, 10 + a[i]) : (c = 0, a[i]);
      console.log(result[i])
   }
   /**    Подсчитает нули которые будут удалены*/
      let i = 0;
      length = result.length - 1;
      while (result[length - i] === 0 && length - i > 0) {
         i++;
      }
      if (i > 0) {
         result.splice(-i);                //замена элемента в массиве
      }
     // result.reverse().join('');
     // console.log(result);
     return  results.value = result.reverse().join('');
   //return  results.value = result.reverse().join('').replace(/^0+/, '');
}