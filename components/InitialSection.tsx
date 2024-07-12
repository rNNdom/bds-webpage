import * as Craft from '@/components/craft'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'
const IntialSection = () => {
  return (
    <Craft.Section>
      <Craft.Container className='grid md:grid-cols-2 md:gap-12 items-stretch'>
        <div className='flex flex-col gap-6 py-8 justify-center'>
          <span className='!my-0 text-3xl'>
            Te ayudamos a desarrollar tu <p className='font-bold'>estrategia de datos, Machine Learning e Inteligencia Artificial</p>
          </span>
          <div className='not-prose flex items-center gap-2'>
            <Button className='w-fit bg-buttonTealColor rounded-xl font-bold h-14' asChild>
              <Link className='text-xl' href='#'>
                Conoce más
              </Link>
            </Button>
          </div>
        </div>
        <div className='not-prose border rounded-full overflow-hidden flex '>
          <Image src={BDS4} alt='placeholder' className='fill object-cover bg-white ' />
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default IntialSection
