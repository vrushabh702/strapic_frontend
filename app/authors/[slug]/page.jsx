import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import fetchProductManagement from "@/libs/content"

export default async function AuthorPage({ params }) {
  const BLOGS = await fetchProductManagement()
  const AUTHORS = BLOGS.blogsContent.authors[0]
  console.log("AUTHORS", AUTHORS)
  // const author = AUTHORS.find((a) => a.slug === params.slug)

  if (!AUTHORS || AUTHORS.slug !== params.slug) {
    console.log("not found")
    console.log("not found authors", AUTHORS)
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          {/* <Image
            src={AUTHORS.image}
            alt={AUTHORS.author_name}
            width={200}
            height={200}
            className="rounded-full object-cover mb-4"
          /> */}
          <h1 className="text-3xl font-bold text-gray-800">
            {AUTHORS.author_name}
          </h1>
          <p className="text-lg text-gray-600">{AUTHORS.author_designation}</p>
          <p className="text-sm text-gray-500 mt-1">{AUTHORS.expertise}</p>
          <p className="text-gray-700 mt-4 text-center">
            {AUTHORS.description}
          </p>
          <div className="flex space-x-4 mt-6">
            <Link
              href={AUTHORS.button_url}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {AUTHORS.button_text}
            </Link>
            <Link
              href={AUTHORS.linkedin}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              LinkedIn
            </Link>
            <a
              href={`mailto:${AUTHORS.mail}`}
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
