export default {
    name: 'foundations',
    title: 'Foundations',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Foundation Name',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
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