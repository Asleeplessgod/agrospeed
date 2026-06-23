"use client"
import { useState } from "react"
import {
  Leaf, ArrowLeft, ShieldCheck,
  CheckCircle, Truck, Clock,
  Package, MapPin, Phone,
  AlertCircle, Star
} from "lucide-react"

const order = {
  id: "ORD002",
  product: "White Maize",
  quantity: 50,
  unit: "kg",
  amount: 18000,
  farmer: "Audu Farms",
  farmerInitial: "A",
  farmerPhone: "+234 801 234 5678",
  location: "Kuje, Abuja",
  orderDate: "June 23, 2026",
  estimatedDelivery: "June 26, 2026",
  status: "in-transit",
}

const steps = [
  { id: 1, label: "Order Placed", subtext: "June 23, 2026 • 10:32am", icon: Package, done: true },
  { id: 2, label: "Farmer Confirmed", subtext: "June 23, 2026 • 11:45am", icon: CheckCircle, done: true },
  { id: 3, label: "In Transit", subtext: "June 24, 2026 • 8:00am", icon: Truck, done: true },
  { id: 4, label: "Delivered", subtext: "Estimated June 26, 2026", icon: CheckCircle, done: false },
]

export default function OrderTracking() {
  const [confirmed, setConfirmed] = useState(false)
  const [disputed, setDisputed] = useState(false)
  const [rated, setRated] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-10 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-green-600" size={60} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Complete!</h2>
          <p className="text-gray-500 mb-2">Payment of <strong className="text-green-600">₦{order.amount.toLocaleString()}</strong> has been released to {order.farmer}.</p>
          <p className="text-sm text-gray-400 mb-8">Thank you for using AgroSpeed. Your rating helps other buyers.</p>
          <a
            href="/dashboard/buyer"
            className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 block text-center"
          >
            Back to Dashboard
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm px-6 py-4 flex items-center gap-4">
        <a href="/dashboard/buyer" className="text-gray-400 hover:text-green-600">
          <ArrowLeft size={22} />
        </a>
        <div className="flex items-center gap-2">
          <Leaf className="text-green-600" size={24} />
          <span className="text-xl font-bold text-green-600">AgroSpeed</span>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-4 py-8">

        {/* ORDER HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Order {order.id}</h1>
            <p className="text-gray-500 text-sm mt-1">Placed on {order.orderDate}</p>
          </div>
          <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium">
            In Transit
          </span>
        </div>

        {/* ESCROW BANNER */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 flex gap-3">
          <ShieldCheck className="text-yellow-500 shrink-0" size={18} />
          <div>
            <p className="text-sm text-yellow-700 font-medium">₦{order.amount.toLocaleString()} held in escrow</p>
            <p className="text-xs text-yellow-600 mt-0.5">Will be released to farmer only after you confirm delivery</p>
          </div>
        </div>

        {/* TRACKING STEPS */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-6">Order Tracking</h3>
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    step.done ? "bg-green-600" : "bg-gray-200"
                  }`}>
                    <step.icon
                      className={step.done ? "text-white" : "text-gray-400"}
                      size={16}
                    />
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-0.5 h-10 ${step.done ? "bg-green-600" : "bg-gray-200"}`} />
                  )}
                </div>
                <div className="pb-8">
                  <p className={`font-medium text-sm ${step.done ? "text-gray-800" : "text-gray-400"}`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{step.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ORDER DETAILS */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="font-bold text-gray-800 mb-4">Order Details</h3>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Product</span>
              <span className="text-sm font-medium text-gray-800">{order.product}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Quantity</span>
              <span className="text-sm font-medium text-gray-800">{order.quantity}{order.unit}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Amount</span>
              <span className="text-sm font-bold text-green-600">₦{order.amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Est. Delivery</span>
              <span className="text-sm font-medium text-gray-800">{order.estimatedDelivery}</span>
            </div>
          </div>
        </div>

        {/* FARMER CARD */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              {order.farmerInitial}
            </div>
            <div>
              <p className="font-medium text-gray-800">{order.farmer}</p>
              <div className="flex items-center gap-1">
                <MapPin className="text-gray-400" size={12} />
                <p className="text-xs text-gray-500">{order.location}</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-1 border border-gray-200 text-gray-600 px-3 py-2 rounded-lg text-sm hover:border-green-600 hover:text-green-600">
            <Phone size={16} />
            Call
          </button>
        </div>

        {/* CONFIRM DELIVERY */}
        {!confirmed && !disputed && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Did your order arrive?</h3>
            <p className="text-sm text-gray-500 mb-4">Confirm delivery to release payment to the farmer. Only confirm if you received the correct product.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDisputed(true)}
                className="flex-1 border-2 border-red-200 text-red-500 font-medium py-3 rounded-xl hover:bg-red-50 flex items-center justify-center gap-2"
              >
                <AlertCircle size={18} />
                Raise Dispute
              </button>
              <button
                onClick={() => setConfirmed(true)}
                className="flex-1 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <CheckCircle size={18} />
                Confirm Delivery
              </button>
            </div>
          </div>
        )}

        {/* DISPUTE */}
        {disputed && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="text-red-500" size={20} />
              <h3 className="font-bold text-red-700">Dispute Raised</h3>
            </div>
            <p className="text-sm text-red-600 mb-4">Our team will review your order within 24 hours. Your payment remains in escrow until resolved.</p>
            <p className="text-xs text-red-400">Reference: {order.id} • June 23, 2026</p>
          </div>
        )}

        {/* RATING */}
        {confirmed && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-2">Rate Your Experience</h3>
            <p className="text-sm text-gray-500 mb-4">How was your order from {order.farmer}?</p>
            <div className="flex gap-2 mb-6 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} onClick={() => setRated(star)}>
                  <Star
                    size={32}
                    className={star <= rated ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => setSubmitted(true)}
              disabled={rated === 0}
              className="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit & Release Payment
            </button>
          </div>
        )}

      </div>
    </main>
  )
}