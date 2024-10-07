// import DNA from "@/components/3D_Elements/DNA";
import FeaturePages from "@/components/Features/FeaturePages";
// import { StickyScrollReveal } from "@/components/Features/Features";
import { Feature2 } from "@/components/Features/Features2";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TrustedBy2 from "@/components/TrustedBy/TrustedBy2";



export default function Home() {
  return (
    
    <div className="">
    <Header/>
    <TrustedBy2/>
    {/* <StickyScrollReveal/> */}
   <Feature2/>
   <FeaturePages/>
    
    {/* <p>check</p> */}
    <Footer/>
    </div>
  );
}
