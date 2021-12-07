export default {
    name: 'adminStaff',
    title: 'Admin Staff',
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
        type: 'number'
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
      },
      {
        name: 'email_name',
        title: 'Email Address Full Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
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
      {
          name: 'pronoun',
          title: 'Pronoun',
          type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Bio',
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
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  }
  