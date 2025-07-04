"use client"

const STRAPIC_BASIC_URL = process.env.NEXT_PUBLIC_STRAPI_URL
export default async function fetchCaseStudies() {
  try {
    const res = await fetch(
      `${STRAPIC_BASIC_URL}/api/case-studies-2?populate=*`,
      {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPIC_JWT_TOKEN}`,
        },
      }
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch case studies : ${res.statusText}`)
    }
    const data = await res.json()
    console.log("data strapic", data)
    return data.data.map((item) => {
      console.log(item)
      const result = {
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.imageUrl,
        button_url: item.routeUrl,
      }
      console.log("result", result)
      return result
    })
    // return data
  } catch (error) {
    console.error("Error fetching case studies", error)
    return []
  }
}
