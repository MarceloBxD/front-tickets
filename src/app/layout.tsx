import "./globals.css"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const montserrat = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "NextAuto",
  description: "Sistema de reserva de passagem de ônibus",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
