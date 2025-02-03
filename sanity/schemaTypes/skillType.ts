import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'skill',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'string',
      
    }),
    defineField({
      name: 'category',
      type: 'text',
      description: "Select the type of skill below",
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
        
        ],
      },
    }),
  ],
})
