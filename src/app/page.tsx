import Image from "next/image";

import Head from 'next/head'

function Scott() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>ElderDerm - Dermatology for All Ages</title>
        <meta name="description" content="Scott Phillips&apos; Dermatology: specializing in skincare for older adults." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-blue-600">
            <h1>ElderDerm</h1>
          </div>
          <ul className="flex space-x-6 text-gray-600">
            <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="hero text-center bg-blue-100 rounded-lg shadow-md py-16">

          <h2 className="text-4xl font-bold text-gray-800 mb-4">Scott B. Phillips, MD</h2>
          <p className="text-lg text-gray-700 mb-6">Provides dermatology house calls to residents of independent living senior buildings and residents of assisted living facilities</p>
          <a href="#services" className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">Explore Our Services</a>
        </section>

        <section id="about" className="about py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">About ElderDerm</h2>

          <div className="flex justify-center mb-6">
            <Image
              src="https://jeremyrubin.github.io/elderderm.com/scott-classic.jpg"
              alt="Scott Phillips"
              className="dark:invert"
              objectPosition="center"
              width={300}
              height={100}
              priority
            />
          </div>
          <div className="flex justify-center mb-6">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
              Scott B. Phillips, MD, is a board certified dermatologist, who for the last twelve years has been doing {'"'}house calls{'"'} to residents of both assisted living communities as well as independent living residents in Chicago as well as in the near suburbs. This avoids the family having to take the resident to a community dermatologist, and in most cases their being seen by a dermatologist sooner than they would otherwise be.
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
              Facilities typically visit monthly to see residents that need to be seen, which has worked well during this time.
            </p>
          </div>

        </section>



        <section id="services" className="services py-16 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">ElderDerm Services</h2>
          <p className="text-lg text-gray-700 text-center mb-6">We offer a wide range of dermatological services, including:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 text-center">
            <li className="text-gray-700 text-lg">Diagnosis and treatment of diseases of the skin, hair and nails</li>
            <li className="text-gray-700 text-lg">Pre-cancers, cancerous and noncancerous growths</li>
            <li className="text-gray-700 text-lg">Inflammation, scaling, infections</li>
            <li className="text-gray-700 text-lg">All other discomforts of the skin</li>
          </ul>
          <p className="text-lg text-gray-700 text-center mb-6">Biopsies and removal of benign lesions can be done in the comfort of your home.
          </p>
        </section>

        <section id="contact" className="contact py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
          <div className="text-center text-lg text-gray-700 space-y-4">
            <p> If we already visit your community, call us to book an appointment.</p>
            <p>If you are a facility and would like us to visit your community please contact us.</p>
            <p>Email: <a href="mailto:info@elderderm.com" className="text-blue-600 hover:underline">info@elderderm.com</a></p>
            <p>Phone: 312-221-4896</p>
          </div>
        </section>
      </main >

      <footer className="bg-blue-600 text-white py-4">
        <p className="text-center">&copy; {new Date().getFullYear()} ElderDerm. All rights reserved.</p>
      </footer>
    </div >
  )
}

export default function Home() {
  return (



    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Scott></Scott>
      </div>
    </main>
  );
}
