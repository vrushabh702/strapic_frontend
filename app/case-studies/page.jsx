"use client"

import fetchCaseStudies from "@/libs/strapic"
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

  // console.log("caseStudies", caseStudies)
  return (
    // <div></div>
    <div style={{ padding: "2rem" }}>
      <h1 className="text-7xl">Case Studies</h1>
      {caseStudies.length === 0 && <p>Loading...</p>}
      <div>
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            style={{
              border: "1px solid #ddd",
              marginBottom: "1rem",
              padding: "1rem",

              maxWidth: "50%",
            }}
          >
            <h2>{caseStudy.title}</h2>
            <p>{caseStudy.description}</p>
            {caseStudy.image && (
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                style={{ maxWidth: "100%", marginTop: "1rem" }}
              />
            )}
            <a
              href={caseStudy.button_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#0070f3",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
