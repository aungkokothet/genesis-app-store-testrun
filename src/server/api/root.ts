import { createTRPCRouter } from "~/server/api/trpc"
import { authRouter } from "./routers/auth"

export const appRouter = createTRPCRouter({
  auth: authRouter,
})

export type AppRouter = typeof appRouter
