import Image from 'next/image'
import Link from 'next/link'

const LeftServiceElement = ({ image, title, description, order, href }: ServiceElement) => {
  return (
    <Link href={href} className={`flex flex-row md:flex-row-reverse hover:-mt-1 hover:mb-1 transition-all md:border-b-0 border-b-2 pb-3`}>
      <Image src={image} alt={title} width={90} height={90} style={{ objectFit: 'fill' }} />
      <div className='service-description pl-4 md:pl-0 md:pr-4 flex flex-col justify-center text-left md:text-right'>
        <h4 className='font-bold text-xl'>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='md:circle hidden'>{order}</div>
    </Link>
  )
}

export default LeftServiceElement
