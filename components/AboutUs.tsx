import { Container, Section } from '@/components/craft'
import React from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import IMAGE2 from '@/public/IMAGEN2.jpg'

export default function AboutUs() {
  return (
    <Section className='py-0 md:py-0 not-prose'>
      <Container className='max-w-full p-0 sm:p-0 mx-0'>
        <div className='flex about-us flex-row items-center gap-4 justify-between'>
          <div>
            <div className='flex not-prose transition-all items-center w-[100%] max-h-[750px] max-w-[1000px] justify-center md:justify-end py-4 md:py-0 md:pb-0'>
              <Image src={IMAGE2} alt='Persona dando una charla frente a gente.' className='max-w-[150%] rounded-br-[700px] image-box' placeholder='blur' />
            </div>
          </div>
          <div className='md:w-1/2  '>
            <div className='w-[90%]'>
              <span>
                <p className='mb-4  md:text-end text-2xl '>
                  <Balancer>
                    Nos <strong>especializamos en brindar servicios de consultoría de BI y Big Data</strong> con un enfoque centrado en la <strong>excelencia, el compromiso y la experiencia.</strong>
                  </Balancer>
                </p>
              </span>
              <span>
                <p className='mb-4  md:text-end text-2xl  '>
                  <Balancer>
                    Gracias a nuestra experiencia, hemos logrado implementar <strong>soluciones que permiten a nuestros clientes sacar el máximo potencial de sus datos.</strong>
                  </Balancer>
                </p>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
