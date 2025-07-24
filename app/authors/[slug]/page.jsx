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
    <div className="bg-[#011627] py-12 px-4 md:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        <span className="text-teal-400">AUTHOR'S </span>
        <span className="text-white">PROFILE</span>
      </h2>

      <div className="bg-gradient-to-br from-[#041d33] to-[#033a64] rounded-xl p-6 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 text-white">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src={`http://localhost:1337${CURRENT_AUTHORS.image.formats.large.url}`}
            alt={CURRENT_AUTHORS.author_name}
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold">
              {CURRENT_AUTHORS.author_name}
            </h3>
            <p className="text-lg font-medium text-gray-300 mt-1">
              {CURRENT_AUTHORS.author_designation}
            </p>
            {/* <p className="italic text-sm text-teal-300 mt-1">
              {CURRENT_AUTHORS.author_designation}
            </p> */}
            <p className="text-gray-200 mt-4 leading-relaxed">
              {CURRENT_AUTHORS.expertise}
            </p>
            <p className="text-gray-200 mt-4 leading-relaxed">
              {CURRENT_AUTHORS.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {/* LinkedIn */}
            {CURRENT_AUTHORS.linkedin && (
              <Link
                href={CURRENT_AUTHORS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#011627] hover:bg-[#022e4a] p-2 rounded-md text-lg"
              >
                {/* <FaLinkedin /> */} li
              </Link>
            )}
            {/* Email */}
            {CURRENT_AUTHORS.mail && (
              <a
                href={`mailto:${CURRENT_AUTHORS.mail}`}
                className="text-white bg-[#011627] hover:bg-[#022e4a] p-2 rounded-md text-lg"
              >
                {/* <FaEnvelope /> */} ma
              </a>
            )}
            {/* CTA Button */}
            {CURRENT_AUTHORS.button_url && (
              <Link
                href={CURRENT_AUTHORS.button_url}
                className="ml-auto px-6 py-2 border-2 border-teal-400 text-teal-300 rounded-full hover:bg-teal-400 hover:text-[#011627] transition font-medium"
              >
                {CURRENT_AUTHORS.button_text || "Talk to Experts"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
