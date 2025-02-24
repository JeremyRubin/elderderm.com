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

          <h2 className="text-4xl font-bold text-gray-800 mb-4">ElderDerm</h2>
          <p className="text-lg text-gray-700 mb-6">Provides dermatology house calls to residents of independent living senior buildings and residents of assisted living facilities</p>
          <a href="#services" className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">Explore Our Services</a>
        </section>

        <section id="about" className="about py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">About Scott B. Phillips, MD</h2>

          <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex justify-center md:justify-start">
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
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left">
                Scott B. Phillips, MD, is a board certified dermatologist, who for the last twelve years has been doing {'"'}house calls{'"'} to residents of both assisted living communities as well as independent living residents in Chicago and the near suburbs. This avoids the family having to take the resident to a community dermatologist, and in most cases, allows them to be seen by a dermatologist sooner than they would otherwise be.
              </p>
              <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left">
                Facilities typically schedule monthly visits to see residents that need to be seen, which has worked well during this time.
              </p>
            </div>
          </div>

        </section>
        <section className="qualifications py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Qualifications</h2>
          <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left">
                <strong>Board Certified Dermatologist</strong><br />
                Fellow of the American Academy of Dermatology
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Education</h3>
              <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left">
                Harvard Medical School - M.D.<br />
                Syracuse University - Certificate in Gerontology<br />
                Cornell University - A.B.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Training</h3>
              <p className="text-lg text-gray-700 max-w-2xl text-center md:text-left">
                Harvard Medical School - Dermatology Residency<br />
                University of Miami - Medical Internship
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="https://jeremyrubin.github.io/elderderm.com/scott-patient.jpg"
                alt="Scott Phillips"
                className="dark:invert"
                objectPosition="center"
                width={300}
                height={100}
                priority
              />
            </div>
          </div>
        </section>



        <section id="services" className="services py-16 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">ElderDerm Services</h2>
          <p className="text-lg text-gray-700 text-center mb-6">We offer a wide range of dermatological services, including:</p>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li className="text-gray-700 text-lg">Diagnosis and treatment of diseases of the skin, hair and nails</li>
            <li className="text-gray-700 text-lg">Pre-cancers, cancerous and noncancerous growths</li>
            <li className="text-gray-700 text-lg">Inflammation, scaling, infections</li>
            <li className="text-gray-700 text-lg">Biopsies and removal of benign lesions</li>
          </ul>
          <p className="text-lg text-gray-700 text-center mb-6">All visits and procedures can be done in the comfort of your home.
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
    </div>
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
