"use client"
import { notFound } from "next/navigation"

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
  const data = portfolioData[params.slug]

  if (!data) {
    notFound() // If slug doesn't exist, show 404
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}
