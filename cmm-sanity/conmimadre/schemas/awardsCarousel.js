export default {
    name: 'awardsImages',
    title: 'Awards Image Carousel',
    type: 'document',
    fields: [
        {
            name:'title',
            title: 'Name and ID#',
            type: 'string',
          },
        {
            name: 'event',
            title: 'Event Name',
            type: 'string'
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ],
        preview: {
            select: {
            title: 'title',
            },
        },
}