import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce más sobre BDS Chile, nuestra historia, misión y el equipo de expertos que trabaja para llevar la tecnología a tu empresa.',
  keywords: ['Consultora', 'Equipo de Expertos', 'Historia BDS Chile'],
  alternates: {
    canonical: 'https://bdschile.cl/about-us'
  }
}
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import { Container, Section } from '@/components/craft'
import OurMission from '@/components/OurMission'
import OurVision from '@/components/OurVision'
import PartnersSection from '@/components/PartnersSection'
import StatisticsSection from '@/components/StatisticsSection'
import TeamLeaders from '@/components/TeamLeaders'

export default function Home() {
  return (
    <Section className='md:py-0 py-0'>
      <Section className='md:py-0 text-oxfordBlue py-0 bg-bds-background-texture-3 bg-cover '>
        <Section className=' py-0 md:py-0'>
          <AboutUs />
        </Section>
      </Section>

      <Section className='md:pt-10 text-white pt-10 py-0 bg-bds-background-gradient-1 bg-cover'>
        <StatisticsSection />
      </Section>

      <Section className='py-0 md:py-0 bg-cover bg-parent'>
        <Section>
          <Container className='text-center sm:p-2 max-w-max not-prose'>
            <OurMission />
          </Container>
        </Section>

        <Section className='md:pt-0 text-oxfordBlue pt-0 '>
          <Container className='text-center sm:p-2 max-w-max not-prose '>
            <OurVision />
          </Container>
        </Section>
      </Section>

      <Section className='bg-parent pt-10 text-oxfordBlue md:pt-10 md:py-0'>
        <div className='bg-bds-background-gradient-1 md:py-12'>
          <Container className='text-center max-w-7xl sm:p-2 not-prose'>
            <PartnersSection />
          </Container>
        </div>

        <div className='md:pt-10 text-oxfordBlue pt-10 '>
          <Container className='text-center sm:p-6 max-w-max not-prose'>
            <TeamLeaders />
          </Container>
        </div>
      </Section>

      <Section className='md:pt-10 text-oxfordBlue pt-10 bg-bds-background-gradient-1 bg-cover bg-no-repeat'>
        <Container className='text-center sm:p-2 not-prose max-w-4xl'>
          <ContactUs />
        </Container>
      </Section>
    </Section>
  )
}
