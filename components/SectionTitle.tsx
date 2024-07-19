import React from 'react'
import Balancer from 'react-wrap-balancer'

export default function SectionTitle({ children }: { children: string }) {
  return (
    <div>
      <h3 className='text-4xl font-bold text-center w-full'>
        <Balancer>{children}</Balancer>
      </h3>
      <span className='block border-bgGreenColor border-b-4 w-1/2 pt-2' />
    </div>
  )
}
