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
      name: 'experience',
      title: 'Experience',
      description:'Years of experience of the skill',
      type: 'number',
      validation:(Rule)=> Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot:true
      }
    }),
  ]
})
