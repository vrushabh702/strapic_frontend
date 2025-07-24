const MarketingHomePage = () => {
  const features = [
    "AI-powered Analytics",
    "Cross-platform Support",
    "One-click Automation",
    "Custom Dashboards",
  ]

  const pricing = [
    {
      title: "Starter",
      price: "$29/mo",
      features: ["1 Project", "Email Support", "Basic Reports"],
    },
    {
      title: "Pro",
      price: "$79/mo",
      features: ["10 Projects", "Priority Support", "Advanced Reports"],
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: ["Unlimited Projects", "Dedicated Manager", "All Features"],
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Grow Your Business Faster</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform helps you streamline operations, gain insights, and stay
          ahead of the competition.
        </p>
        <div className="space-x-4">
          <a
            className="bg-blue-600 text-white px-6 py-3 rounded"
            href="/signup"
          >
            Get Started
          </a>
          <a className="underline text-blue-600" href="/demo">
            Watch Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-medium text-lg">{f}</h4>
              <p className="text-gray-600 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="text-gray-700">
            With years of experience and a passion for innovation, we’ve helped
            1000+ clients transform their digital presence.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Trusted by Fortune 500s</li>
            <li>Fast, scalable & secure</li>
            <li>24/7 expert support</li>
          </ul>
        </div>
        <div className="bg-gray-200 w-full aspect-video rounded-lg" />
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          What Our Clients Say
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="italic text-gray-600">
                “This product helped us double our revenue. Highly recommend!”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-medium">Client {i + 1}</p>
                  <p className="text-xs text-gray-500">CEO, Company</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Pricing Plans</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {pricing.map((plan, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 text-center space-y-4 shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold">{plan.title}</h4>
              <p className="text-2xl font-bold">{plan.price}</p>
              <ul className="text-gray-600 text-sm space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <a
                href="/signup"
                className="block bg-blue-600 text-white py-2 mt-4 rounded"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded shadow-sm">
              <div className="w-full h-40 bg-gray-300 rounded mb-4" />
              <h4 className="font-semibold text-lg">Blog Title {i + 1}</h4>
              <p className="text-gray-600 text-sm">
                A short intro or preview of the blog content. Lorem ipsum dolor
                sit amet.
              </p>
              <a
                href="/blog/post"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white p-12 rounded-lg text-center space-y-4">
        <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Sign up now and get full access to all premium tools and features for
          14 days — no credit card needed!
        </p>
        <a
          href="/signup"
          className="inline-block bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Get Started for Free
        </a>
      </section>
    </main>
  )
}

export default MarketingHomePage

/* 
This layout teaches:
Hero section layout + CTA

Mapping features, pricing, blog cards

Clean testimonial + avatar layout

Custom pricing grids with borders

Background usage, button variants

Empty states you can fill later


*/
