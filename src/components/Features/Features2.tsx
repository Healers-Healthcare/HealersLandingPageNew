import { HoverEffect } from "../ui/card-hover-effect";
import { FaHospitalAlt, FaMobileAlt, FaSearch, FaChartLine, FaClipboardList, FaGift } from "react-icons/fa"; // Icons from react-icons

export function Feature2() {
  return (
    <div className=" max-w-6xl mx-auto px-8 md:px-0" id="Features1">
      <p
        id="trustedBy"
        className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter pointer-events-none bg-gradient-to-r from-black to-[#454545] bg-clip-text leading-none text-transparent dark:from-white dark:to-[#454545]"
      >
        The Features Out of the Blue
      </p>
      <HoverEffect items={projects} />
      
    </div>
  );
}

export const projects = [
  {
    icon: <FaHospitalAlt className="text-3xl text-blue-500" />, // Icon for hospital data management
    title: "Comprehensive Patient Data Management",
    description:
      "We offer a robust platform that enables hospitals to efficiently manage patient data, ensuring secure and organized record-keeping.",
  },
  {
    icon: <FaClipboardList className="text-3xl text-green-500" />, // Icon for appointment scheduling
    title: "Streamlined Appointment Scheduling",
    description:
      "Simplifies the management of day-to-day outpatient department (OPD) appointments, enhancing operational efficiency.",
  },
  {
    icon: <FaSearch className="text-3xl text-yellow-500" />, // Icon for digital solutions
    title: "Tailored Digital Solutions",
    description:
      "Customized digital solutions, including landing page development and SEO, tailored to meet the unique needs of each hospital.",
  },
  {
    icon: <FaChartLine className="text-3xl text-purple-500" />, // Icon for growth
    title: "Promised Growth",
    description:
      "By leveraging our solutions, hospitals can expect a significant growth of 20-30% in their operations and patient engagement.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-red-500" />, // Icon for mobile app
    title: "User-Friendly Mobile Application",
    description:
      "Our Android app allows patients to book appointments with their preferred doctors at nearby hospitals listed on our platform.",
  },
  {
    icon: <FaGift className="text-3xl text-pink-500" />, // Icon for rewards system
    title: "Reward System & NFTs",
    description:
      "Patients earn NFTs and crypto tokens, redeemable for services like blood tests, scans, appointments, and medicine purchases.",
  },
];

