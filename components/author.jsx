import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import fetchProductManagement from "@/libs/content"

const authors = [
  {
    id: 2,
    slug: "sanket-rajodiya",
    author_name: "Sanket Rajodiya",
    author_designation: "Co-Founder & Managing Partner",
    expertise: "Business Strategy | Client Relations | Growth Strategy",
    button_text: "Talk to Experts",
    button_url: "https://calendly.com/appeak-technologies/30min",
    linkedin: "https://www.linkedin.com/in/sanket-rajodiya-8ba50798/",
    mail: "sanketrajodiya@gmail.com",
    createdAt: "2025-07-09T05:15:54.066Z",
    updatedAt: "2025-07-09T05:15:54.066Z",
    publishedAt: "2025-07-09T05:15:54.082Z",
    description:
      "With a strong focus on business development and operational excellence, Sanket leads the company’s strategic direction and client partnerships. Passionate about delivering real business value through technology, he oversees sales, marketing, project oversight, and team building. His goal is simple: to ensure every client experience is smooth, successful, and scalable.",
    image: "/images/sanket-rajodiya.jpg", // Replace with actual image path
  },
  {
    id: 3,
    slug: "hinshu-varma",
    author_name: "Hinshu Varma",
    author_designation: "Lead Developer",
    expertise: "Software Development | System Architecture | Innovation",
    button_text: "Connect Now",
    button_url: "https://calendly.com/appeak-technologies/30min",
    linkedin: "https://www.linkedin.com/in/hinshu-varma/",
    mail: "hinshuvarma@gmail.com",
    createdAt: "2025-07-09T05:15:54.066Z",
    updatedAt: "2025-07-09T05:15:54.066Z",
    publishedAt: "2025-07-09T05:15:54.082Z",
    description:
      "Hinshu is a passionate developer with a knack for building scalable and innovative solutions. Leading the technical team, he ensures high-quality code and cutting-edge system designs that drive business success.",
    image: "/images/hinshu-varma.jpg", // Replace with actual image path
  },
]

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }))
}

export default function AuthorPage({ params }) {
  const { slug } = params
  const author = authors.find((a) => a.slug === slug)

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
