import React from 'react'

export default function Body() {
  return (
    <div className='bg-white/95 pb-10 text-black pt-24 shadow-md py-4'>
      <div className="mx-4 md:mx-8 lg:mr-96 lg:ml-20 flex flex-col space-y-8">
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Why This Matters</h2>
          <p className="text-gray-700">
            The Obas of Lagos are more than just traditional leaders; they represent a bridge between the past and the future. By preserving their stories, we honor the resilience and diversity of Lagosians and celebrate the city's pivotal role in Africa's cultural and economic landscape.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Explore, Learn, Celebrate</h2>
          <p className="text-gray-700">
            Whether you're a history enthusiast, cultural explorer, or a proud Lagosian, this platform invites you to dive deep into the heart of Lagos's royal heritage. Let the stories of courage, wisdom, and unity inspire you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Get Started Today</h2>
          <ul className="space-y-2 text-gray-700">
            <li>📜 Explore the Timeline: Begin your journey with a detailed exploration of the Obas and their reigns.</li>
            <li>📷 View Our Gallery: Step back in time through rare photos, artifacts, and memorabilia.</li>
            <li>💡 Learn More: Dive deeper into the fascinating world of Lagos's monarchy.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Join the Royal Experience</h2>
          <p className="text-gray-700">
            Stay connected with us for updates, new discoveries, and opportunities to participate in preserving Lagos's royal heritage. Sign up and follow us on social media to be part of this exciting journey.
          </p>
        </section>
      </div>
    </div>
  )
}