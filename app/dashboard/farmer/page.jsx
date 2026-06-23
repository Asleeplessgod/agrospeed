"use client"
import { useState } from "react"
import {
  Leaf, Plus, Package, ShoppingBag,
  Star, LogOut, Bell, ChevronRight,
  TrendingUp, Clock, CheckCircle,Truck
} from "lucide-react"

const stats = [
  { label: "Total Listings", value: "12", icon: Package, color: "bg-green-100 text-green-600" },
  { label: "Active Orders", value: "5", icon: ShoppingBag, color: "bg-blue-100 text-blue-600" },
  { label: "Rating", value: "4.8", icon: Star, color: "bg-yellow-100 text-yellow-600" },
  { label: "Total Sales", value: "₦240k", icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
]

const recentOrders = [
  { id: "ORD001", product: "Maize (50kg)", buyer: "Emeka D.", amount: "₦18,000", status: "pending" },
  { id: "ORD002", product: "Yam (100 tubers)", buyer: "Fatima A.", amount: "₦35,000", status: "delivered" },
  { id: "ORD003", product: "Beans (25kg)", buyer: "Chidi O.", amount: "₦12,500", status: "in-transit" },
]

const myListings = [
  { name: "White Maize", qty: "200kg", price: "₦360/kg", status: "active" },
  { name: "Yam Tubers", qty: "500 tubers", price: "₦350/tuber", status: "active" },
  { name: "Brown Beans", qty: "100kg", price: "₦500/kg", status: "sold out" },
]

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

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
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
            <span className="text-sm font-medium text-gray-700">Audu Farms</span>
          </div>
          <button className="text-gray-400 hover:text-red-500">
            <LogOut size={20} />
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* WELCOME */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Good morning, Audu 👋</h1>
            <p className="text-gray-500 text-sm mt-1">Here's what's happening on your farm today</p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-green-700 text-sm font-medium">
            <Plus size={18} />
            New Listing
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* TABS */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          {["overview", "listings", "orders"].map((tab) => (
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

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-6">

            {/* RECENT ORDERS */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-4">Recent Orders</h3>
              <div className="flex flex-col gap-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{order.product}</p>
                      <p className="text-xs text-gray-500">{order.buyer} • {order.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-800">{order.amount}</p>
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

            {/* MY LISTINGS */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-4">My Listings</h3>
              <div className="flex flex-col gap-3">
                {myListings.map((listing) => (
                  <div key={listing.name} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Package className="text-green-600" size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{listing.name}</p>
                        <p className="text-xs text-gray-500">{listing.qty} • {listing.price}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      listing.status === "active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* LISTINGS TAB */}
        {activeTab === "listings" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">All Listings</h3>
              <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm hover:bg-green-700">
                <Plus size={16} /> Add New
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {myListings.map((listing) => (
                <div key={listing.name} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-green-200 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Package className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{listing.name}</p>
                      <p className="text-sm text-gray-500">{listing.qty} available • {listing.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      listing.status === "active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                    }`}>
                      {listing.status}
                    </span>
                    <ChevronRight className="text-gray-400" size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-4">All Orders</h3>
            <div className="flex flex-col gap-3">
              {recentOrders.map((order) => (
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
                      <p className="text-sm text-gray-500">Buyer: {order.buyer} • {order.id}</p>
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