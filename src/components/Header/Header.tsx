// import Link from 'next/link'
import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { ModeToggle } from '../Navbar/ModeToggle'
import DNA2 from '../3D_Elements/DNA2'
import ShineBorder from '../ui/shine-border'
import Iphone15Pro from '../ui/iphone-15-pro'
// import { Menu } from 'lucide-react'

export default function Header() {
  // const navLinks = [
  //   { href: "#about", text: "About" },
  //   { href: "#features", text: "Features" },
  //   { href: "#faq", text: "FAQ" },
  //   { href: "#contact", text: "Contact Us" },
  // ];

  return (
    // <div className='max-w-full'>
      <div className="bg-gradient-to-br  from-[#000000] max-w-full via-[#020910] to-[#01080f] text-white  relative overflow-hidden">
        <div className='mx-auto overflow-visible relative'>

      <div className=" mx-auto relative z-10">
        <header className="container mx-auto mt-32 px-4 py-6">
          {/* <nav className="flex justify-between items-center mb-8 md:mb-16">
            <div className="flex items-center space-x-2">
              <Image src="/HealersHealthcareOfficialLogo 1.png" alt="Healers Healthcare" width={120} height={120} className="w-auto h-auto" />
            </div>
            <div className="hidden md:flex space-x-8 lg:space-x-12">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-blue-300 transition duration-300 hover:-translate-y-1">
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Button className="hidden md:inline-flex px-5 bg-transparent border border-white text-white hover:bg-white hover:text-[#0A0F29] transition duration-300 rounded-full hover:-translate-y-1">
                Get Started
              </Button>
              <Button className="md:hidden p-2" variant="ghost">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </nav> */}
          
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 ">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <div className='flex flex-col items-center lg:items-start'>
                <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center lg:text-left text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] leading-none text-transparent dark:from-white dark:to-[#222] font-bold mt-2 lg:-translate-x-3">
                  MEND 
                </h1>
                <div className='flex flex-col lg:flex-row items-center lg:items-start -mt-4 lg:-mt-8'>
                  <span className='text-xl md:text-3xl xl:text-6xl mt-2 lg:mt-4'>YOUR</span> 
                  <h2 className='text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-bold ml-2'>HEALTH</h2>
                </div>
              </div>
              <p className="text-lg md:text-xl mt-5 mb-4 text-[#9e9e9e] max-w-2xl mx-auto lg:mx-0">
                Welcome to Healers Healthcare, where we simplify appointments
                and revolutionize your health management experience.
              </p>
            </div>
          </div>
        </header>

        <div className='w-full max-w-[1425px] px-10 xl:px-0 mx-auto '>
          <div className="grid md:grid-cols-2  gap-6 md:gap-10 mb-10">
            <ShineBorder
              className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-background shadow-xl"
              color={["#ffff", "#FE8FB5", "#000"]}
            >
              <div className="bg-gradient-to-br w-full from-[#111427] to-[#080808]  md:p-10 rounded-xl flex flex-col lg:flex-row text-center lg:text-left items-center justify-around lg:space-x-8">
                <Image src="/PhonePhoto.png" alt="Cubic Image" width={110} height={110} className="z-20 mb-4 lg:mb-0 hover:-translate-y-4 transition-all duration-200" />
                
                <div>
                  <h2 className="text-2xl md:text-2xl text-center font-bold mb-2">Healer Healthcare Mobile Application</h2>
                  <p className="text-sm text-center md:text-base">Get Personalized Health Experience With Our Moblie Application</p>
                </div>
              </div>
            </ShineBorder>

            <ShineBorder
              className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-background shadow-xl"
              color={["#ffff", "#FE8FB5", "#000"]}
            >
              <div className="bg-gradient-to-br w-full from-[#111427] to-[#080808] p-6 md:p-10 rounded-xl flex flex-col lg:flex-row text-center lg:text-left items-center justify-around lg:space-x-8">
                <Image src="/CubicTesting.png" alt="Cubic Image" width={110} height={110} className="mb-4 lg:mb-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Some random 100% text</h2>
                  <p className="text-sm md:text-base">Welcome to our Healers Healthcare, where we</p>
                </div>
              </div>
            </ShineBorder>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 -translate-x-4">
        <DNA2 />
        
      </div>
        </div>
    </div>
    // </div>
    
  )
}