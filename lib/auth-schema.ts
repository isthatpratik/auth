import { z } from 'zod';

const personalEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
];

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name cannot exceed 50 characters' }),

  email: z
    .string()
    .email({ message: 'Please enter a valid company email' })
    .min(2)
    .max(50)
    .refine((email) => {
      const domain = email.split("@")[1];
      return domain && !personalEmailDomains.includes(domain.toLowerCase());
    }, { message: "Please use a company email, personal emails are not allowed." }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(50, { message: 'Password cannot exceed 50 characters' }),
});

export const signInFormSchema = formSchema.pick({
  email: true,
  password: true,
});
