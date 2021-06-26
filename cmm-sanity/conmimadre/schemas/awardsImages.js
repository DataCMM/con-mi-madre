export default {
    name: 'awardsImages',
    title: 'Awards Image Carousel',
    type: 'document',
    fields: [
        {
            name: 'title',
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
    ]
}