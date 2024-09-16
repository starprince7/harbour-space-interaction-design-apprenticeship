import AboutApprenticeship from "@/components/app/AboutApprenticeship";
import Faq from "@/components/app/Faq";
import Header from "@/components/app/Header";
import HeroSection from "@/components/app/HeroSection";
import ScholarshipInformation from "@/components/app/ScholarshipInformation";
import WhatPeopleSay from "@/components/app/WhatPeopleSay";


export default function Home() {
  return <div>
    <Header />
    <HeroSection />
    <AboutApprenticeship />
    <ScholarshipInformation />
    <WhatPeopleSay />
    <Faq />
  </div>
}
