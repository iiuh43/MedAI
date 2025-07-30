import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "AI Powered Search",
      description: "Quickly find revenant healthcare AI standards",
      image: "/image-7.png",
      alt: "AI Powered Search",
    },
    {
      title: "Nationwide Coverage",
      description:
        "Explore governance polices from hospitals to federal agencies across all 50 states-mapped and searchable in one place",
      image: "/image-6.png",
      alt: "Nationwide Coverage",
    },
    {
      title: "Student-led Research",
      description:
        "Built by emerging researchers, this platform bridges technical skills with healthcare impact, turning academic work into public good.",
      image: "/image-8.png",
      alt: "Student-led Research",
    },
  ];

  return (
    <section className="w-full py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardContent className="p-0 flex flex-col gap-6">
              <div className="relative h-[341px] w-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={benefit.alt}
                  src={benefit.image}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-2xl text-black leading-9 font-['Inter',Helvetica]">
                  {benefit.title}
                </h3>
                <p className="font-normal text-2xl text-[#828282] leading-9 font-['Inter',Helvetica]">
                  {benefit.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
