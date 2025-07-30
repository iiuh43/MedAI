import React from "react";
import { Button } from "../../../../components/ui/button";

export const IntroductionSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[linear-gradient(208deg,rgba(77,179,213,0.06)_50%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(4,44,87,1)_0%,rgba(4,44,87,1)_100%)] shadow-[0px_4px_4px_#00000040] border border-solid border-black">
      <div className="container mx-auto px-4">
        <h2 className="font-semibold text-5xl text-white tracking-[-0.96px] mb-16 font-['Inter',Helvetica]">
          02. Project Overview
        </h2>

        <div className="max-w-xl mb-12">
          <p className="text-2xl text-white leading-9 font-['Inter',Helvetica]">
            We're creating the first interactive map of Al governance in U.S.
            healthcare-making it easy to see where standards exist and where
            gaps remain. By centralizing policies from hospitals to federal
            agencies, our platform empowers clinicians, developers, and
            policymakers to make safer, more informed decisions about Al in
            healthcare.
          </p>
        </div>

        <Button
          variant="default"
          className="bg-white text-[#042c57] hover:bg-white/90 font-medium text-2xl px-6 py-3 rounded-lg shadow-button-shadow font-['Inter',Helvetica]"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};
