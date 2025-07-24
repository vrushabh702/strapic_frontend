import React from "react"

export default function CreativeLandingPage() {
  return (
    <main className="text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Design Beyond the Ordinary
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore a creative playground of layouts, effects, and components
            that make websites feel alive.
          </p>
          <a
            href="#features"
            className="inline-block bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition"
          >
            Get Inspired
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Designers Love This</h2>
          <p className="text-lg text-gray-600">
            Carefully crafted sections for modern landing pages and portfolios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "Creative Layouts",
              desc: "Break the grid with offset sections and playful composition.",
              icon: "🎨",
            },
            {
              title: "Gradient Magic",
              desc: "Layered gradients and spot effects add modern depth.",
              icon: "🌈",
            },
            {
              title: "Dynamic Components",
              desc: "Reusable components that work with any theme.",
              icon: "⚙️",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Featured Layouts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of visually stunning design blocks you can remix.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
            >
              <img
                src={`/mockup-${n}.jpg`}
                alt={`Showcase ${n}`}
                className="w-full h-auto"
              />
              <div className="p-6 bg-gray-100">
                <h3 className="text-xl font-semibold">Layout Example {n}</h3>
                <p className="text-gray-600">
                  A clean and flexible layout block with gradient enhancements.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-fuchsia-600 to-red-500 text-white text-center">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Beautiful?</h2>
          <p className="text-lg mb-6">
            Get access to a library of Tailwind templates, layouts, and effects
            that inspire and convert.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-opacity-90"
          >
            Start Designing
          </a>
        </div>
      </section>
    </main>
  )
}
