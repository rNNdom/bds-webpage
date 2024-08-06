'use client'
import { Container, Section } from '@/components/craft'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import BDS4 from '@/public/BDS4.png'
import Image from 'next/image'
import { useState } from 'react'
import { Card } from './ui/card'

const Technologies: AccordeonProps[] = [
  {
    id: 'tech-bi',
    question: 'Business Intelligence',

    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'PowerBI'
      },
      {
        image: BDS4,
        title: 'AWS QuickSight'
      },
      {
        image: BDS4,
        title: 'MicroStrategy'
      },
      {
        image: BDS4,
        title: 'Tableau'
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
        title: 'OpenAI'
      },
      {
        image: BDS4,
        title: 'LlamaIndex'
      },
      {
        image: BDS4,
        title: 'ChromaDB'
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
        title: 'Azure Databricks'
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
        title: 'PostgreSQL'
      },
      {
        image: BDS4,
        title: 'Apache HBase'
      },
      {
        image: BDS4,
        title: 'OracleSQL'
      },
      {
        image: BDS4,
        title: 'Hype'
      },
      {
        image: BDS4,
        title: 'AWS Redshift'
      },
      {
        image: BDS4,
        title: 'Teradata'
      },
      {
        image: BDS4,
        title: 'Google BigQuery'
      },
      {
        image: BDS4,
        title: 'SAP Hana'
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
        title: 'React'
      },
      {
        image: BDS4,
        title: 'TypeScript'
      },
      {
        image: BDS4,
        title: 'JavaScript'
      },
      {
        image: BDS4,
        title: 'HTML'
      },
      {
        image: BDS4,
        title: 'CSS'
      },
      {
        image: BDS4,
        title: 'Python'
      },
      {
        image: BDS4,
        title: 'Scala'
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
        title: 'Talend'
      },
      {
        image: BDS4,
        title: 'ControlM'
      },
      {
        image: BDS4,
        title: 'Apache Nifi'
      },
      {
        image: BDS4,
        title: 'Cawa'
      },
      {
        image: BDS4,
        title: 'Pentaho'
      },
      {
        image: BDS4,
        title: 'IBM'
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
    <Section className='md:py-0 '>
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
