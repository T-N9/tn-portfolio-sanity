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
            name:'status',
            title:'Status',
            type: 'string',
        },
        {
            name:'type',
            title:'Type',
            type: 'string',
        },
        {
            name:'role',
            title:'Role',
            type: 'string',
        },
        {
            name:'period',
            title:'Period',
            type: 'string',
        },
        {
            name:'url',
            title:'Url',
            type: 'string',
        },
        {
            name:'introduction',
            title:'Introduction',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name:'development',
            title:'Development',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name:'mockup',
            title:'Mockup',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'pandp',
            title:'Pandp',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name:'designing',
            title:'Designing',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name:'mockup_d',
            title:'Mockup_d',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'colors',
            title : 'Colors',
            type: 'array',
            of: [{type: 'string'}]
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