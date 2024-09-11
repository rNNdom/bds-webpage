import type { Metadata } from 'next'

import './globals.css'

import { Container, Layout, Main, Section } from '@/components/craft'
import { MobileNav } from '@/components/nav/mobile-nav'
import { Button } from '@/components/ui/button'
import { mainMenu } from '@/menu.config'
import Balancer from 'react-wrap-balancer'
import { GoogleAnalytics } from '@next/third-parties/google'

import BDS3 from '@/public/BDS3.png'
import BDSLOGO1 from '@/public/BDSLOGO1.png'
import Image from 'next/image'
import Link from 'next/link'

import ToastProvider from '@/components/ToastWrapper'
import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s | BDS Chile - Consultoría',
    default: 'BDS Chile - Consultoría'
  },
  description: 'BDS Chile es una consultora de tecnología que ofrece servicios de consultoría, desarrollo de software y capacitación. Nuestro equipo de expertos te guiará en cada paso del proceso.',
  keywords: ['BDS', 'Consultoría', 'BDS Chile', 'Business Intelligence', 'Consultora Datos', 'Desarrollo de Software', 'Ingeniería de datos']
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <body className={cn('min-h-screen antialiased', roboto.className)}>
        <Nav />
        <ToastProvider>
          <Main>{children}</Main>
        </ToastProvider>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-X1NHZ3YWM6' />
    </Layout>
  )
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav className={cn('sticky z-50 top-0 bg-bgBlueColor border-bgBlueColor', 'border-b', 'fade-in', className)} id={id}>
      <div id='nav-container' className='max-w-5xl mx-auto px-4 sm:px-4 flex justify-between items-center text-white'>
        <Link className='hover:opacity-75 transition-all flex gap-2 items-center h-24 w-40 relative' href='/'>
          <Image unoptimized src={BDSLOGO1} alt='Logo' fill className='object-contain' priority sizes='20vh' />
        </Link>
        {children}
        <div className='flex items-center gap-10 '>
          <div className='hidden md:flex gap-8 '>
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild className='text-lg' variant='ghost'>
                <Link href={href}>{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
              </Button>
            ))}
          </div>
          <Button asChild className='hidden md:flex bg-buttonTealColor font-semibold text-md transition-all hover:-mt-1 '>
            <Link href='/about-us#contact-form'>Contáctanos</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

const Footer = () => {
  const title = typeof metadata.title === 'string' ? metadata.title : (metadata.title as { default: string }).default
  const description = metadata.description
  return (
    <footer>
      <Section className='bg-bds-background-gradient-1 bg-cover text-white py-4 md:py-4'>
        <Container className='grid md:grid-cols-[1.5fr_0.5fr_0.5fr] '>
          <div className='flex flex-col gap-6 not-prose'>
            <Link className='flex w-fit' href='/'>
              <Image unoptimized src={BDS3} alt='Logo' width={150} height={150} className='dark:invert hover:opacity-75 transition-all' />
            </Link>
            <p className='font-medium text-slate-400'>
              <Balancer>{title}</Balancer>
            </p>
            <p className='text-gray-200'>
              <Balancer>{description}</Balancer>
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
            © <a href='https://bdschile.cl'>BDS SpA</a>. Todos los derechos reservados.
          </p>
        </Container>
      </Section>
    </footer>
  )
}
