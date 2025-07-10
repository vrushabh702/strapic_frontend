import { fetchFromStrapic } from "./api"

export default async function fetchProductManagement() {
  try {
    // const data = await fetchFromStrapic("/api/dynamic-services?populate=*")
    const data = await fetchFromStrapic(
      `/api/dynamic-services?populate[content][populate]=*`
    )

    return data?.data[0]
  } catch (error) {
    console.error("Error fetching case studies", error)
    return []
  }
}
