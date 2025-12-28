import { z } from "zod";

// for signup endpoint
export const signupSchema = z.object({
  username: z
    .string({ invalid_type_error: "Username must be a string" })
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can contain only letters, numbers, and _"),

  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .min(1, "Email is required")
    .email("Invalid email format")
    .transform((v) => v.trim().toLowerCase()),

  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

// for login endpoint
export const loginSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .min(1, "Email is required")
    .email("Invalid email format")
    .transform((v) => v.trim().toLowerCase()),

  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});
