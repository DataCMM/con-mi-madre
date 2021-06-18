export default {
    name: 'executiveCommittee',
    title: 'Executive Committee',
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
        name: 'company_1',
        title: 'Company One',
        type: 'string',
      },
      {
        name: 'company_2',
        title: 'Company Two',
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
  