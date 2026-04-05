import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const transactions = [
    { id: 1, date: "2026-04-01", category: "Salary", amount: 5000, type: "income" },
    { id: 2, date: "2026-04-02", category: "Food", amount: 1200, type: "expense" },
    { id: 3, date: "2026-04-03", category: "Shopping", amount: 800, type: "expense" },
  ];

  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/* Sidebar */}
      <div className="w-60 bg-gray-900 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">Overview</li>
          <li className="hover:text-blue-400 cursor-pointer">Transactions</li>
          <li className="hover:text-blue-400 cursor-pointer">Reports</li>
        </ul>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-6">💰 Finance Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-500/20 p-6 rounded-xl hover:scale-105 transition">
            <h2>Income</h2>
            <p className="text-2xl font-bold">₹{income}</p>
          </div>

          <div className="bg-red-500/20 p-6 rounded-xl hover:scale-105 transition">
            <h2>Expense</h2>
            <p className="text-2xl font-bold">₹{expense}</p>
          </div>

          <div className="bg-blue-500/20 p-6 rounded-xl hover:scale-105 transition">
            <h2>Balance</h2>
            <p className="text-2xl font-bold">₹{income - expense}</p>
          </div>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search category..."
          className="mb-6 px-4 py-2 rounded-lg text-black"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <table className="w-full text-center">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3">Date</th>
                <th className="p-3">Category</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Type</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((t) => (
                <tr key={t.id} className="border-t border-gray-700 hover:bg-gray-800 transition">
                  <td className="p-3">{t.date}</td>
                  <td className="p-3">{t.category}</td>
                  <td className="p-3">₹{t.amount}</td>
                  <td className={`p-3 ${t.type === "income" ? "text-green-400" : "text-red-400"}`}>
                    {t.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}