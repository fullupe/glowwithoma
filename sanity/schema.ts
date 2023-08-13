import { SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'

//import post from './schemas/post'


import heroSection from './schemas/heroSection'
import services from './schemas/services'
import healthTips from './schemas/healthTips'
import acadamy from './schemas/acadamy'
import testimonies from './schemas/testimonies'
import team from './schemas/team'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection,services, healthTips,acadamy,team,testimonies, blockContent],
}
