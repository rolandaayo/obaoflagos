import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='bg-white shadow-md fixed w-full top-0 z-50'>
        <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
          <div className='text-2xl font-bold text-green-700'>
            OBA OF LAGOS
          </div>
          <div className='hidden items-center font-bold md:flex space-x-6'>
            <a href='#' className='text-gray-700 hover:text-green-700'>The King</a>
            <a href='#' className='text-gray-700 hover:text-green-700'>About</a>
            <a href='#' className='text-gray-700 hover:text-green-700'>Services</a>
            <a href='#' className='text-gray-700 hover:text-green-700'>Contact</a>
                      <button className="bg-black p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
          </div>
          <div className='md:hidden'>
            <button className='text-gray-700'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
        <div className='container mx-aut font-bold px-4 py-8 hidden md:block border-t'>
          <ul className='flex space-x-8 text-sm text-gray-600'>
            <li><a href='#' className='hover:text-green-700'>Oba Adeniji Adele (1949-1964)</a></li>
            <li><a href='#' className='hover:text-green-700'>Oba Adeyinka Oyekan II (1965-2003)</a></li>
            <li><a href='#' className='hover:text-green-700'>Oba Rilwan Akiolu I (2003-Present)</a></li>
          </ul>
        </div>
      </nav>
      <div className='h-24'></div>
    </>
  )
}