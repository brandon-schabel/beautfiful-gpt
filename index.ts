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
  validateApiData(apiData: any): any;
};

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

  function validateApiData(apiData: any): any {
    // Implement your validation logic here
  }

  return {
    createJsonFields,
    createPrompt,
    getRawPrompt,
    validateApiData,
  };
}

export { createBeautifulGpt };
