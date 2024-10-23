/// sequential code
// function makeGreeting(name) {
//   return `Hello, my name is ${name}!`;
// }

// const name = "Miriam";
// const greeting = makeGreeting(name);
// console.log(greeting);

const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(numberOfPrimes) {
  const primes = [];
  while (primes.length < numberOfPrimes) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

// const primes = generatePrimes(1000000);
let primes = [];
setTimeout(() => {
  primes = generatePrimes(1000000);
  console.log('Long running task completed');
  console.log(primes.splice(0, 10));
}, 0);
console.log('We are not waiting for the long running task to complete');
console.log(primes.splice(0, 10));
