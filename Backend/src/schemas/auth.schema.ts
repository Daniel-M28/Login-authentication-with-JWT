import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(6, 'El nombre debe tener al menos 6 caracteres'),

  email: z
    .email('El correo electrónico no es válido'),

  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export const loginSchema = z.object({
  email: z
    .email('El correo electrónico no es válido'),

  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
});