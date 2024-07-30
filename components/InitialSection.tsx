import * as Craft from '@/components/craft'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'

const IntialSection = () => {
  return (
    <Craft.Section className='py-0 md:py-0 '>
      <Craft.Container className=' max-w-full p-0 sm:p-0 mx-0'>
        <div className='flex flex-col md:flex-row items-center justify-between '>
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
          <div className=' flex items-center not-prose max-h-[768px] justify-center'>
            <Image src={BDS4} alt='placeholder' width={1000} className=' bg-white rounded-l-full image-rounded-full  ' />
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default IntialSection
