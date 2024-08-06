import * as Craft from '@/components/craft'
import SectionTitle from './SectionTitle'
import TechnologiesList from './TechnologiesList'

const Technologies = () => {
  return (
    <Craft.Section>
      <Craft.Container className='not-prose max-w-7xl'>
        <div className='flex flex-col gap-6 items-center'>
          <SectionTitle>Tecnologías</SectionTitle>
        </div>

        <TechnologiesList />
      </Craft.Container>
    </Craft.Section>
  )
}

export default Technologies
