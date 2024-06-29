import React from 'react'
import Balancer from 'react-wrap-balancer'
import { Container, Section } from './craft'
import Image from 'next/image'
import Abitech from '@/public/abitech.png'
import Cloudera from '@/public/Cloudera.png'

export default function PartnersSection() {
  type FeatureText = {
    icon: JSX.Element
    title: string
    description: string
    href?: string
    cta?: string
  }

  const featureText: FeatureText[] = [
    {
      icon: <Image className='object-contain' src={Cloudera} alt='placeholder1' width={300} height={300} />,
      title: 'Cloudera',
      description:
        '<p> Cloudera es una empresa líder en el desarrollo de plataformas de datos y análisis, reconocida globalmente por su innovación y capacidad para transformar datos en información valiosa. <br/> <br/> Como <strong>partner SELECT de Cloudera</strong>, hemos establecido una colaboración estratégica que nos permite ofrecer soluciones avanzadas y personalizadas de análisis de datos en el mercado chileno. Esta alianza fortalece nuestra capacidad para proporcionar <strong>herramientas de vanguardia</strong> y <strong>soporte especializado</strong> para  tomar <strong>decisiones informadas</strong> basadas en datos precisos y oportunos.</p>',
      cta: 'Ver más'
    },
    {
      icon: <Image className='object-contain' src={Abitech} alt='placeholder1' width={500} height={500} />,
      title: 'ABITech',
      description:
        'Abitech es una empresa dedicada a <strong>generar soluciones personalizadas y avanzas en el mundo de la automatización y digitalizacion de procesos administrativos </strong>. <br/> <br/> Desde el 2023 se creó esta alianza estratégica para poder <strong> ofrecer soluciones mas robustas dentro del ambito de la automatizacion y los datos </strong>.',
      cta: 'Ver más'
    }
  ]

  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2'>
        <h3 className='text-4xl font-bold text-center pb-5'>
          <Balancer>Partners</Balancer>
        </h3>
        <h4 className='text-2xl font-light opacity-70 pb-10'>
          <Balancer>Conoce quienes son nuestros socios</Balancer>
        </h4>

        <div className='flex flex-col gap-16 justify-center'>
          {featureText.map(({ icon, title, description }, index) => (
            <div className='flex gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 bg-white sm:w-1/2 md:w-fit' key={index}>
              <div className='flex flex-row gap-4 items-center'>
                <span className='pr-7 p-10 flex  flex-col gap-6 w-1/3'>
                  <span className='items-center justify-center'>{icon}</span>
                  <h4 className='font-bold text-xl'>{title}</h4>
                </span>
                <p className='w-3/4 p-3 text-lg' dangerouslySetInnerHTML={{ __html: description }}></p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
