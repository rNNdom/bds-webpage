import * as Craft from '@/components/craft'
import SectionTitle from './SectionTitle'

const Technologies = () => {
  return (
    <Craft.Section>
      <Craft.Container className='not-prose max-w-7xl'>
        <div className='flex flex-col gap-6 items-center'>
          <SectionTitle>Tecnologías</SectionTitle>
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default Technologies
