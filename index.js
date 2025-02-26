import express from "express";
import cors from "cors";
import {
  digitSum,
  isArmstrong,
  isEven,
  isPerfect,
  isPrime,
} from "./utils/number-properties.js";
import { fetchFunFact, validateNumberInput } from "./utils/helperFunctions.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Number Properties API",
    available_endpoints: ["/api/classify-number"],
  });
});

app.get("/api/classify-number", async (req, res) => {
  try {
    const number = req.query.number;
    console.log(number);
    console.log("input number", req.query.number);
    const validNum = validateNumberInput(number);
    if (validNum.isValid) {
      const properties = [];

      if (isArmstrong(number)) {
        properties.push("armstrong");
      }

      if (isEven(number)) {
        properties.push("even");
      } else {
        properties.push("odd");
      }
      const response = await fetchFunFact(number);

      res.status(200).json({
        number: number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties: properties,
        digit_sum: digitSum(number),
        fun_fact: response.text,
      });
    } else {
      return res.status(400).json({ number: validNum.number, error: true });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
});

app.use((req, res, next) => {
  res.status(404).json({
    error: "Endpoint not found",
  });
});

const PORT = 3200;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
