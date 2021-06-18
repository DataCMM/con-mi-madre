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