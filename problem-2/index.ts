function fibonacci(n: number) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function findSumOfEvenFibonaccis(upperLimit: number = 4_000_000) {
  let sum = 0;
  for (let i = 0; fibonacci(i) < upperLimit; i++) {
    const fibonacciTerm = fibonacci(i);
    if (fibonacciTerm % 2 == 0) sum += fibonacciTerm;
  }
  return sum;
}

console.log(`Here is an answer: ${findSumOfEvenFibonaccis()}`);
