"use client"
import { useState } from "react"
import {
  Leaf, ShieldCheck, Camera,
  ArrowLeft, CheckCircle, Loader,
  AlertCircle, Upload
} from "lucide-react"

export default function VerifyFarmer() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nin: "",
    bvn: "",
    farmPhoto: null,
    idPhoto: null,
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 2500)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <ShieldCheck className="text-yellow-500" size={40} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Verification Submitted</h2>
          <p className="text-gray-500 mb-2">Your details are under review. This usually takes up to 24 hours.</p>
          <p className="text-sm text-gray-400 mb-8">We will notify you via SMS once your account is approved.</p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 text-left">
            <p className="text-sm text-yellow-700 font-medium mb-2">While you wait:</p>
            <ul className="text-sm text-yellow-600 flex flex-col gap-1">
              <li>✓ Browse the marketplace</li>
              <li>✓ Set up your farm profile</li>
              <li>✓ Prepare your product photos</li>
            </ul>
          </div>

          <a
            href="/dashboard/farmer"
            className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 block text-center"
            >
            Go to Dashboard
          </a>
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

      <div className="max-w-lg mx-auto px-4 py-8">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <ShieldCheck className="text-green-600" size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Verify Your Account</h1>
            <p className="text-gray-500 text-sm">Required before you can list products</p>
          </div>
        </div>

        {/* INFO BANNER */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 mt-4 flex gap-3">
          <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-blue-700">
            Your NIN and BVN are used only for identity verification. We do not store or share your financial details.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step >= s ? "bg-green-600 text-white" : "bg-gray-200 text-gray-400"
              }`}>
                {step > s ? <CheckCircle size={16} /> : s}
              </div>
              {s < 2 && (
                <div className={`h-1 w-24 rounded-full ${step > s ? "bg-green-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
          <span className="text-sm text-gray-500 ml-2">
            {step === 1 ? "Identity Details" : "Document Upload"}
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">

          {/* STEP 1 — NIN + BVN */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-gray-800">Identity Verification</h3>

              {/* NIN */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block font-medium">
                  National Identity Number (NIN)
                </label>
                <input
                  name="nin"
                  value={form.nin}
                  onChange={handleChange}
                  placeholder="Enter your 11-digit NIN"
                  maxLength={11}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600 tracking-widest"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Dial *346# on your phone to get your NIN
                </p>
              </div>

              {/* BVN */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block font-medium">
                  Bank Verification Number (BVN)
                </label>
                <input
                  name="bvn"
                  value={form.bvn}
                  onChange={handleChange}
                  placeholder="Enter your 11-digit BVN"
                  maxLength={11}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600 tracking-widest"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Dial *565*0# on any phone to get your BVN
                </p>
              </div>

              {/* PRIVACY NOTE */}
              <div className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <ShieldCheck className="text-green-600 shrink-0" size={18} />
                <p className="text-xs text-gray-500">
                  Your details are encrypted and verified through NIBSS. AgroSpeed never has access to your financial accounts.
                </p>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={form.nin.length < 11 || form.bvn.length < 11}
                className="bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 2 — DOCUMENT UPLOAD */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-gray-800">Upload Documents</h3>

              {/* FARM PHOTO */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">
                  Farm Photo
                  <span className="text-gray-400 font-normal ml-1">(shows your actual farm)</span>
                </label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all">
                  <Camera className="text-gray-400 mb-2" size={26} />
                  <p className="text-sm text-gray-500">Upload farm photo</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setForm({ ...form, farmPhoto: e.target.files[0] })}
                  />
                </label>
                {form.farmPhoto && (
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <CheckCircle size={16} /> {form.farmPhoto.name}
                  </p>
                )}
              </div>

              {/* GOVERNMENT ID */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block font-medium">
                  Government ID
                  <span className="text-gray-400 font-normal ml-1">(NIN slip, voter's card, or passport)</span>
                </label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all">
                  <Upload className="text-gray-400 mb-2" size={26} />
                  <p className="text-sm text-gray-500">Upload ID document</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG, PDF up to 10MB</p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => setForm({ ...form, idPhoto: e.target.files[0] })}
                  />
                </label>
                {form.idPhoto && (
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <CheckCircle size={16} /> {form.idPhoto.name}
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
                  onClick={handleSubmit}
                  disabled={loading || !form.farmPhoto || !form.idPhoto}
                  className="flex-1 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin" size={18} />
                      Verifying...
                    </>
                  ) : "Submit for Review"}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}