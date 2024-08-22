import UserImage from '@/public/userimg.png'
import Image from 'next/image'
import { Container, Section } from './craft'
import SectionTitle from './SectionTitle'
export default function TeamLeaders() {
  const leaders = Array(9).fill({ name: 'Nombre Apellido', description: 'Descripción', businessSeal: 'BDS SpA' })

  return (
    <Section className='relative z-50 text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-6 not-prose items-center flex flex-col'>
        <SectionTitle>Líderes de equipo</SectionTitle>

        <div className=' flex flex-wrap justify-evenly my-8 gap-7'>
          {leaders.map((leader, index) => (
            <div
              key={index}
              className='column-minimum-width team-leaders-section text-center md:w-3/12 gap-5 md:gap-4 bg-white p-4 rounded-md flex md:flex-col shadow-sm shadow-gray-400 items-center justify-between'
            >
              <span className='w-full flex justify-center'>
                <Image src={UserImage} alt={`Líder de célula en empresa BDS SpA`} width={150} height={150} className='min-w-[100px]' />
              </span>
              <span className='flex flex-col items-center justify-center'>
                <p className='font-bold text-lg'>{leader.name}</p>
                <p className='ts-hidden-property'>{leader.description}</p>
                <p className='text-muted-foreground text-sm pt-5 md:pt-5 '>{leader.businessSeal}</p>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
