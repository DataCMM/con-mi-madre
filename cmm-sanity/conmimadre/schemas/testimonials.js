export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'quote',
            title: 'Quote',
            type: 'array',
            of: [
                  {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: [],
                  },
                ],
        },
        {
            name: 'source',
            title: 'source',
            type: 'string'
        },
    ]
}