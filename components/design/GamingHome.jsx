"use client"
import React from "react"
import Head from "next/head"

const ComplexDesignPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Head>
        <title>Complex Gaming UI Designs</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Section 1: Futuristic Dashboard */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.15),_transparent_50%)] opacity-30"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Futuristic Clan Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-size-200 animate-slide"></div>
            {[
              { title: "Clan Stats", value: "84%", desc: "Win Rate" },
              { title: "Active Players", value: "247", desc: "Online Now" },
              { title: "Total Matches", value: "1,392", desc: "This Season" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg shadow-cyan-500/30 border border-cyan-500/20 transform transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-0 left-0 w-16 h-16 bg-cyan-500/20 rounded-full -translate-x-8 -translate-y-8"></div>
                <h3 className="text-xl font-orbitron font-bold mb-2">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
                <p className="text-gray-400 font-roboto">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Card Stack */}
      <section className="py-20 bg-gradient-to-t from-gray-900 to-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Interactive Card Stack
          </h2>
          <div className="relative h-96 max-w-4xl mx-auto">
            {[
              { title: "Cyber Blade", desc: "Legendary Weapon" },
              { title: "Neon Shield", desc: "Epic Defense" },
              { title: "Quantum Core", desc: "Power Boost" },
            ].map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 m-auto w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg shadow-purple-500/50 transition-all duration-300 hover:z-10 hover:scale-110 group`}
                style={{
                  transform: `rotate(${index * 5 - 5}deg) translate(${
                    index * 20 - 20
                  }px, ${index * 20 - 20}px)`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2),_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-orbitron font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-roboto">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 3D Tilt Effect Gallery */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            3D Tilt Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Astro", role: "Commander" },
              { name: "Nova", role: "Assassin" },
              { name: "Specter", role: "Engineer" },
            ].map((character, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-800 rounded-lg shadow-lg shadow-green-500/30 overflow-hidden group transform transition-all duration-500 hover:-rotate-2 hover:scale-105 animate-zoom-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.1)_50%,_transparent_75%)] bg-size-200 opacity-0 group-hover:opacity-100 transition-opacity animate-slide"></div>
                <h3 className="text-2xl font-orbitron font-bold mb-2">
                  {character.name}
                </h3>
                <p className="text-gray-300 font-roboto">{character.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Animated Stats Counter */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Live Stats Counter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Players Online", value: 1250 },
              { label: "Matches Played", value: 8760 },
              { label: "Clans Formed", value: 320 },
              { label: "Quests Completed", value: 4510 },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg shadow-yellow-500/30 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p
                  className="text-4xl font-bold font-orbitron text-yellow-400 animate-count-up"
                  data-target={stat.value}
                >
                  0
                </p>
                <p className="text-gray-300 font-roboto mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations and Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slide {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 200% 200%;
          }
        }
        @keyframes count-up {
          from {
            content: "0";
          }
          to {
            content: attr(data-target);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoom-in 0.8s ease-out forwards;
        }
        .animate-slide {
          animation: slide 5s linear infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .font-orbitron {
          font-family: "Orbitron", sans-serif;
        }
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        .animate-count-up {
          animation: count-up 2s ease-out forwards;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

export default ComplexDesignPage
