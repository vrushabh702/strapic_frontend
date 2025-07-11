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
    // add more endpoints here as needed
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
