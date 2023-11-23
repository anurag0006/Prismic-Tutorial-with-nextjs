import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import React from 'react'

const Navbar = async () => {

    const client = createClient();

    const settings = await client.getSingle("setting");



    return (
        <header className='flex items-center justify-between px-[10vw] pt-2 text-xl'>

            <Link href="/">
                {settings.data.site_title}
            </Link>

            <nav>
                <ul className='flex gap-4'>
                    {settings && settings.data.navigation.map((item) => (
                        <li key={item.label}>
                            <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    )
}

export default Navbar