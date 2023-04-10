const OPENAI_API_KEY = Bun.env.OPENAI_API_KEY;

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "APIError";
  }
}

// Type-safe fetch wrapper
type ChatCompletionResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: Array<{
    text: string;
    index: number;
    logprobs: object;
    finish_reason: string;
  }>;
};

function createValidationError(message: string): ValidationError {
  return { name: "ValidationError", message };
}

function createAPIError(message: string): APIError {
  return { name: "APIError", message };
}

// Type-safe fetch wrapper
// could make type generic to support other endpoints, but this is all I need fo rnow
async function fetchChatCompletion(
  prompt: string
): Promise<ChatCompletionResponse> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw createAPIError(
        `API Error: ${response.status} - ${response.statusText}`
      );
    }

    const result = (await response.json()) as ChatCompletionResponse;

    // Add any necessary validation logic here
    if (!result.choices || result.choices.length === 0) {
      throw createValidationError(
        "Validation Error: No choices in the response"
      );
    }

    return result;
  } catch (error: any) {
    if (error.name === "ValidationError" || error.name === "APIError") {
      console.error(error.name, error.message);
    } else {
      console.error("Error:", error);
    }
    throw error;
  }
}

// Usage
async function main() {
  try {
    // test here
    const customPrompt = "Tell me a joke";
    const chatCompletionResult = await fetchChatCompletion(customPrompt);
    console.log(chatCompletionResult);
  } catch (error) {
    // Handle errors
    console.error("An error occurred:", error);
  }
}

main();


