import React from 'react'

export default function Header() {
  return (
    <div className='bg-white/95 pt-24 shadow-md h-[80vh] py-4'>
        <div className="h-[60vh] mr-96 ml-20 flex flex-col">
            <img src="/images/oba-akiolu.jpg" alt="Oba Akiolu" className="h-full w-full object-cover"/>
            <h1 className="mt-4 text-sm font-bold text-black hover:underline">About The King</h1>
        </div>    
    </div>
  )
}