import React from 'react'
import { Container, Section } from '@/components/craft'

import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import Ingestador from '@/public/solutions-icons/Ingestador.webp'
import SectionTitle from '../SectionTitle'

export default function SolutionsIngestor() {
  return (
    <Section className='relative z-10 text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='p-2 text-center not-prose'>
        <div className='flex flex-col md:flex-row-reverse items-center justify-around'>
          <div className='pl-0 md:pl-10 w-full md:w-3/6 '>
            <span className='flex justify-start w-full'>
              <SectionTitle borderColor='border-white' width='w-1/2' className='text-3xl'>
                Ingestador
              </SectionTitle>
            </span>
            <p className='mb-4 pt-5'>
              <Balancer className='text-start text-xl font-medium'>
                Solución que ofrece una alternativa para realizar <strong>ingestas tempranas en la nube</strong>.
              </Balancer>
            </p>
          </div>
          <div>
            <Image unoptimized src={Ingestador} alt='Icono de un proceso de ingestación de datos' className='object-contain fill bg-white border-2' placeholder='blur' />
          </div>
        </div>
      </Container>
    </Section>
  )
}
