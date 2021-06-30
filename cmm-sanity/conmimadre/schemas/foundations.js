export default {
    name: 'foundations',
    title: 'Foundations',
    type: 'document',
    fields: [
        {
            name:'display',
            title: 'Name and ID#',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Foundation Name',
            type: 'string'
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
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
    ],
        preview: {
            select: {
            title: 'display',
            },
        },
}