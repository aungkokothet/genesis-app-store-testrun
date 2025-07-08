import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"
import { registerUser } from "~/server/api/mutations/registration"
import { registrationSchema } from "~/modules/registration/data/registrationSchema"

export const authRouter = createTRPCRouter({
  registerUser: publicProcedure
    .input(registrationSchema)
    .mutation(async ({ input }) => {
      return await registerUser(input)
    }),
})
