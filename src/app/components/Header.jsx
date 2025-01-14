import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image 
          src="/images/lagos-aerial.jpg"
          alt="Lagos State Aerial View"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          Welcome to the Palace of
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center text-yellow-400">
          The Oba of Lagos
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl text-center mb-8">
          Experience the rich cultural heritage and royal traditions of the Lagos Kingdom
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors">
          Explore More
        </button>
      </div>
    </div>
  )
}