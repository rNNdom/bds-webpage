import { Container, Section } from '@/components/craft'

import React from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import logo_vision from '@/public/about-us/logo_vision.svg'
import SectionTitle from './SectionTitle'

export default function OurVision() {
  return (
    <Section className='text-oxfordBlue   md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='flex flex-col gap-6 items-center p-0'>
        <SectionTitle width='w-2/3'>Nuestra Visión</SectionTitle>

        <div className='flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-5 '>
          <span className='w-4/5 flex not-prose'>
            <p className='mb-4 '>
              <Balancer className='text-justify md:text-end text-xl'>
                Nos proponemos consolidarnos a nivel nacional como una empresa <strong>sólida y responsable</strong>, capaz de generar la <strong>confianza necesaria</strong> en nuestros clientes para
                que nos involucren en sus necesidades y proyectos actuales.
                <br />
                Aspiramos a convertirnos en <strong>verdaderos aliados estratégicos</strong>, formando equipos de trabajo conjuntos con nuestros clientes para entregar{' '}
                <strong>soluciones óptimas y efectivas</strong> en análisis de datos, inteligencia de negocios, aprendizaje automático y desarrollo de software.
              </Balancer>
            </p>
          </span>
          <span className='not-prose flex w-5/12 sm:w-3/12 justify-center'>
            <Image src={logo_vision} alt='Logo que muestra una persona en la retina de un ojo, visión' className=' w-48 h-48' />
          </span>
        </div>
      </Container>
    </Section>
  )
}
