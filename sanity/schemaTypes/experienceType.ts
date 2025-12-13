import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

// change this to match the type experience above

export const experienceType = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    icon: TagIcon,
    fields: [
      defineField({
        name: 'company',
        type: 'string',
        title: 'Company',
      }),
      defineField({
        name: 'position',
        type: 'string',
        title: 'Position',
      }),
      defineField({
        name: 'duration',
        type: 'string',
        title: 'Duration',
      }),
      defineField({
        name: 'desc',
        type: 'array',
        of: [{ type: 'string' }],
        title: 'Description',
      })
    ],
  })