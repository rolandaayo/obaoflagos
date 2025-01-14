import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Oba of Lagos
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="/history" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                History
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}