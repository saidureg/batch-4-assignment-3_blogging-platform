// import mongoose from 'mongoose';
import { z } from 'zod';

const blogValidationSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters long')
    .max(50, 'Title must be at most 50 characters long'),
  content: z
    .string()
    .min(3, 'Content must be at least 3 characters long')
    .max(5000, 'Content must be at most 5000 characters long'),
  isPublished: z.boolean().default(true),
});

export const blogValidations = {
  blogValidationSchema,
};
