
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowWeHelpSection = (): React.JSX.Element => {
  const helpItems = [
    {
      title: "Smarter navigation for AI standards",
      description:
        "Use our repository to explore healthcare governance frameworks with clarity and confidence.",
    },
    {
      title: "Built by students, Led by experts",
      description:
        "Discover curated insights from clinicians and researchers tackling real-world healthcare challenges.",
    },
    {
      title: "Visualize gaps, Drive solutions",
      description:
        "Search and map AI standards nationwide to uncover inconsistencies and spark innovation.",
    },
  ];

  return (
    <section className="relative mx-auto my-0 rounded-[30px] bg-[linear-gradient(19deg,rgba(255,255,255,1)_28%,rgba(255,255,255,1)_98%)]">
      <div className="flex flex-wrap items-center justify-center gap-8 px-[70px] py-16">
        {helpItems.map((item, index) => (
          <Card
            key={index}
            className="flex-1 border-none bg-transparent shadow-none"
          >
            <CardContent className="flex flex-col items-start gap-1 p-0">
              <h3 className="font-['Inter',Helvetica] text-2xl font-medium leading-9 tracking-[0] text-black">
                {item.title}
              </h3>
              <p className="font-['Inter',Helvetica] text-2xl font-normal leading-9 tracking-[0] text-[#828282]">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
