'use client'

// React and Next Imports
import * as React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'

// Utility Imports
import { Menu, ArrowRightSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

// Component Imports
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { mainMenuMobile } from '@/menu.config'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' className='px-0 border w-10 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='pr-0 bg-bgBlueColor text-white w-2/4 border-r-0'>
        <MobileLink href='/' className='flex items-center border-b-2 pb-2 w-1/2' onOpenChange={setOpen}>
          <ArrowRightSquare className='mr-2 h-4 w-4' color='#91C4C0' />
          <span className='font-bold text-xl '>BDS SpA</span>
        </MobileLink>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pt-2'>
          <div className='flex flex-col space-y-6 pr-10'>
            {Object.entries(mainMenuMobile).map(([key, href]) => (
              <span key={key} className=''>
                <MobileLink href={href} onOpenChange={setOpen} className='p-1 pl-5 font-medium justify-start flex rounded-md bg-buttonTealColor'>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </MobileLink>
              </span>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn('text-lg', className)}
      {...props}
    >
      {children}
    </Link>
  )
}
