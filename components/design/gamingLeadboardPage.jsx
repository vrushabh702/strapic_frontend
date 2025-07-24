import React from "react"

export default function GamingLeaderboardPage() {
  const leaderboardData = [
    {
      rank: 1,
      clan: "Shadow Wolves",
      score: 9820,
      country: "🇺🇸",
      members: 42,
    },
    {
      rank: 2,
      clan: "Crimson Vortex",
      score: 9450,
      country: "🇯🇵",
      members: 37,
    },
    {
      rank: 3,
      clan: "Night Howlers",
      score: 9120,
      country: "🇩🇪",
      members: 50,
    },
    {
      rank: 4,
      clan: "Phoenix Reign",
      score: 8990,
      country: "🇧🇷",
      members: 40,
    },
    {
      rank: 5,
      clan: "Iron Fangs",
      score: 8730,
      country: "🇮🇳",
      members: 35,
    },
  ]

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black text-white min-h-screen py-20 px-6">
      {/* Hero */}
      <section className="text-center mb-24 relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl" />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
          Top Clans of the Month
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Compete, dominate, and rise through the ranks. Here are the most
          powerful clans in our universe.
        </p>
      </section>

      {/* Leaderboard */}
      <section className="max-w-4xl mx-auto bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-5 text-center bg-zinc-700 text-gray-400 py-3 px-4 font-semibold text-sm">
          <div>Rank</div>
          <div>Clan Name</div>
          <div>Country</div>
          <div>Members</div>
          <div>Score</div>
        </div>
        {leaderboardData.map((clan, i) => (
          <div
            key={clan.rank}
            className={`grid grid-cols-5 items-center text-center px-4 py-4 border-t border-zinc-700 ${
              i === 0
                ? "bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-500 text-black font-bold"
                : "hover:bg-zinc-700"
            }`}
          >
            <div className="text-xl">#{clan.rank}</div>
            <div className="text-lg font-semibold">{clan.clan}</div>
            <div className="text-2xl">{clan.country}</div>
            <div>{clan.members}</div>
            <div className="font-bold text-lg">{clan.score}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
