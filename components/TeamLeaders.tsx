import Image from 'next/image'
import { Container, Section } from './craft'
import SectionTitle from './SectionTitle'
import { teamLeadersList } from './teamLeadersList'
import Link from 'next/link'
export default function TeamLeaders() {
  return (
    <Section className='relative z-50 pt-0 text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='text-center sm:p-0 not-prose items-center flex flex-col p-0 border-b'>
        <SectionTitle>Líderes de equipo</SectionTitle>
        <div className=' grid grid-cols-1 md:grid-cols-3 my-8 gap-10'>
          {teamLeadersList.map((leader, index) => (
            <div
              key={index}
              className='team-leaders-column team-leaders-section text-center  gap-5 md:gap-4 bg-white p-4 rounded-md flex md:flex-col shadow-sm shadow-gray-400 items-center justify-evenly border-[1px] border-gray-50 group hover:border-gray-300 transition-all duration-300'
            >
              <span className='flex justify-center max-w-[165px] max-h-[165px]'>
                <Image
                  unoptimized
                  src={leader.image}
                  alt={`Líder de célula en empresa BDS SpA`}
                  sizes={'165'}
                  width={165}
                  height={165}
                  priority
                  className='rounded-full bg-bds-background-gradient-1 object-cover'
                />
              </span>
              <span className='flex justify-end w-full'>
                <Link href={leader.linkedinUrl} target='_blank' className='flex items-center gap-2 '>
                  <p className='text-muted-foreground text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500'>Ver perfil</p>
                  <Image src={leader.linkedinIcon} alt={`LinkedIn de ${leader.name}`} width={20} height={20} />
                </Link>
              </span>
              <span className='flex flex-col items-center justify-center md:border-t w-[60%] md:w-full'>
                <p className='font-bold text-lg truncate pt-2'>{leader.name}</p>
                <p className='text-sm text-muted-foreground mt-2 w-[80%]'>{leader.description}</p>
                <br />
                <span className='border-t w-full pb-1 block md:hidden'></span>
                <p className='text-muted-foreground text-sm'>{leader.businessSeal}</p>
              </span>
            </div>
          ))}
        </div>
        <p className='text-muted-foreground text-lg mt-4 '>¡Con la colaboración de mas de 30 de nuestros Data Workers!</p>
      </Container>
    </Section>
  )
}
