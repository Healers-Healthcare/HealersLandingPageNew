// import DNA from "@/components/3D_Elements/DNA";
import FAQ from "@/components/FAQ/FAQ";
import FeaturePages from "@/components/Features/FeaturePages";

import { Feature2 } from "@/components/Features/Features2";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HospitalCarousel from "@/components/HospitalCarousel/HospitalCarousel";
import MobileAppSection from "@/components/MobApplicationSection/MobileApplication";
import Navbar from "@/components/Navbar/Navbar";
import TrustedBy2 from "@/components/TrustedBy/TrustedBy2";
import VideoComponent from "@/components/YTSection/Videos";
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], })



export default function Home() {
  return (
    
    <div className={sora.className}>
      <Navbar/> 
    <Header/>
    <TrustedBy2/>
   <Feature2/>
   <FeaturePages/>
   <VideoComponent/>
   <HospitalCarousel/>
   <MobileAppSection/>
   <FAQ/>
    {/* <p>check</p> */}
    <Footer/>
    </div>
  );
}
