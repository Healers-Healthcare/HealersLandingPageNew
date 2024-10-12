/* eslint-disable @next/next/no-img-element */
'use client'

// import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent,CarouselNext,CarouselPrevious, CarouselItem } from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import Image from "next/image"

// Sample hospital data
const hospitals = [
  { id: 1, name: "St. Mary's Hospital", img: "https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg", description: "Specialized in cardiology" },
  { id: 2, name: "Central Medical Center", img: "https://infrastructurepipeline.org/files/images/optimised/project_hero/files/images/project/generichospital7-6683a90066d1f804300495.jpg", description: "Full-service hospital" },
  { id: 3, name: "Care Hospital", img: "https://www.carehospitals.com/assets/images/main/vizag-health-city-704350.png", description: "Pediatric care experts" },
  { id: 4, name: "Sarka World Hospital", img: "https://www.impactguru.com/info/wp-content/uploads/2023/11/Sakra-World-Hospital.jpg", description: "Emergency and trauma center" },
  { id: 5, name: "Manipal Hospital", img: "https://avocure-uploads.s3.amazonaws.com/uploads/clinic/cover_pic_url/47/manipal-hospital-bangalore-1481708155-5851127b1ff31.jpg", description: "Specialized in rehabilitation" },
]

export default function HospitalCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    
    <div className="relative">
      <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
                                <div className="absolute -translate-y-[30%] translate-x-[70%]  size-[18.85rem] lg:size-[48.85rem] ">
                                    <Image className="w-full opacity-100 -rotate-[45deg] " src="/gradient2.png" width={942} height={942} alt="" />
                                </div>
                            </div>
    <p id="clients" className="mt-36 mb-10 z-10  whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
        Clients Onboard with Us
      </p>
    <div className="max-w-full mx-auto  py-10 ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="max-w-6xl mx-auto"
        ref={emblaRef}
      >
        <CarouselContent>
          {hospitals.map((hospital) => (
            <CarouselItem key={hospital.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-full h-64 relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={hospital.img}
                        alt={hospital.name}
                        className="rounded-lg w-full h-full object-cover opacity-90 hover:opacity-100 transition-all hover:scale-95  duration-300 "
                      />
                    </div>
                    <h3 className="text-lg text-[#bababa] font-semibold mb-2">{hospital.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{hospital.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
     
    </div>
    
  )
}