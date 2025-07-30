import React from "react";
import { Button } from "../../components/ui/button";
import { BenefitsSection } from "./sections/BenefitsSection";
import { HowWeHelpSection } from "./sections/HowWeHelpSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ProjectOverviewSection } from "./sections/ProjectOverviewSection";

const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Project Overview Section */}
        <div className="w-full">
          <ProjectOverviewSection />
          <img
            className="w-[766px] h-[125px] ml-16 mt-[-369px] relative"
            alt="Subtract"
            src="/subtract.svg"
          />
        </div>

        {/* How We Help Section */}
        <div className="w-full mt-16">
          <div className="flex justify-between items-center mx-[78px] mb-8">
            <h2 className="font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px]">
              01. How can we help?
            </h2>
          </div>
          <HowWeHelpSection />
        </div>

        {/* Introduction Section */}
        <div className="w-full mt-16">
          <IntroductionSection />
        </div>

        {/* Benefits Section */}
        <div className="w-full mt-16">
          <h2 className="mx-[68px] mb-8 font-['Inter',Helvetica] font-semibold text-black text-5xl tracking-[-0.96px]">
            03. Benefits
          </h2>
          <BenefitsSection />
        </div>

        {/* Main Content Section */}
        <div className="w-full mt-16">
          <MainContentSection />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
