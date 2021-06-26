export default {
    name: 'white',
    title: 'White Awards Box',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'title',
            title: 'Award Title',
            type: 'string'
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