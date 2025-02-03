export async function fetchFunFact(num) {
  try {
    const response = await fetch(`http://numbersapi.com/${num}/math`);
    if (!response.ok) {
      throw new Error();
    }
    return await response.text();
  } catch (error) {}
  return `No fun fact available for ${num}`;
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
