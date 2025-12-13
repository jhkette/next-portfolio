import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const descriptionType = defineType({
  name: 'description',
  title: 'Description',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
   
 
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
    defineField({
      name: 'titles',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Titles',
    }),
    defineField({
      name: 'techStackImages',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Tech Stack Images',
    })
  ],

})
