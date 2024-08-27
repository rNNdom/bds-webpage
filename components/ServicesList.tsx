'use client'
import { Container, Section } from '@/components/craft'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Card } from './ui/card'
import { ServicesContent } from './iconExports'

const ServicesList = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      setOpenAccordion(hash)
      // Ajustar el desplazamiento después de un pequeño retraso para asegurar que el acordeón se haya abierto.
      setTimeout(() => {
        const element = sectionRefs.current[hash]
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100, // Ajusta el valor -100 según sea necesario
            behavior: 'smooth'
          })
        }
      }, 300)
    }
  }, [])

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }

  return (
    <Section className='md:py-0 services-list-accordion'>
      <Container className='sm:p-4'>
        <div className='mt-4 flex flex-col gap-4 md:mt-8 '>
          {ServicesContent.map((service, index) => (
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
                className='rounded-md px-4 sm:px-10 transition-all bg-gradient-to-r border-0 from-bgDarkGreen to-bgGreenColor '
                ref={(element) => {
                  sectionRefs.current[service.id] = element
                }}
              >
                <AccordionTrigger className='flex flex-col sm:flex-row hover:no-underline sm:px-4 gap-2 ' onClick={() => handleAccordionToggle(service.id)}>
                  <div className='flex flex-col sm:flex-row gap-5 justify-center items-center'>
                    <Image src={service.image} alt={service.question} width={90} height={90} className=' object-fit' />
                    <div className='flex flex-col text-justify sm:text-start px-3'>
                      <span className='flex flex-col w-fit'>
                        <p className='text-2xl font-semibold text-center sm:text-start '>{service.question}</p>
                        <span className={`block border-bgGreenColor border-b-[3px] w-2/3`} />
                      </span>
                      <p className='text-lg font-medium pt-3 hidden-client-text'>{service.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className='text-base  '>
                  <div className='pt-4'>
                    {service.contentList.map((item, index) => (
                      <Card key={index} className='flex flex-col md:flex-row py-4 gap-4 items-center text-white my-6 border-0 border-t-[1px] rounded-none bg-transparent'>
                        <div className='bg-white p-2 rounded-lg flex border-bgGreenColor border '>
                          <span className='relative min-w-[95px] max-w-[95px] min-h-[95px] max-h-[95px] '>
                            <Image src={item.image} alt={item.title} fill className='object-contain' />
                          </span>
                        </div>
                        <span className='p-3 flex flex-grow flex-col items-center md:items-start text-center md:text-start '>
                          <p className='font-bold text-xl pb-4'>{item.title}</p>
                          <p className='text-lg font-medium text-justify md:text-start'>{item.description}</p>
                        </span>
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

export default ServicesList
