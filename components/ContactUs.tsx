'use client'
import React from 'react'
import Balancer from 'react-wrap-balancer'
import { Section, Container } from './craft'
import { Button } from './ui/button'

function ContactUs() {
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log(to, subject, body)
  //   const response = await fetch('https://ea9aj1j2ub.execute-api.us-east-1.amazonaws.com/TestSES/send-email', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ to, subject, body })
  //   })

  //   if (response.ok) {
  //     alert('Email sent successfully!')
  //   } else {
  //     alert('Error sending email.')
  //   }
  // }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const response = await fetch('https://ea9aj1j2ub.execute-api.us-east-1.amazonaws.com/TestSES/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data })
    })
    if (response.ok) {
      alert('Email sent successfully!')
    } else {
      alert('Error sending email.')
    }

    console.log(data, { ...data })
  }
  return (
    <Section className='text-oxfordBlue  md:pt-0 pb-0 md:pb-0 not-prose transition-all'>
      <Container id='contact-form' className='text-center sm:p-2 not-prose'>
        <h3 className='text-4xl font-bold text-center pb-10'>
          <Balancer>Contáctanos</Balancer>
        </h3>

        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input name='name' type='text' placeholder='Tu nombre' required className='mb-2 p-2 border rounded' />
          <input name='email' type='email' placeholder='Correo electrónico' required className='mb-2 p-2 border rounded' />
          <textarea name='message' placeholder='Tu mensaje (Max. 500 caracteres)' maxLength={500} required className='mb-2 p-2 border rounded h-48 resize-none' />
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
