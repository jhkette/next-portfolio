import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
        name: 'aboutTitle',
        type: 'string',
      }),
 
    defineField({
      name: 'about',
      type: 'blockContent',
    }),

    
   
      defineField({
        name: 'aboutImage',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          })
        ]
      }),
  ],
 
})
