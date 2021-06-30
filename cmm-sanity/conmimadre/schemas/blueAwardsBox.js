export default {
    name: 'blue',
    title: 'Blue Awards Box',
    type: 'document',
    fields: [
        {
            name:'display',
            title: 'Name and ID#',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'name',
            title: 'Award Title',
            type: 'string'
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
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