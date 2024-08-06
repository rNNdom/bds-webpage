'use client'
// Layout
import * as Craft from '@/components/craft'

// Icons
import BigData from '@/public/service-logos/BigData-Logo.webp'
import DataService from '@/public/service-logos/DataServiceLogo.svg'
import ML from '@/public/service-logos/MLLogo.svg'
import SoftDev from '@/public/service-logos/SoftDevLogo.svg'
import { useEffect, useRef, useState } from 'react'
import LeftServiceElement from './LeftServiceElement'
import RightServiceElement from './RightServiceElement'
import SectionTitle from './SectionTitle'

const MainServices = () => {
  return (
    <Craft.Section className='relative z-10 '>
      <Craft.Container className='not-prose max-w-7xl'>
        <div className='flex flex-col gap-6 items-center'>
          <SectionTitle>Principales Servicios</SectionTitle>
          <div className='md:relative flex p-4 md:vertical-line flex-col md:flex-row max-h-fit md:max-h-max md:gap-0 gap-2'>
            <div className={`container-height left-services flex flex-col md:pr-5 md:justify-between gap-2`}>
              <div className='blank-space h-1/6' />
              <LeftServiceElement image={BigData} title='Big Data' description='Lorem ipsum dolor sit amet, consectetur adipis.' order={2} href='/services#bigdata-services' />
              <div className='blank-space h-1/6' />
              <LeftServiceElement image={SoftDev} title='Desarrollo de Software' description='Lorem ipsum dolor sit amet, consectetur adipis.' order={4} href='/services#software-services' />
            </div>
            <div className={`container-height right-services flex flex-col md:justify-between md:pl-5 gap-2 `}>
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
