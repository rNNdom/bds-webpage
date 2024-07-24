import Image from 'next/image'
import Link from 'next/link'
const RightServiceElement = ({ image, title, description, order, href }: ServiceElement) => {
  return (
    <Link href={href} className='flex flex-row hover:-mt-1 hover:mb-1 transition-all'>
      <Image src={image} alt={title} width={80} height={80} style={{ objectFit: 'contain', height: 80, width: 80 }} />
      <div className='service-description pl-4 flex flex-col justify-center text-left'>
        <h4 className='font-bold text-xl '>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='circle'>{order}</div>
    </Link>
  )
}

export default RightServiceElement
