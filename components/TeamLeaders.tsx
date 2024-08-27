import Image from 'next/image'
import { Container, Section } from './craft'
import SectionTitle from './SectionTitle'
import { teamLeadersList } from './teamLeadersList'
export default function TeamLeaders() {
  return (
    <Section className='relative z-50 pt-0 text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-0 not-prose items-center flex flex-col p-0'>
        <SectionTitle>Líderes de equipo</SectionTitle>
        <p className='text-muted-foreground text-lg mt-4'>Con la colaboracion de mas de 30 profesionales de datos</p>
        <div className=' grid grid-cols-1 md:grid-cols-3 my-8 gap-10 '>
          {teamLeadersList.map((leader, index) => (
            <div
              key={index}
              className='team-leaders-column team-leaders-section text-center  gap-5 md:gap-4 bg-white p-4 rounded-md flex md:flex-col shadow-sm shadow-gray-400 items-center justify-evenly border-[1px] border-gray-50 '
            >
              <span className='flex justify-center max-w-[165px] max-h-[165px]'>
                <Image
                  src={leader.image}
                  alt={`Líder de célula en empresa BDS SpA`}
                  sizes={'165'}
                  width={165}
                  height={165}
                  className='rounded-full border-b-[5px] border-bgDarkGreen bg-bds-background-gradient-1  pt-1 object-contain'
                />
              </span>
              <span className='flex flex-col items-center justify-center mt-4 w-[50%]'>
                <p className='font-bold text-lg truncate'>{leader.name}</p>
                <p className='text-sm text-muted-foreground mt-2 w-[80%]'>{leader.description}</p>
                <p className='text-muted-foreground text-sm pt-5'>{leader.businessSeal}</p>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
