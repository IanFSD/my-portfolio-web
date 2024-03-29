import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description:'Title of the skill',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot:true
      }
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ]
})
