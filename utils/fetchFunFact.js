export async function fetchFunFact(num) {
  try {
    const response = await fetch(`http://numbersapi.com/${num}/math?json`);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {}
  return `No fun fact available for ${num}`;
}
export function validateNumberInput(input) {
  if (input === undefined || input === null) {
    return {
      isValid: false,
      error: "No number provided",
      type: input,
    };
  }

  const num = Number(input);

  if (isNaN(num)) {
    return {
      isValid: false,
      error: "Invalid number input",
      type: "alphabet",
    };
  }
  if (!Number.isInteger(num)) {
    return {
      isValid: false,
      error: "Input must be an integer",
      type: "non-integer",
    };
  }

  return {
    isValid: true,
    number: num,
  };
}
