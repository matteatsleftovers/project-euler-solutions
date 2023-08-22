function findSumOfMultiples(
  upperLimit: number = 1000,
  divisor1: number = 3,
  divisor2: number = 5
) {
  let sum = 0;
  for (let i = 0; i < upperLimit; i++) {
    if (i % divisor1 == 0 || i % divisor2 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(`Here is an answer: ${findSumOfMultiples()}`);
