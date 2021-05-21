export default {
    name: 'school_sponsors',
    title: 'School Partners',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Company Name',
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