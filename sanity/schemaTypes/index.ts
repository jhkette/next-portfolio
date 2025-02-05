import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'

import { descriptionType } from './descriptionType'
import {aboutType} from "./aboutType"
import { skillType } from './skillType'
import { projectType } from './projectType'
import {educationType} from './educationType'
import { experienceType } from './experienceType'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, projectType, descriptionType, aboutType, skillType,
    educationType, experienceType
  ],
}
