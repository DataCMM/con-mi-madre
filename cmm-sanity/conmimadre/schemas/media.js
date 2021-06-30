export default {
    name: 'media',
    title: 'Media Awards',
    type: 'document',
    fields: [
        {
            name:'display',
            title: 'Name and ID#',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Award Title & Year',
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
            type: 'url',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                }
            ]
        },
    ],
        preview: {
            select: {
            title: 'display',
            },
        },
}