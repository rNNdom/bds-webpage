import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

const LeftServiceElement = ({ image, title, description, order, href }: ServiceElement) => {
  return (
    <Link href={href} className={`flex column-minimum-width flex-row md:flex-row-reverse hover:-mt-1 hover:mb-1 transition-all md:border-b-0 border-b-2 pb-3 items-center gap-5`}>
      <Image unoptimized src={image} alt={title} width={90} height={90} style={{ objectFit: 'fill' }} />
      <div className='flex flex-col justify-center text-justify md:text-right '>
        <h4 className='centered-text-min-width font-bold text-xl'>{title}</h4>
        <p className='hidden-minimum-width text-lg'>
          <Balancer>{description}</Balancer>
        </p>
      </div>
      <div className='md:circle hidden'>{order}</div>
    </Link>
  )
}

export default LeftServiceElement
