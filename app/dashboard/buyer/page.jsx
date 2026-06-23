"use client"
import { useState } from "react"
import {
  Leaf, Search, ShoppingCart, Package,
  Star, LogOut, Bell, ChevronRight,
  Clock, CheckCircle, Truck, Filter
} from "lucide-react"

const products = [
  { id: 1, name: "White Maize", farmer: "Audu Farms", location: "Kano", price: "₦360/kg", minOrder: "50kg", rating: 4.8, verified: true },
  { id: 2, name: "Yam Tubers", farmer: "Bello Farms", location: "Benue", price: "₦350/tuber", minOrder: "20 tubers", rating: 4.6, verified: true },
  { id: 3, name: "Brown Beans", farmer: "Chukwu Agro", location: "Enugu", price: "₦500/kg", minOrder: "25kg", rating: 4.9, verified: true },
  { id: 4, name: "Fresh Tomatoes", farmer: "Musa Farms", location: "Kaduna", price: "₦800/basket", minOrder: "5 baskets", rating: 4.5, verified: true },
  { id: 5, name: "Cassava", farmer: "Ade Farms", location: "Oyo", price: "₦150/kg", minOrder: "100kg", rating: 4.7, verified: true },
  { id: 6, name: "Groundnut", farmer: "Sule Agro", location: "Katsina", price: "₦650/kg", minOrder: "20kg", rating: 4.4, verified: false },
]

const myOrders = [
  { id: "ORD001", product: "Maize (50kg)", farmer: "Audu Farms", amount: "₦18,000", status: "delivered" },
  { id: "ORD002", product: "Yam (20 tubers)", farmer: "Bello Farms", amount: "₦7,000", status: "in-transit" },
  { id: "ORD003", product: "Beans (25kg)", farmer: "Chukwu Agro", amount: "₦12,500", status: "pending" },
]

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("browse")
  const [search, setSearch] = useState("")

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="text-green-600" size={24} />
          <span className="text-xl font-bold text-green-600">AgroSpeed</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="text-gray-500" size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">E</div>
            <span className="text-sm font-medium text-gray-700">Emeka</span>
          </div>
          <button className="text-gray-400 hover:text-red-500">
            <LogOut size={20} />
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* WELCOME */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Good morning, Emeka 👋</h1>
          <p className="text-gray-500 text-sm mt-1">Find fresh produce directly from verified farmers</p>
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          {["browse", "my orders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium capitalize transition-all ${
                activeTab === tab
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* BROWSE TAB */}
        {activeTab === "browse" && (
          <>
            {/* SEARCH */}
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search produce or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-600"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 hover:border-green-600 hover:text-green-600">
                <Filter size={18} />
                Filter
              </button>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-green-200">
                  
                  {/* IMAGE PLACEHOLDER */}
                  <div className="w-full h-32 bg-green-50 rounded-lg mb-4 flex items-center justify-center">
                    <Package className="text-green-300" size={40} />
                  </div>

                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-800">{product.name}</h3>
                    {product.verified && (
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full font-medium">✓ Verified</span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mb-1">{product.farmer} • {product.location}</p>

                  <div className="flex items-center gap-1 mb-3">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="text-xs text-gray-600 font-medium">{product.rating}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-green-600">{product.price}</p>
                      <p className="text-xs text-gray-400">Min: {product.minOrder}</p>
                    </div>
                    <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-1">
                      <ShoppingCart size={14} />
                      Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* MY ORDERS TAB */}
        {activeTab === "my orders" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-4">My Orders</h3>
            <div className="flex flex-col gap-3">
              {myOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-green-200 transition-all">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      order.status === "delivered" ? "bg-green-100" :
                      order.status === "in-transit" ? "bg-blue-100" : "bg-yellow-100"
                    }`}>
                      {order.status === "delivered" ? <CheckCircle className="text-green-600" size={20} /> :
                       order.status === "in-transit" ? <Truck className="text-blue-600" size={20} /> :
                       <Clock className="text-yellow-600" size={20} />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{order.product}</p>
                      <p className="text-sm text-gray-500">From: {order.farmer} • {order.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">{order.amount}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      order.status === "delivered" ? "bg-green-100 text-green-600" :
                      order.status === "in-transit" ? "bg-blue-100 text-blue-600" :
                      "bg-yellow-100 text-yellow-600"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}