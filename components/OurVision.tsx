import { Container, Section } from '@/components/craft'

import React from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'

export default function AboutUs() {
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2 not-prose'>
        <h3 className='text-4xl font-bold text-center pb-10'>
          <Balancer>Nuestra Visión</Balancer>
        </h3>

        <div className='flex flex-row items-center justify-around'>
          <div className='pl-10 w-3/6'>
            <p className='mb-4'>
              <Balancer className='text-start text-xl'>
                Nos proponemos consolidarnos a nivel nacional como una empresa <strong>sólida y responsable</strong>, capaz de generar la <strong>confianza necesaria</strong> en nuestros clientes para
                que nos involucren en sus necesidades y proyectos actuales.
              </Balancer>
            </p>
            <p className='mb-4'>
              <Balancer className='text-start text-xl'>
                Aspiramos a convertirnos en <strong>verdaderos aliados estratégicos</strong>, formando equipos de trabajo conjuntos con nuestros clientes para entregar{' '}
                <strong>soluciones óptimas y efectivas</strong> en análisis de datos, inteligencia de negocios, aprendizaje automático y desarrollo de software.
              </Balancer>
            </p>
          </div>
          <div className='border rounded-full overflow-hidden '>
            <Image src={BDS4} alt='placeholder' className='fill object-cover bg-white ' width={350} height={350} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
