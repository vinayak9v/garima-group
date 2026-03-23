import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FranchiseHero from "../../components/Franchise/FranchiseHero";
import FranchiseSupport from "../../components/Franchise/FranchiseSupport";
import InvestmentTiers from "../../components/Franchise/InvestmentTiers";
import FranchiseTrustEnquiry from "../../components/Franchise/FranchiseTrustEnquiry";

export default function FranchisePage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="min-h-screen pt-24 w-full overflow-hidden">
        <FranchiseHero />

        <div id="support-pillars">
          <FranchiseSupport />
        </div>

        <div id="investment-tiers">
          <InvestmentTiers />
        </div>

        <div id="enquiry">
          <FranchiseTrustEnquiry />
        </div>
      </main>
      <Footer />
    </>
  );
}
