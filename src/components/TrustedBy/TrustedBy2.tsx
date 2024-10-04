"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function TrustedBy2() {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null)

  const logos = [
    { src: '/dfinityLogo.png', alt: 'DFINITY logo' },
    { src: '/ICLogo.png', alt: 'Internet Computer logo' },
    { src: '/ICPLogo.png', alt: 'Crewsphere ICP Hubs Network logo' }
  ]

  return (
    <section className="text-center py-12">
      <div className="container mx-auto px-4">
          <h2 className="text-5xl text-center font-bold text-white my-12">Trusted By</h2>
       
        <div className="flex justify-around items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative  px-4"
              onMouseEnter={() => setHoveredLogo(index)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={150}
                className={`transition-all duration-300 ${
                  hoveredLogo === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <Image
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={150}
                className={`absolute top-0 left-4 transition-all duration-300 filter grayscale ${
                  hoveredLogo === index ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}