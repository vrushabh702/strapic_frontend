import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import fetchProductManagement from "@/libs/content"

export default async function AuthorPage({ params }) {
  const BLOGS = await fetchProductManagement()
  const AUTHOR_DATA = BLOGS.authorsData
  console.log("AUTHOR_DATA", AUTHOR_DATA)

  const CURRENT_AUTHORS = AUTHOR_DATA.find(
    (author) => author.slug === params.slug
  )

  if (!CURRENT_AUTHORS) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          <Image
            src={`http://localhost:1337${CURRENT_AUTHORS.image.formats.large.url}`}
            alt={CURRENT_AUTHORS.author_name}
            width={200}
            height={200}
            className="rounded-full object-cover mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">
            {CURRENT_AUTHORS.author_name}
          </h1>
          <p className="text-lg text-gray-600">
            {CURRENT_AUTHORS.author_designation}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {CURRENT_AUTHORS.expertise}
          </p>
          <p className="text-gray-700 mt-4 text-center">
            {CURRENT_AUTHORS.description}
          </p>
          <div className="flex space-x-4 mt-6">
            <Link
              href={CURRENT_AUTHORS.button_url}
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              {CURRENT_AUTHORS.button_text}
            </Link>
            <Link
              href={CURRENT_AUTHORS.linkedin}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              LinkedIn
            </Link>
            <a
              href={`mailto:${CURRENT_AUTHORS.mail}`}
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
