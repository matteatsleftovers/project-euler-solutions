const upperLimit = 1000;
let sum = 0;
for (let i = 0; i < upperLimit; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}

console.log(`Here is an answer: ${sum}`);
