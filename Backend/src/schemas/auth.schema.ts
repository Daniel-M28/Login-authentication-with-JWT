import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, 'The name must be at least 3 characters long'),

  email: z
    .email('The email is not valid'),

  password: z
    .string()
    .min(8, 'The password must be at least 8 characters long'),
});

export const loginSchema = z.object({
  email: z
    .email('The email is not valid'),

  password: z
    .string()
    .min(8, 'The password is not valid'),
});