import { Container, Section } from '@/components/craft'
import AboutUs from '@/components/AboutUs'
import OurMission from '@/components/OurMission'
import PartnersSection from '@/components/PartnersSection'
export default function Home() {
  const stats = [
    { number: '+50', text: 'Miembros colaboradores' },
    { number: '+200', text: 'Proyectos exitosos' },
    { number: '+50', text: 'Clientes satisfechos' }
  ]
  return (
    <Section className='md:py-0'>
      <Section className='md:pt-10 text-oxfordBlue pt-10'>
        <Container className='text-center sm:p-2 max-w-max not-prose'>
          <AboutUs />
        </Container>
      </Section>

      <Section className='md:pt-10 text-oxfordBlue pt-10 bg-lightGreenBackground'>
        <Container className='text-center sm:p-2 max-w-max not-prose'>
          <div className='flex justify-around text-center '>
            {stats.map((stat, index) => (
              <div key={index} className='flex flex-col px-10'>
                <h3 className='text-3xl font-bold'>{stat.number}</h3>
                <p className='font-bold text-xl'>{stat.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className='md:pt-10 text-oxfordBlue pt-10'>
        <Container className='text-center sm:p-2 max-w-max not-prose'>
          <OurMission />
        </Container>
      </Section>

      <Section className='bg-lightGreenBackground text-oxfordBlue '>
        <Container className='text-center sm:p-2'>
          <PartnersSection />
        </Container>
      </Section>
    </Section>
  )
}
