import { Container, Section } from '@/components/craft'

import React from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'

export default function OurServices() {
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2 not-prose'>
        <h3 className='text-4xl font-bold text-center pb-10'>
          <Balancer>Nuestros Servicios</Balancer>
        </h3>

        <div className='flex flex-row items-center justify-center'>
          <div className='pl-10 w-3/6'>
            <p className='mb-4'>
              <Balancer className='text-start text-xl'>
                Como empresa, ofrecemos <strong>soluciones y productos de divérsa índole</strong> en las áreas de datos, en el desarrollo de software y en
                <strong> paradigmas tecnológicos más recientes. </strong>
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
