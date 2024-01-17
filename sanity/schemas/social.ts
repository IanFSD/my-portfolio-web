import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description:'Platform for social media',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'url',
      type: 'url',
    }),
  ]
})
