import React from 'react'
import { Container, Section } from '@/components/craft'

import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import MLOps from '@/public/MLOpsImage.png'

export default function SolutionsMLOps() {
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2 not-prose'>
        <div className='flex flex-row items-center justify-around'>
          <div>
            <Image src={MLOps} alt='placeholder' className='fill object-contain bg-white ' width={500} height={500} />
          </div>
          <div className='pl-10 w-3/6'>
            <h4 className='text-3xl font-bold text-center'>
              <Balancer>MLOps</Balancer>
            </h4>
            <p className='mb-4 pt-5'>
              <Balancer className='text-end text-xl'>
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
