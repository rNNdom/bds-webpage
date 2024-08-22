// Layout
import * as Craft from '@/components/craft'

// Icons
import BigData from '@/public/service-logos/BigData.svg'
import DataService from '@/public/service-logos/DataServiceLogo.svg'
import ML from '@/public/service-logos/MLLogo.svg'
import SoftDev from '@/public/service-logos/SoftDevLogo.svg'
import LeftServiceElement from './LeftServiceElement'
import RightServiceElement from './RightServiceElement'
import SectionTitle from './SectionTitle'

const MainServices = () => {
  return (
    <Craft.Section className='relative z-10 '>
      <Craft.Container className='p-0 sm:p-0 not-prose max-w-7xl'>
        <div className='flex flex-col gap-6 items-center'>
          <SectionTitle>Principales Servicios</SectionTitle>
          <div className='md:relative flex p-5 md:vertical-line flex-col md:flex-row max-h-fit md:max-h-max gap-10'>
            <div className='container-height left-services flex flex-col md:justify-between gap-2'>
              <div className='blank-space h-1/6' />
              <LeftServiceElement
                image={BigData}
                title='Big Data'
                description='Diseñamos e implementamos soluciones innovadoras de Big Data que transforman tus datos en valor estratégico.'
                order={2}
                href='/services#bigdata-services'
              />
              <div className='blank-space h-0' />
              <LeftServiceElement
                image={SoftDev}
                title='Desarrollo de Software'
                description='Desarrollamos software a medida que potencia tu negocio, adaptándonos a tus necesidades específicas.'
                order={4}
                href='/services#software-services'
              />
            </div>
            <div className='container-height right-services flex flex-col md:justify-between gap-2'>
              <RightServiceElement
                image={DataService}
                title='Servicio de Datos'
                description='Desarrollamos estrategias robustas para la gestión y análisis de datos, ayudándote a tomar decisiones informadas.'
                order={1}
                href='/services#data-services'
              />
              <div className='blank-space h-0' />
              <RightServiceElement
                image={ML}
                title='ML - IA - RPA'
                description='Impulsamos la eficiencia y la innovación mediante la automatización inteligente y el aprendizaje automático.'
                order={3}
                href='/services#ia-data'
              />
              <div className='blank-space h-1/6' />
            </div>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default MainServices
