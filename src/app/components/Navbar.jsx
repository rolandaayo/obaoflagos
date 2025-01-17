import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl bg-gradient-to-r from-green-400  to-green-500 bg-clip-text text-transparent font-bold text-gray-800">
              Oba of Lagos
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">

              <Link href="/pages/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="/pages/history" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                History
              </Link>
              <Link href="/pages/tour" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Tour
              </Link>
              {/* <Link href="/pages/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Events
              </Link> */}
              {/* <Link href="/pages/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                Biography
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}