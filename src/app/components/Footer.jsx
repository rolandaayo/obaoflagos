import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Oba of Lagos</h3>
            <p className="text-gray-600">Preserving our cultural heritage and leading our community into the future.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About</a></li>
              <li><a href="/history" className="hover:text-yellow-500">History</a></li>
              <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Iga Idunganran Palace</li>
              <li>Lagos Island</li>
              <li>Lagos State, Nigeria</li>
              <li>Email: info@obaoflagos.org</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-yellow-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-yellow-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Oba of Lagos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}