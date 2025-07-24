"use client"

import fetchCaseStudies from "@/libs/join"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
// import fetchCaseStudies from "@/libs/strapic"
import { useEffect, useState } from "react"

export default function caseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState([])
  useEffect(() => {
    async function loadData() {
      const caseStudiesList = await fetchCaseStudies()
      console.log("data indisde page", caseStudiesList)
      setCaseStudies(caseStudiesList)
    }
    loadData()
  }, [])

  console.log("caseStudies", caseStudies)
  return (
    <>
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
        {caseStudies.length === 0 ? (
          <p className="text-center text-slate-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-slate-100 shadow-md border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <p className="text-indigo-500 text-lg font-medium mb-2">
                  Categrory : {caseStudy.category}
                </p>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {caseStudy.title}
                </h2>

                <p className="text-slate-500 my-3">{caseStudy.description}</p>
                {caseStudy.image && (
                  <img
                    src={`${caseStudy.image}`}
                    alt={caseStudies.title}
                    onError={(e) => {
                      e.currentTarget.src = "/media/no-image.png"
                    }}
                    height={400}
                    width={400}
                    className="w-full h-auto rounded-lg mt-4"
                  />
                )}
                <div className="mt-6">
                  <a
                    href={caseStudy.button_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-6 border border-teal-600 text-teal-600 font-semibold rounded-full bg-blue-50/20 backdrop-blur-sm hover:bg-teal-600 hover:text-white hover:shadow-lg transition-all duration-300"
                  >
                    View More
                    <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
