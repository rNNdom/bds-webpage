'use client'
import React from 'react'
import Balancer from 'react-wrap-balancer'
import { Section, Container } from './craft'
import { Button } from './ui/button'

function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log(data, 'yeayayaya')
  }
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose '>
      <Container className='text-center sm:p-2 not-prose'>
        <h3 className='text-4xl font-bold text-center pb-10'>
          <Balancer>Contáctanos</Balancer>
        </h3>

        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input name='user_name' type='text' placeholder='Tu nombre' required className='mb-2 p-2 border rounded' />
          <input name='user_email' type='email' placeholder='Correo electrónico' required className='mb-2 p-2 border rounded' />
          <textarea name='user_issue' placeholder='Tu mensaje (Max. 500 caracteres)' maxLength={500} required className='mb-2 p-2 border rounded h-48 resize-none' />
          <span className='flex justify-center'>
            <Button type='submit' className='hidden sm:flex bg-buttonTealColor font-semibold text-md w-1/2 '>
              Enviar
            </Button>
          </span>
        </form>
      </Container>
    </Section>
  )
}

export default ContactUs
