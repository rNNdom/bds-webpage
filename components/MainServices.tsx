'use client'
// Layout
import * as Craft from '@/components/craft'

// Icons
import BigData from '@/public/service-logos/BigData-Logo.webp'
import DataService from '@/public/service-logos/DataService-Logo.webp'
import ML from '@/public/service-logos/ML-Logo.webp'
import SoftDev from '@/public/service-logos/SoftDev-Logo.webp'
import { useEffect, useRef, useState } from 'react'
import LeftServiceElement from './LeftServiceElement'
import RightServiceElement from './RightServiceElement'
import SectionTitle from './SectionTitle'

const MainServices = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState<number>()
  console.log(containerHeight)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const children = container.children

    // Calcular la altura total de los hijos
    let totalHeight = 0
    for (let i = 0; i < children.length; i++) {
      totalHeight += (children[i] as HTMLElement).offsetHeight
    }

    // Establecer la altura del contenedor al doble de la altura total de los hijos
    setContainerHeight(totalHeight * 1.6)
  }, [])
  return (
    <Craft.Section className='relative z-10 '>
      <Craft.Container className='not-prose max-w-7xl'>
        <div className='flex flex-col gap-6 items-center'>
          <SectionTitle>Principales Servicios</SectionTitle>
          <div ref={containerRef} className='relative flex p-4 vertical-line '>
            <div className='left-services flex flex-col  pr-5 justify-between' style={{ height: containerHeight }}>
              <div className='blank-space h-1/6' />
              <LeftServiceElement image={BigData} title='Big Data' description='Lorem ipsum dolor sit amet, consectetur adipis.' order={2} href='/services#bigdata-services' />
              <div className='blank-space h-1/6' />
              <LeftServiceElement image={SoftDev} title='Desarrollo de Software' description='Lorem ipsum dolor sit amet, consectetur adipis.' order={4} href='/services#software-services' />
            </div>
            <div className='right-services flex flex-col justify-between pl-5 ' style={{ height: containerHeight }}>
              <RightServiceElement image={DataService} title='Servicio de Datos' description='Lorem ipsum dolor sit amet, consectetur adipis.' order={1} href='/services#data-services' />
              <div className='blank-space h-1/6' />
              <RightServiceElement image={ML} title='ML - IA - RPA' description='Lorem ipsum dolor sit amet, consectetur adipis.' order={3} href='/services#ia-data' />
              <div className='blank-space h-1/6' />
            </div>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default MainServices
