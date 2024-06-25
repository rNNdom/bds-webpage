import { Section } from '@/components/craft'
import { Container } from '@/components/craft'
import React from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'
import BDS4 from '@/public/BDS4.png'
export default function OurMission() {
  return (
    <Section className='md:pt-10 text-oxfordBlue pt-10 pb-0 md:pb-0'>
      <Container className='text-center sm:p-2 not-prose'>
        <h3 className='text-4xl font-bold text-center pb-10'>
          <Balancer>Nuestra misión</Balancer>
        </h3>

        <div className='flex flex-col justify-center items-center gap-16'>
          <span className='not-prose border rounded-full overflow-hidden flex '>
            <Image src={BDS4} alt='placeholder' className='fill object-cover bg-white ' width={350} height={350} />
          </span>
          <Balancer>
            <p className='text-xl '>
              En nuestro equipo, nos dedicamos a <strong>desbloquear el potencial de tus datos.</strong> Especializados en Business Intelligence y Big Data,
              <strong>ofrecemos consultoría tanto a grandes corporaciones como a compañías pequeñas.</strong> Nuestro compromiso radica en aplicar nuestro profundo conocimiento y experiencia en
              diversas tecnologías e industrias para así,
              <strong>asegurar que nuestros clientes aprovechen al máximo sus datos, guiándolos hacia decisiones estratégicas acertadas que agreguen valor a sus operaciones.</strong> Estamos aquí para
              impulsar el éxito de tu empresa, brindándote claridad y confianza en cada paso hacia el futuro.
            </p>
          </Balancer>
        </div>
      </Container>
    </Section>
  )
}
