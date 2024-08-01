'use client'
import { Container, Section } from '@/components/craft'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import BDS4 from '@/public/BDS4.png'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Card } from './ui/card'

const Services: AccordeonProps[] = [
  {
    id: 'data-services',
    question: 'Servicios de datos',
    description: 'Brindamos el mejor servicio y experiencia con nuestro servicio de datos hacia nuestros clientes. Confía en nuestra experiencia.',
    image: BDS4,
    contentList: [
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
      },
      {
        image: BDS4,
        title: 'Mantenimiento',
        description: 'Correctivo, perfectivo y evolutivo sobre modelos de datos, procesos ETL, Reportes y arquitecturas BI/Big Data.'
      },
      {
        image: BDS4,
        title: 'Capacitación',
        description: 'Ofrecemos capacitaciones a medida en las herramientas BI, ETL, Reportera, Big Data, Modelos de datos, etc.'
      },
      {
        image: BDS4,
        title: 'Proyectos y servicios DWH',
        description: 'Diseñamos, construimos e implementamos Data Warehouses desde cero.'
      }
    ]
  },
  {
    id: 'bigdata-services',
    question: 'Servicios de Big Data',
    description: 'Diseñamos e implementamos soluciones Big Data a la medida. Somos expertos en arquitecturas de Big Data.',
    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Pruebas de Conceptos',
        description: 'Realizamos pruebas de concepto e diferentes herramientas tanto BI como Big Data.'
      },
      {
        image: BDS4,
        title: 'Migraciones',
        description: 'Debido a la evolución de las plataformas tecnológicas ofrecemos servicios de migración y actualización de plataformas.'
      }
    ]
  },
  {
    id: 'software-services',
    question: 'Desarrollo de Software',
    description: 'Diseñamos e implementamos soluciones de software a la medida de nuestros clientes. Nos basamos en tecnología en la nube.',
    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Desarrollo móvil',
        description: 'Desarrollamos aplicaciones móviles nativas e híbridas para Android e iOS, utilizando tecnologías como Expo y React Native.'
      },
      {
        image: BDS4,
        title: 'Desarrollo de software',
        description:
          'Desarrollamos software a medida para plataformas web, adaptándonos a las necesidades específicas de nuestros clientes. Utilizamos tecnologías que operan en entornos con Node.js, como React, TypeScript, Next.js, JavaScript, HTML y CSS.'
      },
      {
        image: BDS4,
        title: 'Infraestructura en la Nube',
        description:
          'Diseñamos e implementamos soluciones robustas utilizando servicios en la nube, como AWS, para garantizar la escalabilidad, disponibilidad y seguridad de las aplicaciones. Nos enfocamos en crear infraestructuras eficientes que soporten el crecimiento y adaptabilidad de los proyectos, optimizando recursos y costos operativos.'
      }
    ]
  },
  {
    id: 'ia-data',
    question: 'Inteligencia artificial y automatización de procesos',
    description:
      'Diseñamos soluciones empresareiales basadas en los tópicos tecnológicos más recientes, usando inteligencia artificial (AI), aprendfizaje automático (ML) y automatización robótica de procesos (RPA).',
    image: BDS4,
    contentList: [
      {
        image: BDS4,
        title: 'Inteligencia artificial generativa',
        description:
          'Desarrollamos soluciones con inteligencia artificial generativa basadas en los modelos semánticos de OpenAI, con almacenamienmto y búsqueda vectorial en los activos de datos de tu empresa.'
      },
      {
        image: BDS4,
        title: 'Machine Learning',
        description:
          'Desarrollamos soluciones con inteligencia artificial generativa basadas en los modelos semánticos de OpenAI, con almacenamiento y búsqueda vectorial en los activos de datos de tu empresa.'
      },
      {
        image: BDS4,
        title: 'RPA',
        description:
          'Automatizamos tareas repetitivas y manuales, a traves de procesos RPA (Robotic Process Automation) personalizados, permitiendo a los equipos de trabajo optimizar sus tiempos de respuesta en sus procesos internos, mejorando así eficiencia y la productividad de tu empresa.'
      }
    ]
  }
]

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
    <Section className='md:py-0 border-t'>
      <Container>
        <div className='mt-4 flex flex-col gap-4 md:mt-8'>
          {Services.map((service, index) => (
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
                className='rounded-md border bg-lightGreenBackground px-4 transition-all'
                ref={(element) => {
                  sectionRefs.current[service.id] = element
                }}
              >
                <AccordionTrigger className='flex flex-row hover:no-underline gap-10' onClick={() => handleAccordionToggle(service.id)}>
                  <Image src={service.image} alt={service.question} width={150} height={150} className='rounded-full' />
                  <span className='flex flex-col gap-5 text-start'>
                    <p className='text-xl font-bold'>{service.question}</p>
                    <p className='font-normal'>{service.description}</p>
                  </span>
                </AccordionTrigger>

                <AccordionContent className='text-base border-t'>
                  <div className='pt-4'>
                    {service.contentList.map((item, index) => (
                      <Card key={index} className='flex flex-row p-4 gap-4 items-center text-oxfordBlue m-3 my-10 border-0'>
                        <Image src={item.image} alt={item.title} width={120} height={120} className='rounded-full' />
                        <div className='p-3 pr-6 flex flex-grow flex-col'>
                          <p className='font-bold text-lg pb-4'>{item.title}</p>
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
