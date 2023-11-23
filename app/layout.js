import './globals.css'
import { Nunito_Sans, Nunito } from 'next/font/google'
import { createClient } from '@/prismicio'
import { Metadata, ResolvingMetadata } from 'next'

 
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







export async function generateMetadata({ params, searchParams }, parent) {
    const client = createClient();

    const page = await client.getSingle("setting");



  return {
    title: page.data.site_title || "Anurag",
    description:page.data.meta_description || "Anurag Kamboj website metadescription",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}






export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <header> Header </header>
      <body>{children}</body>
      <footer>Footer</footer>
    </html>

  )
}
