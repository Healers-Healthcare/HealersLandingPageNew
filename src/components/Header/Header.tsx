
import Link from 'next/link'
import { Button } from "@/components/ui/button"
// import { Button } from "@/public/CubicTesting.png"
import Image from 'next/image'
import Cubic from '../3D_Elements/SampleCube'
import DNA from '../3D_Elements/DNA'

export default function Header() {
  
  return (
    <div className="bg-gradient-to-br from-[#030c19] via-[#020910] to-[#01080f] bg-opacity-45 text-white h-screen  overflow-x-hidden">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md"></div>
            <span className="font-bold text-xl">Healers Healthcare</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-blue-300 transition-colors">About</Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">Features</Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">FAQ</Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">Contact Us</Link>
          </div>
          <Button className="bg-transparent border border-white hover:bg-white hover:text-[#0A0F29] transition-colors">
            Get Started
          </Button>
        </nav>
        
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl lg:text-[11rem] font-bold ">
              MEND 
            </h1>
              <br /> 
              <div className='flex items-start -mt-8'>

              <h1 className='text-xl md:text-3xl lg:text-6xl  mt-7'>YOUR</h1> 
              
              <h1 className='text-5xl md:text-7xl lg:text-[11rem] font-bold mb-4'>HEALTH</h1>
              </div>
            <p className="text-lg mb-8">
              Welcome to our Healers Healthcare, where we Simplify Appointments
              and Revolutionize Your Health Management
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* <div className="w-64 h-64 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-3xl transform rotate-12"></div> */}
           
            <div className='absolute -translate-y-72 translate-x-40 z-1'>
            {/* <DNA /> */}
            <Cubic />
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 ">
        <div className="bg-[#1A1F3D] p-6 rounded-xl flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md"></div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Some random 100% text</h2>
            <p>Welcome to our Healers Healthcare, where we</p>
          </div>
        </div>
        <div className="bg-[#1A1F3D] p-6 rounded-xl flex items-center space-x-4">
          <div className="text-6xl font-bold">97%</div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Some random 100% text</h2>
            <p>Welcome to our Healers Healthcare, where we</p>
          </div>
        </div>
      </div>
    </div>
  )
}