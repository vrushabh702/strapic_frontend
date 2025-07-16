"use client"
import fetchProductManagement from "@/libs/content"
import { notFound } from "next/navigation"
import { useEffect, useState } from "react"

const portfolioData = {
  "product-information-management": {
    title: "Product Information Management",
    description:
      "This is a detailed explanation about Product Information Management.",
  },
  "other-such-link": {
    title: "Other Such Link",
    description: "Details about another project go here.",
  },
}

export default function PortfolioSlugPage({ params }) {
  const [productManagement, setProductManagement] = useState([])
  useEffect(() => {
    async function loadData() {
      const productManagementContent = await fetchProductManagement()
      // console.log("productManagementContent", productManagementContent)
      setProductManagement(productManagementContent)
    }
    loadData()
  }, [])
  const data = portfolioData[params.slug]

  if (!data) {
    notFound() // If slug doesn't exist, show 404
  }

  return (
    <>
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <main className="space-y-20 px-6 py-10 max-w-7xl mx-auto">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <nav className="text-sm text-gray-500">
              Home / Projects / Current
            </nav>
            <h1 className="text-4xl font-bold">Project Title</h1>
            <a
              href="/dynamic-content"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded"
            >
              Call to Action
            </a>
          </div>
          <img
            src="/hero-image.jpg"
            alt="Hero"
            className="w-full h-auto rounded-md shadow-md"
          />
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Overview Heading</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula.
            </p>
            <div className="space-y-2">
              <h3 className="font-medium">Subheading</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>First list item</li>
                <li>Second item</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-md shadow">
            <h3 className="text-xl font-medium mb-4">Project Info</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                <strong>Client:</strong> Example Co.
              </li>
              <li>
                <strong>Year:</strong> 2025
              </li>
              <li>
                <strong>Role:</strong> Designer & Developer
              </li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Key Goals</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Goal One</li>
              <li>Goal Two</li>
              <li>Goal Three</li>
            </ul>
          </div>
          <img
            src="/goals-image.jpg"
            alt="Goals"
            className="w-full h-auto rounded-md shadow-md"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Solution Provided</h2>
          <p className="text-gray-700 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h4 className="font-medium">Card Heading 1</h4>
              <p className="text-gray-700">Card paragraph detail.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-medium">Card Heading 2</h4>
              <p className="text-gray-700">Card paragraph detail.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-medium">Card Heading 3</h4>
              <p className="text-gray-700">Card paragraph detail.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <p className="text-gray-700 max-w-3xl">
            Here are the key results achieved from the project:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Result 1", "Result 2", "Result 3"].map((r, i) => (
              <div key={i} className="p-4 border rounded">
                <h4 className="font-medium">{r}</h4>
                <p className="text-gray-700">
                  Description for {r.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src={`/gallery-${i + 1}.jpg`}
              alt={`Gallery ${i + 1}`}
              className="w-full h-auto rounded-md shadow-sm"
            />
          ))}
        </section>

        <section
          id="cta"
          className="grid md:grid-cols-2 gap-8 items-center  p-8 rounded-md"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Ready to Start?</h2>
            <p className="text-gray-200">
              Contact us for this amazing project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white py-2 px-4 rounded"
            >
              Get in Touch
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">What clients say</h3>
            <p className="text-gray-200 italic">
              “Working with this team has been phenomenal…”
            </p>
            <p className="font-semibold">Jane Doe, Example Inc.</p>
          </div>
        </section>
      </main>
    </>
  )
}
