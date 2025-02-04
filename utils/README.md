# Number Properties API

## Project Overview

This Node.js Express application provides a powerful API endpoint for analyzing and classifying numerical properties. Users can submit a number and receive detailed insights about its mathematical characteristics.

## Features

The API offers comprehensive analysis of a given number, including:

- Prime number detection
- Perfect number identification
- Even/Odd classification
- Armstrong number verification
- Digit sum calculation
- Fun numerical facts

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Install dependencies:

```bash
npm install
```

## Configuration

### Environment Variables

- `PORT`: Customize the server port (defaults to 3200)

## Available Endpoints

### Number Classification Endpoint

- **URL**: `/api/classify-number`
- **Method**: GET
- **Query Parameter**: `number`

#### Request Example

```
GET /api/classify-number?number=42
```

#### Successful Response

```json
{
  "number": 42,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["even"],
  "digit_sum": 6,
  "fun_fact": "An interesting fact about the number..."
}
```

#### Error Responses

- **400 Bad Request**: Invalid number input
  - Reasons:
    - Non-integer input
    - Non-numeric input
- **500 Internal Server Error**: Unexpected server issues

## Input Validation

The API strictly validates input:

- Must be an integer
- Decimal numbers are rejected

## Project Structure

```
number-properties-api/
│
├── index.js           # Main application entry point
├── utils/
│   ├── number-properties.js  # Mathematical property functions
│   └── fetchFunFact.js       # Fun fact retrieval
└── package.json
```

## Core Functions

### Number Property Checkers

- `isPrime()`: Determines if a number is prime
- `isEven()`: Checks if a number is even
- `isArmstrong()`: Identifies Armstrong numbers
- `isPerfect()`: Detects perfect numbers
- `digitSum()`: Calculates the sum of a number's digits

## Development

### Running the Server

```bash
npm start
```

### Running Tests

```bash
npm test
```

## Common Issues & Troubleshooting

1. **404 Errors**:

   - Ensure you're using the correct endpoint
   - Check for typos in the URL

2. **400 Errors**:
   - Submit only positive integers
   - Avoid decimal or negative numbers

## Technology Stack

- Node.js
- Express.js
- Cors middleware
