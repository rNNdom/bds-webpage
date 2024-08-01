// Craft Imports
import { ClientsSection } from '@/components/ClientsSection'
import { Container, Section } from '@/components/craft'

// Components

// Icons
import InitialSection from '@/components/InitialSection'
import MainServices from '@/components/MainServices'
import Technologies from '@/components/Technologies'
import Image from 'next/image'
import Slogan1 from '@/public/slogan/Slogan1.webp'
import Slogan2 from '@/public/slogan/Slogan2.webp'

// This page is using the craft.tsx component and design system
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
          <p className='text-xl items-center '>
            Desde el año 2013 hemos estado brindando apoyo a clientes en los sectores de <strong>banca, retail e inmobiliaria</strong>. Nuestro equipo está capacitado para brindar el apoyo que
            necesitas para llevar a cabo tus proyectos promoviendo una cultura de auténtico trabajo en equipo.
          </p>
          <span className='flex w-full justify-center pt-6'>
            <Image src={Slogan2} alt='Slogan' className='flex w-max opacity-90' width={190} height={190} />
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
        <Container className='max-w-7xl text-oxfordBlue'>
          <Technologies />
        </Container>
      </Section>
    </Section>
  )
}
