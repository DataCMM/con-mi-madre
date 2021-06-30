export default {
    name: 'currentOpenings',
    title: 'Current Openings',
    type: 'document',
    fields: [
        {
            name:'display',
            title: 'Name and ID#',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
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
            type: 'string'
        },
        {
            name: 'pdf',
            title: 'PDF',
            type: 'file',
        }
    ],
        preview: {
            select: {
            title: 'display',
            },
        },
}