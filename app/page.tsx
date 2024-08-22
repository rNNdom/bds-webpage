// Craft Imports
import { ClientsSection } from '@/components/ClientsSection'
import { Container, Section } from '@/components/craft'
import InitialSection from '@/components/InitialSection'
import MainServices from '@/components/MainServices'
import Technologies from '@/components/Technologies'
import Image from 'next/image'
import Slogan from '@/public/slogan/Slogan.webp'

export default function Home() {
  return (
    <Section className='md:py-0 py-0'>
      <Section className='bg-bgBlueColor !my-0 md:my-0 !py-0 text-white'>
        <Section className='bg-bds-background-texture-2 bg-cover text-white py-0 md:py-0'>
          <InitialSection />
        </Section>
      </Section>

      <Section className='bg-bgGreenColor text-oxfordBlue not-prose'>
        <Container className='text-center sm:p-2'>
          <p className='text-xl items-center md:text-center text-justify'>
            Desde el año 2013 hemos estado brindando apoyo a clientes en los sectores de <strong>banca, retail, seguros e inmobiliaria</strong>. Nuestro equipo está capacitado para brindar el apoyo
            que necesitas para llevar a cabo tus proyectos promoviendo una cultura de auténtico trabajo en equipo.
          </p>
          <span className='flex w-full justify-center pt-6 '>
            <Image src={Slogan} alt='Slogan de empresa BDS SpA, haciéndo enfasis en el trabajo en equipo "Authentic Teamwork"' className='flex w-fit opacity-90 not-prose max-h-20' />
          </span>
        </Container>
      </Section>

      <Section className='bg-parent md:py-0'>
        <Container className='max-w-7xl text-oxfordBlue '>
          <MainServices />
        </Container>

        <div className='text-white not-prose bg-bds-background-gradient-1 bg-cover py-10 '>
          <Container>
            <ClientsSection />
          </Container>
        </div>
      </Section>

      <Section className='md:pt-0 bg-bds-background-texture-3 bg-cover bg-no-repeat md:py-0'>
        <Container className='max-w-7xl text-oxfordBlue p-0'>
          <Technologies />
        </Container>
      </Section>
    </Section>
  )
}
