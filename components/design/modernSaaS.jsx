const ModernSaaSService = () => {
  const features = [
    "Seamless Onboarding",
    "Real-time Collaboration",
    "Analytics Dashboard",
    "Secure API Integrations",
  ]

  const teamMembers = ["Alice", "Bob", "Charlie", "Diana", "Eva", "Frank"]

  const faqs = [
    "What is this project about?",
    "How long did it take?",
    "What technologies were used?",
    "Can I see more examples?",
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <p className="text-sm text-gray-500">Case Study / Highlight</p>
        <h1 className="text-4xl font-bold">
          Boosting Productivity with FlowSuite
        </h1>
        <p className="max-w-xl mx-auto text-gray-600">
          We transformed how teams work by building a faster, smarter, and more
          scalable project platform.
        </p>
        <div className="mt-6">
          <a
            href="/get-started"
            className="bg-blue-600 text-white py-2 px-4 rounded shadow"
          >
            View Live Project
          </a>
        </div>
      </section>

      {/* Media Banner */}
      <section className="w-full">
        <img
          src="/project-mockup.jpg"
          alt="Mockup"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </section>

      {/* Feature Highlights */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Core Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded shadow-sm">
              <h4 className="font-semibold text-lg">{feature}</h4>
              <p className="text-gray-700 mt-2">
                Placeholder content describing the feature. It’s powerful and
                easy to use.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Development Phases</h2>
        <ol className="relative border-l border-blue-300 pl-6 space-y-6">
          {[
            "Research & Ideation",
            "Wireframes & UX",
            "Full UI Design",
            "Development Sprint",
            "Testing & QA",
            "Final Launch",
          ].map((phase, i) => (
            <li key={i} className="ml-2">
              <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white" />
              <h4 className="font-semibold text-blue-700">{phase}</h4>
              <p className="text-sm text-gray-600">
                Details about this stage go here.
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* About Project */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">About the Project</h2>
          <p className="text-gray-700">
            The idea behind FlowSuite was to centralize task management, improve
            team communication, and streamline reporting.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Custom-built React UI</li>
            <li>Real-time WebSocket-based chat</li>
            <li>Role-based access control</li>
          </ul>
        </div>
        <img
          src="/about-project.jpg"
          alt="Project Overview"
          className="rounded-lg shadow"
        />
      </section>

      {/* Team Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Meet the Team</h2>
        <div className="grid sm:grid-cols-3 md:grid-cols-6 gap-4">
          {teamMembers.map((name, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full" />
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-gray-500">Role TBD</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((q, i) => (
            <details key={i} className="bg-gray-100 p-4 rounded shadow-sm">
              <summary className="font-medium cursor-pointer">{q}</summary>
              <p className="mt-2 text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et euismod nulla.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="bg-blue-700 text-white text-center p-10 rounded-lg space-y-4">
        <h2 className="text-3xl font-bold">
          Let’s Build Something Great Together
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto">
          This case study is just one example of what we can achieve. Ready to
          start your own project?
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-medium py-2 px-6 rounded"
        >
          Contact Us
        </a>
      </section>
    </main>
  )
}

export default ModernSaaSService
