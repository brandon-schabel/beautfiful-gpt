# Introducing Beautiful-GPT

A TypeScript tool for developers to create type-safe interactions with OpenAI's Chat and Completion APIs and of course other GPT with similar interfaces/APIs.


### WARNING BASICALLY NOTHING IS WORKING YET
## Installation and Setup

1. Install dependencies: `bun install`
2. Run: `bun run index.ts`

This project is built with Bun v0.5.9, a fast and comprehensive JavaScript runtime.

## Overview

Beautiful-GPT enables developers to efficiently prototype and develop applications by generating precise API queries in a consumable format. Given that API calls can be costly, it is crucial to leverage caching where possible.

## Main Features

1. Customizable JSON response configuration.
2. Configurable type inferencing.
3. Error handling and retry limit settings(Eventually).
4. API call validation against the defined schema.

## Example Usage

1. Instantiate Beautiful-GPT with API token and JSON response format.
```
const beGpt = createBeautifulGpt({
  openaiToken: '',
  dataResponseFmt: 'json', // json will be default 

```
2. Define expected JSON fields for the API response.
```
beGpt.createJsonFields(
 [
    { “foodName”: ‘string’ },
    { “calories”: ‘number’ },
    { “fats_grams”: 'number' },
    { “proteins_grams”: 'number' },
 ]
)
```
3. Create a prompt and generate a typed result.
`beGpt.createPrompt(“give me 10 foods that are roughly 200 calories each”)`

4. Retrieve the raw prompt for API call.
`const prompt = beGpt.getRawPrompt()`
5. Implement the API call using the raw prompt. Eventually I'll implement a version of this, but for now it's left up to the dev
`const apiResult = await yourImplementationToMakeAPiCall(getRawPrompt)`

6. Validate the API data against the defined schema.
`const validatedData = beGpt.validateApiData(apiResult.data)`

7. Error handling and optional retry adjustments.
TBD...

## Roadmap

1. Build on top of the OpenAI package.
2. Develop an interface layer for seamless integration with direct HTTP connections to OpenAI.
3. Utilize Zod for response validation.
4. Design an API for GPT to generate an initial outline.

## Development and Release Process

Initially, the development and release process will be kept simple and manual. This includes keeping dependencies down, using built in bun features. 

### TODO need to figure out how to release it on node as well


# beautiful-gpt

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v0.5.9. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
