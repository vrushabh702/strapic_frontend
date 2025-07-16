"use client"

import { useEffect } from "react"

export default function SeoData() {
  useEffect(() => {
    fetch("/api/seo-metavalue")
      .then((res) => res.json())
      // .then(data => console.log(data))
      .catch((err) => console.error(err))
  }, [])

  return <div></div>
}
