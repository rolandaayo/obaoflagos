import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen pt-36 bg-white/95 text-black py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-md font-bold text-black mb-6">About Us</h2>
              <h3 className="text-lg leading-relaxed">
                Welcome to The Legacy of Lagos – your ultimate resource for exploring the rich history, cultural heritage, and leadership lineage of the Obas of Lagos. Our mission is to preserve and share the profound legacy of Lagos's royal history, connecting the past to the present for enthusiasts, researchers, and future generations.
              </h3>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/about-1.jpg" 
                alt="Oba of Lagos" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 pt-40 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/about-2.jpg" 
                alt="Oba of Lagos" 
                className="w-full h-full object-cover"
              />
            </div><div className="space-y-6">
              <h2 className="text-md font-bold mb-6">Our Vision</h2>
              <h3 className="text-lg  leading-relaxed">
                Welcome to The Legacy of Lagos – your ultimate resource for exploring the rich history, cultural heritage, and leadership lineage of the Obas of Lagos. Our mission is to preserve and share the profound legacy of Lagos's royal history, connecting the past to the present for enthusiasts, researchers, and future generations.
              </h3>

              <h2 className="text-2xl font-bold mb-6">First Oba of Lagos( Oba Ado)</h2>
              <h3 className="text-lg leading-relaxed">
                Welcome to The Legacy of Lagos – your ultimate resource for exploring the rich history, cultural heritage, and leadership lineage of the Obas of Lagos. Our mission is to preserve and share the profound legacy of Lagos's royal history, connecting the past to the present for enthusiasts, researchers, and future generations.
              </h3>
            </div>
            
          </div>

        </div>

      </div>
          {/* <div className="mt-20 px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-white to-green-500 bg-clip-text text-transparent mb-10">Meet the Obas</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg mb-6">List of the Obas of Lagos and their tenure dates, beginning from time immemorial:</p>
              <ul className="space-y-4 list-decimal pl-6">
                <li className="text-white"><span className="font-semibold">Ado (1630–1669)</span> – The first Oba of Lagos, a son of the Oba of Benin.</li>
                <li className="text-white"><span className="font-semibold">Gabaro (1669–1704)</span> – Known for his administrative innovations.</li>
                <li className="text-white"><span className="font-semibold">Akinsemoyin (1704–1749)</span> – Played a significant role in the growth of trade in Lagos.</li>
                <li className="text-white"><span className="font-semibold">Eletu Kekere (1749–1775)</span> – Ruled during a period of consolidation.</li>
                <li className="text-white"><span className="font-semibold">Ologun Kutere (1775–1801)</span> – Renowned for expanding Lagos's influence.</li>
                <li className="text-white"><span className="font-semibold">Adele Ajosun (1801–1821)</span> – Ruled amidst internal and external political challenges.</li>
                <li className="text-white"><span className="font-semibold">Oshinlokun (1821–1829)</span> – Known for his leadership during turbulent times.</li>
                <li className="text-white"><span className="font-semibold">Idewu Ojulari (1829–1834)</span> – His reign was marked by controversies leading to his abdication.</li>
                <li className="text-white"><span className="font-semibold">Adele Ajosun (Restored, 1835–1837)</span> – Returned for a brief second tenure.</li>
                <li className="text-white"><span className="font-semibold">Oluwole (1837–1841)</span> – A period of relative stability.</li>
                <li className="text-white"><span className="font-semibold">Akitoye (1841–1845)</span> – Known for his resistance to the slave trade.</li>
                <li className="text-white"><span className="font-semibold">Kosoko (1845–1851)</span> – A rival claimant with strong influence and connections.</li>
                <li className="text-white"><span className="font-semibold">Akitoye (Restored, 1851–1853)</span> – Returned to power with British support.</li>
                <li className="text-white"><span className="font-semibold">Dosunmu (1853–1885)</span> – Signed the Lagos Treaty of Cession in 1861.</li>
                <li className="text-white"><span className="font-semibold">Oyekan I (1885–1900)</span> – Oversaw Lagos during early British colonial administration.</li>
                <li className="text-white"><span className="font-semibold">Eshugbayi Eleko (1901–1925)</span> – Advocated for Lagosians' interests against colonial policies.</li>
                <li className="text-white"><span className="font-semibold">Ibikunle Akitoye (1925–1928)</span> – Had a brief reign.</li>
                <li className="text-white"><span className="font-semibold">Eshugbayi Eleko (Restored, 1931–1932)</span> – Returned for a short second tenure.</li>
                <li className="text-white"><span className="font-semibold">Adeniji Adele II (1949–1964)</span> – Played a significant role in Lagos's cultural development.</li>
                <li className="text-white"><span className="font-semibold">Adekola Oyekan II (1965–2003)</span> – The longest-reigning Oba of Lagos.</li>
                <li className="text-white"><span className="font-semibold">Rilwan Babatunde Osuolale Aremu Akiolu I (2003–Present)</span> – The current Oba of Lagos.</li>
              </ul>
            </div>
          </div>      */}
           <Footer/>
    </div>
  )
}
