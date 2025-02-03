import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'skill',
      type: 'string',
      title: 'Skill Name',
    }),
    defineField({
      name: 'image',
      type: 'string',
      title: 'Image URL',
    }),
    defineField({
      name: 'category',
      type: 'string', // Changed from 'text' to 'string' for dropdown functionality
      title: 'Category',
      description: 'Select the type of skill below',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
        ],
      },
    }),
  ],
})