"use client"
const AboutUsPage = () => {
  const stats = [
    { label: "Founded", value: "2019" },
    { label: "Team Size", value: "36+" },
    { label: "Clients", value: "120+" },
    { label: "Offices", value: "3 Global" },
  ]

  const timeline = [
    {
      year: "2019",
      text: "Founded in a tiny apartment with 2 people.",
      img: "/journey-1.jpg",
    },
    {
      year: "2020",
      text: "Launched MVP and onboarded first 10 clients.",
      img: "/journey-2.jpg",
    },
    {
      year: "2021",
      text: "Secured seed funding and grew to 15 employees.",
      img: "/journey-3.jpg",
    },
    {
      year: "2024",
      text: "Expanded globally with 3 offices worldwide.",
      img: "/journey-4.jpg",
    },
  ]

  const features = [
    "Customer-First Mindset",
    "Agile Development Process",
    "Award-Winning Design",
    "Transparent Pricing",
  ]

  const team = Array.from({ length: 6 }).map((_, i) => ({
    name: `Alex ${i + 1}`,
    role: i % 2 === 0 ? "Developer" : "Designer",
    img: `/team-${i + 1}.jpg`,
  }))

  const culture = [
    "Flexible Schedules",
    "Hackathon Weekends",
    "Fully Remote",
    "Personal Growth Stipend",
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
          <p className="text-gray-600 text-lg">
            We believe in building exceptional digital products that connect
            people and empower businesses.
          </p>
        </div>
        <img
          src="/hero-office.jpg"
          alt="Our office"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="bg-blue-50 py-6 px-4 rounded shadow">
            <div className="text-2xl font-bold text-blue-800">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Timeline + image beside each */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Journey</h2>
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-6 items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={item.img}
                alt={item.year}
                className="rounded-lg shadow w-full h-auto"
              />
              <div>
                <h3 className="text-blue-600 font-semibold text-xl">
                  {item.year}
                </h3>
                <p className="text-gray-700 text-lg mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg p-6 flex items-center gap-4 shadow-sm"
            >
              <div className="bg-blue-100 p-3 rounded-full">✅</div>
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.src = "/no-user.png")}
                />
              </div>
              <div className="font-semibold">{member.name}</div>
              <div className="text-sm text-gray-500">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Culture</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {culture.map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 text-blue-900 p-5 rounded shadow-sm text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-100 p-10 rounded-lg shadow text-center max-w-3xl mx-auto">
        <blockquote className="italic text-lg text-gray-700">
          “This team didn’t just meet our expectations — they exceeded them.
          Incredible collaboration and craftsmanship.”
        </blockquote>
        <p className="mt-4 font-semibold">— Priya Desai, CEO @ StartupX</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center p-10 rounded-md">
        <h2 className="text-3xl font-bold mb-2">
          Let’s Build Something Great Together
        </h2>
        <p className="mb-6">
          Join us on our journey to create impactful products.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-2 rounded font-medium"
        >
          Contact Us
        </a>
      </section>
    </main>
  )
}

export default AboutUsPage
