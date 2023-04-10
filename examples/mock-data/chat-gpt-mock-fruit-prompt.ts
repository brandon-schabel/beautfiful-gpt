export const chatGptMockFruitPrompt = {
  // TODO generate prompt from prompt data on library when ready
  prompt: `10 foods that are roughly 200 calories each
Return Data as JSON format, below is expected JSON format. The keys are the field names and the value is the expect type of that field::


{
  "name": "string",
  "calories": "number",
  "fatsGrams": "number",
  "proteinsGrams": "number"
}`,
  response: `[
        {
        "name": "banana",
        "calories": 200,
        "fatsGrams": 0.7,
        "proteinsGrams": 2.5
        },
        {
        "name": "apple",
        "calories": 200,
        "fatsGrams": 0.3,
        "proteinsGrams": 0.5
        },
        {
        "name": "almonds",
        "calories": 207,
        "fatsGrams": 18,
        "proteinsGrams": 7.5
        },
        {
        "name": "yogurt",
        "calories": 200,
        "fatsGrams": 10,
        "proteinsGrams": 8
        },
        {
        "name": "oatmeal",
        "calories": 200,
        "fatsGrams": 3,
        "proteinsGrams": 6
        },
        {
        "name": "brown rice",
        "calories": 216,
        "fatsGrams": 1.8,
        "proteinsGrams": 5
        },
        {
        "name": "avocado",
        "calories": 208,
        "fatsGrams": 19.5,
        "proteinsGrams": 2.3
        },
        {
        "name": "dark chocolate",
        "calories": 200,
        "fatsGrams": 12,
        "proteinsGrams": 2.2
        },
        {
        "name": "chicken breast",
        "calories": 200,
        "fatsGrams": 4.1,
        "proteinsGrams": 37
        },
        {
        "name": "boiled egg",
        "calories": 194,
        "fatsGrams": 13,
        "proteinsGrams": 12
        }
        ]`,
};
