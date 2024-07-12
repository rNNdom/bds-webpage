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
          <Balancer>Sobre nosotros</Balancer>
        </h3>

        <div className='flex flex-row items-center justify-around'>
          <div className='border rounded-full overflow-hidden '>
            <Image src={BDS4} alt='placeholder' className='fill object-cover bg-white ' width={350} height={350} />
          </div>
          <div className='pl-10 w-3/6'>
            <p className='mb-4'>
              <Balancer className='text-start text-xl'>
                Nos <strong>especializamos en brindar servicios de consultoría de BI y Big Data</strong> con un enfoque centrado en la <strong>excelencia, el compromiso y la experiencia.</strong>
              </Balancer>
            </p>
            <p className='mb-4'>
              <Balancer className='text-start text-xl'>
                Gracias a nuestra experiencia, hemos logrado brindar <strong>soluciones que permiten a nuestros clientes sacar el máximo potencial de sus datos.</strong>
              </Balancer>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
