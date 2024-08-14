import { Container, Section } from '@/components/craft'
import OurServices from '@/components/OurServices'
import ServicesList from '@/components/ServicesList'

export default function page() {
  return (
    <Section className='md:py-0 '>
      <Section className='md:pt-10 text-oxfordBlue  md:py-0 bg-services pt-0 py-0'>
        <Container className='text-center sm:p-0 max-w-max not-prose py-0'>
          <OurServices />
        </Container>
      </Section>
      <Section className=' bg-bds-background-gradient-1 text-white pt-10 md:py-0 '>
        <div className='bg-bds-background-texture-1 bg-cover bg-no-repeat border-b border-bgGreenColor'>
          <Container className='not-prose'>
            <ServicesList />
          </Container>
        </div>
      </Section>
    </Section>
  )
}
