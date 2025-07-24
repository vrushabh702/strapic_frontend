import React from "react"

export default function GamingLandingPage() {
  return (
    <main className="text-white bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden text-center">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Welcome to GalaxyZone
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Dive into epic battles, upgrade your gear, and join the elite gaming
            experience of tomorrow.
          </p>
          <a
            href="#join"
            className="inline-block bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-lg font-semibold"
          >
            Join the Battle
          </a>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Multiplayer Mayhem",
              desc: "Join intense PvP matches with players across the galaxy.",
              icon: "🛡️",
            },
            {
              title: "Custom Avatars",
              desc: "Create and style your character with thousands of options.",
              icon: "🎭",
            },
            {
              title: "Upgrade System",
              desc: "Unlock weapons, skins, and rare gear to dominate battles.",
              icon: "⚔️",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 rounded-xl shadow-xl hover:scale-[1.02] transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Game Trailer */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-800 to-indigo-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Watch the Trailer</h2>
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Game Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto mb-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Game Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get a glimpse of intense battles, massive arenas, and stunning
            visuals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src={`/screenshots/game-${i + 1}.jpg`}
              alt={`Screenshot ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* Community CTA */}
      <section
        id="join"
        className="relative py-20 px-6 bg-gradient-to-br from-pink-700 to-red-600 text-center"
      >
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold mb-4">Join the Elite</h2>
          <p className="text-lg text-white/90 mb-6">
            Create your profile, join clans, earn XP, and make your mark on the
            leaderboards.
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90"
          >
            Create Account
          </a>
        </div>
      </section>
    </main>
  )
}
