"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AdmissionsHero from "../../components/Admissions/AdmissionsHero";
import AdmissionProcess from "../../components/Admissions/AdmissionProcess";
import AdmissionDetails from "../../components/Admissions/AdmissionDetails";

export default function AdmissionsPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="min-h-screen pt-24 w-full overflow-hidden">
        <AdmissionsHero />

        <div id="admission-process" className="scroll-mt-24">
          <AdmissionProcess />
        </div>

        <div id="admission-details" className="scroll-mt-24 mb-20">
          <AdmissionDetails />
        </div>
      </main>
      <Footer />
    </>
  );
}
