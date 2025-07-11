import fetchProductManagement from "@/libs/content"
import { fetchBlogsSorted } from "../api/fetchFunctions"
import { useState, useEffect } from "react"

export default function BlogsPages() {
  const [productManagement, setProductManagement] = useState([])

  useEffect(() => {
    async function loadData() {
      const productManagementContent = await fetchProductManagement()
      console.log(
        "productManagementContent",
        productManagementContent.blogsSorted
      )
      setProductManagement(productManagementContent.blogsSorted[0])
    }
    loadData()
  }, [])

  return (
    <div>
      <h1>Blogs </h1>
      {blogs.length === 0 ? (
        <p>No data found</p>
      ) : (
        <ul>
          <span>there is something </span>
          {/* {blogs.map((blog) => (
            <li key={blog.id}>
              <h2>{blog.attributes.title}</h2>
              <p>{blog.attributes.description}</p>
            </li>
          ))} */}
        </ul>
      )}
    </div>
  )
}
