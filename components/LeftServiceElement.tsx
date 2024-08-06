import Image from 'next/image'
import Link from 'next/link'

const LeftServiceElement = ({ image, title, description, order, href }: ServiceElement) => {
  return (
    <Link href={href} className='flex flex-row-reverse hover:-mt-1 hover:mb-1 transition-all'>
      <Image src={image} alt={title} width={85} height={85} style={{ objectFit: 'fill', height: 85, width: 85 }} />
      <div className='service-description pr-4 flex flex-col justify-center text-right'>
        <h4 className='font-bold text-xl'>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='circle'>{order}</div>
    </Link>
  )
}

export default LeftServiceElement
