import Abitech from '@/public/abitech.png'
import Cloudera from '@/public/Cloudera.png'
import Image from 'next/image'
import { Container, Section } from './craft'
import SectionTitle from './SectionTitle'

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
      icon: <Image className='object-contain w-28 h-28' src={Cloudera} alt='placeholder1' />,
      title: 'Cloudera',
      description:
        '<p> Cloudera es una empresa líder en el desarrollo de plataformas de datos y análisis, reconocida globalmente por su innovación y capacidad para transformar datos en información valiosa. <br/> <br/> Como <strong>partner SELECT de Cloudera</strong>, hemos establecido una colaboración estratégica que nos permite ofrecer soluciones avanzadas y personalizadas de análisis de datos en el mercado chileno. Esta alianza fortalece nuestra capacidad para proporcionar <strong>herramientas de vanguardia</strong> y <strong>soporte especializado</strong> para  tomar <strong>decisiones informadas</strong> basadas en datos precisos y oportunos.</p>',
      href: 'https://www.cloudera.com/'
    },
    {
      icon: <Image className='object-contain h-28' src={Abitech} alt='placeholder1' width={500} height={500} />,
      title: 'ABITech',
      description:
        'Abitech es una empresa dedicada a <strong>generar soluciones personalizadas y avanzas en el mundo de la automatización y digitalizacion de procesos administrativos </strong>. <br/> <br/> Desde el 2023 se creó esta alianza estratégica para poder <strong> ofrecer soluciones mas robustas dentro del ambito de la automatizacion y los datos</strong>.',
      href: 'https://abitech.cl/nosotros/'
    }
  ]

  return (
    <Section className='relative text-white  md:pt-0 pb-0 md:pb-0 not-prose max-w-max z-50'>
      <Container className='flex flex-col gap-6 items-center max-w-max'>
        <SectionTitle className={'text-white'}>Partners</SectionTitle>

        <div className='flex flex-col md:flex-row gap-16 justify-center'>
          {featureText.map(({ icon, title, description, href }, index) => (
            <a href={href} className='flex rounded-lg p-6 transition-all hover:-mt-2 hover:mb-2 bg-lightGreenBackground bg-opacity-5 md:w-fit ' key={index}>
              <div className='flex flex-col  items-center'>
                <span className='pr-7 p-10 flex  flex-col gap-6 '>
                  <span className='items-center justify-center'>{icon}</span>
                  <h4 className='font-bold text-xl'>{title}</h4>
                </span>
                <p className='w-4/5 text-lg' dangerouslySetInnerHTML={{ __html: description }}></p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
