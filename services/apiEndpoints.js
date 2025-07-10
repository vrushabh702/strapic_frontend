// api/apiEndpoints.js

const apiEndpoints = {
  services: `/api/dynamic-services?populate[content][populate]=*`,
  blogsSorted: `/api/blogs?pagination[page]=1&pagination[pageSize]=10&sort=title:asc`,
  blogsDeepPopulated: `/api/blogs?populate[author][populate]=*&populate[cover][populate]=*&populate[categories][populate]=*&populate[content][populate]=*`,
  blogsPopulate: `/api/blogs?populate[content][populate]=*`,
  authorsSorted: `/api/authors?pagination[page]=1&pagination[pageSize]=10&sort=author_name:asc`,
}

export default apiEndpoints
