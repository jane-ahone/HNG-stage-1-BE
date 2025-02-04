export function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime
  const sqrt = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

export function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

export function isPerfect(num) {
  if (num <= 0) {
    return false;
  }
  let sum = 0;
  num = Number(num);
  console.log(num);

  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      sum = i + sum;
    }
  }
  if (sum == num) {
    return true;
  } else {
    return false;
  }
}

export function isArmstrong(num) {
  if (num < 0) {
    return false;
  }
  const numStr = num.toString();
  const numDigits = numStr.length;

  const sum = numStr.split("").reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), numDigits);
  }, 0);

  return sum === num;
}
export function digitSum(num) {
  const absoluteNum = Math.abs(num);
  const numStr = absoluteNum.toString();

  let sum = numStr.split("").reduce((acc, digit) => {
    return acc + parseInt(digit);
  }, 0);

  return sum;
}
