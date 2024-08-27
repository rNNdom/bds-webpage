'use client'
import React from 'react'
import { Section, Container } from './craft'
import { Button } from './ui/button'
import SectionTitle from './SectionTitle'
import { toast } from 'react-toastify'
import { sendEmail } from '@/services/email'

function ContactUs() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    toast.promise(sendEmail(data), {
      pending: 'Enviando correo...',
      success: 'Correo enviado exitosamente!',
      error: {
        render({ data }) {
          // Mostrar el mensaje de error personalizado
          return `${data}`
        }
      }
    })
  }

  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose transition-all'>
      <Container id='contact-form' className='text-center sm:p-2 not-prose'>
        <span className='flex flex-col items-center pb-4'>
          <SectionTitle className='text-white'>Contáctanos</SectionTitle>
        </span>

        <form onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            <input name='name' type='text' placeholder='Tu nombre' required className='mb-2 p-2 border rounded' />
            <input name='email' type='email' placeholder='Correo electrónico' required className='mb-2 p-2 border rounded' />
            <input name='phone' type='tel' placeholder='Número de contacto' required className='mb-2 p-2 border rounded' />
            <input name='business' type='text' placeholder='Empresa' required className='mb-2 p-2 border rounded' />
          </div>
          <span className='flex justify-center pt-4'>
            <Button type='submit' className='hidden sm:flex bg-buttonTealColor font-semibold text-md w-1/3 '>
              Enviar
            </Button>
          </span>
        </form>
      </Container>
    </Section>
  )
}

export default ContactUs
