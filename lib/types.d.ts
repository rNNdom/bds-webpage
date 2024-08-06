type NavProps = {
  className?: string
  children?: React.ReactNode
  id?: string
}

type ServiceElement = {
  image: StaticImageData
  title: string
  description: string
  order: number
  href: string
}

type AccordeonListProps = {
  image: StaticImageData
  title: string
  description?: string
}

type AccordeonProps = {
  id: string
  question: string
  description?: string
  image?: StaticImageData
  contentList: AccordeonListProps[]
}
