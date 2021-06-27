export default {
    name: 'media',
    title: 'Media Awards',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Award Title & Year',
            type: 'string'
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
    ]
}