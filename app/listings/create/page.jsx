"use client"
import { useState } from "react"
import {
  Leaf, Upload, Video, Image,
  MapPin, Package, ArrowLeft,
  CheckCircle, Loader
} from "lucide-react"

const categories = [
  "Grains", "Tubers", "Vegetables",
  "Fruits", "Livestock", "Legumes"
]

export default function CreateListing() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    unit: "",
    price: "",
    location: "",
    description: "",
    photo: null,
    video: null,
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  if (success) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-10 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-green-600" size={60} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Listing Created!</h2>
          <p className="text-gray-500 mb-8">Your product is now live and visible to buyers across Nigeria.</p>
          <div className="flex flex-col gap-3">
            <a href="/listings/create" className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 text-center">
              Add Another Listing
            </a>
            <a href="/dashboard/farmer" className="border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:border-green-600 hover:text-green-600 text-center">
              Back to Dashboard
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
        <a href="/dashboard/farmer" className="text-gray-400 hover:text-green-600">
          <ArrowLeft size={22} />
        </a>
        <div className="flex items-center gap-2">
          <Leaf className="text-green-600" size={24} />
          <span className="text-xl font-bold text-green-600">AgroSpeed</span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-1">Create New Listing</h1>
        <p className="text-gray-500 text-sm mb-8">Fill in your product details to reach buyers across Nigeria</p>

        {/* PROGRESS STEPS */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= s ? "bg-green-600 text-white" : "bg-gray-200 text-gray-400"
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`h-1 w-16 rounded-full ${step > s ? "bg-green-600" : "bg-gray-200"}`} />}
            </div>
          ))}
          <span className="text-sm text-gray-500 ml-2">
            {step === 1 ? "Product Details" : step === 2 ? "Upload Media" : "Review & Submit"}
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">

          {/* STEP 1 — PRODUCT DETAILS */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-gray-800 mb-2">Product Details</h3>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Product Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. White Maize"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setForm({ ...form, category: cat })}
                      className={`py-2 px-3 rounded-xl text-sm border-2 transition-all ${
                        form.category === cat
                          ? "border-green-600 bg-green-50 text-green-600 font-medium"
                          : "border-gray-200 text-gray-600 hover:border-green-300"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Quantity</label>
                  <input
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 200"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Unit</label>
                  <select
                    name="unit"
                    value={form.unit}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                  >
                    <option value="">Select unit</option>
                    <option>kg</option>
                    <option>tubers</option>
                    <option>baskets</option>
                    <option>bags</option>
                    <option>litres</option>
                    <option>pieces</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Price per unit (₦)</label>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="e.g. 360"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Farm Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. Kuje, Abuja"
                    className="w-full pl-10 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your product — quality, harvest date, storage..."
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600 resize-none"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 mt-2"
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 2 — UPLOAD MEDIA */}
          {step === 2 && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-gray-800 mb-2">Upload Media</h3>
              <p className="text-sm text-gray-500 -mt-4">Buyers trust listings with clear photos and videos of actual stock</p>

              {/* PHOTO UPLOAD */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">Product Photos</label>
                <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all">
                  <Image className="text-gray-400 mb-2" size={28} />
                  <p className="text-sm text-gray-500">Click to upload photos</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
                  />
                </label>
                {form.photo && (
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <CheckCircle size={16} /> {form.photo.name} uploaded
                  </p>
                )}
              </div>

              {/* VIDEO UPLOAD */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">
                  Product Video <span className="text-green-600">(Highly Recommended)</span>
                </label>
                <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all">
                  <Video className="text-gray-400 mb-2" size={28} />
                  <p className="text-sm text-gray-500">Click to upload a short video</p>
                  <p className="text-xs text-gray-400 mt-1">Show your actual stock — builds buyer trust</p>
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => setForm({ ...form, video: e.target.files[0] })}
                  />
                </label>
                {form.video && (
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <CheckCircle size={16} /> {form.video.name} uploaded
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:border-green-600 hover:text-green-600"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 — REVIEW */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-gray-800 mb-2">Review Your Listing</h3>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Product</span>
                  <span className="text-sm font-medium text-gray-800">{form.name || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Category</span>
                  <span className="text-sm font-medium text-gray-800">{form.category || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Quantity</span>
                  <span className="text-sm font-medium text-gray-800">{form.quantity} {form.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Price</span>
                  <span className="text-sm font-medium text-green-600">₦{form.price} per {form.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Location</span>
                  <span className="text-sm font-medium text-gray-800">{form.location || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Photo</span>
                  <span className="text-sm font-medium text-gray-800">{form.photo ? "✓ Uploaded" : "Not uploaded"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Video</span>
                  <span className="text-sm font-medium text-gray-800">{form.video ? "✓ Uploaded" : "Not uploaded"}</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm text-green-700 font-medium">✓ Your listing will go live immediately after submission</p>
                <p className="text-xs text-green-600 mt-1">Buyers across Nigeria will be able to see and order your product</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:border-green-600 hover:text-green-600"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin" size={18} />
                      Submitting...
                    </>
                  ) : "Submit Listing"}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}