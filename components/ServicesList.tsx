// React and Next.js imports
import React from 'react'

// Third-party library imports
import { ArrowUpRight } from 'lucide-react'

// UI component imports
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

// Custom components
import { Section, Container } from '@/components/craft'
import Image, { StaticImageData } from 'next/image'
import BDS4 from '@/public/BDS4.png'
import { Card } from './ui/card'
type FAQItem = {
  question: string
  answer: string
  description?: string
  image: StaticImageData
}

type ServicesListProps = {
  image: StaticImageData
  title: string
  description: string
}

const content: FAQItem[] = [
  {
    question: 'Servicios de datos',
    description: 'Brindamos el mejor servicio y experiencia con nuestro servicio de datos hacia nuestros clientes. Confía en nuestra experiencia.',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: BDS4
  },
  {
    question: 'Servicios de Big Data',
    description: 'Diseñamos e implementamos soluciones Big Data a la medida. Somos expertos en arquitecturas de Big Data.',
    answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: BDS4
  },
  {
    question: 'Desarrollo de Software',
    description: 'Diseñamos e implementamos soluciones de software a la medida de nuestros clientes. Nos basamos en tecnología en la nube.',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: BDS4
  },
  {
    question: 'Machine Learning',
    description:
      'Analizamos tus datos y construimos modelos analíticos que te ayudarán a categorizar a tus o clientes según su comportamiento o predecir eventos, permitiéndote tomar decisiones correctas en el momento oportuno.',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: BDS4
  },
  {
    question: 'IA',
    description:
      'Desarrollamos soluciones con inteligencia artificial generativa basadas en los modelos semánticos de OpenAI, con almacenamiento y búsqueda vectorial en los activos de datos de tu empresa.',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: BDS4
  },
  {
    question: 'RPA',
    description:
      'Automatizamos tareas repetitivas y manuales, a traves de procesos RPA(Robotic Process Automation) personalizados, permitiendo a los equipos detrabajo optimizar sus tiempos de respuesta en sus procesos internos.',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: BDS4
  }
]

const listContent = [
  {
    image: BDS4,
    title: 'Asesorías',
    description: 'Asesorías integrales para encontrar la solución óptima antes las oportunidades de mejora presentes en tu empresa.'
  },
  {
    image: BDS4,
    title: 'Software factory',
    description: 'Ofrecemos equipos transversales, capaces de realizar el levantamiento, desarrollo y QA, mediante un control continuo y ágil de los proyectos.'
  },
  {
    image: BDS4,
    title: 'Visualización',
    description: 'Reportes, paneles, tableros personalizados a las necesidades del negocio, utilizando herramientas BI.'
  },
  {
    image: BDS4,
    title: 'Integración',
    description: 'A través de herramientas ETL extraemos los datos desde los distintos orígenes para transformarlos y cargarlos según la petición del cliente.'
  },
  {
    image: BDS4,
    title: 'Outsourcing',
    description: 'Deslíguese de la tarea de construir modelos de datos, procesos ETL y reportes, déjenos ayudarlos.'
  }
]
const ServicesList = () => {
  return (
    <Section className='md:py-0 '>
      <Container>
        <div className=' mt-4 flex flex-col gap-4 md:mt-8'>
          {content.map((item, index) => (
            <Accordion key={index} type='single' collapsible>
              <AccordionItem value={item.question} className='rounded-md border bg-lightGreenBackground px-4 transition-all '>
                <AccordionTrigger className='flex flex-row  hover:no-underline gap-10 '>
                  <Image src={item.image} alt={item.question} width={150} height={150} className='rounded-full' />
                  <span className='flex flex-col gap-5 text-start '>
                    <p className='text-xl font-bold'>{item.question}</p>
                    <p className='font-normal'>{item.description}</p>
                  </span>
                </AccordionTrigger>

                <AccordionContent className='text-base border-t'>
                  <div className='pt-4'>
                    {listContent.map((item, index) => (
                      <Card key={index} className='flex flex-row p-4 gap-4 items-center text-oxfordBlue m-3 my-10 border-0'>
                        <Image src={item.image} alt={item.title} width={100} height={100} className='rounded-full' />

                        <div className='p-3 pr-6'>
                          <p className='font-bold text-lg text-center'>{item.title}</p>
                          <p className='text-lg'>{item.description}</p>
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
