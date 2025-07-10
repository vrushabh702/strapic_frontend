import { fetchBlogsSorted } from "../api/fetchFunctions"

export default async function BlogsPages() {
  const response = await fetchBlogsSorted()
  const blogs = response?.data || []
  console.log(response)

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
