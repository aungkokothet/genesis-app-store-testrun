import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { type AppType } from "next/app"
import { Geist } from "next/font/google"

import { Toaster } from "~/components/ui/sonner" // ✅ NEW: Sonner toast root
import { api } from "~/utils/api"

import "~/styles/globals.css"

import MainLayout from "~/modules/common/components/MainLayout"

const geist = Geist({
  subsets: ["latin"],
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={geist.className}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <Toaster richColors /> {/* ✅ Inject toast here, outside MainLayout */}
      </div>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
