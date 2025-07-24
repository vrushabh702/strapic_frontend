const DashboardPage = () => {
  const stats = [
    { label: "New Users", value: "1,204" },
    { label: "Revenue", value: "$18,932" },
    { label: "Bounce Rate", value: "32.5%" },
    { label: "Sessions", value: "4,837" },
  ]

  const tableRows = Array.from({ length: 5 }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 2 === 0 ? "Active" : "Inactive",
    date: "Jul 24, 2025",
  }))

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 text-xl font-bold border-b">MyDashboard</div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Users
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Reports
          </a>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard Overview</h1>
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </header>

        {/* Content */}
        <main className="p-6 space-y-10">
          {/* Stats Cards */}
          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded shadow hover:shadow-md transition"
              >
                <p className="text-sm text-gray-500">{s.label}</p>
                <h2 className="text-2xl font-bold">{s.value}</h2>
              </div>
            ))}
          </section>

          {/* Chart + Activity */}
          <section className="grid md:grid-cols-3 gap-6">
            {/* Chart Placeholder */}
            <div className="md:col-span-2 bg-white p-6 rounded shadow h-64">
              <h3 className="text-lg font-semibold mb-4">Traffic Overview</h3>
              <div className="bg-gray-100 h-full flex items-center justify-center text-gray-400 italic">
                Chart.js / Recharts placeholder
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white p-6 rounded shadow space-y-3">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="text-sm text-gray-600">
                  • User {i + 1} signed in
                </div>
              ))}
            </div>
          </section>

          {/* Table Section */}
          <section className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Users Table</h3>
            <table className="w-full text-left text-sm">
              <thead className="text-gray-600 border-b">
                <tr>
                  <th className="py-2">Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-2">{row.name}</td>
                    <td>{row.email}</td>
                    <td>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          row.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td>{row.date}</td>
                    <td>
                      <button className="text-blue-600 text-xs">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  )
}

export default DashboardPage

/*
Full-page layout with sidebar + top nav

Dashboard widget card design

Reusable map() and conditionals for styling

Data table layout with hover & badge styles

Placeholder for charts (to be integrated later)

Admin feel without real backend logic

*/
