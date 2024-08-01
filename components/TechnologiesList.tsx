'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Section, Container } from '@/components/craft'
import Image, { StaticImageData } from 'next/image'
import BDS4 from '@/public/BDS4.png'
import { Card } from './ui/card'

const Technologies: AccordeonProps[] = [
  {
    id: 'tech-bi',
    question: 'Business Intelligence',

    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Asesorías'
      },
      {
        image: BDS4,
        title: 'Software factory'
      },
      {
        image: BDS4,
        title: 'Visualización'
      },
      {
        image: BDS4,
        title: 'Integración'
      },
      {
        image: BDS4,
        title: 'Outsourcing'
      },
      {
        image: BDS4,
        title: 'Mantenimiento'
      },
      {
        image: BDS4,
        title: 'Capacitación'
      },
      {
        image: BDS4,
        title: 'Proyectos y servicios DWH'
      }
    ]
  },
  {
    id: 'tech-ia',
    question: 'Inteligencia Artificial',

    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Pruebas de Conceptos'
      },
      {
        image: BDS4,
        title: 'Migraciones'
      }
    ]
  },
  {
    id: 'tech-ml',
    question: 'Machine Learning',

    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Desarrollo móvil'
      },
      {
        image: BDS4,
        title: 'Desarrollo de software'
      },
      {
        image: BDS4,
        title: 'Infraestructura en la Nube'
      }
    ]
  },
  {
    id: 'tech-db',
    question: 'Bases de datos',

    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Inteligencia artificial generativa'
      },
      {
        image: BDS4,
        title: 'Machine Learning'
      },
      {
        image: BDS4,
        title: 'RPA'
      }
    ]
  },
  {
    id: 'tech-softdev',
    question: 'Desarrollo de Software',

    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Inteligencia artificial generativa'
      },
      {
        image: BDS4,
        title: 'Machine Learning'
      },
      {
        image: BDS4,
        title: 'RPA'
      }
    ]
  },
  {
    id: 'tech-etl',
    question: 'ETL',

    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Inteligencia artificial generativa'
      },
      {
        image: BDS4,
        title: 'Machine Learning'
      },
      {
        image: BDS4,
        title: 'RPA'
      }
    ]
  }
]

export default function TechnologiesList() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const handleAccordionToggle = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }
  return (
    <Section className='md:py-0 border-t'>
      <Container className='max-w-full sm:p-0 sm:py-8'>
        <div className='mt-4 grid grid-cols-3 gap-4 md:mt-8'>
          {Technologies.map((service, index) => (
            <Accordion
              key={index}
              type='single'
              collapsible
              id={service.id}
              value={openAccordion === service.id ? service.question : ''}
              onValueChange={(value) => {
                setOpenAccordion(value ? service.id : null)
              }}
            >
              <AccordionItem
                value={service.question}
                className={`rounded-md border-t shadow-sm shadow-gray-300 bg-white px-4 transition-all  ${openAccordion === service.id ? 'bg-bgGreenColor  shadow-none ' : 'bg-white'}`}
              >
                <AccordionTrigger className='flex flex-row hover:no-underline  justify-center ' onClick={() => handleAccordionToggle(service.id)}>
                  <span className='flex flex-col '>
                    <p className='text-2xl font-bold '>{service.question}</p>
                  </span>
                </AccordionTrigger>

                <AccordionContent className={`text-base border-t ${openAccordion === service.id && 'border-0'}`}>
                  <div className='pt-4 grid grid-cols-2'>
                    {service.contentList.map((item, index) => (
                      <Card key={index} className='flex flex-col p-2 gap-1 items-center text-oxfordBlue m-3 justify-center border'>
                        <Image src={item.image} alt={item.title} width={120} height={120} className='rounded-full' />
                        <p className='font-bold text-lg pb-4 text-center'>{item.title}</p>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  )
}
