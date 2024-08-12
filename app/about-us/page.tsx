import { Container, Section } from '@/components/craft'
import AboutUs from '@/components/AboutUs'
import OurMission from '@/components/OurMission'
import PartnersSection from '@/components/PartnersSection'
import OurVision from '@/components/OurVision'
import TeamLeaders from '@/components/TeamLeaders'
import ContactUs from '@/components/ContactUs'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import icon_cert from '@/public/about-us/icon_certs.svg'
import icon_coolab from '@/public/about-us/icon_coolabs.svg'
import icon_proyects from '@/public/about-us/icon_proyects.svg'
type StatsType = {
  image: StaticImageData
  number: string
  text: string
}[]
export default function Home() {
  const stats: StatsType = [
    { number: '+50', text: '[Integrantes BDS]', image: icon_coolab },
    { number: '+200', text: 'Proyectos exitosos', image: icon_proyects },
    { number: '+50', text: 'Clientes satisfechos', image: icon_cert },
    { number: '+50', text: 'Colaboradores certificados', image: icon_cert }
  ]
  return (
    <Section className='md:py-0 py-0'>
      <Section className='md:py-0 text-oxfordBlue py-0 bg-bds-background-texture-3 bg-cover '>
        <Section className=' py-0 md:py-0'>
          <AboutUs />
        </Section>
      </Section>

      <Section className='md:pt-10 text-white pt-10 py-0 bg-bds-background-gradient-1 bg-cover'>
        <Container className='text-center md:p-2 not-prose '>
          <div className='grid stats-section justify-evenly text-center grid-cols-2 lg:grid-cols-4 '>
            {stats.map((stat, index) => (
              <div key={index} className='flex flex-col  items-center  py-3 md:py-2'>
                <span className='w-16 h-16 flex items-center justify-center mb-2'>
                  <Image src={stat.image} alt={stat.text} style={{ objectFit: 'contain', height: 60, width: 60 }} />
                </span>
                <h3 className='text-3xl font-bold mr-3'>{stat.number}</h3>
                <p className='font-bold text-xl'>{stat.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className='py-0 md:py-0 bg-cover bg-parent'>
        <Section className='md:pt-10 text-oxfordBlue pt-10'>
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
          <Container className='text-center sm:p-2 max-w-max not-prose'>
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
