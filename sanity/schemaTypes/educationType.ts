import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'


export const educationType = defineType({
  name: 'eduction',
  title: 'Education',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'institute',
      type: 'string',
      title: 'Institute',
    }),
    defineField({
        name: 'degree',
        type: 'string',
        title: 'Degree',
      }),
      defineField({
        name: 'duration',
        type: 'string',
        title: 'Duration',
      })
  ],
})