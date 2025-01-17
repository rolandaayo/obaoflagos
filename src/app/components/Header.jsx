import React from "react";

export default function Header() {
  return (
    <>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-28 gap-12 min-h-screen bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm">
        <div className="flex-1 space-y-8 animate-fade-in-left">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-400 via-white to-green-500 bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 transition-transform duration-300">
            Welcome to the legacy of lagos
          </h1>
          <h2 className="text-lg md:text-xl text-gray-200 leading-relaxed font-light tracking-wide hover:text-white transition-colors duration-300 border-l-4 border-green-500 pl-6">
            Discover the extraordinary Legacy of Lagos's traditional leadership,
            where history, culture, and royalty converge to define one of
            Africa's most iconic cities. Step into the timeless story of the
            Obas of Lagos – custodians of tradition, architects of progress, and
            symbols of unity
          </h2>
        </div>
        <div className="flex-1 transform hover:scale-105 transition-transform duration-500">
          <img
            src="/images/hero.jpg"
            alt="Lagos Heritage"
            className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-green-500/50 border-2 border-green-500/20"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-28 gap-12 min-h-screen bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm">
      <div className="flex-1 transform hover:scale-105 transition-transform duration-500">
          <img src="/images/hero-2.jpg" alt="Lagos Heritage" className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-green-500/50 border-2 border-green-500/20" />
        </div>
        <div className="flex-1 space-y-8 animate-fade-in-left">
          <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-400 via-white to-green-500 bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 transition-transform duration-300">Preserving the Past, Inspiring the Future</h2>
          <h3 className="text-lg md:text-xl text-gray-200 leading-relaxed font-light tracking-wide hover:text-white transition-colors duration-300 border-l-4 border-green-500 pl-6">The Obas of Lagos have stood as enduring figures of leadership, from the founding of Lagos in the 17th century to its rise as a global metropolis. Our platform is your gateway to exploring this remarkable lineage and understanding the role of these royal leaders in shaping Lagos's identity and resilience.</h3>
        </div>
        
      </div> 

          <div className="max-w-7xl mx-auto px-4 py-28 text-center space-y-6 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-white to-green-500 bg-clip-text text-transparent mb-8">
              Why This Matters
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              The Obas of Lagos are more than just traditional leaders; they represent a bridge between the past and the future. By preserving their stories, we honor the resilience and diversity of Lagosians and celebrate the city's pivotal role in Africa's cultural and economic landscape.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-28 text-center space-y-6 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-white to-green-500 bg-clip-text text-transparent mb-8">
              Explore, Learn, Celebrate
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Whether you're a history enthusiast, cultural explorer, or a proud Lagosian, this platform invites you to dive deep into the heart of Lagos's royal heritage. Let the stories of courage, wisdom, and unity inspire you.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-28 text-center space-y-8 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-white to-green-500 bg-clip-text text-transparent mb-12">
              Get Started Today
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 rounded-xl bg-black/30 border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">📜</div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Explore the Timeline</h3>
                <p className="text-gray-300">Begin your journey with a detailed exploration of the Obas and their reigns.</p>
              </div>
              <div className="p-6 rounded-xl bg-black/30 border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">📷</div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">View Our Gallery</h3>
                <p className="text-gray-300">Step back in time through rare photos, artifacts, and memorabilia.</p>
              </div>
              <div className="p-6 rounded-xl bg-black/30 border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">Learn More</h3>
                <p className="text-gray-300">Dive deeper into the fascinating world of Lagos's monarchy.</p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-28 text-center space-y-6 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-white to-green-500 bg-clip-text text-transparent">
              Join the Royal Experience
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Stay connected with us for updates, new discoveries, and opportunities to participate in preserving Lagos's royal heritage. Sign up and follow us on social media to be part of this exciting journey.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-green-400">
              Discover the Majesty. Celebrate the Legacy.
            </p>
          </div>    </>
  );
}
