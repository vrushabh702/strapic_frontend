// import { fetchFromStrapic } from "./api"

// export default async function fetchProductManagement() {
//   try {
//     // const data = await fetchFromStrapic("/api/dynamic-services?populate=*")
//     const data = await fetchFromStrapic(
//       `/api/dynamic-services?populate[content][populate]=*`
//     )

//     return data?.data[0]
//   } catch (error) {
//     console.error("Error fetching case studies", error)
//     return []
//   }
// }

import { fetchFromStrapic } from "./api"

export default async function fetchProductManagement() {
  const endpoints = {
    dynamicServices: `/api/dynamic-services?populate[content][populate]=*`,
    blogsSorted: `/api/blogs?pagination[page]=1&pagination[pageSize]=10&sort=title:asc`,
    blogsContent: `/api/blogs/gwbx0qhtbjy1w77eaj1vwcit?populate=*`,
    category2: `/api/category-2s?populate=*`,
    category2Data: `/api/category-2s?populate[blogs][populate]=*&filters[blogs][id][$notNull]=true`,
    IndividualBlogs: `/api/individual-blogs?populate[blogs][populate]=*&populate[list_block][populate]=*`,
  }

  const result = {}

  try {
    await Promise.all(
      Object.entries(endpoints).map(async ([key, endpoint]) => {
        const data = await fetchFromStrapic(endpoint)
        result[key] = data?.data || []
      })
    )
  } catch (error) {
    console.error("Error fetching content", error)
  }

  return result
}
