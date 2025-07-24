const ProductDetailPage = () => {
  const features = [
    "High-quality components",
    "Dark mode support",
    "Figma design included",
    "Fully responsive",
  ]

  const related = [
    "UI Kit Pro",
    "UX Bundle",
    "Admin Dashboard",
    "Ecommerce Theme",
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Product Overview */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <img
            src="/product-main.jpg"
            alt="Product Main"
            className="w-full rounded-lg shadow"
          />
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <img
                key={i}
                src={`/thumb-${i + 1}.jpg`}
                alt={`Thumb ${i + 1}`}
                className="w-full h-24 object-cover rounded border"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <nav className="text-sm text-gray-500">Home / Products / UI Kit</nav>
          <h1 className="text-3xl font-bold">UI Kit Essentials</h1>
          <p className="text-gray-700">
            A modern UI Kit for developers and designers. Comes with reusable
            components and complete Figma files.
          </p>
          <p className="text-2xl font-semibold">$49</p>
          <a
            href="/checkout"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Product Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-4 bg-gray-100 rounded shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-medium text-blue-700">{f}</h4>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technical Specifications</h2>
        <details className="bg-gray-100 p-4 rounded shadow-sm">
          <summary className="font-medium cursor-pointer">
            View Full Specs
          </summary>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Built with React 18 + Tailwind 3</li>
            <li>Includes Typescript typings</li>
            <li>Supports dark mode + RTL</li>
            <li>Optimized for performance (Lighthouse 100)</li>
          </ul>
        </details>
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="italic text-gray-700">
                “Amazing product! Helped me ship faster and saved weeks.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-medium">User {i + 1}</p>
                  <p className="text-xs text-gray-500">Frontend Dev</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">You May Also Like</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((title, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded shadow-sm">
              <div className="w-full h-32 bg-gray-300 rounded mb-3" />
              <h4 className="font-medium">{title}</h4>
              <a
                href="/product"
                className="text-blue-600 text-sm mt-1 inline-block"
              >
                View Product →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-blue-700 text-white p-10 rounded-lg text-center space-y-4">
        <h2 className="text-3xl font-bold">Grab the Complete UI Kit Today</h2>
        <p className="text-blue-100 max-w-xl mx-auto">
          Includes 80+ components, multiple layouts, and free lifetime updates.
        </p>
        <a
          href="/checkout"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
        >
          Buy for $49
        </a>
      </section>
    </main>
  )
}

export default ProductDetailPage

/*
What You Learn Here:
Image grids (gallery and thumbnails)

Technical specs using <details>

Product pricing + checkout CTA

Related product cards using map

Shadow and hover effects

More complex responsive grid handling

*/
