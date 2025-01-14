import React from 'react'

export default function Body() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Oba of Lagos</h1>
        <p className="text-xl text-gray-600">Exploring the Rich Heritage of Lagos Monarchy</p>
      </header>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">History & Heritage</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <img 
            src="https://guardian.ng/wp-content/uploads/2016/10/Oba-of-Lagos-Palace.jpg" 
            alt="Oba of Lagos Palace" 
            className="w-full lg:w-1/2 rounded-lg shadow-lg object-cover h-[400px]"
          />
          <div className="lg:w-1/2 space-y-4">
            <p className="text-gray-700 leading-relaxed">The Oba of Lagos (Eleko of Eko) is the traditional ruler of Lagos, who has historically served as the head of the Lagos traditional state. The institution dates back to the 17th century when Lagos was established as a major port city.</p>
            <p className="text-gray-700 leading-relaxed">The current Oba, His Royal Majesty Oba Rilwan Babatunde Akiolu I, ascended to the throne in 2003, continuing a long line of distinguished monarchs who have shaped the cultural and traditional landscape of Lagos.</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">The Royal Palace</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img 
              src="https://i0.wp.com/www.correctng.com/wp-content/uploads/Oba-Akiolu-returns-to-his-palace-in-Lagos-Island.jpg" 
              alt="Palace Interior" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Palace Architecture</h3>
              <p className="text-gray-600">The Iga Idunganran (Palace) stands as a testament to traditional Yoruba architecture and royal heritage.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img 
              src="https://guardian.ng/wp-content/uploads/2017/05/Oba-of-Lagos.jpg" 
              alt="Royal Artifacts" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Royal Artifacts</h3>
              <p className="text-gray-600">The palace houses precious artifacts and royal regalia that tell the story of Lagos' rich cultural history.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Cultural Significance</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img 
              src="https://guardian.ng/wp-content/uploads/2016/05/Eyo-Festival.jpg" 
              alt="Traditional Festival" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Traditional Festivals</h3>
              <p className="text-gray-600">The Oba plays a central role in important cultural festivals like the Eyo Festival and other traditional celebrations.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <img 
              src="https://tribuneonlineng.com/wp-content/uploads/2019/06/Oba-of-Lagos.jpg" 
              alt="Royal Ceremony" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Royal Ceremonies</h3>
              <p className="text-gray-600">Various royal ceremonies and rituals are performed throughout the year, maintaining age-old traditions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Visit the Palace</h2>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-gray-700">Location: Iga Idunganran, Lagos Island, Lagos, Nigeria</p>
          <p className="text-gray-700">Visiting Hours: 10:00 AM - 4:00 PM (By Appointment)</p>
          <p className="text-gray-700">Contact: +234 XXX XXX XXXX</p>
          <button className="mt-6 bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors duration-300 shadow-lg">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  )
}