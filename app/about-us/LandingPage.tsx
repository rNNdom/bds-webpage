import React from 'react'
import Image from 'next/image'
import MainServices from '@/components/MainServices'
import { Section } from '@/components/craft'
import { Container } from 'lucide-react'

const LandingPage: React.FC = () => {
  const stats = [
    { number: '+50', text: 'Miembros colaboradores' },
    { number: '+200', text: 'Proyectos exitosos' },
    { number: '+50', text: 'Clientes satisfechos' }
  ]

  const partners = [
    { name: 'Cloudera', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'ABi TECH', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ]

  const leaders = Array(5).fill({ name: 'Nombre Apellido' })

  const Content = (): JSX.Element => {
    return (
      <div className='max-w-4xl mx-auto p-4 font-sans'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Sobre nosotros</h1>
        <p className='mb-4'>Nos especializamos en brindar servicios de consultoría de BI y Big Data con un enfoque centrado en la excelencia, el compromiso y la experiencia.</p>
        <p className='mb-4'>Gracias a nuestra experiencia, hemos logrado brindar soluciones que permiten a nuestros clientes sacar el máximo potencial de sus datos.</p>

        <div className='flex justify-around text-center my-8'>
          {stats.map((stat, index) => (
            <div key={index} className='flex-1'>
              <h3 className='text-2xl font-bold'>{stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>

        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Nuestra misión</h2>
        <p className='mb-4'>
          Buscamos entregar servicios de consultoría BI y Big Data a grandes y pequeñas compañías, aportando con nuestro conocimiento y experiencia en las diversas tecnologías e industrias, y así
          nuestros clientes logren utilizar sus datos de manera correcta, orientándose a generar valor para sus compañías, ayudándoles con la toma de decisiones y el entendimiento para tomar las
          mejores decisiones empresariales.
        </p>

        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Partners</h2>
        <div className='flex justify-around my-8'>
          {partners.map((partner, index) => (
            <div key={index} className='text-center w-1/2 px-4'>
              <Image src='/api/placeholder/100/100' alt={`${partner.name} logo`} width={100} height={100} className='mx-auto mb-2' />
              <h3 className='text-xl font-bold mb-2'>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>

        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Nuestra visión</h2>
        <p className='mb-4'>
          Queremos consolidarnos a nivel nacional como una empresa robusta, responsable y capaz de generar la confianza necesaria en nuestros clientes para que nos confíen sus necesidades actuales e
          iniciativas. Convirtiéndonos en un verdadero equipo de trabajo junto a ellos para entregar las mejores soluciones.
        </p>

        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Líderes</h2>
        <div className='flex flex-wrap justify-around my-8'>
          {leaders.map((leader, index) => (
            <div key={index} className='text-center w-1/3 mb-4'>
              <Image src='/api/placeholder/100/100' alt={`Líder ${index + 1}`} width={100} height={100} className='mx-auto rounded-full mb-2' />
              <p>{leader.name}</p>
            </div>
          ))}
        </div>

        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Contáctanos</h2>
        <form className='flex flex-col'>
          <input type='text' placeholder='Tu nombre' required className='mb-2 p-2 border rounded' />
          <input type='email' placeholder='Correo electrónico' required className='mb-2 p-2 border rounded' />
          <textarea placeholder='Tu mensaje (Max. 500 caracteres)' maxLength={500} required className='mb-2 p-2 border rounded h-32' />
          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
            Enviar
          </button>
        </form>
      </div>
    )
  }

  return <Content />
}

export default LandingPage
