import React from 'react'
import { Container, Section } from '@/components/craft'

import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import MLOps from '@/public/solutions-icons/MLOps.webp'
import SectionTitle from '../SectionTitle'

export default function SolutionsMLOps() {
  return (
    <Section className='relative z-10 text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='p-2 text-center not-prose'>
        <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-around'>
          <div>
            <Image src={MLOps} alt='Imágen del proceso correspondiente a MLOps' className='object-contain ' unoptimized placeholder='blur' />
          </div>
          <div className='pr-0 md:pr-10 w-full md:w-5/6 '>
            <span className='flex justify-start  w-full'>
              <SectionTitle width='w-1/2' className='text-3xl'>
                MLOps
              </SectionTitle>
            </span>
            <p className='mb-4 pt-5'>
              <Balancer className='text-justify md:text-start text-xl font-medium'>
                Apoyamos en la <strong>estandarización y racionalización de la gestión del ciclo de vida de modelos de aprendizaje automático</strong>. Nuestras soluciones integrales abarcan desde el{' '}
                <strong>desarrollo y la implementación de modelos</strong>, hasta la <strong>monitorización y el mantenimiento continuo</strong>. Nos aseguramos de que los modelos de machine learning
                se <strong>desplieguen de manera eficiente y confiable</strong>, permitiendo a nuestros clientes <strong>optimizar sus procesos y tomar decisiones basadas en datos</strong> con mayor
                rapidez y precisión.
              </Balancer>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
