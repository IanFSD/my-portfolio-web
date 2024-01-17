import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'jobTitle',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot:true
      }
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'currentWork',
      title: 'IsCurrentlyWorkingThere',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of:[{type:'reference', to: {type:'skill'}}]
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{ type:'string' }]
    }),
  ]
})
