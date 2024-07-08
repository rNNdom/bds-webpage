import React from 'react'
import { Container, Section } from '@/components/craft'

import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'

export default function SolutionsCofOpenAI() {
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2 not-prose'>
        <div className='flex flex-row items-center justify-around'>
          <div className='border rounded-full overflow-hidden '>
            <Image src={BDS4} alt='placeholder' className='fill object-cover bg-white h-56' width={450} height={350} />
          </div>
          <div className='pl-10 w-3/6'>
            <h4 className='text-3xl font-bold text-center'>
              <Balancer>Cofluence + OpenAI</Balancer>
            </h4>
            <p className='mb-4 pt-5'>
              <Balancer className='text-end text-xl'>
                Proporciona la capacidad de <strong>leer y transformar documentos desde la plataforma Cofluence</strong>, y mediante <strong>OpenAI</strong>, permite{' '}
                <strong>interactuar con los usuarios para resolver sus consultas</strong> de carácter general y específico. Esta integración optimiza el flujo de trabajo al{' '}
                <strong>automatizar procesos complejos</strong> y <strong>mejorar la precisión en la gestión de información</strong>, brindando a los usuarios una{' '}
                <strong>experiencia más eficiente y efectiva</strong>.
              </Balancer>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
