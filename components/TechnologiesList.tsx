'use client'
import { Container, Section } from '@/components/craft'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import { useState } from 'react'
import { Card } from './ui/card'
import { TechnologiesContent } from './iconExports'

export default function TechnologiesList() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const handleAccordionToggle = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }
  return (
    <Section className='md:py-0 '>
      <Container className='max-w-full sm:p-0 sm:py-8'>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-8'>
          {TechnologiesContent.map((service, index) => (
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
                className={`rounded-md border-t shadow-sm shadow-gray-300 bg-white px-4 transition-all  ${openAccordion === service.id ? 'bg-bgGreenColor  shadow-none ' : 'bg-lightGreenBackground'}`}
              >
                <AccordionTrigger className='flex flex-row hover:no-underline  justify-center ' onClick={() => handleAccordionToggle(service.id)}>
                  <span className='flex flex-col '>
                    <p className='text-2xl font-bold '>{service.question}</p>
                  </span>
                </AccordionTrigger>

                <AccordionContent className={`text-base border-t ${openAccordion === service.id && 'border-0'}`}>
                  <div className={`pt-4  ${service.contentList.length <= 1 ? 'flex justify-center' : 'grid grid-cols-2'} `}>
                    {service.contentList.map((item, index) => (
                      <Card key={index} className='flex flex-col p-2 gap-1 items-center text-oxfordBlue m-3 justify-center border'>
                        <span className='w-28 h-28 flex items-center justify-center'>
                          <Image src={item.image} alt={item.title} objectFit='contain' width={80} height={80} />
                        </span>
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
