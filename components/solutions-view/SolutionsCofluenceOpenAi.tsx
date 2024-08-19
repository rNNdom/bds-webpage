import React from 'react'
import { Container, Section } from '@/components/craft'

import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import Logo from '@/public/service-logos/MLLogo.svg'
import SectionTitle from '../SectionTitle'

export default function SolutionsCofOpenAI() {
  return (
    <Section className='relative z-10 text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center not-prose'>
        <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-around'>
          <div>
            <Image src={Logo} alt='placeholder' className='object-contain' width={170} height={170} />
          </div>
          <div className='w-full md:w-4/6 '>
            <span className='flex justify-start  w-full'>
              <SectionTitle width='w-1/2' className='text-3xl'>
                Cofluence + OpenAI
              </SectionTitle>
            </span>
            <p className='mb-4 pt-5'>
              <Balancer className='text-justify md:text-start text-xl font-medium'>
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
