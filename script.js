function difference (a, b) {
   a = a.split('').reverse().map(parseFloat);  // split запись посимвольно элементов в массив, reverse переварачивает элементы в массиве противоположно*!/
   b = b.split('').reverse().map(parseFloat);  // split запись посимвольно элементов в массив, reverse переварачивает элементы в массиве противоположно*!/
   let result = [];
   let c = 0;
   let length = a.length;      // количество символов в аргумете а*!

   for (let i = 0; i < length; i++) {        // Цикл i = увеличивыется на 1 пока не совпадет с  length = количество символов в аргумете а*!/
      debugger
      if (c) {                               // условия с*!/
         a[i] = a[i] - (b[i] || 0) + c;      // a = a - b (b не 0) + 0*!/
      } else {
         a[i] = a[i] - (b[i] || 0);          // a = a - b (b не 0)*!/
      }
      //result[i] = a[i] + (c = (a[i] < 0) ? 1 : 0) * 10;  //!** ? 1 : 0 условный тернарным оператором, условия соответствует вывести 1 если нет 0 *!/!*!/
      result[i] = a[i] < 0 ? (c = -1, 10 + a[i]) : (c = 0, a[i]);
      //console.log(result[i]);
      debugger

   }
   /**    Подсчитает нули которые будут удалены*/
   i = 0;
   length = result.length - 1;
   while (result[length - i] === 0 && length - i > 0) {
      i++;
   }
   if (i > 0) {
      result.splice(-i);                //замена элемента в массиве
   }
   return result.reverse().join('');    //Вовращает переворот с посимвольным разделениям через join('')


}
//document.mainForm.result.value = difference('100000000000001234567','12345');
document.mainForm.result.value = result;
console.log(difference('5','5'));
console.log(difference('100','3'));
console.log(difference('3','100'));