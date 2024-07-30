'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel'
import Image from 'next/image'
import BCI from '@/public/BCI.png'
import CCSUD from '@/public/cencosud.webp'
import BCL from '@/public/Banco_Chile.png'
import Balancer from 'react-wrap-balancer'
import Cardif from '@/public/cardif.jpg'
import ADRetail from '@/public/ADRetail.png'
import CE from '@/public/Logo Coordinador Electrico.png'
import { count } from 'console'
import SectionTitle from './SectionTitle'

const carrouselItems = [
  {
    id: 1,
    image: BCI,
    alt: 'bci_logo',
    label: 'Banco de Crédito e Inversiones',
    style: 'object-contain'
  },
  {
    id: 2,
    image: CCSUD,
    alt: 'cencosud_logo',
    label: 'Cencosud Scotiabank',
    style: 'object-contain w-10/12 -mt-4 object-center item-center justify-center'
  },
  {
    id: 3,
    image: BCL,
    alt: 'bancochile_logo',
    label: 'Banco de Chile',
    style: 'object-contain'
  },
  {
    id: 4,
    image: Cardif,
    alt: 'cardif_logo',
    label: 'BNP Paribas',
    style: 'object-contain'
  },
  {
    id: 5,
    image: ADRetail,
    alt: 'adretail_logo',
    label: 'AD Retail',
    style: 'object-contain'
  },
  {
    id: 6,
    image: CE,
    alt: 'ce_logo',
    label: 'Coordinador Electrico',
    style: 'object-contain'
  }
]

export function ClientsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
    setCount(carrouselItems.length)
    setCurrent(api.selectedScrollSnap() + 2)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 2)
    })
  }, [api])

  return (
    <div className='relative w-full z-10 pb-5 '>
      <Carousel setApi={setApi} className='w-full flex flex-col items-center overflow-hidden'>
        <SectionTitle>Principales Clientes</SectionTitle>
        <CarouselPrevious
          style={{
            backgroundColor: 'var(--background)'
          }}
          className=' hide-responsive'
        />
        <CarouselContent className='mt-6 md:mt-12 flex flex-col md:flex-row '>
          {carrouselItems.map((item) => (
            <CarouselItem key={item.id} className='md:basis-1/3 sm:basis-2/12 basis-2/12 pl-2'>
              <div className='p-2 object-contain '>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6 w-72 md:w-fit flex-col '>
                    <span className='h-2/3 items-center flex justify-center'>
                      <Image src={item.image} alt={item.alt} className={item.style} />
                    </span>
                    <p className='text-oxfordBlue font-bold text-xl text-center'>
                      <Balancer>{item.label}</Balancer>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext
          style={{
            backgroundColor: 'var(--background)'
          }}
          className='hide-responsive'
        />
      </Carousel>
      <div className='absolute left-0 right-0 md:flex justify-center space-x-2 pt-7 hidden'>
        {Array.from({ length: count }).map((_, index) => (
          <svg key={index} className={`w-3 h-3 ${current - 1 === index ? 'fill-current text-oxfordBlue' : 'fill-current text-bgGreenColor'}`} viewBox='0 0 8 8'>
            <circle cx='4' cy='4' r='4' />
          </svg>
        ))}
      </div>
    </div>
  )
}
