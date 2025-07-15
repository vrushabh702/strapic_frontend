import fetchProductManagement from "@/libs/content"

export default async function Category({ params }) {
  console.log("dynamic ", params)
  const BLOGS = await fetchProductManagement()
  const CATEGORIES = BLOGS.categoryData
  console.log(CATEGORIES)
}
