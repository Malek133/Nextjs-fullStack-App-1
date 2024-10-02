import { z } from "zod"

export const productFormSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(30, {
        message: "Username must not be longer than 30 characters.",
      }),
    
    body: z
    .string()
    .max(100, {
      message: "Username must not be longer than 100 characters.",
    }).optional(),

    completed:z.boolean(),

  })
  
 export type ProductFormValues = z.infer<typeof productFormSchema>