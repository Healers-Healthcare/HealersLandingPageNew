'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    title: "Health Records",
    description: "Securely store and access patient health records, ensuring comprehensive care and easy information retrieval.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Appointments",
    description: "Efficiently manage and schedule patient appointments, reducing wait times and improving overall clinic flow.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Patient Details",
    description: "Keep track of crucial patient information, including medical history, allergies, and current treatments.",
    gradient: "from-yellow-500 to-red-500",
  },
  {
    title: "Inventory",
    description: "Monitor and manage medical supplies and equipment, ensuring your facility is always well-stocked and prepared.",
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function FeaturePages() {
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 mx-auto sm:mx-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">What we have for you</h2>
        <p className="text-xl text-center text-gray-600 mb-8">Comprehensive solutions for modern healthcare management</p>
        
        <div className="flex flex-col gap-8">
          <div className=" sm:w-full flex  gap-8 ">
            {features.map((feature, index) => (
              <button
                key={feature.title}
                className={`block w-full text-center  p-0 md:p-4 rounded-lg mb-2 transition-colors ${
                  currentFeature === index ? 'bg-[#00212c] shadow-lg' : 'hover:bg-white/50'
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                {feature.title}
              </button>
            ))}
          </div>
          
          <div className="w-full relative h-[65vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-lg overflow-hidden"
              >
                {/* <div className={`w-full h-full bg-gradient-to-br ${features[currentFeature].gradient}`}></div> */}
                <div className={`w-full h-full bg-[#00212c]`}></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-[#174e60a1] p-6 rounded-lg max-w-md  backdrop:shadow-2xl">
                    <h3 className="text-2xl text-white font-bold mb-2">{features[currentFeature].title}</h3>
                    <p className="text-white">{features[currentFeature].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}