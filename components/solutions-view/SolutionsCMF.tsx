import React from 'react'
import { Container, Section } from '@/components/craft'
import CMFImage from '@/public/CMFImage.png'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'

export default function SolutionsCMF() {
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2 not-prose'>
        <div className='flex flex-row items-center justify-around'>
          <div className='pl-10 w-3/6 '>
            <h4 className='text-3xl font-bold text-center'>
              <Balancer>CMF</Balancer>
            </h4>
            <p className='mb-4 pt-5'>
              <Balancer className='text-start text-xl'>
                <strong>Unifica</strong> en una única plataforma web los <strong>documentos que las empresas deben enviar a la CMF</strong>, facilitando su búsqueda por diversos criterios, además de
                ofrecer una <strong>visión global por empresa</strong>.
              </Balancer>
            </p>
          </div>
          <div className='border overflow-hidden '>
            <Image src={CMFImage} alt='placeholder' className='fill object-contain bg-white ' />
          </div>
        </div>
      </Container>
    </Section>
  )
}
