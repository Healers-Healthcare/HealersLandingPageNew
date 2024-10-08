"use client"


import Image from 'next/image'

export default function TrustedBy2() {


  const logos = [
    { id: 1, src: '/dfinityLogo.png', alt: 'DFINITY logo' },
    { id: 2, src: '/ICLogo.png', alt: 'Internet Computer logo' },
    { id: 3, src: '/ICPLogo.png', alt: 'Crewsphere ICP Hubs Network logo' }
  ];

  return (
    <section className="text-center py-12">
      <div className="container mx-auto px-4">
      <p id="trustedBy" className="mt-36 mb-10 z-10 whitespace-pre-wrap  text-3xl sm:text-5xl font-medium tracking-tighterpointer-events-none bg-gradient-to-r from-black to-[#454545] bg-clip-text  leading-none text-transparent dark:from-white dark:to-[#454545]  ">
          TRUSTED BY
        </p>
       
        <div className="flex justify-evenly mx-auto items-center ">
        {logos.map((logo) => (
            <div key={logo.id} className="relative px-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={150}
                className={`transition-all duration-200 filter grayscale hover:grayscale-0
                  `
              }
              />
              {/* <Image
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={150}
                className={`absolute top-0 left-4 transition-all duration-300 filter grayscale ${
                  hoveredLogo === index ? 'opacity-0' : 'opacity-100'
                }`}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}