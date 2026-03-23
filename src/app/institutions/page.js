import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import InstitutionsHero from "../../components/Institutions/InstitutionsHero";
import SchoolsSection from "../com/SchoolsSection";

export default function InstitutionsPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="min-h-screen bg-[#f1f3f6] pt-24 pb-20 w-full overflow-hidden">
        <div className="flex flex-col">
          {/* <InstitutionsHero /> */}
          <SchoolsSection/>

          <div className="w-full max-w-[1240px] px-6 mx-auto flex flex-col gap-16 mt-16">
            <section
              id="garima-vidya-vihar"
              className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
            >
              <h2 className="font-heading font-bold text-3xl text-[#a71515] mb-6 border-b border-gray-200 pb-4">
                Garima Vidya Vihar (CBSE)
              </h2>
              <div className="flex flex-col gap-8">
                <div id="gvv-about" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    About School
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="gvv-academics" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Academics
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="gvv-infrastructure" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Infrastructure
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="gvv-activities" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Activities
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="gvv-admissions" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Admissions
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
              </div>
            </section>

            <section
              id="shree-garima-vidya-mandir"
              className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
            >
              <h2 className="font-heading font-bold text-3xl text-[#a71515] mb-6 border-b border-gray-200 pb-4">
                Shree Garima Vidya Mandir (MP Board)
              </h2>
              <div className="flex flex-col gap-8">
                <div id="sgvm-about" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    About School
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="sgvm-academics" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Academics
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="sgvm-results" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Results & Achievements
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="sgvm-admissions" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Admissions
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
              </div>
            </section>

            <section
              id="preschool"
              className="scroll-mt-36 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/50"
            >
              <h2 className="font-heading font-bold text-3xl text-[#a71515] mb-6 border-b border-gray-200 pb-4">
                Little Garimayans Preschool
              </h2>
              <div className="flex flex-col gap-8">
                <div id="preschool-curriculum" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Curriculum
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="preschool-safety" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Safety
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
                <div id="preschool-franchise" className="scroll-mt-36">
                  <h3 className="font-heading font-bold text-xl text-[#1c1b1b] mb-3">
                    Franchise Model
                  </h3>
                  <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                    [Content Placeholder]
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
