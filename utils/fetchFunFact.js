export async function fetchFunFact(num) {
  const funFact = await fetch(`http://numbersapi.com/${num}/math`);
  return funFact;
}
export function validateNumberInput(input) {
  if (input === undefined || input === null) {
    return {
      isValid: false,
      error: "No number provided",
    };
  }

  const num = Number(input);

  if (isNaN(num)) {
    return {
      isValid: false,
      error: "Invalid number input",
    };
  }
  if (!Number.isInteger(num)) {
    return {
      isValid: false,
      error: "Input must be an integer",
    };
  }

  return {
    isValid: true,
    number: num,
  };
}
