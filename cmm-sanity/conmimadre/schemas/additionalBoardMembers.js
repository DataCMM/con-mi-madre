export default {
    name: 'additionalBoardMembers',
    title: 'Additional Board Members',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
    ],
    preview: {
        select: {
          title: 'name',
        },
      },
  }
  