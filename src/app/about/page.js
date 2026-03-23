import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutHero from "../../components/About/AboutHero";
import VisionMission from "../../components/About/VisionMission";
import FounderQuote from "../../components/About/FounderQuote";
import LeadershipTeam from "../../components/About/LeadershipTeam";
import JourneyTimeline from "../../components/About/JourneyTimeline";

export default function AboutPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="min-h-screen bg-[#f1f3f6] pt-24 w-full overflow-hidden">
        {/* Full width container for consistent spacing */}
        <div className="flex flex-col">
          <AboutHero />

          <div id="vision-mission" className="scroll-mt-24">
            <VisionMission />
          </div>

          <FounderQuote />

          <div id="leadership" className="scroll-mt-24">
            <LeadershipTeam />
          </div>

          <div id="journey" className="scroll-mt-24">
            <JourneyTimeline />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
