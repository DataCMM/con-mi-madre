export default {
    name: 'executiveCommittee',
    title: 'Executive Committee',
    type: 'document',
    fields: [
      {
        name:'title',
        title: 'Name and ID#',
        type: 'string',
      },
      {
        name: 'first_name',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'last_name',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'id',
        title: 'ID',
        type: 'number',
      },
      {
        name: 'position',
        title: 'Position',
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
          source: 'title',
          maxLength: 96,
        },
      },
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
  }
  