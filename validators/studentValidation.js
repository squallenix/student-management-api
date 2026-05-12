const { z } = require('zod');

const studentSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters'),

  email: z
    .string()
    .email('Invalid email address'),

  age: z
    .number()
    .min(1, 'Age must be positive'),

  course: z
    .string()
    .min(2, 'Course is required'),

  isActive: z.boolean(),
});

module.exports = studentSchema;