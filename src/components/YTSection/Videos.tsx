'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, Info } from "lucide-react"
import Image from 'next/image'
import { videos } from './videoData'

interface Video {
  id: string;
  title: string;
  description: string;
}

const VideoCard = ({ video, index }: { video: Video; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const controls = useAnimation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      setIsVideoLoaded(true)
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-12"
    >
      <Card className="overflow-hidden bg-black/35 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 h-auto md:h-[400px]">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-primary flex items-center">
                <PlayCircle className="mr-3 text-primary" size={32} />
                <span className="font-poppins">{video.title}</span>
              </h3>
              <p className="text-muted-foreground flex items-start text-lg">
                <Info className="mr-3 mt-1 flex-shrink-0 text-secondary" size={24} />
                <span>{video.description}</span>
              </p>
            </div>
            <div className="aspect-video self-center relative overflow-hidden lg:-translate-x-6 rounded-lg ">
              {!isVideoLoaded && (
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              )}
              {isVideoLoaded && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function VideoComponent() {
  return (
    <section className="py-16 lg:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center font-semibold mb-12 font-poppins text-primary">Latest From Our Creators and Partners</h2>
        <div className="space-y-12 ">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}