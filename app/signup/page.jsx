"use client"
import { useState } from "react"
import { Leaf, User, Tractor, ArrowRight } from "lucide-react"

export default function Signup() {
  const [role, setRole] = useState(null)

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

      {/* LOGO */}
      <a href="/" className="flex items-center gap-2 mb-10">
        <Leaf className="text-green-600" size={28} />
        <span className="text-2xl font-bold text-green-600">AgroSpeed</span>
      </a>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">

        {/* STEP 1 — CHOOSE ROLE */}
        {!role && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Create Account</h2>
            <p className="text-gray-500 text-center mb-8">Who are you joining as?</p>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setRole("buyer")}
                className="flex items-center gap-4 p-5 border-2 border-gray-200 rounded-xl hover:border-green-600 hover:bg-green-50 transition-all text-left"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <User className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">I want to Buy</h3>
                  <p className="text-sm text-gray-500">Browse and order fresh farm produce</p>
                </div>
                <ArrowRight className="text-gray-400 ml-auto" size={20} />
              </button>

              <button
                onClick={() => setRole("farmer")}
                className="flex items-center gap-4 p-5 border-2 border-gray-200 rounded-xl hover:border-green-600 hover:bg-green-50 transition-all text-left"
              >
                <div className="bg-green-100 p-3 rounded-full">
                  <Tractor className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">I am a Farmer</h3>
                  <p className="text-sm text-gray-500">List your produce and reach more buyers</p>
                </div>
                <ArrowRight className="text-gray-400 ml-auto" size={20} />
              </button>
            </div>
          </>
        )}

        {/* STEP 2 — FILL DETAILS */}
        {role && (
          <>
            <button
              onClick={() => setRole(null)}
              className="text-sm text-gray-500 hover:text-green-600 mb-6 flex items-center gap-1"
            >
              ← Back
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {role === "farmer" ? "Farmer Sign Up" : "Buyer Sign Up"}
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              {role === "farmer" ? "Start selling your produce today" : "Start buying fresh produce today"}
            </p>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
              />
              <input
                type="password"
                placeholder="Create Password"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
              />

              {role === "farmer" && (
                <input
                  type="text"
                  placeholder="Farm Location (e.g. Gwarimpa, Abuja)"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                />
              )}

              <button className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-all mt-2">
                Create Account
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <a href="/login" className="text-green-600 font-medium hover:underline">Login</a>
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  )
}