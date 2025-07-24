import React from "react"

const AlternativeCaseStudyPage = () => {
  const processSteps = [
    "Discovery & Research",
    "Wireframing & Design",
    "Development",
    "Launch & Feedback",
  ]

  const highlights = [
    { title: "35% Increase", desc: "in user retention" },
    { title: "2x Faster", desc: "load times than old site" },
    { title: "98% Satisfaction", desc: "from client feedback" },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Intro */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Acme Redesign Case Study</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A full UI/UX revamp of Acme Corp’s platform to enhance user
          experience, performance, and accessibility.
        </p>
        <img
          src="/project-banner.jpg"
          alt="Project"
          className="w-full h-auto mt-6 rounded-lg shadow-md"
        />
      </section>

      {/* Project Stats */}
      <section className="grid sm:grid-cols-3 gap-6 text-center">
        {highlights.map((item, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded shadow-sm">
            <h3 className="text-2xl font-bold text-blue-600">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Timeline</h2>
        <ul className="border-l-4 border-blue-600 pl-6 space-y-4">
          <li>
            <span className="block font-medium">Jan 2025:</span> Project Kickoff
          </li>
          <li>
            <span className="block font-medium">Feb 2025:</span> Design Phase
            Completed
          </li>
          <li>
            <span className="block font-medium">Mar 2025:</span> Development &
            QA
          </li>
          <li>
            <span className="block font-medium">Apr 2025:</span> Launch
          </li>
        </ul>
      </section>

      {/* Process Steps */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Our Approach</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded border shadow hover:shadow-lg transition"
            >
              <h4 className="font-medium text-blue-600 mb-2">Step {i + 1}</h4>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Solutions Implemented</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Redesigned the dashboard UX with better usability</li>
          <li>Integrated modern design system and color palette</li>
          <li>Used React, Tailwind, and performance optimization tools</li>
        </ul>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-100 p-6 rounded-lg text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <p className="italic text-gray-700">
            “The new interface has transformed our operations. Our users love
            it, and the team delivered beyond expectations!”
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <img
              src="/client-avatar.jpg"
              alt="Client"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold">John Smith</p>
              <p className="text-sm text-gray-500">CEO, Acme Corp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Let’s Work Together
        </a>
      </section>
    </main>
  )
}

export default AlternativeCaseStudyPage

/* 
Responsive grid layout (1 → 2 → 3+)

Card-based design

Sections with different structure: hero, timeline, team, FAQ

Use of spacing, shadow, border, radius, hover states

map and Array.from() with dummy data

Good use of color contrast and component flow
*/
