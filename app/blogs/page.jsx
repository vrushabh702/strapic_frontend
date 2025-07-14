"use client"
import fetchProductManagement from "@/libs/content"
import { fetchBlogsSorted } from "../api/fetchFunctions"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function BlogsPages() {
  const [blogsContent, setBlogsContent] = useState([])

  useEffect(() => {
    async function loadData() {
      const blogs = await fetchProductManagement()
      console.log("blogs", blogs.blogsContent)
      setBlogsContent(blogs.blogsContent)
    }
    loadData()
  }, [])

  const AUTHOR = blogsContent.author
  const CATEGORIES = blogsContent.category_2s
  const IMAGES = blogsContent?.image?.formats?.medium?.url
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      {blogsContent.length === 0 ? (
        <p>No data found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example static blog card */}
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-gray-500 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={`http://localhost:1337` + IMAGES}
                alt="Blog cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {blogsContent.title} {i + 1}
                </h2>
                {CATEGORIES.map((value, index) => (
                  <p key={index} className="text-sm text-gray-800 mb-1">
                    Category:{value.categories}{" "}
                  </p>
                ))}
                <Link
                  href={`/authors/${AUTHOR.author_name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-sm text-gray-800 mb-3 block"
                >
                  Author: {AUTHOR.author_name}
                </Link>

                <p className="text-gray-800 mb-4">{AUTHOR.description}</p>
                <a
                  href={blogsContent.slug}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
