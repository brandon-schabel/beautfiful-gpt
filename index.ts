const OPENAI_API_KEY = Bun.env.OPENAI_API_KEY;


async function chatCompletion(): Promise<void> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
      }),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

chatCompletion();
