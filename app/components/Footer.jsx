import React from 'react'
import { createClient } from '@/prismicio';
import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';


const Footer = async () => {
  const client = createClient();

  const settings = await client.getSingle("setting");


  return (
    <footer className='flex items-center justify-between px-[10vw] pt-2 text-xl'>
      <Link href="/">
        {settings.data.site_title}
      </Link>


      <span>copyright @2023</span>



      <ul className='flex gap-4'>
        {settings && settings.data.navigation.map((item) => (
          <li key={item.label}>
            <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer