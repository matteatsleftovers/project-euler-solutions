export function findLargestPrimeFactor(n: number = 600_851_475_143) {
  let largestPrimeFactor = n; // If it stays value n, it's prime!
  let i = 2; // Initialize as smallest prime number
  while (i * i <= n) {
    /**
     * An inner loop in case i is a repeated factor of n
     * As soon as i can no longer evenly divide n,
     * increment i to try this division again
     */
    while (n % i == 0) {
      largestPrimeFactor = i;
      n /= i;
    }
    i++;
  }
  /**
   * If there is still an n > 1 after all that division,
   * it's the largest prime factor
   */
  if (n > 1) {
    largestPrimeFactor = n;
  }
  return largestPrimeFactor;
}

console.log(`Here is a solution: ${findLargestPrimeFactor()}`);
