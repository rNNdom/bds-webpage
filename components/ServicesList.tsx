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
    <Section className='md:py-0 '>
      <Container>
        <div className='mt-4 flex flex-col gap-4 md:mt-8'>
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
                className='rounded-md px-4 transition-all bg-gradient-to-r border-0 from-bgDarkGreen to-bgGreenColor '
                ref={(element) => {
                  sectionRefs.current[service.id] = element
                }}
              >
                <AccordionTrigger className='flex flex-col md:flex-row hover:no-underline gap-10 px-6' onClick={() => handleAccordionToggle(service.id)}>
                  <Image src={service.image} alt={service.question} width={90} height={90} className=' object-fit' />
                  <div className='flex flex-col text-start'>
                    <span className='flex flex-col w-fit '>
                      <p className='text-2xl font-bold'>{service.question}</p>
                      <span className={`block border-bgGreenColor border-b-[3px] w-1/2`} />
                    </span>
                    <p className='text-lg font-semibold pt-3'>{service.description}</p>
                  </div>
                </AccordionTrigger>

                <AccordionContent className='text-base  '>
                  <div className='pt-4'>
                    {service.contentList.map((item, index) => (
                      <Card key={index} className='flex flex-col md:flex-row p-4 gap-4 items-center text-white m-3 my-10 border-0 border-t-[1px] rounded-none bg-transparent'>
                        <Image src={item.image} alt={item.title} width={115} height={115} className='rounded-lg bg-white p-4 ' />
                        <div className='p-3 pr-6 flex flex-grow flex-col items-center md:items-start text-center md:text-start '>
                          <p className='font-bold text-xl pb-4'>{item.title}</p>
                          <p className='text-lg font-medium text-justify md:text-start'>{item.description}</p>
                        </div>
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
