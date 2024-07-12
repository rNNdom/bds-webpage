import type { Metadata } from 'next'

import './globals.css'

import { Container, Main, Section } from '@/components/craft'
import { MobileNav } from '@/components/nav/mobile-nav'
import { Button } from '@/components/ui/button'
import { mainMenu } from '@/menu.config'
import Balancer from 'react-wrap-balancer'

import BDS3 from '@/public/BDS3.png'
import BDS4 from '@/public/BDS4.png'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'BDS SpA',
  description: 'Consultora BDS Chile 2024, expertos en Business Intelligence, Big Data.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen antialiased', roboto.className)}>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav className={cn('sticky z-50 top-0 bg-background', 'border-b', 'fade-in', className)} id={id}>
      <div id='nav-container' className='max-w-5xl mx-auto px-6 sm:px-8 flex justify-between items-center'>
        <Link className='hover:opacity-75 transition-all flex gap-2 items-center' href='/'>
          <h2 className='sr-only'>next-wp starter</h2>
          <Image src={BDS4} alt='Logo' className='dark:invert object-cover w-44 h-20'></Image>
        </Link>
        {children}
        <div className='flex items-center gap-2 '>
          <div className='mx-14 hidden md:flex gap-10 '>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild className='text-lg' variant='ghost'>
                <Link href={href}>{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
              </Button>
            ))}
          </div>
          <Button asChild className='hidden sm:flex bg-buttonTealColor font-semibold text-md'>
            <Link href='https://9d8.dev'>Contáctanos</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer>
      <Section className='bg-footerBgColor text-gray-200 py-4 md:py-4'>
        <Container className='grid md:grid-cols-[1.5fr_0.5fr_0.5fr] '>
          <div className='flex flex-col gap-6 not-prose'>
            <Link className='flex w-fit' href='/'>
              <Image src={BDS3} alt='Logo' width={150} height={140} className='dark:invert hover:opacity-75 transition-all' />
            </Link>
            <p className='font-medium text-slate-400'>
              <Balancer>{metadata.title}</Balancer>
            </p>
            <p className='text-gray-200'>
              <Balancer>{metadata.description}</Balancer>
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm'>
            <h5 className='font-medium text-base pb-3'>Enlaces</h5>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Link className='hover:underline underline-offset-4 pb-2' key={href} href={href}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </Container>
        <Container className='border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center'>
          <p className='text-gray-200'>
            © <a href='https://9d8.dev'>BDS SpA</a>. Todos los derechos reservados.
          </p>
        </Container>
      </Section>
    </footer>
  )
}
