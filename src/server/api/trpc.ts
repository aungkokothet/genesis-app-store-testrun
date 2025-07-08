import { initTRPC } from "@trpc/server"
import superjson from "superjson"
import { type CreateNextContextOptions } from "@trpc/server/adapters/next"

import { db } from "~/server/db"
// Optional: import getServerAuthSession if you implement login later
// import { getServerAuthSession } from "~/server/auth"

export const createTRPCContext = (_opts: CreateNextContextOptions) => {
  return {
    db,
    // session: await getServerAuthSession(_opts.req, _opts.res),
  }
}

// Initialize tRPC
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
})

// Export helpers
export const createTRPCRouter = t.router
export const publicProcedure = t.procedure
