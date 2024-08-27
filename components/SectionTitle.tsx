import { cn } from '@/lib/utils'
import React from 'react'
import Balancer from 'react-wrap-balancer'

export default function SectionTitle({ children, width = 'w-1/2', className, borderColor }: { children: string; width?: string; className?: string; borderColor?: string }) {
  return (
    <div>
      <h3 className={cn('sm:text-4xl font-bold text-center w-full overflow-hidden text-ellipsis whitespace-nowrap text-3xl', className)}>
        <Balancer>{children}</Balancer>
      </h3>

      <span className={`${borderColor} ${width} block border-bgGreenColor border-b-4 pt-2`} />
    </div>
  )
}
