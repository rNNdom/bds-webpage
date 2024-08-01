import * as Craft from '@/components/craft'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'
import LANDINGIMAGE from '@/public/LANDINGIMAGE.jpg'
const IntialSection = () => {
  return (
    <Craft.Section className='py-0 md:py-0 '>
      <Craft.Container className=' max-w-full p-0 sm:p-0 mx-0'>
        <div className='flex flex-col md:flex-row items-center gap-4 justify-between'>
          <div className='flex flex-col items-end  py-4'>
            <div className='flex md:w-2/3 w-full flex-col gap-6 '>
              <span className='text-3xl text-center md:text-start'>
                Te ayudamos a desarrollar tu <p className='font-bold'>Estrategia de datos, Machine Learning e Inteligencia Artificial</p>
              </span>
              <div className='not-prose flex gap-2 justify-center md:justify-start'>
                <Button className='w-fit bg-buttonTealColor rounded-xl font-bold h-14' asChild>
                  <Link className='text-xl' href='#'>
                    Conoce más
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className='flex not-prose max-h-[800px] items-center max-w-[1000px] w-[100%] justify-center md:justify-normal pb-4 md:pb-0'>
              <Image src={LANDINGIMAGE} alt='placeholder' className='rounded-full image-rounded-full max-w-[150%] ' />
            </div>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default IntialSection
