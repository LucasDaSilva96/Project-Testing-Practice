export function analyzeArray(array) {
  const sumOfAllEl = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let min = array[0];
  let max = array[array.length - 1];

  array.forEach((el) => {
    if (el <= min) {
      min = el;
    }
    if (el >= max) {
      max = el;
    }
  });

  const average = Math.floor(sumOfAllEl / array.length);

  return {
    average: average,
    min: min,
    max: max,
    length: array.length,
  };
}
