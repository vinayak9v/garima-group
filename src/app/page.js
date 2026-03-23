
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import ImpactNumbers from "../components/ImpactNumbers/ImpactNumbers";
import InstitutionsSection from "../components/InstitutionsSection/InstitutionsSection";
import FutureEducationSection from "../components/FutureEducationSection/FutureEducationSection";
import TimelineSection from "../components/TimelineSection/TimelineSection";
import JoinFamilySection from "../components/JoinFamilySection/JoinFamilySection";
import TrustAndFranchiseSection from "../components/TrustAndFranchiseSection/TrustAndFranchiseSection";
import Footer from "../components/Footer/Footer";
import SchoolsSection from "./com/SchoolsSection";
import HighlightsSection from "./com/HighlightsSection";
import LogoCarousel from "./com/LogoCarousel";
import USPSection from "./com/USPSection";
import Testimonials from "./com/Testimonials";
import CurriculumChoice from "./com/CurriculumChoice";
import QuickEnquiry from "./com/QuickEnquiry";

export default function Home() {
  return (
     <>
      <Navbar />
      <main>
        <HeroSection />
        <SchoolsSection/>
        {/* <ImpactNumbers />   */}
        <HighlightsSection/>
        {/* <InstitutionsSection /> */}
        <Testimonials/>
        {/* <SchoolsSection/> */}
        <USPSection/>
        <CurriculumChoice/>
        {/* <FutureEducationSection /> */}
        <TrustAndFranchiseSection />
        <TimelineSection />
        <LogoCarousel/>
        <JoinFamilySection />
          <QuickEnquiry/>
      </main>
      <Footer />
    </>
  );
}
