import { Container, Section } from '@/components/craft'

import React from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import ServicesImage from '@/public/ServicesImage.webp'
import SectionTitle from './SectionTitle'

export default function OurServices() {
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose py-0'>
      <Container className='max-w-full p-0 sm:p-0 mx-0'>
        <div className='flex flex-row items-center justify-center gap-5 services-section'>
          <div className='md:w-2/3 flex flex-col items-start gap-5 ml-16'>
            <SectionTitle>Servicios</SectionTitle>

            <p className='mb-4'>
              <Balancer className='text-start text-xl'>
                <strong>En nuestra empresa, ofrecemos soluciones personalizadas en las áreas de datos, desarrollo de software y paradigmas tecnológicos de vanguardia.</strong> Lo que realmente nos
                distingue es nuestro enfoque en la colaboración y la adaptación a tus necesidades específicas. Nuestro compromiso es transformar tus ideas en resultados extraordinarios a través de un
                enfoque profesional y personalizado.{' '}
                <strong>Explora a continuación cómo nuestros servicios especializados en Datos, Inteligencia Artificial, Software y Big Data pueden impulsar tu éxito.</strong>
              </Balancer>
            </p>
          </div>
          <div className='not-prose py-4 md:py-0 md:pb-0 h-[45vw] relative w-[75%] rounded-full '>
            <Image
              src={ServicesImage}
              alt='Mujer dando una charla frente a gente.'
              className='image-box object-cover rounded-tl-[300px] rounded-bl-[500px]'
              placeholder='blur'
              sizes='85vw'
              priority
              fill
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
