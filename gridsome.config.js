
module.exports = {
  siteName: 'DrinkingGames.guide',
  siteUrl: 'https://drinkinggamesguide.vercel.app',
  permalinks: {
    trailingSlash: false,
  },
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.GRIDSOME_AIRTABLE_KEY,
        base: process.env.GRIDSOME_AIRTABLE_DEV_BASE,
        tables: [
          {
              name: 'Games',
              typeName: 'Game',
              links: [
                {
                  fieldName: 'Category',
                  typeName: 'Category',
                  linkToFirst: true
                },
                {
                  fieldName: 'TipsBackup',
                  typeName: 'Tip',
                  linkToFirst: false
                }
              ]
          },
          {
            name: 'Categories',
            typeName: 'Category',
            links: [
              {
                fieldName: "Category",
                typeName: "Category",
                linkToFirst: true, // optional
              },
            ]
          },
          {
            name: 'Tips',
            typeName: 'Tip',
            links: [
              {
                fieldName: "Game",
                typeName: "Game",
                linkToFirst: false, // optional
              },
            ]
          }
        ]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
        },
      }
    },
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      }
    },
    {
      use: 'gridsome-plugin-seo'
    }
  ],
  templates:{
    Game: [
      {
        path: '/:Slug',
        component: "./src/components/Game.vue"
      }
    ],
    Category: [
      {
        path: '/:Slug',
        component: "./src/components/Category.vue"
      }
    ]
  },
}
