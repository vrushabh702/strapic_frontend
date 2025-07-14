import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import fetchProductManagement from "@/libs/content"

// Mock author data (replace with your actual data fetching logic)

// export async function getServerSideProps({ params }) {
//   const blogs = await fetchProductManagement()
//   const authors = blogs.blogContent.author

//   const author = authors.find((a) => a.slug === params.slug)
//   if (!author) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: {
//       author,
//     },
//   }
// }

export default async function AuthorPage({ params }) {
  const blogs = await fetchProductManagement()
  const authors = blogs.blogsContent.author
  // console.log("authors", authors)
  console.log(
    "authors type:",
    typeof authors,
    Array.isArray(authors) ? "array" : "not array"
  )

  // const author = authors.find((a) => a.slug === params.slug)
  // const author = authors.find((a) => a.slug === params.slug)
  const author = Object.values(authors).find((a) => a.slug === params.slug)

  if (!author) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          <Image
            src={author.image}
            alt={author.author_name}
            width={200}
            height={200}
            className="rounded-full object-cover mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">
            {author.author_name}
          </h1>
          <p className="text-lg text-gray-600">{author.author_designation}</p>
          <p className="text-sm text-gray-500 mt-1">{author.expertise}</p>
          <p className="text-gray-700 mt-4 text-center">{author.description}</p>
          <div className="flex space-x-4 mt-6">
            <Link
              href={author.button_url}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {author.button_text}
            </Link>
            <Link
              href={author.linkedin}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              LinkedIn
            </Link>
            <a
              href={`mailto:${author.mail}`}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
