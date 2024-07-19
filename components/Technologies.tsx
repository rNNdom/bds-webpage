import * as Craft from '@/components/craft'
import BDS4 from '@/public/BDS4.png'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

const Technologies = () => {
  return (
    <Craft.Section>
      <Craft.Container className='not-prose max-w-7xl'>
        <div className='flex flex-col gap-6 items-center'>
          <SectionTitle>Tecnologías</SectionTitle>
          <div className='relative flex justify-center items-center w-max flex-row h-full'>
            <div className='flex flex-col  border-bgGreenColor'>
              <div className='flex flex-row-reverse'>
                <Image src={BDS4} alt='Servicio de Datos' width={100} />
                <div className='service-description'>
                  <h4 className='font-bold'>Servicio de Datos</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                </div>
                <div className='circle circle-1 '>2</div>
              </div>
              <div className='flex flex-row-reverse'>
                <Image src={BDS4} alt='Desarrollo de Software' width={100} />
                <div className='service-description'>
                  <h4 className='font-bold'>Desarrollo de Software</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                </div>
                <div className='circle circle-2 '>3</div>
              </div>
            </div>
            <div className='flex flex-col border-l-4 border-bgGreenColor gap-40'>
              <div className='flex flex-row'>
                <Image src={BDS4} alt='ML - IA - RPA' width={100} />
                <div className='service-description'>
                  <h4 className='font-bold'>ML - IA - RPA</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                </div>
                <div className='circle circle-3 '>1</div>
              </div>
              <div className='flex flex-row'>
                <Image src={BDS4} alt='Big Data' width={100} />
                <div className='service-description'>
                  <h4 className='font-bold'>Big Data</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                </div>
                <div className='circle circle-4 '>4</div>
              </div>
            </div>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default Technologies
