// src/pages/Dashboard.jsx
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-pink-200 via-pink-300 to-purple-300">
      
      {/* ===== Top Navigation Bar ===== */}
      <motion.header 
        className="h-16 flex items-center justify-between px-6 bg-white/40 backdrop-blur-lg shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          💘 Cupidly
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search matches..."
          className="px-4 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <button className="relative">
            🔔
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold cursor-pointer">
            S
          </div>
        </div>
      </motion.header>

      {/* ===== Main Layout (Sidebar + Content + Rightbar) ===== */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <motion.aside 
          className="w-64 bg-white/40 backdrop-blur-lg p-4 hidden md:block"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h2 className="font-semibold text-lg mb-4">💌 Your Matches</h2>
          <div className="space-y-3">
            <div className="h-12 bg-pink-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
              Pending Requests
            </div>
            <div className="h-12 bg-pink-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
              Recent Matches
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl shadow hover:scale-105 transition">
              Find Matches Now 💘
            </button>
          </div>
        </motion.aside>

        {/* Center Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <motion.div
            className="h-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Hi Sandhya 👋
            </h1>
            <p className="text-gray-600 mb-6">
              Ready to meet your match today? 💖
            </p>
            <div className="h-72 w-56 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg flex items-center justify-center text-gray-500">
              🔮 Suggested Profiles Will Appear Here
            </div>
          </motion.div>
        </main>

        {/* Right Sidebar */}
        <motion.aside 
          className="w-64 bg-white/40 backdrop-blur-lg p-4 hidden lg:block"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h2 className="font-semibold text-lg mb-4">⚡ Online Now</h2>
          <div className="space-y-3">
            <div className="h-12 bg-purple-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
              Online User 1
            </div>
            <div className="h-12 bg-purple-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
              Online User 2
            </div>
          </div>
        </motion.aside>
      </div>

      {/* ===== Footer ===== */}
      <footer className="h-12 flex items-center justify-center text-sm bg-white/40 backdrop-blur-lg">
        💖 Cupidly · Safe Dating Tips · Privacy · Terms
      </footer>
    </div>
  );
}
