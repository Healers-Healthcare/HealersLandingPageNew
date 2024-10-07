import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ModeToggle } from '../Navbar/ModeToggle'
import DNA2 from '../3D_Elements/DNA2'
import ShineBorder from '../ui/shine-border'

export default function Header() {
  return (
    <div className="bg-gradient-to-br from-[#000000] via-[#020910] to-[#01080f] text-white min-h-screen relative overflow-hidden">
      <header className="container mx-auto px-4 py-6 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Image src="/HealersHealthcareOfficialLogo 1.png" alt="Healers Healthcare" width={150} height={150} />
          </div>
          <div className="hidden md:flex space-x-20">
            <Link href="#" className="hover:text-blue-300 transition duration-500 hover:-translate-y-2">About</Link>
            <Link href="#" className="hover:text-blue-300 transition duration-500 hover:-translate-y-2">Features</Link>
            <Link href="#" className="hover:text-blue-300 transition duration-500 hover:-translate-y-2">FAQ</Link>
            <Link href="#" className="hover:text-blue-300 transition duration-500 hover:-translate-y-2">Contact Us</Link>
          </div>
          <ModeToggle />
          <Button className="px-5 bg-[#000] border text-white border-white hover:bg-white hover:text-[#0A0F29] transition duration-500 rounded-full hover:-translate-y-2">
            Get Started
          </Button>
        </nav>
        
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 relative z-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className='flex flex-col lg:items-start'>
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center lg:text-left text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] leading-none text-transparent dark:from-white dark:to-[#222] font-bold mt-2">
                MEND 
              </span>
              <div className='flex flex-col lg:flex-row items-center lg:items-start -mt-8'>
                <h1 className='text-xl md:text-3xl xl:text-6xl mt-4 md:mt-7'>YOUR</h1> 
                <h1 className='text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-bold mb-4'>HEALTH</h1>
              </div>
            </div>
            <p className="text-xl mt-5 mb-4 text-[#9e9e9e]">
              Welcome to our Healers Healthcare, where we Simplify Appointments
              and Revolutionize Your Health Management
            </p>
          </div>
        </div>
      </header>
      <div className='w-full '>

      <div className=" grid md:grid-cols-2 gap-8 mx-10   relative z-10 mb-10 h-36 ">
      <ShineBorder
      className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-xl  bg-background md:shadow-xl"
      color={["#ffff", "#FE8FB5", "#000"]}
    >
        <div className="bg-gradient-to-br w-full from-[#111427] to-[#080808] px-10 py-10 rounded-xl flex flex-col lg:flex-row text-center lg:text-left items-center justify-around lg:space-x-20">
          <Image src="/CubicTesting.png" alt="Cubic Image" width={100} height={100} />
          <div>
            <h2 className="text-3xl font-bold mb-2 text-wrap">Some random 100% text</h2>
            <p>Welcome to our Healers Healthcare, where we</p>
          </div>
        </div>
        </ShineBorder>

        <ShineBorder
      className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-background md:shadow-xl"
      color={["#ffff", "#FE8FB5", "#000"]}
    >

<div className="bg-gradient-to-br w-full from-[#111427] to-[#080808] px-10 py-10 rounded-xl flex flex-col lg:flex-row text-center lg:text-left items-center justify-around lg:space-x-20">
          <Image src="/CubicTesting.png" alt="Cubic Image" width={100} height={100} />
          <div>
            <h2 className="text-3xl font-bold mb-2 text-wrap">Some random 100% text</h2>
            <p>Welcome to our Healers Healthcare, where we</p>
          </div>
        </div>
    </ShineBorder>
      </div>
      </div>

      <div className="absolute inset-0  z-0 flex items-start justify-start ">
        <DNA2 />
        <div className="absolute top-[30.25rem] -right-[20.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                                    <Image className="w-full opacity-40" src="/gradient.png" width={942} height={942} alt="" />
                                </div>
                            </div>
      </div>
    </div>
  )
}