import React from 'react'
import { Container, Section } from '@/components/craft'
import Balancer from 'react-wrap-balancer'
import SolutionsCMF from '@/components/solutions-view/SolutionsCMF'
import SolutionsMLOps from '@/components/solutions-view/SolutionsMLOps'
import SolutionsIngestor from '@/components/solutions-view/SolutionsIngestor'
import SolutionsCofOpenAI from '@/components/solutions-view/SolutionsCofluenceOpenAi'
export default function page() {
  return (
    <Section className='md:py-0'>
      <Section className=' text-oxfordBlue not-prose'>
        <Container className='text-center sm:p-2 '>
          <h3 className='text-4xl font-bold text-center'>
            <Balancer>Soluciones implementadas</Balancer>
          </h3>
        </Container>
      </Section>

      <Section className='md:pt-10 text-oxfordBlue pt-10 bg-lightGreenBackground'>
        <Container className='text-center sm:p-2 max-w-max not-prose'>
          <SolutionsCMF />
        </Container>
      </Section>

      <Section className='md:pt-10 text-oxfordBlue pt-10 '>
        <Container className='text-center sm:p-2 max-w-max not-prose'>
          <SolutionsMLOps />
        </Container>
      </Section>

      <Section className='md:pt-10 text-oxfordBlue pt-10 bg-lightGreenBackground'>
        <Container className='text-center sm:p-2 max-w-max not-prose'>
          <SolutionsIngestor />
        </Container>
      </Section>

      <Section className='md:pt-10 text-oxfordBlue pt-10'>
        <Container className='text-center sm:p-2 max-w-max not-prose'>
          <SolutionsCofOpenAI />
        </Container>
      </Section>
    </Section>
  )
}
