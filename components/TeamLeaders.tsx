import UserImage from '@/public/userimg.png'
import Image from 'next/image'
import { Container, Section } from './craft'
import SectionTitle from './SectionTitle'
export default function TeamLeaders() {
  const leaders = Array(5).fill({ name: 'Nombre Apellido', description: 'Descripción', businessSeal: 'BDS SpA' })

  return (
    <Section className='relative z-50 text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-2 not-prose items-center flex flex-col'>
        <SectionTitle>Líderes de equipo</SectionTitle>

        <div className=' flex flex-wrap justify-around my-8'>
          {leaders.map((leader, index) => (
            <div key={index} className='team-leaders-section text-center md:w-3/12 m-5 mt-0 border gap-5 md:gap-2 bg-white p-10 rounded-md flex md:flex-col shadow-sm shadow-gray-300 '>
              <Image src={UserImage} alt={`Líder ${index + 1}`} width={180} height={180} className='mx-auto mb-2 ' />
              <span className='flex flex-col items-center justify-center'>
                <p className='font-bold text-lg'>{leader.name}</p>
                <p className='ts-hidden-property'>{leader.description}</p>
                <p className='text-muted-foreground text-sm pt-10 md:pt-5 -mb-4 '>{leader.businessSeal}</p>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
