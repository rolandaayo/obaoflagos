import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#C4A962]">Our History</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#1B1B1B]">The Legacy of Oba of Lagos</h2>
            <p className="text-gray-700 leading-relaxed">
              The institution of the Oba of Lagos dates back to the 17th century when Lagos was established as a major port city. The Oba has traditionally been the paramount ruler of Lagos, serving as both a spiritual and cultural leader for the people.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Throughout history, the Oba has played a crucial role in preserving the rich cultural heritage of Lagos, maintaining traditional customs, and fostering unity among the diverse communities within the city.
            </p>
          </div>
          
          <div className="relative h-[400px]">
            <Image
              src="/images/oba-palace.jpg"
              alt="Oba of Lagos Palace"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-semibold text-[#1B1B1B]">Timeline of Notable Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">17th Century</h3>
              <p className="text-gray-700">Establishment of the Oba institution in Lagos</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">19th Century</h3>
              <p className="text-gray-700">Period of significant growth and development in Lagos</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Present Day</h3>
              <p className="text-gray-700">Continuing the legacy of cultural leadership and tradition</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-[#1B1B1B] mb-8">Cultural Significance</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              The Oba of Lagos continues to be a symbol of unity, tradition, and cultural preservation. The palace serves as a center for traditional ceremonies, cultural celebrations, and community gatherings, maintaining the connection between Lagos's past and present.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
