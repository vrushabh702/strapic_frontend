import fetchProductManagement from "@/libs/content"

export default async function Category({ params }) {
  const BLOGS = await fetchProductManagement()
  const CATEGORIES = BLOGS.category2Data

  // Filter blogs by category
  const FILTEREDBLOGS = CATEGORIES.flatMap((category) =>
    category.blogs.filter((blog) =>
      blog.category_2s.some(
        (cat) => cat.categories.toLowerCase() === params.slug.toLowerCase()
      )
    )
  )

  // Get the first item (assuming all are duplicates)
  const BLOGS_DATA = FILTEREDBLOGS[0] ? [FILTEREDBLOGS[0]] : []

  // Format category name for display
  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {categoryName} Articles
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Latest insights and updates in {categoryName.toLowerCase()}
          </p>
        </div>

        {/* Blog Grid */}
        {BLOGS_DATA.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOGS_DATA.map((blog) => (
              <article
                key={blog.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                {/* Blog Image */}
                <div className="flex-shrink-0 relative h-48 w-full">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={blog.image.url}
                    alt={blog.image.alternativeText || blog.title}
                  />
                </div>

                {/* Blog Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.category_2s.map((category) => (
                        <span
                          key={category.id}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {category.categories}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <a href={blog.slug} className="block mt-2">
                      <h2 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                        {blog.title}
                      </h2>
                    </a>

                    {/* Date */}
                    <div className="mt-2 text-sm text-gray-500">
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

                  {/* Author */}
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">
                        {blog.authors[0].author_name}
                      </span>
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold">
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

                {/* Expert Action */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <a
                    href={blog.slug}
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                  >
                    Read full article →
                  </a>
                  <a
                    href={blog.authors[0].button_url}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {blog.authors[0].button_text}
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No articles found in this category
            </h3>
            <p className="mt-2 text-gray-500">
              We'll be adding new content soon!
            </p>
          </div>
        )}

        {/* Featured Author Section */}
        {BLOGS_DATA.length > 0 && (
          <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Meet Our Expert
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
                <div className="mt-4 flex md:mt-0 md:ml-4">
                  <a
                    href={BLOGS_DATA[0].authors[0].button_url}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {BLOGS_DATA[0].authors[0].button_text}
                  </a>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 text-2xl font-bold">
                      {BLOGS_DATA[0].authors[0].author_name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
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
                  <a
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
                  </a>
                  <a
                    href={`mailto:${BLOGS_DATA[0].authors[0].mail}`}
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
