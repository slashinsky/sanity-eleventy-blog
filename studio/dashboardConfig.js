export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5ee6b0f6796cc9c571944b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5c8zp5y6',
                  apiId: '2ae9ef22-d9d9-47e8-b77c-893e39ac4bc2'
                },
                {
                  buildHookId: '5e5ee6b146ff580d1952636d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-hiqeddu1',
                  apiId: 'c9265778-f141-4ed3-960e-2be3c105e577'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slashinsky/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-hiqeddu1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
