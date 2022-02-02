/**
 *   1. работой над оформлениями логических переменных
 *   Пока добавил oninput в HTML тем самым убрал присвоение переменных one и two через JS
 * + 2. по запрету ввода символов
 *   Реализовал с помощью регулярного выражения replace
 * - 3. вычитания из меньшего большее
 *   В процессе)
 * + 4. выводу числа результат после второго ввода
 *   С помощью условия
 * + 5. оформления стилей в html
 *   Внес стили в тег <head> <style>
 * */
let results = document.querySelector('#result'),
    oneValue,
    twoValue;
function calculate (a, b) {
   oneValue = one.value;
   twoValue = two.value;
   one.value = oneValue.replace(/[^0-9]/g, '');            // replace(/[^0-9]/g, '') регулярное выражение ввод только числами.
   two.value = twoValue.replace(/[^0-9]/g, '');
   a = oneValue.split('').reverse().map(parseFloat);       // split запись посимвольно элементов в массив, reverse переварачивает элементы в массиве противоположно
   b = twoValue.split('').reverse().map(parseFloat);       // split запись посимвольно элементов в массив, reverse переварачивает элементы в массиве противоположно
   let result = [];
   let c = 0;
   let length = a.length;                                  // количество символов в аргумете а
   for (let i = 0; i < length; i++) {                      // Цикл i = увеличивыется на 1 пока не совпадет с  length = количество символов в аргумете а
      if (c) {                                             // условия с
         a[i] = a[i] - (b[i] || 0) + c;                    // a = a - b (b не 0) + 0
      } else {
         a[i] = a[i] - (b[i] || 0);                        // a = a - b (b не 0)
      }
      //result[i] = a[i] + (c = (a[i] < 0) ? 1 : 0) * 10;  //!** ? 1 : 0 условный тернарным оператором, условия соответствует вывести 1 если нет 0
      result[i] = a[i] < 0 ? (c = -1, 10 + a[i]) : (c = 0, a[i]);
   }
   /**    Подсчитает нули которые будут удалены*/
   let i = 0;
   length = result.length - 1;
   while (result[length - i] === 0 && length - i > 0) {
      i++;
   }
   if (i > 0) {
      result.splice(-i);                                    //замена элемента в массиве
   }
   if (b.length > 0) {                                      // условие для записи результата только поле введеного вычетаемого числа
      return results.value = result.reverse().join('');     //join разделения элемента, reverse переварачивает элементы в массиве противоположно
   }
}
