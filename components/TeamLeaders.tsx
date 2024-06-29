import React from 'react'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'
import Balancer from 'react-wrap-balancer'
import { Section, Container } from './craft'
export default function TeamLeaders() {
  const leaders = Array(5).fill({ name: 'Nombre Apellido', description: 'Descripción' })

  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2 not-prose'>
        <h3 className='text-4xl font-bold text-center pb-10'>
          <Balancer>Líderes de Equipo</Balancer>
        </h3>

        <div className='flex flex-wrap justify-around my-8'>
          {leaders.map((leader, index) => (
            <div key={index} className='text-center w-3/12 m-5 mt-0 border bg-white p-10 rounded-md'>
              <Image src={BDS4} alt={`Líder ${index + 1}`} width={180} height={180} className='mx-auto  mb-2 ' />
              <p className='font-bold'>{leader.name}</p>
              <p>{leader.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
