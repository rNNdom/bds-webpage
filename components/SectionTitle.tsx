import { cn } from '@/lib/utils'
import React from 'react'
import Balancer from 'react-wrap-balancer'

export default function SectionTitle({ children, width = 'w-1/2', className }: { children: string; width?: string; className?: string }) {
  return (
    <div>
      <h3 className={cn('text-4xl font-bold text-center w-full', className)}>
        <Balancer>{children}</Balancer>
      </h3>
      <span className={`block border-bgGreenColor border-b-4 ${width} pt-2`} />
    </div>
  )
}
