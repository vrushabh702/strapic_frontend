"use client"
import fetchProductManagement from "@/libs/content"
import { useEffect, useState } from "react"

export default function DynamicCaseStudies() {
  const [productManagement, setProductManagement] = useState([])
  useEffect(() => {
    async function loadData() {
      const productManagementContent = await fetchProductManagement()
      console.log("productManagementContent", productManagementContent)
      setProductManagement(productManagementContent)
    }
    loadData()
  }, [])
  // Loading or fallback state
  if (!productManagement || !productManagement.content) {
    return <div>Loading...</div>
  }

  // const page_slug = productManagement.slug
  // const title = productManagement.title

  const HERO = productManagement.content[0]
  const OVERVIEW = productManagement.content[1]
  const GOALS = productManagement.content[2]
  // const SOLUTION = productManagement.content[3]
  // const RESULT = productManagement.content[4]
  // const IMAGE = productManagement.content[5]
  // const CONCLUSION = productManagement.content[6]
  console.log("GOALS", GOALS)
  console.log("productManagement", productManagement)

  return (
    <>
      <main className="space-y-20 px-6 py-10 max-w-7xl mx-auto">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <nav className="text-sm text-gray-500">{HERO.breadcrumbs}</nav>
            <h1 className="text-4xl font-bold">{HERO.title}</h1>
            <a
              href="#cta"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded"
            >
              {HERO.button_text}
            </a>
          </div>
          <img
            src={`http://localhost:1337` + HERO.image.formats.large.url}
            alt="Hero"
            className="w-full h-auto rounded-md shadow-md"
          />
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{OVERVIEW.heading}</h2>
            <p className="text-gray-300">
              {OVERVIEW.paragraph[0].children[0].text}
            </p>
            <div className="space-y-2">
              <h3 className="font-medium text-3xl">{OVERVIEW.subheading}</h3>
              <ul className="list-disc list-inside text-gray-300">
                {OVERVIEW.list.map((item) => (
                  <li key={item.id}>{item.list}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-md shadow">
            <h3 className="text-xl font-medium mb-4">
              {OVERVIEW.box_info_heading}
            </h3>
            {/* <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                <strong>Client:</strong> Example Co.
              </li>
              <li>
                <strong>Year:</strong> 2025
              </li>
              <li>
                <strong>Role:</strong> Designer & Developer
              </li>
            </ul> */}
            {OVERVIEW.projectInfo.map((item) => (
              <div key={item.id}>
                <span>{item.title}</span>
                <br />
                <span>{item.content}</span>
                <br />
                <span className="pt-5">-----------------------------</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">{GOALS.heading}</h2>
            <ul className=" list-inside text-gray-300 space-y-1">
              {GOALS.goals_list.map((item) => (
                <div className="flex" key={item.id}>
                  <img
                    className="bg-green-100 text-red-200"
                    height={14}
                    width={14}
                    alt="bullet"
                    src={GOALS.bulletType}
                  ></img>

                  <li>{item.list}</li>
                </div>
              ))}
            </ul>
          </div>
          <img
            src={`http://localhost:1337` + GOALS.image.formats.medium.url}
            alt="Goals"
            className="w-full h-auto rounded-md shadow-md"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Solution Provided</h2>
          <p className="text-gray-300 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h4 className="font-medium">Card Heading 1</h4>
              <p className="text-gray-300">Card paragraph detail.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-medium">Card Heading 2</h4>
              <p className="text-gray-300">Card paragraph detail.</p>
            </div>
            <div className="p-4 border rounded">
              <h4 className="font-medium">Card Heading 3</h4>
              <p className="text-gray-300">Card paragraph detail.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <p className="text-gray-300 max-w-3xl">
            Here are the key results achieved from the project:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Result 1", "Result 2", "Result 3"].map((r, i) => (
              <div key={i} className="p-4 border rounded">
                <h4 className="font-medium">{r}</h4>
                <p className="text-gray-300">
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

/* 
i had created a compoent and dynamicCaseStudies in componet folder 
and a common api in libs for header and content api in libs fethc that content api 


*/
