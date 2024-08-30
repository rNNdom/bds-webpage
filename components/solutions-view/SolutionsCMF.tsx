import React from 'react'
import { Container, Section } from '@/components/craft'
import CMFImage from '@/public/solutions-icons/CMF-crop.png'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import SectionTitle from '../SectionTitle'

export default function SolutionsCMF() {
  return (
    <Section className='relative z-10 text-oxfordBlue md:pt-0 pb-0 md:pb-0 not-prose '>
      <Container className='p-2 text-center not-prose'>
        <div className='flex flex-col md:flex-row-reverse items-center justify-around'>
          <div className='pl-0 md:pl-10 w-full md:w-3/6 '>
            <span className='flex justify-start w-full'>
              <SectionTitle borderColor='border-white' width='w-2/3' className='text-3xl'>
                CMF
              </SectionTitle>
            </span>
            <p className='mb-4 pt-5'>
              <Balancer className='text-justify md:text-start text-xl font-medium'>
                <strong>Unifica</strong> en una única plataforma web los <strong>documentos que las empresas deben enviar a la CMF</strong>, facilitando su búsqueda por diversos criterios, además de
                ofrecer una <strong>visión global por empresa</strong>.
              </Balancer>
            </p>
          </div>
          <div className='border overflow-hidden '>
            <Image unoptimized src={CMFImage} alt='Imágen de procesos de unificación de datos' className='fill object-contain bg-white ' placeholder='blur' />
          </div>
        </div>
      </Container>
    </Section>
  )
}
