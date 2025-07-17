import RecentPostsSidebar from "@/components/common/RecentPostsSidebar"
import fetchProductManagement from "@/libs/content"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function IndividualBlog({ params }) {
  console.log("params", params?.slug)

  const BLOG = await fetchProductManagement()
  const INDIVIDUALBLOG = BLOG.IndividualBlogs

  const AUTHOR_NAME = INDIVIDUALBLOG[0].blogs[0].authors[0].author_name
  const PUBLISHED_DATE = INDIVIDUALBLOG[0].blogs[0].publishedAt
  const BLOG_TITLE = INDIVIDUALBLOG[0].blogs[0].title
  const BLOG_SLUG = INDIVIDUALBLOG[0].blogs[0].slug
  const BLOG_DATA = INDIVIDUALBLOG[0].list_block

  console.log("BLOG_DATA", BLOG_DATA)

  if (BLOG_SLUG !== "/" + params.slug + "/") {
    notFound()
  }

  console.log("INDIVIDUALBLOG", INDIVIDUALBLOG[0])
  return (
    <>
      <section className="bg-[#011627] text-white py-20 px-4 relative bg-grid">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-wide">
            {BLOG_TITLE}
          </h1>
          <div className="flex justify-center gap-6 text-sm text-white items-center">
            <div className=" flex items-center gap-2">
              <Image
                src={"/svg/blog/author.svg"}
                height={20}
                width={20}
                alt="author"
                priority
              />
              <Link
                href={`/authors/${AUTHOR_NAME.toLowerCase().replace(
                  /\s+/g,
                  "-"
                )}`}
              >
                <span> {AUTHOR_NAME} </span>
              </Link>
            </div>
            <div className=" flex items-center gap-2">
              <Image
                src={"/svg/blog/calender.svg"}
                height={19}
                width={19}
                alt="author"
                priority
              />
              {PUBLISHED_DATE}
            </div>
          </div>

          <button className="mt-4 text-white border-2 border-teal-400 rounded-full px-10 py-4 hover:bg-teal-500 transition-all duration-200 cursor-pointer ">
            Talk To an Expert
          </button>
        </div>

        <button className="mt-4"></button>
      </section>

      <div className="min-h-screen bg-[#011627] text-white px-4 py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-0">
            {BLOG_DATA.map((company) => (
              <div
                key={company.id}
                className="bg-[#041d33] text-white p-6 rounded-lg shadow-lg max-w-3xl   mx-auto space-y-4"
              >
                <h2 className="text-2xl font-bold">
                  {company.blogListHeading.heading}
                </h2>
                <div className="border-t border-gray-500" />

                <ul className="space-y-2 text-sm">
                  {company.blogList.map((item) => {
                    const [label, ...rest] = item.list.split(":")
                    const value = rest.join(":").trim()

                    const isReview = label.includes("Reviews")
                    const isWebsite = label.includes("Website")
                    const isHighlight = isReview && value

                    return (
                      <li key={item.id}>
                        <span className="font-semibold">{label.trim()} : </span>

                        {isWebsite ? (
                          <Link
                            href={`https://${value.replace(/^http?:\/\//, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={isWebsite ? "text-teal-400" : ""}
                          >
                            {value}
                          </Link>
                        ) : (
                          <span
                            className={isHighlight ? "text-yellow-400" : ""}
                          >
                            {value}
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </section>

          <aside className="hidden lg:block sticky top-20 h-fit">
            <RecentPostsSidebar />
          </aside>
        </div>
      </div>
    </>
  )
}
