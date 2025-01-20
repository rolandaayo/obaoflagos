import React from 'react'

export default function Header() {
  return (
    <div className='bg-white/95 pt-24 shadow-md py-4'>
        <div className="h-[60vh] mx-4 md:mr-96 md:ml-20 flex flex-col">
            <img src="/images/oba-akiolu.jpg" alt="Oba Akiolu" className="h-full w-full object-cover"/>
            <h1 className="mt-4 text-md cursor-pointer font-bold text-black hover:underline">About The King</h1>
        </div> 

        <div className="h-[60vh] pt-36 mx-4 md:mr-96 md:ml-20 flex flex-col">
            <img src="/images/eyo-festival.jpg" alt="Oba Akiolu" className="h-full w-full object-cover"/>
            <h1 className="mt-4 text-md cursor-pointer font-bold text-black hover:underline">Welcome to the legacy of Lagos</h1>
        </div>    

        <div className="h-[60vh] pt-36 mx-4 md:mr-96 md:ml-20 flex flex-col">
            <img src="/images/Oba-Akiolu1.jpg" alt="Oba Akiolu" className="h-full w-full object-cover"/>
            <h1 className="mt-4 text-md cursor-pointer font-bold text-black hover:underline">Preserving the Past, Inspiring the Future</h1>
        </div>  

        <div className="h-[60vh] pt-36 mx-4 md:mr-96 md:ml-20 flex flex-col">
            <img src="/images/cultural.jpg" alt="Oba Akiolu" className="h-full w-full object-cover"/>
            <h1 className="mt-4 text-md cursor-pointer font-bold text-black hover:underline">Cultural Heritage Unveiled</h1>
        </div>      
    </div>
  )
}