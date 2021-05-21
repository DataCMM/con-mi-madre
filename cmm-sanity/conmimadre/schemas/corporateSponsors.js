export default {
    name: 'corporate_sponsors',
    title: 'Corporate Sponsors',
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