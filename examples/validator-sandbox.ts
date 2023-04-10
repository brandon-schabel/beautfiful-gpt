import { z } from "zod";
import { createValidator } from "../validator";
import { chatGptMockFruitPrompt } from "./mock-data/chat-gpt-mock-fruit-prompt";

// Example usage:

// Define a Zod schema for the expected data
const fruitSchema = z.array(
  z.object({
    name: z.string(),
    calories: z.number(),
    fatsGrams: z.number(),
    proteinsGrams: z.number(),
  })
);

// Create a validator for the user data
const validateUserApiResponse =
  createValidator<z.infer<typeof fruitSchema>>(fruitSchema);

const parsedJson = JSON.parse(chatGptMockFruitPrompt.response);


console.log({data: parsedJson})

// Validate the API response
const validatedResponse = validateUserApiResponse(parsedJson);

// check for error
if (validatedResponse.error) {
  console.error(validatedResponse.error);
  // return;
}

// FRUIT IS TYPED!
validatedResponse?.data?.forEach((fruit) => {
  console.log(fruit.name);
});

// next goal is to figure out how to pass the fruitSchema to the prompt generator so that it can be used to generate the prompt JSON
