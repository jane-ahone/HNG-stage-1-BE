export function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime
  const sqrt = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) {
      return true;
    }
  }
  return false;
}

export function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

export function isPerfect(num) {
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      sum = num + sum;
    }
  }
  if (sum == num) {
    return true;
  } else {
    return false;
  }
}

export function isArmstrong(num) {
  const numStr = num.toString();
  const numDigits = numStr.length;

  const sum = numStr.split("").reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), numDigits);
  }, 0);

  return sum === num;
}
export function digitSum(num) {
  const numStr = num.toString();

  const sum = numStr.split("").reduce((acc, digit) => {
    return acc + parseInt(digit);
  }, 0);
  return sum;
}
