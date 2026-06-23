import { Leaf, ShieldCheck, Truck, Video, Star, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <Leaf className="text-green-600" size={28} />
          <h1 className="text-2xl font-bold text-green-600">AgroSpeed</h1>
        </div>
        <div className="flex gap-4">
          <a href="/login" className="text-gray-600 hover:text-green-600 font-medium">Login</a>
          <a href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Farm Fresh. Delivered Fast.</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          AgroSpeed connects Nigerian farmers directly to buyers. No middlemen. No fraud. Just fresh produce and fair prices.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/signup?role=buyer" className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100">I Want to Buy</a>
          <a href="/signup?role=farmer" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700">I Am a Farmer</a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-green-50">
            <div className="flex justify-center mb-4">
              <Leaf className="text-green-600" size={40} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Farmers List Products</h4>
            <p className="text-gray-600">Verified farmers upload photos and videos of real stock with prices and quantity.</p>
          </div>
          <div className="p-6 rounded-xl bg-green-50">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="text-green-600" size={40} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Buyers Pay Securely</h4>
            <p className="text-gray-600">Payment is held in escrow. Nobody gets paid until you confirm your order arrived.</p>
          </div>
          <div className="p-6 rounded-xl bg-green-50">
            <div className="flex justify-center mb-4">
              <Truck className="text-green-600" size={40} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h4>
            <p className="text-gray-600">Track your order from farm to doorstep. Fresh produce delivered on time.</p>
          </div>
        </div>
      </section>

      {/* WHY AGROSPEED */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-12">Why AgroSpeed?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
            <CheckCircle className="text-green-600 mt-1 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-gray-800">Verified Farmers Only</h4>
              <p className="text-gray-600 text-sm">Every seller is NIN verified before listing anything.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
            <Video className="text-green-600 mt-1 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-gray-800">Video Proof of Stock</h4>
              <p className="text-gray-600 text-sm">Farmers upload live video of actual products before you pay.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
            <ShieldCheck className="text-green-600 mt-1 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-gray-800">Escrow Protection</h4>
              <p className="text-gray-600 text-sm">Your money is safe until you confirm delivery and quality.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
            <Star className="text-green-600 mt-1 shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-gray-800">Trusted Ratings</h4>
              <p className="text-gray-600 text-sm">Real reviews from real buyers after every transaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-green-600 text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="mb-8 text-lg">Join thousands of farmers and buyers already on AgroSpeed.</p>
        <a href="/signup" className="bg-white text-green-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100">
          Create Free Account
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2026 AgroSpeed. Built for Nigerian farmers and buyers.
      </footer>

    </main>
  )
}