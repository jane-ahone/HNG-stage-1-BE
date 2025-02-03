import express from "express";
import cors from "cors";
import {
  digitSum,
  isArmstrong,
  isEven,
  isPerfect,
  isPrime,
} from "./utils/number-properties";
import { fetchFunFact, validateNumberInput } from "./utils/fetchFunFact";

const app = express();

app.use(cors());

app.get("/", (number) => {
  console.log("Welcome to our default route");
});

app.get("api/classify-number", (req, res) => {
  try {
    const number = req.query.number;
    const validNum = validateNumberInput(number);
    if (validNum.isValid == true) {
      const properties = [];

      if (isArmstrong(number)) {
        properties.push("armstrong");
      }

      if (isEven(number)) {
        properties.push("even");
      } else {
        properties.push("odd");
      }

      res.status(200).json({
        number: number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties: properties,
        digit_sum: digitSum(number),
        fun_fact: fetchFunFact(number),
      });
    } else {
      res.status(400).json(validNum.error);
    }
  } catch (error) {
    res.status(500).json({ error: true, message: "Internal Server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
