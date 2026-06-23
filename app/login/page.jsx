"use client"
import { useState } from "react"
import { Leaf, Eye, EyeOff } from "lucide-react"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

      {/* LOGO */}
      <a href="/" className="flex items-center gap-2 mb-10">
        <Leaf className="text-green-600" size={28} />
        <span className="text-2xl font-bold text-green-600">AgroSpeed</span>
      </a>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back</h2>
        <p className="text-gray-500 text-sm mb-8">Login to your AgroSpeed account</p>

        <div className="flex flex-col gap-4">

          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
          />

          {/* PASSWORD WITH SHOW/HIDE */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-green-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-all">
            Login
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-600 font-medium hover:underline">
              Sign Up
            </a>
          </p>

        </div>
      </div>
    </main>
  )
}
