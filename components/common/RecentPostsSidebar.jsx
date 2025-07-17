const recentPosts = [
  "How to Build Lightning-Fast APIs with Node.js and Express",
  "Top 10 Data Visualization Service Providers in Ahmedabad, India 2025 – 2026",
  "Why Hiring Node.js Developers is the Smartest Move for Your Web App Project",
  "Top 10 Laravel Web Development companies in Ahmedabad, India 2025 – 2026",
  "Top 10 Data Scrapping Service Providers in Ahmedabad, India 2025 – 2026",
]

const category = [
  "E-Commerce",
  "Mobile App Development",
  "SEO & Digital Marketing",
  "Software",
  "Web Design",
  "Website Development",
]

export default function RecentPostsSidebar() {
  return (
    <aside className="w-full max-w-xs bg-[#0b3a6b] text-white rounded-2xl px-6 py-6 shadow-2xl mx-auto space-y-6 relative overflow-hidden">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-full py-4 px-4 pr-10 text-black text-sm bg-white outline-none"
        />
        <button className="absolute top-1 right-1 bg-[#20e3cf] text-white p-2 rounded-full hover:bg-[#0fdac4] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="24"
            height="24"
          >
            <path
              fill="currentColor"
              d="M62.9 56.5l-17-13.8c7.2-9.9 6.1-23.7-2.7-32.5C38.4 5.3 32 2.7 25.3 2.7s-13 2.6-17.8 7.4S0 21.3 0 28s2.7 13.1 7.5 17.9c5.1 5.1 11.5 7.5 17.9 7.5 6.1 0 12.3-2.1 17.1-6.7l17.3 14.1c.5.5 1.1.5 1.6.5.8 0 1.6-.3 2.1-1.1.8-1 .8-2.6-.6-3.7zM25.3 48c-5.3 0-10.4-2.1-14.1-5.9-3.7-3.7-5.9-8.8-5.9-14.1s2.1-10.4 5.9-14.1S20 8 25.3 8s10.4 2.1 14.1 5.9 5.9 8.8 5.9 14.1-2.1 10.4-5.9 14.1c-3.7 3.8-8.7 5.9-14.1 5.9z"
            />
          </svg>
        </button>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <span className="text-teal-400 text-xl leading-none">•</span>
          Recent Posts
        </h3>

        <ul className="space-y-4 text-sm">
          {recentPosts.map((post, idx) => (
            <li key={idx} className="border-b border-white/30 pb-2">
              {post}
            </li>
          ))}
        </ul>
      </div>

      {/* Optional: Categories Section Placeholder */}
      <div>
        <h3 className="text-lg font-semibold mt-6">• Categories</h3>
        {/* Add category items here if needed */}
        <ul className="space-y-4 text-sm">
          {category.map((post, idx) => (
            <li key={idx} className="border-b border-white/30 pb-2">
              {post}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
