import { Container, Section } from '@/components/craft'
import React from 'react'
import Image from 'next/image'
import HeroImage from '@/public/about-us/aboutus.jpeg'

export default function AboutUs() {
  return (
    <Section className='py-0 md:py-0 not-prose'>
      <Container className='max-w-full p-0 sm:p-0 mx-0'>
        <div className='flex about-us flex-row items-center gap-4 justify-between'>
          <div className='py-4 md:py-0 md:pb-0 h-[40vw] relative w-[70%] '>
            <Image src={HeroImage} alt='Personas chocando puños representando trabajo en equipo' className='image-box object-cover rounded-br-[700px]' placeholder='blur' unoptimized priority fill />
          </div>
          <div className='md:w-1/2  '>
            <div className='sm:w-[90%]'>
              <span>
                <p className='mb-4 text-justify  md:text-end text-2xl  '>
                  Nos <strong>especializamos en brindar servicios de consultoría de BI y Big Data</strong> con un enfoque centrado en la <strong>excelencia, el compromiso y la experiencia.</strong>
                </p>
              </span>
              <span>
                <p className='mb-4 text-justify  md:text-end text-2xl  '>
                  Gracias a nuestra experiencia, hemos logrado implementar <strong>soluciones que permiten a nuestros clientes sacar el máximo potencial de sus datos.</strong>
                </p>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
