import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white pt-32 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Oba of Lagos</h3>
            <p className="text-black">Preserving our cultural heritage and leading our community into prosperity.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#E74C3C]">Home</a></li>
              <li><a href="/about" className="hover:text-[#E74C3C]">About</a></li>
              <li><a href="/history" className="hover:text-[#E74C3C]">History</a></li>
              <li><a href="/contact" className="hover:text-[#E74C3C]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-black">
              <li>Iga Idunganran, Lagos Island</li>
              <li>Lagos State, Nigeria</li>
              <li>Phone: +234 XXX XXX XXXX</li>
              <li>Email: info@obaoflags.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-black">© {new Date().getFullYear()} Oba of Lagos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}