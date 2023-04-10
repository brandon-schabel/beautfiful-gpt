import { ZodError, ZodType } from "zod";

// Define a generic API response type
interface ApiResponse<T> {
  status: "success" | "error";
  data?: T;
  error?: string;
}

// Create a generic validator function
export function createValidator<T>(schema: ZodType<T>) {
  console.log({ schema, __filename });
  return (apiResponse: ApiResponse<unknown>): ApiResponse<T> => {
    console.log(apiResponse);
    if (apiResponse.status === "error") {
      return apiResponse as ApiResponse<T>; // no need to validate in case of an error
    }

    try {
      const validatedData = schema.parse(apiResponse.data);
      return { ...apiResponse, data: validatedData } as ApiResponse<T>;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error(error);
        return { status: "error", error: "Invalid API response data." };
      } else {
        throw error;
      }
    }
  };
}
