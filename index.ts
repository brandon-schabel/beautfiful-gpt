import { z } from "zod";

type JsonField = {
  name: string;
  type: string;
};

type BeautifulGptOptions = {
  openaiToken: string;
  dataResponseFmt?: string;
};

type BeautifulGpt = {
  createJsonFields(fields: JsonField[]): void;
  createPrompt(prompt: string): void;
  getRawPrompt(): string;
  validateApiData(
    apiData: any,
    validationSchema: typeof ApiDataSchemaTest
  ): any;
};

// Implement your validation logic here
const ApiDataSchemaTest = z.array(
  z.object({
    foodName: z.string(),
    calories: z.number(),
    fats_grams: z.number(),
    proteins_grams: z.number(),
  })
);

function createBeautifulGpt(options: BeautifulGptOptions): BeautifulGpt {
  let jsonFields: JsonField[] = [];
  let prompt: string = "";

  function createJsonFields(fields: JsonField[]): void {
    jsonFields = fields;
  }

  function createPrompt(newPrompt: string): void {
    prompt = newPrompt;
  }

  function getRawPrompt(): string {
    return prompt;
  }

  function validateApiData(
    apiData: any,
    validationSchema: typeof ApiDataSchemaTest
  ): any {
    try {
      const validatedData = validationSchema.parse(apiData);
      return validatedData;
    } catch (error) {
      // Handle validation errors here, e.g. throw an error or return a default value
      console.error("Validation failed:", error);
      return null;
    }
  }

  return {
    createJsonFields,
    createPrompt,
    getRawPrompt,
    validateApiData,
  };
}

export { createBeautifulGpt };
