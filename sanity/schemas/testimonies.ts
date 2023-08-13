import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonies',
  title: 'Testimonies',
  type: 'document',
  fields: [
    defineField({
        name: 'clientname',
        title: 'ClientName',
        type: 'string',
      }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      }),
    
  ],

})