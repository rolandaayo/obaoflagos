import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

export default function page() {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-white/95 text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
              <div className="space-y-8">
                <h1 className="text-3xl font-bold text-green-700">About The Legacy of Lagos</h1>
                <p className="text-xl leading-relaxed text-gray-700">
                  The Legacy of Lagos stands as a digital testament to the rich historical tapestry of Lagos's royal heritage. Our platform serves as a comprehensive repository of knowledge, documenting the illustrious lineage of the Obas of Lagos and their profound impact on shaping the cultural landscape of this great city.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/oba-akiolu2.jpg"
                  alt="Traditional Palace of the Oba of Lagos"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 order-2 md:order-1">
                <img
                  src="/images/about-2.jpg"
                  alt="Cultural ceremonies at the Palace"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="space-y-8 order-1 md:order-2">
                <h2 className="text-3xl text-green-700 font-bold">Our Mission & Vision</h2>
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed text-gray-700">
                    Our mission is to preserve, document, and share the centuries-old legacy of the Obas of Lagos, ensuring that their historical significance and cultural contributions remain accessible to both current and future generations. Through meticulous research and digital preservation, we aim to bridge the gap between traditional heritage and modern understanding.
                  </p>
                  <p className="text-xl leading-relaxed text-gray-700">
                    We envision becoming the foremost digital authority on Lagos's royal heritage, creating an educational platform that not only honors the past but also inspires future generations to appreciate and uphold the cultural values and traditions that have shaped Lagos. Our commitment extends to providing accurate, comprehensive information about the succession, achievements, and cultural significance of each Oba in Lagos's history.
                  </p>
                </div>
              </div>
            </div>

            {/* Commitment Section */}
            <div className="mb-32">
              <div className="text-center max-w-4xl mx-auto mb-24">
                <h2 className="text-3xl text-green-700 font-bold mb-8">Our Commitment</h2>
                <p className="text-xl leading-relaxed text-gray-700">
                  We aim to educate, inspire, and promote awareness of the invaluable role played by the Obas of Lagos in shaping the city's identity, traditions, and global significance.
                </p>
              </div>

              {/* Explore Section */}
              <div className="bg-white/90 text-green-700 rounded-3xl shadow-2xl p-12">
                <h2 className="text-3xl font-bold mb-12 text-center">Explore the Royal Legacy</h2>
                <p className="text-xl text-center mb-16 text-gray-700">Our platform is structured to provide a comprehensive and engaging narrative about the Obas of Lagos:</p>

                {/* Timeline Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-green-700">Royal Lineage Timeline</h3>
                    <p className="text-lg text-gray-700">Delve into an interactive timeline featuring:</p>
                    <ul className="list-disc pl-8 space-y-4 text-gray-700">
                      <li>The succession of Obas from Ado (1630–1669) to the current Oba, Rilwan Akiolu I (2003–Present)</li>
                      <li>Key milestones during their reigns, including political developments, cultural advancements, and notable challenges</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img src="/images/about-1.jpg" alt="Royal Timeline" className="w-full h-[400px] object-cover"/>
                  </div>
                </div>

                {/* Historical Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 order-2 md:order-1">
                    <img src="/images/oba-akiolu3.jpg" alt="Historical Lagos" className="w-full h-[400px] object-cover"/>
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-green-700">Historical Insights</h3>
                    <p className="text-lg text-gray-700">Uncover fascinating details about:</p>
                    <ul className="list-disc pl-8 space-y-4 text-gray-700">
                      <li>The origin of Lagos royalty and its ties to the Benin Kingdom</li>
                      <li>The evolution of the monarchy through colonization, independence, and modern governance</li>
                    </ul>
                  </div>
                </div>

                {/* Role of Obas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-green-700">The Role of the Obas</h3>
                    <p className="text-lg text-gray-700">Learn about their impact as:</p>
                    <ul className="list-disc pl-8 space-y-4 text-gray-700">
                      <li>Traditional leaders safeguarding the culture, values, and traditions of Lagos</li>
                      <li>Influential figures in diplomacy, trade, and community building</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img src="/images/oba-of-lagos-cp.jpg" alt="Oba's Role" className="w-full h-[400px] object-cover"/>
                  </div>
                </div>

                {/* Cultural Significance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 order-2 md:order-1">
                    <img src="/images/cultural.jpg" alt="Cultural Ceremonies" className="w-full h-[400px] object-cover"/>
                  </div>
                  <div className="space-y-6 order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-green-700">Cultural Significance</h3>
                    <p className="text-lg text-gray-700">Explore:</p>
                    <ul className="list-disc pl-8 space-y-4 text-gray-700">
                      <li>Royal customs, ceremonies, and the rich symbolism of the Oba's regalia</li>
                      <li>How these traditions unite Lagosians and celebrate their shared heritage</li>
                    </ul>
                  </div>
                </div>

                {/* Modern Legacy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-green-700">Legacy in Today's Lagos</h3>
                    <p className="text-lg text-gray-700">Discover how the monarchy remains a vital part of Lagos's identity in the 21st century, blending tradition with progress.</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <img src="/images/modern-lagos.jpg" alt="Modern Lagos" className="w-full h-[400px] object-cover"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}