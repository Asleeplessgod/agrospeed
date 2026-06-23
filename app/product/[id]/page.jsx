"use client"
import { useState } from "react"
import {
  Leaf, ArrowLeft, Star, MapPin,
  ShieldCheck, Video, Phone,
  ShoppingCart, Package, CheckCircle,
  Truck, Clock
} from "lucide-react"

const product = {
  id: 1,
  name: "White Maize",
  farmer: "Audu Farms",
  farmerInitial: "A",
  location: "Kuje, Abuja",
  price: 360,
  unit: "kg",
  minOrder: 50,
  rating: 4.8,
  totalSales: 47,
  verified: true,
  description: "Fresh white maize harvested this season. Dried and properly stored. Good for grinding, animal feed, and direct cooking. Available in bulk quantities.",
  harvestDate: "June 2026",
  available: 200,
}

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(50)
  const [ordered, setOrdered] = useState(false)

  const total = quantity * product.price

  const handleOrder = () => {
    setOrdered(true)
  }

  if (ordered) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-10 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-green-600" size={60} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed!</h2>
          <p className="text-gray-500 mb-2">Your order for <strong>{quantity}{product.unit} of {product.name}</strong> has been placed.</p>
          <p className="text-sm text-gray-400 mb-2">Payment of <strong className="text-green-600">₦{total.toLocaleString()}</strong> is held in escrow.</p>
          <p className="text-xs text-gray-400 mb-8">Funds will only be released to the farmer after you confirm delivery.</p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm font-medium text-green-700 mb-2">What happens next:</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Clock size={16} /> Farmer confirms your order
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Truck size={16} /> Product shipped to you
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle size={16} /> You confirm delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <ShieldCheck size={16} /> Payment released to farmer
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="/dashboard/buyer"
              className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 block text-center"
            >
              Track My Order
            </a>
            <a
              href="/dashboard/buyer"
              className="border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:border-green-600 hover:text-green-600 block text-center"
            >
              Continue Shopping
            </a>
          </div>
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

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* PRODUCT IMAGE */}
        <div className="w-full h-56 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
          <Package className="text-green-200" size={80} />
        </div>

        {/* PRODUCT HEADER */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="text-gray-400" size={14} />
              <span className="text-sm text-gray-500">{product.location}</span>
            </div>
          </div>
          {product.verified && (
            <div className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-full">
              <ShieldCheck size={14} />
              <span className="text-xs font-medium">Verified</span>
            </div>
          )}
        </div>

        {/* RATING + SALES */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400 fill-yellow-400" size={16} />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-500">{product.totalSales} successful orders</span>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-500">{product.available}{product.unit} available</span>
        </div>

        {/* FARMER CARD */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              {product.farmerInitial}
            </div>
            <div>
              <p className="font-medium text-gray-800">{product.farmer}</p>
              <p className="text-xs text-gray-500">Verified Farmer • {product.totalSales} sales</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 border border-gray-200 text-gray-600 px-3 py-2 rounded-lg text-sm hover:border-green-600 hover:text-green-600">
              <Video size={16} />
              View Stock
            </button>
            <button className="flex items-center gap-1 border border-gray-200 text-gray-600 px-3 py-2 rounded-lg text-sm hover:border-green-600 hover:text-green-600">
              <Phone size={16} />
              Call
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Product Details</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400">Harvest Date</p>
              <p className="text-sm font-medium text-gray-700">{product.harvestDate}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400">Minimum Order</p>
              <p className="text-sm font-medium text-gray-700">{product.minOrder}{product.unit}</p>
            </div>
          </div>
        </div>

        {/* ESCROW NOTE */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex gap-3">
          <ShieldCheck className="text-blue-500 shrink-0" size={18} />
          <p className="text-sm text-blue-700">
            Your payment is held in escrow and only released to the farmer after you confirm delivery and quality.
          </p>
        </div>

        {/* ORDER BOX */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4">Place Order</h3>

          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">Quantity ({product.unit})</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(product.minOrder, quantity - 10))}
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-green-600 hover:text-green-600 font-bold"
              >
                -
              </button>
              <span className="font-bold text-gray-800 w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.available, quantity + 10))}
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-green-600 hover:text-green-600 font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Price per {product.unit}</span>
            <span className="text-sm text-gray-800">₦{product.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <span className="text-sm text-gray-600">Total</span>
            <span className="text-xl font-bold text-green-600">₦{total.toLocaleString()}</span>
          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 flex items-center justify-center gap-2 text-lg"
          >
            <ShoppingCart size={20} />
            Pay to Escrow — ₦{total.toLocaleString()}
          </button>
        </div>

      </div>
    </main>
  )
}