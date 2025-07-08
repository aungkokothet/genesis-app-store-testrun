// src/modules/registration/data/registrationSchema.ts
import { z } from "zod"

export const registrationSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(6),
  password: z.string().min(6),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
})

export type RegistrationInput = z.infer<typeof registrationSchema>
