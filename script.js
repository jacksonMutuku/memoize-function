function memoize(fn) {
    const cache = new Map();
  
    return function (...args) {
      // Create a unique key for each set of arguments
      let key;
      if (fn.name === "sum") {
        key = JSON.stringify(args); // Treat (a, b) and (b, a) as different keys
      } else {
        key = args.toString(); // For fib and factorial, treat args the same way
      }
  
      // If the result is in the cache, return it
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      // Otherwise, call the function and store the result in the cache
      const result = fn(...args);
      cache.set(key, result);
  
      return result;
    };
  }
  
  
  
  // Sum function
  function sum(a, b) {
    return a + b;
  }
  
  // Fibonacci function
  function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
  }
  
  // Factorial function
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Memoized versions
  const memoizedSum = memoize(sum);
  const memoizedFib = memoize(fib);
  const memoizedFactorial = memoize(factorial);
  
  // Example usage
  console.log(memoizedSum(3, 2)); // 5
  console.log(memoizedSum(2, 3)); // 5 (calls again due to different argument order)
  console.log(memoizedFib(5));    // 8
  console.log(memoizedFactorial(5)); // 120
  