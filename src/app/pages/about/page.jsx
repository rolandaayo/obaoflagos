import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

export default function page() {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen pt-12 bg-white/95 text-black">
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

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-green-700 mb-6">Meet the Obas</h2>
                  <h3 className="text-xl text-gray-700 mb-8">List of the Obas of Lagos and their tenure dates, beginning from time immemorial:</h3>
                  <ul className="space-y-4">
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Ado (1630–1669)</span><span className="mx-2">–</span><span className="text-gray-700">The first Oba of Lagos, a son of the Oba of Benin.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Gabaro (1669–1704)</span><span className="mx-2">–</span><span className="text-gray-700">Known for his administrative innovations.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Akinsemoyin (1704–1749)</span><span className="mx-2">–</span><span className="text-gray-700">Played a significant role in the growth of trade in Lagos.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Eletu Kekere (1749–1775)</span><span className="mx-2">–</span><span className="text-gray-700">Ruled during a period of consolidation.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Ologun Kutere (1775–1801)</span><span className="mx-2">–</span><span className="text-gray-700">Renowned for expanding Lagos's influence.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Adele Ajosun (1801–1821)</span><span className="mx-2">–</span><span className="text-gray-700">Ruled amidst internal and external political challenges.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Oshinlokun (1821–1829)</span><span className="mx-2">–</span><span className="text-gray-700">Known for his leadership during turbulent times.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Idewu Ojulari (1829–1834)</span><span className="mx-2">–</span><span className="text-gray-700">His reign was marked by controversies leading to his abdication.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Adele Ajosun (Restored, 1835–1837)</span><span className="mx-2">–</span><span className="text-gray-700">Returned for a brief second tenure.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Oluwole (1837–1841)</span><span className="mx-2">–</span><span className="text-gray-700">A period of relative stability.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Akitoye (1841–1845)</span><span className="mx-2">–</span><span className="text-gray-700">Known for his resistance to the slave trade.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Kosoko (1845–1851)</span><span className="mx-2">–</span><span className="text-gray-700">A rival claimant with strong influence and connections.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Akitoye (Restored, 1851–1853)</span><span className="mx-2">–</span><span className="text-gray-700">Returned to power with British support.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Dosunmu (1853–1885)</span><span className="mx-2">–</span><span className="text-gray-700">Signed the Lagos Treaty of Cession in 1861.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Oyekan I (1885–1900)</span><span className="mx-2">–</span><span className="text-gray-700">Oversaw Lagos during early British colonial administration.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Eshugbayi Eleko (1901–1925)</span><span className="mx-2">–</span><span className="text-gray-700">Advocated for Lagosians' interests against colonial policies.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Ibikunle Akitoye (1925–1928)</span><span className="mx-2">–</span><span className="text-gray-700">Had a brief reign.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Eshugbayi Eleko (Restored, 1931–1932)</span><span className="mx-2">–</span><span className="text-gray-700">Returned for a short second tenure.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Adeniji Adele II (1949–1964)</span><span className="mx-2">–</span><span className="text-gray-700">Played a significant role in Lagos's cultural development.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Adekola Oyekan II (1965–2003)</span><span className="mx-2">–</span><span className="text-gray-700">The longest-reigning Oba of Lagos.</span></li>
                  <li className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"><span className="font-semibold text-green-800">Rilwan Babatunde Osuolale Aremu Akiolu I (2003–Present)</span><span className="mx-2">–</span><span className="text-gray-700">The current Oba of Lagos.</span></li>
                 </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}