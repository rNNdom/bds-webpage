import { ThemeProvider } from '@/components/theme/theme-provider'
import type { Metadata } from 'next'

import './globals.css'

import { Container, Main, Section } from '@/components/craft'
import { MobileNav } from '@/components/nav/mobile-nav'
import { Button } from '@/components/ui/button'
import { mainMenu } from '@/menu.config'
import Balancer from 'react-wrap-balancer'

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
  title: 'WordPress/Next.js Starter by 9d8',
  description: 'A starter template for Next.js with WordPress as a headless CMS.',
  metadataBase: new URL('https://wp.9d8.dev')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen antialiased', roboto.className)}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
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
      <Section>
        <Container className='grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12'>
          <div className='flex flex-col gap-6 not-prose'>
            <Link href='/'>
              <h3 className='sr-only'>brijr/components</h3>
              <Image src={BDS4} alt='Logo' width={120} height={27.27} className='dark:invert hover:opacity-75 transition-all'></Image>
            </Link>
            <p>
              <Balancer>{metadata.description}</Balancer>
            </p>
          </div>
          <div className='flex flex-col gap-2 text-sm'>
            <h5 className='font-medium text-base'>Website</h5>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Link className='hover:underline underline-offset-4' key={href} href={href}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </Container>
        <Container className='border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center'>
          {/* <ThemeToggle /> */}
          <p className='text-muted-foreground'>
            © <a href='https://9d8.dev'>9d8</a>. All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  )
}
