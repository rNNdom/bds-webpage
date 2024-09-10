import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soluciones',
  description: 'Descubre las soluciones implementadas por BDS Chile, incluyendo CMF, MLOps, Ingestor y Cofluence OpenAI. Nuestro equipo de expertos te guiará en cada paso del proceso.',
  keywords: ['Soluciones', 'CMF', 'MLOps', 'Ingestor', 'Cofluence OpenAI']
}
import React from 'react'
import { Container, Section } from '@/components/craft'
import SolutionsCMF from '@/components/solutions-view/SolutionsCMF'
import SolutionsMLOps from '@/components/solutions-view/SolutionsMLOps'
import SolutionsIngestor from '@/components/solutions-view/SolutionsIngestor'
import SolutionsCofOpenAI from '@/components/solutions-view/SolutionsCofluenceOpenAi'
import Image from 'next/image'
import SolutionsImage from '@/public/SolutionsImage.webp'
import SectionTitle from '@/components/SectionTitle'

export default function page() {
  return (
    <Section className='md:py-0 py-0'>
      <Section className=' not-prose md:py-0 relative h-[600px]'>
        <Image
          unoptimized
          src={SolutionsImage}
          alt='Mujer analizando datos en un computador.'
          className='object-cover'
          fill
          priority
          placeholder='blur'
          sizes='(max-width: 1080px) 100vw, (max-width: 768) 75vw, 50vw'
        />
      </Section>

      <Section className='bg-parent-solutions md:py-0 py-0'>
        <div className='text-white not-prose bg-bds-background-gradient-1 bg-cover py-24 flex flex-col items-center'>
          <SectionTitle>Soluciones implementadas</SectionTitle>
        </div>

        <div className='md:py-10 text-oxfordBlue  bg-bgGreenColor'>
          <Container className='text-center sm:p-2 max-w-max not-prose '>
            <SolutionsCMF />
          </Container>
        </div>

        <div className='md:py-10 text-oxfordBlue  '>
          <Container className='text-center sm:p-2 max-w-max not-prose'>
            <SolutionsMLOps />
          </Container>
        </div>

        <div className='md:py-10 text-oxfordBlue bg-bgGreenColor'>
          <Container className='text-center sm:p-2 max-w-max not-prose'>
            <SolutionsIngestor />
          </Container>
        </div>

        <div className='md:py-10 text-oxfordBlue'>
          <Container className='text-center sm:p-2 max-w-max not-prose'>
            <SolutionsCofOpenAI />
          </Container>
        </div>
      </Section>
    </Section>
  )
}
