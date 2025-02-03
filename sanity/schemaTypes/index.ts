import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { descriptionType } from './description'
import {aboutType} from "./aboutType"
import { skillType } from './skillType'
import { projectType } from './projectType'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, projectType, categoryType, postType, authorType, descriptionType, aboutType, skillType],
}
