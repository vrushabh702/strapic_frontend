import fetchProductManagement from "@/libs/content"
import { fetchBlogsSorted } from "../api/fetchFunctions"
import Link from "next/link"

export default async function BlogsPages() {
  // const [blogsContent, setBlogsContent] = useState([])

  // useEffect(() => {
  //   async function loadData() {
  //     const blogs = await fetchProductManagement()
  //     console.log("blogs", blogs.blogsContent)
  //     setBlogsContent(blogs.blogsContent)
  //   }
  //   loadData()
  // }, [])

  // const AUTHOR = blogsContent.authors[0]
  // const CATEGORIES = blogsContent.category_2s
  // const IMAGES = blogsContent?.image?.formats?.medium?.url
  const blogs = await fetchProductManagement()
  const blogsContent = blogs.blogsContent

  const AUTHOR = Array.isArray(blogsContent.authors)
    ? blogsContent.authors[0]
    : blogsContent.authors

  const CATEGORIES = blogsContent.category_2s || []
  const IMAGES = blogsContent?.image?.formats?.medium?.url

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center mt-5">Blogs</h1>
      {blogsContent.length === 0 ? (
        <p>No data found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {/* Example static blog card */}
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-gray-500 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={`http://localhost:1337` + IMAGES}
                alt="Blog cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 ">
                <div className="flex gap-4">
                  {CATEGORIES.map((value, index) => (
                    <div key={index}>
                      <Link
                        href={`/category/${value.categories.toLowerCase()}`}
                        className="text-base font-bo text-gray-800 mb-1"
                      >
                        {value.categories}{" "}
                      </Link>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/authors/${AUTHOR.author_name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-sm text-gray-800 mb-3 block"
                >
                  Author: {AUTHOR.author_name}
                </Link>

                {/* <p className="text-gray-800 mb-4">{AUTHOR.description}</p> */}
                <h2 className="text-xl font-semibold mb-2">
                  {blogsContent.title} {i + 1}
                </h2>
                <a
                  href={`/blogs/${blogsContent.slug}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
