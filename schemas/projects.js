export default {
    name : 'projects',
    title : 'Projects',
    type : 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name : 'slug',
            title : 'Slug',
            type: 'slug',
            options : {
				source : 'title',
				maxLength : 96
			}
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name : 'category',
            title : 'Category',
            type : 'string'
        },
        {
            name : 'icon',
            title : 'Icon',
            type : 'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        
    ],
    orderings: [
        {
          title: "Manual order",
          name: "manualOrder",
          by: [{ field: "order", direction: "asc" }],
        },
    ],
}