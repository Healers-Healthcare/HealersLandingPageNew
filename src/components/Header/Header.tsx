
import Link from 'next/link'
import { Button } from "@/components/ui/button"
// import { Button } from "@/public/CubicTesting.png"
import Image from 'next/image'
// import Cubic from '../3D_Elements/SampleCube'
// import DNA from '../3D_Elements/DNA'
import Globe from '../3D_Elements/Globe'
import { ModeToggle } from '../Navbar/ModeToggle'
// import Cubic from '../3D_Elements/SampleCube'

export default function Header() {
  
  return (
    <div className="bg-gradient-to-br from-[#000000] via-[#020910] to-[#01080f] text-white ">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md"></div> */}
            {/* <span className="font-bold text-xl">Healers Healthcare</span> */}
            <Image src="/HealersHealthcareOfficialLogo 1.png" alt="Healers Healthcare" width={150} height={150} />
          </div>
          <div className="hidden md:flex space-x-20">
            <Link href="#" className="hover:text-blue-300 transition duration-500 hover:-translate-y-2">About</Link>
            <Link href="#" className="hover:text-blue-300 transition duration-500 hover:-translate-y-2">Features</Link>
            <Link href="#" className="hover:text-blue-300 transition duration-500 hover:-translate-y-2">FAQ</Link>
            <Link href="#" className="hover:text-blue-300 transition duration-500 hover:-translate-y-2">Contact Us</Link>
          </div>
          <ModeToggle />
          <Button className="px-5 bg-transparent border text-white border-white hover:bg-white hover:text-[#0A0F29] transition duration-500 rounded-full hover:-translate-y-2 ">
            Get Started
          </Button>
        </nav>
        
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 overflow-x-hidden">
          <div className=" md:w-1/2 mb-8 md:mb-0 h-full">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl lg:text-[11rem] leading-none text-transparent dark:from-white dark:to-slate-900/10 font-bold mt-2">
              MEND 
            </span>
            
              <br /> 
              <div className='flex items-start -mt-8'>

              <h1 className='text-xl md:text-3xl lg:text-6xl  mt-7'>YOUR</h1> 
              
              <h1 className='text-5xl md:text-7xl lg:text-[11rem] font-bold mb-4'>HEALTH</h1>
              </div>
            <p className="text-xl mt-5 mb-4 text-[#9e9e9e]">
              Welcome to our Healers Healthcare, where we Simplify Appointments
              and Revolutionize Your Health Management
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* <div className="w-64 h-64 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-3xl transform rotate-12"></div> */}
           
            <div className='translate-x-14 '>
            {/* <DNA /> */}
            {/* <Cubic /> */}
            <Globe />
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4  grid md:grid-cols-2 gap-8 ">
        <div className="bg-gradient-to-br from-[#1a1f3d86] to-[#080808] px-10 py-10 rounded-xl flex items-center justify-around space-x-20">
          {/* <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md"></div> */}
          <Image src="/CubicTesting.png" alt="Cubic Image" width={150} height={150} />
          <div>
            <h2 className="text-4xl font-bold mb-2 text-wrap">Some random 100% text</h2>
            <p>Welcome to our Healers Healthcare, where we</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#1a1f3d86] to-[#080808] px-10 py-10 rounded-xl flex items-center justify-around space-x-20">
          <div className="text-6xl font-bold">97%</div>
          <div>
            <h2 className="text-4xl font-bold mb-2 text-wrap">Some random 100% text</h2>
            <p>Welcome to our Healers Healthcare, where we</p>
          </div>
        </div>
      </div>
    </div>
  )
}