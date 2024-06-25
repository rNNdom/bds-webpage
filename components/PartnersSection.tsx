import React from 'react'
import Balancer from 'react-wrap-balancer'
import { Container, Section } from './craft'
import Image from 'next/image'
import Abitech from '@/public/Abitech.jpeg'
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
      icon: <Image className='object-contain' src={Cloudera} alt='placeholder1' width={80} height={80} />,
      title: 'Cloudera',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse cillum dolore eu fugiat nulla pariaturDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      cta: 'Ver más'
    },
    {
      icon: <Image className=' object-contain' src={Abitech} alt='placeholder1' width={80} height={80} />,
      title: 'ABITech',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse cillum dolore eu fugiat nulla pariaturDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      cta: 'Ver más'
    }
  ]

  return (
    <Section className=' text-oxfordBlue pt:0 md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2 '>
        <h3 className='text-4xl font-bold text-center pb-5'>
          <Balancer>Partners</Balancer>
        </h3>
        <h4 className='text-2xl font-light opacity-70 pb-10'>
          <Balancer>Conoce quienes son nuestros socios</Balancer>
        </h4>

        <div className='flex flex-row gap-16 justify-center'>
          {featureText.map(({ icon, title, description }, index) => (
            <div className='flex flex-col gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 bg-white sm:w-1/2 md:w-4/12' key={index}>
              <div className='flex flex-col gap-4 items-center'>
                <span className='items-center justify-center'>{icon}</span>
                <h4 className='font-bold text-xl'>{title}</h4>
                <Balancer>
                  <p className='text-base opacity-75'>{description}</p>
                </Balancer>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
