import Image from 'next/image'
import Link from 'next/link'
const RightServiceElement = ({ image, title, description, order, href }: ServiceElement) => {
  return (
    <Link href={href} className='flex flex-row hover:-mt-1 hover:mb-1 transition-all  items-center md:border-b-0 border-b-2 pb-3'>
      <Image src={image} alt={title} style={{ objectFit: 'fill', height: 85, width: 85 }} />
      <div className='service-description pl-4 flex flex-col justify-center text-left'>
        <h4 className='font-bold text-xl '>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='md:circle hidden'>{order}</div>
    </Link>
  )
}

export default RightServiceElement
