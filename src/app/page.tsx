import Image from "next/image";

import Head from 'next/head'

export function Scott() {
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

          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Skin, Our Priority</h2>
          <p className="text-lg text-gray-700 mb-6">Expert care from Scott Phillips, specializing in dermatological solutions for all ages.</p>
          <a href="#services" className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">Explore Our Services</a>
        </section>

        <section id="about" className="about py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">About ElderDerm</h2>

          <div className="flex justify-center mb-6">
            <Image
              src="/scott-classic.jpg"
              alt="Scott Phillips"
              className="dark:invert"
              objectPosition="center"
              width={300}
              height={100}
              priority
            />

            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
              Scott Phillips&apos; practice, ElderDerm, offers top-tier skincare services, focusing on the unique needs of older adults.
              With years of experience and personalized care, ElderDerm helps you maintain healthy, glowing skin at any age.
            </p>
          </div>

        </section>

        <section id="services" className="services py-16 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <li className="text-gray-700 text-lg">Comprehensive Skin Exams</li>
            <li className="text-gray-700 text-lg">Treatment of Skin Conditions</li>
            <li className="text-gray-700 text-lg">Cosmetic Dermatology</li>
            <li className="text-gray-700 text-lg">Skin Cancer Screening</li>
            <li className="text-gray-700 text-lg">Geriatric Dermatology</li>
          </ul>
        </section>

        <section id="contact" className="contact py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
          <div className="text-center text-lg text-gray-700 space-y-4">
            <p>Book an appointment with Scott Phillips today!</p>
            <p>Email: <a href="mailto:info@elderderm.com" className="text-blue-600 hover:underline">info@elderderm.com</a></p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Skincare Lane, Skin City, ST 56789</p>
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
