import { z } from "zod";

const productSchema = z.object({
  // Optional, but with min of 3 chars if present
  name: z
    .string()
    .min(3, "Name must be at least 3 chars")
    .optional()
    .or(z.literal("")),
  price: z.number(),
});

export default productSchema;
