"use client"
import fetchProductManagement from "@/libs/content"
import { notFound } from "next/navigation"
import { use, useEffect, useState } from "react"

export default function PortfolioSlugPage({ params: paramsPromise }) {
  const [productManagement, setProductManagement] = useState([])
  const [currentService, setCurrentService] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const params = use(paramsPromise)

  useEffect(() => {
    async function loadData() {
      try {
        const productManagementContent = await fetchProductManagement()
        console.log(
          "productManagementContent",
          productManagementContent.dynamicServices
        )
        console.log("params.slug", params.slug)
        console.log(
          "constructed slug for comparison",
          `/portfolio/${params.slug}/`
        )
        console.log(
          "API slugs",
          productManagementContent.dynamicServices.map((s) => s.slug)
        )

        setProductManagement(productManagementContent.dynamicServices[0])
        const matchedService = productManagementContent.dynamicServices.find(
          (service) => {
            // const isMatch = service.slug === `/${params.slug}`
            const isMatch = service.slug === `/portfolio/${params.slug}/`
            console.log(
              `Comparing service.slug: "${service.slug}" with "/portfolio/${params.slug}/" -> Match: ${isMatch}`
            )
            return isMatch
          }
        )
        console.log("matchedService", matchedService)
        setCurrentService(matchedService)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        isLoading(false)
      }
    }
    loadData()
  }, [params.slug])

  // const data = portfolioData[params.slug]
  if (isLoading) {
    return <p className="text-center text-slate-500">Loading...</p>
  }

  if (!currentService) {
    notFound() // If slug doesn't exist, show 404
  }

  const page_slug = productManagement.slug
  const title = productManagement.title
  const HERO = productManagement.content[0]
  const OVERVIEW = productManagement.content[1]
  const GOALS = productManagement.content[2]
  const SOLUTION = productManagement.content[3]
  const RESULT = productManagement.content[4]
  const IMAGE = productManagement.content[5]
  const CONCLUSION = productManagement.content[6]

  console.log("productManagement", productManagement)
  console.log("HERO", HERO)

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
          <h2 className="text-3xl font-semibold">{SOLUTION.heading}</h2>
          <p className="text-gray-300 max-w-3xl">
            {SOLUTION.paragraphs[0].paragraph[0].children[0].text}
          </p>
          <h3 className="text-2xl font-semibold">{"Core Features"}</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTION.solutionCards.map((value, index) => (
              <div
                key={index}
                className="p-4 border rounded flex items-center justify-center"
              >
                <div className="border-2 rounded-full p-4 me-5">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium">{value.heading}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">{RESULT.heading}</h2>

          <p className="text-gray-300 max-w-3xl">{RESULT.paragraph}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {RESULT.result_cards.map((r, i) => (
              <div key={i} className="p-4 border rounded">
                <div className="p-4 mb-5 border">
                  <h4 className="font-medium">{r.heading}</h4>
                </div>
                <p className="text-gray-300">{r.description}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {IMAGE.imageGallery.map((v, i) => (
            <img
              key={i}
              src={`http://localhost:1337${v.formats.large.url}`}
              alt={`Gallery ${v.name}`}
              className="w-full h-auto rounded-md shadow-sm"
            />
          ))}
        </section>

        <section
          id="cta"
          className="grid md:grid-cols-2 gap-8 items-center  p-8 rounded-md"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{CONCLUSION.heading}</h2>
            <p className="text-gray-200">{CONCLUSION.paragraph}</p>
            <a
              href={CONCLUSION.button_slug}
              className="inline-block bg-green-600 text-white py-2 px-4 rounded"
            >
              {CONCLUSION.button_text}
            </a>
          </div>
          <div className="space-y-4">
            <div className="space-y-4 bg-indigo-900 p-10 border rounded-3xl">
              <h3 className="text-xl font-medium">
                {CONCLUSION.testimonial_heading}
              </h3>
              <p className="text-gray-200 italic">
                {CONCLUSION.testimonial_description}
              </p>
              <span>------------</span>
              <div className="p-3 space-y-1 bg-teal-800">
                <p className="font-semibold">{CONCLUSION.testimonial_name}</p>
                <p className="font-medium">{CONCLUSION.testimonial_area}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
