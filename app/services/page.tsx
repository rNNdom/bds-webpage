import { Container, Section } from '@/components/craft'
import OurServices from '@/components/OurServices'
import ServicesList from '@/components/ServicesList'

export default function page() {
  return (
    <Section className='md:py-0'>
      <Section className='md:pt-10 text-oxfordBlue pt-10'>
        <Container className='text-center sm:p-2 max-w-max not-prose'>
          <OurServices />
        </Container>
      </Section>
      <Section className=' bg-white text-oxfordBlue pt-10'>
        <Container className='   not-prose'>
          <ServicesList />
        </Container>
      </Section>
    </Section>
  )
}
