import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection: React.FC = () => {
  // Social media links data
  const socialLinks = [
    {
      icon: "/social-icons.svg",
      alt: "Social media icon",
    },
    {
      icon: "/social-icons-1.svg",
      alt: "Social media icon",
    },
  ];

  return (
    <footer className="w-full py-10 mt-8">
      <Card className="border-none shadow-none">
        <CardContent className="flex justify-between p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-11">
              <img
                className="w-[54px] h-16 object-cover"
                alt="Haclab logo"
                src="/haclab-logo-1-1.png"
              />
              <img
                className="w-[114px] h-16 object-cover"
                alt="Image"
                src="/image-1-1.png"
              />
            </div>

            <div className="flex items-center gap-3.5">
              {socialLinks.map((link, index) => (
                <img
                  key={index}
                  className="w-6 h-6"
                  alt={link.alt}
                  src={link.icon}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-base leading-6 mb-3">Partners</h3>
            <p className="opacity-[0.89] font-small-text text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]">
              HAClab
            </p>
            <p className="mt-3 font-small-text text-[#444444] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)]">
              Emory University Center <br />
              For AI Learning
            </p>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
