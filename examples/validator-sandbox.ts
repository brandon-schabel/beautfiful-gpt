import { z } from "zod";
import { createValidator } from "../validator";
import { chatGptMockFruitPrompt } from "./mock-data/chat-gpt-mock-fruit-prompt";

// Example usage:

// Define a Zod schema for the expected data
const fruitSchema = z.object({
  name: z.string(),
  calories: z.number(),
  fatsGrams: z.number(),
  proteinsGrams: z.number(),
});

// get typescript type from schema
type Fruit = z.infer<typeof fruitSchema>;

// Create a validator for the user data
const validateUserApiResponse = createValidator<Fruit>(fruitSchema);

const parsedJson = JSON.parse(chatGptMockFruitPrompt.response);

console.log({parsedJson})

// Validate the API response
const validatedResponse = validateUserApiResponse(parsedJson);

console.log(validatedResponse);

// Mock API response
// const apiResponse: ApiResponse<unknown> = {
//   status: "success",
//   data: {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//   },
// };

// Validate the API response
// const validatedResponse = validateUserApiResponse(apiResponse);
// console.log(validatedResponse);

// const result = await fetchChatCompletion()
