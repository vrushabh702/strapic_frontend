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
      <h1 className="text-center text-teal-400">Category: {params.slug}</h1>
      {/* Render your filtered blogs here */}
      <div className="min-h-screen bg-[#021d3d] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl front-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
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
            {BLOGS_DATA.map((blog) => {
              console.log("blog console", blog.authors[0].button_text)
              return (
                <article
                  key={blog.id}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl hover:border-teal-400 hover:border-2 hover:cursor-context-menu transition-shadow duration-500 mt-10"
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

                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 ">
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
                        <span className="sr-only text-red-500">
                          {blog.authors[0].author_name}
                        </span>
                        <div className="h-15 w-15 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 text-2xl font-bold">
                          {blog.authors[0].author_name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {blog.authors[0].author_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {blog.authors[0].author_designation}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-4 flex justify-between items-center">
                    <a
                      href={blog.slug}
                      className="text-base font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                      Read full article →
                    </a>

                    <a
                      href={blog.authors[0].button_url}
                      className="inline-flex items-center px-3 py-2.5 border border-transparent text-xs font-medium rounded-full shadow-sn text-slate-200 bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:rings-offset-2 focus:ring-indigo-500 "
                    >
                      {blog.authors[0].button_text}
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 p-5 bg-indigo-400">
              No articles found in this category
            </h3>
            <p className="mt-2 text-gray-500">
              We'll be adding new content soon!!!
              <br />
              Till then Check back later for new content!
            </p>
          </div>
        )}

        {BLOGS_DATA.length > 0 && (
          <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold leading-7 text-slate-600 sm:text-2xl sm:truncate">
                    Meet our Experts
                  </h2>
                  <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      {BLOGS_DATA[0].authors[0].expertise}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex md:mt-4 md:ml-4">
                  <Link
                    href={BLOGS_DATA[0].authors[0].button_url}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {BLOGS_DATA[0].authors[0].button_text}
                  </Link>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-300 pt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-15 w-15 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 text-2xl font-bold">
                      {BLOGS_DATA[0].authors[0].author_name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      {BLOGS_DATA[0].authors[0].author_name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {BLOGS_DATA[0].authors[0].author_designation}
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>{BLOGS_DATA[0].authors[0].description}</p>
                </div>
                <div className="mt-4 flex space-x-4">
                  <Link
                    href={BLOGS_DATA[0].authors[0].linkedin}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                  <Link
                    href={`mailto:$${BLOGS_DATA[0].authors[0].mail}`}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Email</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
