// Layout
import * as Craft from '@/components/craft'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'

// Icons
import { Coins, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'

type FeatureText = {
  icon: JSX.Element
  title: string
  description: string
  href?: string
  cta?: string
}

const featureText: FeatureText[] = [
  {
    icon: <Image className='max-h-48 object-contain' src={BDS4} alt='placeholder1' />,
    title: 'Servicio de datos',
    href: '/',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    cta: 'Ver más'
  },
  {
    icon: <Image className='max-h-48 object-contain' src={BDS4} alt='placeholder1' />,
    title: 'Desarrollo de Software',
    href: '/',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    cta: 'Ver más'
  },
  {
    icon: <Image className='max-h-48 object-contain' src={BDS4} alt='placeholder1' />,
    title: 'ML, IA, RPA',
    href: '/',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    cta: 'Ver más'
  },
  {
    icon: <Image className='max-h-48 object-contain' src={BDS4} alt='placeholder1' />,
    title: 'Business Intelligence',
    href: '/',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    cta: 'Ver más'
  }
]

const MainServices = () => {
  return (
    <Craft.Section className='border-b'>
      <Craft.Container className='not-prose max-w-max'>
        <div className='flex flex-col gap-6'>
          <h3 className='text-4xl font-bold text-center'>
            <Balancer>Principales Servicios</Balancer>
          </h3>

          <div className='mt-6 grid gap-6 md:mt-12 md:grid-cols-4 mx-24'>
            {featureText.map(({ icon, title, description, href, cta }, index) => (
              <Link href={`${href}`} className='flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all items-center hover:-mt-2 hover:mb-2' key={index}>
                <div className='flex flex-col items-center gap-4 '>
                  <h4 className='font-semibold text-xl'>{title}</h4>
                  <span className='items-center justify-center '> {icon}</span>

                  <Balancer>
                    <p className='text-base opacity-75'>{description}</p>
                  </Balancer>
                </div>
                {cta && (
                  <div className='flex h-fit items-center text-sm font-semibold'>
                    <p>{cta}</p> <ArrowRight className='ml-2 h-4 w-4' />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default MainServices
