export default {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
        title: "Categories",
        name: "categories",
        type: "array",
        of: [
          { type: "string" },
          {
            type: "reference",
            to: [
              { type: "category" },
              // etc
            ],
          },
        ],
        // options: {
        //   list: [
        //     // these values will be the only available options
        //     { value: "design", title: "Design" },
        //     { value: "programming", title: "Programming" },
        //     // etc
        //   ],
        //   layout: "radio", // <-- defaults to 'dropdown' with a list of values
        // },
      },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },

  ],
};
