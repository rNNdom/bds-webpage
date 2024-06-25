// Craft Imports
import { Container, Section } from '@/components/craft'

// Components

// Icons
import InitialSection from '@/components/InitialSection'
import MainServices from '@/components/MainServices'

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section className='md:py-0'>
      <Section className='border-b bg-bds-background-texture text-oxfordBlue'>
        <Container>
          <InitialSection />
        </Container>
      </Section>

      <Section className='bg-lightGreenBackground text-oxfordBlue '>
        <Container className='text-center sm:p-2'>
          <p className='text-xl items-center '>
            Desde el año 2013 hemos estado brindando apoyo a clientes en los sectores de <strong>banca, retail e inmobiliaria</strong>. Nuestro equipo está capacitado para brindar el apoyo que
            necesitas para llevar a cabo tus proyectos promoviendo una cultura de auténtico trabajo en equipo.
          </p>
          <p
            className='
            text-xl
            pt-4
            font-bold
            opacity-50
          '
            style={{ color: 'gray', letterSpacing: '0.4em' }}
          >
            Authentic Team Work
          </p>
        </Container>
      </Section>

      <Section className='md:pt-0 text-oxfordBlue'>
        <Container className='max-w-max'>
          <MainServices />
        </Container>
      </Section>
    </Section>
  )
}
