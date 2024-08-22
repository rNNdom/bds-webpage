import React from 'react'
import { Container } from './craft'
import IconCert from '@/public/about-us/icon_certs.svg'
import IconCoolab from '@/public/about-us/icon_coolabs.svg'
import IconProyects from '@/public/about-us/icon_proyects.svg'
import Image, { StaticImageData } from 'next/image'
type StatsType = {
  image: StaticImageData
  number: string
  text: string
}[]
function StatisticsSection() {
  const stats: StatsType = [
    { number: '+50', text: '[Integrantes BDS]', image: IconCoolab },
    { number: '+200', text: 'Proyectos exitosos', image: IconProyects },
    { number: '+50', text: 'Clientes satisfechos', image: IconCert },
    { number: '+50', text: 'Colaboradores certificados', image: IconCert }
  ]
  return (
    <Container className='text-center md:p-2 not-prose '>
      <div className='grid stats-section justify-evenly text-center grid-cols-2 lg:grid-cols-4 '>
        {stats.map((stat, index) => (
          <div key={index} className='flex flex-col  items-center  py-3 md:py-2'>
            <span className='w-16 h-16 flex items-center justify-center mb-2'>
              <Image src={stat.image} alt={stat.text} style={{ objectFit: 'contain', height: 60, width: 60 }} />
            </span>
            <h3 className='text-3xl font-bold mr-3'>{stat.number}</h3>
            <p className='font-bold text-xl'>{stat.text}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default StatisticsSection
