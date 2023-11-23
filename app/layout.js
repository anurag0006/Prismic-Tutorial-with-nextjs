import './globals.css'
import { Nunito_Sans, Nunito } from 'next/font/google'
import { createClient } from '@/prismicio'
// import { Metadata, ResolvingMetadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



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

  const settings = await client.getSingle("setting");



  return {
    title: settings.data.site_title || "Anurag",
    description: settings.data.meta_description || "Anurag Kamboj website metadescription",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}






export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>

  )
}
