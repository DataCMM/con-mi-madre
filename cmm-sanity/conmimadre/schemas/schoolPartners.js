export default {
    name: 'school_partners',
    title: 'School Partners',
    type: 'document',
    fields: [
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}