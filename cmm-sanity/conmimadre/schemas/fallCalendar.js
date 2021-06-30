export default {
    name: 'fallCalendar',
    title: 'Fall Calendar',
    type: 'document',
    fields: [
        {
            name:'display',
            title: 'Name and ID#',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Event Name',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date/Month',
            type: 'string'
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
    ],
        preview: {
            select: {
            title: 'display',
            },
        },
}