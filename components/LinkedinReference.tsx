import Link from 'next/link'
import React from 'react'
import LinkedinIcon from '@/public/LinkedIn_icon.svg'
import Image from 'next/image'

export default function LinkedinReference() {
  return (
    <Link className='hover:underline underline-offset-4 flex flex-row gap-2' href='https://www.linkedin.com/company/bds-chile/'>
      <Image src={LinkedinIcon} alt='LinkedIn' width={20} height={20} />
      <p className='text-sm'>LinkedIn</p>
    </Link>
  )
}
