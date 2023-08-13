import './globals.css'
import { Libre_Baskerville } from 'next/font/google'

const poppins = Libre_Baskerville({ subsets: ['latin'], weight: ["400","700"]})

export const metadata = {
  title: 'oma',
  description: 'created by fiber-light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-poppins`}>
  

        {children}
     
        </body>
    </html>
  )
}
