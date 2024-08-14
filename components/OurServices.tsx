import { Container, Section } from '@/components/craft'

import React from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import ServicesImage from '@/public/services-image.png'
import SectionTitle from './SectionTitle'

export default function OurServices() {
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose py-0'>
      <Container className='max-w-7xl text-center sm:p-0 not-prose py-0'>
        <div className='flex flex-row items-center justify-center gap-10 services-section'>
          <div className='pl-10 w-2/3 flex flex-col items-start gap-5'>
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
          <div>
            <div className='flex not-prose transition-all items-center w-[100%] max-h-[750px] max-w-[1000px] justify-center md:justify-start py-4 md:py-0 md:pb-0'>
              <Image src={ServicesImage} alt='Persona dando una charla frente a gente.' className='max-w-[170%] rounded-bl-[600px] rounded-tl-[200px] image-box' placeholder='blur' />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
