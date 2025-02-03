export function isPrime(num) {
  const mid = num / 2;
  let result = false;

  for (let i = 2; i <= mid; i++) {
    if (num % i == 0) {
      result = true;
      return result;
    }
  }
  return result;
}

export function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

export function isPerfect(num) {
  const mid = num / 2;
  let sum = 0;

  for (let i = 1; i <= mid; i++) {
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
}
