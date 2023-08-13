import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'acadamy',
  title: 'Acadamy',
  type: 'document',
  fields: [
   
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'smallBody',
        title: 'SmallBody',
        type: 'blockContent',
      }),
    
    
  ],

})