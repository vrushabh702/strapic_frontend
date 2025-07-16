import fetchProductManagement from "@/libs/content"
import Image from "next/image"
import Link from "next/link"

export default async function Category({ params }) {
  const BLOGS = await fetchProductManagement()
  const CATEGORIES = BLOGS.category2Data

  const FILTEREDBLOGS = CATEGORIES.flatMap((category) =>
    category.blogs.filter((blog) =>
      blog.category_2s.some(
        (cat) => cat.categories.toLowerCase() === params.slug.toLowerCase()
      )
    )
  )
  const BLOGS_DATA = FILTEREDBLOGS[0] ? [FILTEREDBLOGS[0]] : []
  console.log("BLOGS_DATA", BLOGS_DATA)

  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // const UNIQUEBLOGS = [
  //   ...new Map(FILTEREDBLOGS.map((blog) => [blog.id, blog])),
  // ].values()
  // console.log("UNIQUEBLOGS array", UNIQUEBLOGS)

  // const category = (FILTEREDBLOGS.map((value,index)=>(
  //   value.category_2s.map((data,index)=>(
  //     data.categories
  //   ))
  // )))

  // const FILTER_CATEGORIES = FILTEREDBLOGS.flatMap((blog) =>
  //   blog.category_2s.map((category) => category.categories)
  // )

  // const CAT_NAME = UPDATEDFILTERED.category_2s.find(
  //   (category) => category.categories === "E-Commerce"
  // )
  // console.log("CAT_NAME", CAT_NAME)

  return (
    <div>
      <h1 className="text-center">Category: {params.slug}</h1>
      {/* Render your filtered blogs here */}
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl front-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {categoryName} Articles
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Explore our latest insights and updates in Latest insights and
            updates in {categoryName.toLowerCase()}
            {/* {UPDATEDFILTERED.category_2s[0].categories} */}
          </p>
        </div>
        {BLOGS_DATA.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOGS_DATA.map((blog) => (
              <article
                key={blog.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-500"
              >
                <div className="flex-shrink-0 relative h-48 w-full">
                  <Image
                    className="absolute h-full w-full object-cover"
                    src={`http://localhost:1337${blog.image.url}`}
                    alt={blog.image.alternativeText || blog.title}
                    height={700}
                    width={750}
                  />
                </div>

                <div className="mt-5 flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-10">
                      {blog.category_2s.map((category) => (
                        <span
                          key={category.id}
                          className="inline-flex items-center px-3 py-2 rounded-full text-xs font-medium bg-indigo-200 text-indigo-800"
                        >
                          {category.categories}
                        </span>
                      ))}
                    </div>
                    <Link href={blog.slug} className="block mt-2">
                      <h2 className="text-xl font-semibold text-slate-700 hover:text-indigo-500 transition-colors">
                        {blog.title}
                      </h2>
                    </Link>

                    <div className="mt-2 text-sm text-slate-500">
                      <time dateTime={blog.publishedAt}>
                        {new Date(blog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{blog.authors[0].id}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 p-5 bg-indigo-400">
              No articles found in this category
            </h3>
            <p className="mt-2 text-gray-500">
              Check back later for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
