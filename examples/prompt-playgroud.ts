import { createBeautifulGpt } from "../index";

const beautifulGpt = createBeautifulGpt({});

beautifulGpt.setJsonFields([
  {
    name: "name",
    type: "string",
  },
  {
    name: "calories",
    type: "number",
  },
  {
    name: "fatsGrams",
    type: "number",
  },
  {
    name: "proteinsGrams",
    type: "number",
  },
]);

console.log(
  beautifulGpt.getTestPrompt("10 foods that are roughly 200 calories each")
);

// Prompt Output example
// check file ./mock-data/chat-gpt-mock-fruit-prompt.ts
