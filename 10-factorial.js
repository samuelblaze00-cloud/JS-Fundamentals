function factorial(n) {
  // Handle NaN case
  if (isNaN(n)) {
    return 1;
  }
  
  // Convert to integer and handle negative numbers
  n = Math.floor(Number(n));
  if (n < 0) {
    return 1; // Could return undefined or throw error, but following example output
  }
  
  // Base cases
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case
  return n * factorial(n - 1);
}

// Get command line argument
const arg = process.argv[2];

// Compute and print factorial
console.log(factorial(arg));