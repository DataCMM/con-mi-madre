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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}