export default {
    name: 'school_partners',
    title: 'School Partners',
    type: 'document',
    fields: [
        {
            name:'display',
            title: 'Name and ID#',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
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
            title: 'display',
            },
        },
}