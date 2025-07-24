const CareersPage = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full-Time",
      location: "Remote",
      id: 1,
    },
    { title: "UI/UX Designer", type: "Contract", location: "India", id: 2 },
    { title: "Project Manager", type: "Full-Time", location: "USA", id: 3 },
  ]

  const perks = [
    { icon: "💻", title: "Remote Friendly" },
    { icon: "📚", title: "Learning Budget" },
    { icon: "🕒", title: "Flexible Hours" },
    { icon: "🏖️", title: "Paid Vacations" },
    { icon: "🚀", title: "Startup Culture" },
    { icon: "❤️", title: "Wellness Stipend" },
  ]

  const faqs = [
    {
      q: "Do you support remote roles?",
      a: "Yes, most of our roles are fully remote.",
    },
    {
      q: "What’s the interview process?",
      a: "2 rounds: technical + culture fit discussion.",
    },
    { q: "Do I need a degree?", a: "No. We value skill over degrees." },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-28">
      {/* Hero */}
      <section className="relative text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            We’re on a mission to build the future. Come help us shape it.
          </p>
          <a
            href="#openings"
            className="bg-white text-blue-600 px-6 py-2 rounded font-semibold"
          >
            View Open Positions
          </a>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
      </section>

      {/* Culture Overview */}
      <section className="grid md:grid-cols-2 items-center gap-10">
        <img
          src="/team-culture.jpg"
          alt="Team Culture"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Work That Matters</h2>
          <p className="text-gray-600 mb-4">
            We foster creativity, value innovation, and encourage everyone to be
            their authentic selves.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Flat hierarchy</li>
            <li>Monthly hackathons</li>
            <li>Global team with local autonomy</li>
          </ul>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Open Positions
        </h2>
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-md p-6 shadow-sm hover:shadow transition"
            >
              <h3 className="text-xl font-bold">{job.title}</h3>
              <div className="text-sm text-gray-500">
                {job.type} · {job.location}
              </div>
              <a href="#" className="text-blue-600 mt-2 inline-block">
                Apply →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">
          Perks & Benefits
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-lg shadow-sm text-center"
            >
              <div className="text-3xl mb-2">{perk.icon}</div>
              <h4 className="text-lg font-semibold text-blue-700">
                {perk.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-100 p-10 rounded-lg text-center max-w-3xl mx-auto">
        <blockquote className="italic text-lg text-gray-700">
          “This company changed the way I think about work-life balance. The
          team is supportive and inspiring.”
        </blockquote>
        <p className="mt-4 font-semibold">— Rahul Nair, Senior Engineer</p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="bg-white border rounded-md p-4 shadow-sm"
            >
              <summary className="font-semibold cursor-pointer">
                {faq.q}
              </summary>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white p-10 text-center rounded-md">
        <h2 className="text-3xl font-bold mb-2">Ready to make an impact?</h2>
        <p className="mb-6">
          Join us and shape the future of innovation with your skills.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-2 rounded font-medium"
        >
          Get in Touch
        </a>
      </section>
    </main>
  )
}

export default CareersPage
