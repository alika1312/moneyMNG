const { z } = require("zod");

const signUpSchema = z.object({
  fullName: z
    .string()
    .min(3, {
      message: "Full name must be at least 3 characters long",
    })
    .max(20)
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Full name must contain only letters and spaces",
    }),
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username must contain only letters, numbers, and underscores",
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(15, {
      message: "Password must be at most 15 characters long",
    }),
});
const signInSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters long",
    })
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username must contain only letters, numbers, and underscores",
    }),

  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(15, {
      message: "Password must be at most 15 characters long",
    }),
});
module.exports = { signUpSchema, signInSchema };
