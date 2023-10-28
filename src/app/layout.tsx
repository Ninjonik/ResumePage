import type { Metadata } from 'next'
import { Varela_Round } from 'next/font/google'
import "@fontsource/varela-round";
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Toaster } from "react-hot-toast";

config.autoAddCss = false

const font = Varela_Round({weight: "400", subsets: ['hebrew']})

export const metadata: Metadata = {
  title: 'Ninjonik',
  description: 'Ninjonik Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
        <body className={font.className}>
            <Toaster position="bottom-center "/>
            {children}
        </body>
    </html>
  )
}
