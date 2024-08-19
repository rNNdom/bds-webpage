import { Section } from '@/components/craft'
import { Container } from '@/components/craft'
import React from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import logo_mision from '@/public/about-us/logo_mision.svg'
import SectionTitle from './SectionTitle'
export default function OurMission() {
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose'>
      <Container className='flex flex-col gap-6 items-center'>
        <SectionTitle width='w-2/3'>Nuestra Misión</SectionTitle>

        <div className='flex flex-col md:flex-row-reverse items-center gap-16 md:gap-0'>
          <span className='not-prose flex w-1/3 justify-center'>
            <Image src={logo_mision} alt='mision' className='w-48 h-48' />
          </span>
          <span className='not-prose flex w-4/5'>
            <p className='text-xl text-justify md:text-start '>
              <Balancer>
                En nuestro equipo, nos dedicamos a <strong>desbloquear el potencial de tus datos.</strong> Especializados en Business Intelligence y Big Data,
                <strong> ofrecemos consultoría tanto a grandes corporaciones como a compañías pequeñas.</strong> <br /> <br />
                Nuestro compromiso radica en aplicar nuestro profundo conocimiento y experiencia en diversas tecnologías e industrias para así,
                <strong> asegurar que nuestros clientes aprovechen al máximo sus datos, guiándolos hacia decisiones estratégicas acertadas que agreguen valor a sus operaciones.</strong> <br /> Estamos
                aquí para impulsar el éxito de tu empresa, brindándote claridad y confianza en cada paso hacia el futuro.
              </Balancer>
            </p>
          </span>
        </div>
      </Container>
    </Section>
  )
}
