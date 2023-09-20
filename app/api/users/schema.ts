import { z } from "zod";

// validation schema
const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  // age: z.number()
});

export default userSchema;
