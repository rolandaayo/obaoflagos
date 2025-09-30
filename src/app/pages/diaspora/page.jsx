import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function page() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen flex items-center justify-center text-black'>
        <div className='text-center px-4'>
          <div className='text-2xl font-semibold'>THIS IS THE DIASPORA PAGE</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
