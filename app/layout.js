import './globals.css'
import { Nunito_Sans, Nunito } from 'next/font/google'
 
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})
 
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
})



export const metadata = {
  title: 'MY Fist Prismic Project',
  description: 'This is a project to learn how to use prismic with nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>

  )
}
