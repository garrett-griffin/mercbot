// src/user.ts
import { z } from "zod";
var UserSchema = z.object({
  pk: z.number().optional(),
  id: z.number().optional(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.string().optional(),
  lockedOut: z.boolean().optional()
});
export {
  UserSchema
};
//# sourceMappingURL=index.mjs.map