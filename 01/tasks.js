/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const numbers = string.split(' ').map(item => parseFloat(item)).filter(item => !isNaN(item));

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };

  console.log(min);
  console.log(max);
}

getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчиnpm i
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  return x <= 1 ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */


function fibonacciWithCache(x) {
  const cache = [0, 1];

  const result = (x >= cache.length) ? (cache[x] = fibonacciSimple(x)) : cache[x];

  return result;
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 *  ________
 *  0  2  4
 *  1  3  5
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  const linesNumber = Math.ceil(max / cols);
  let [col, row, result] = [0, 0, ''];

  while (row < linesNumber && col <= max) {
			const item = linesNumber * col + row;

		  result += (`${(item < 10 ? ' ' : '')}${item}${((cols - col) === 1 || col === max) ? '' : ' '}`);
			col++;
			if (col > cols - 1) {
					row++;
					col = 0;
					result += ( row === linesNumber ? '' : '\n');
			}
  }
  return result;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {

}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
