import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export const About = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Search", path: "/" },
    { text: "About", path: "/about" },
    { text: "Teams", path: "/about" },
  ];

  // Form fields data
  const formFields = [
    {
      id: "firstName",
      label: "First name",
      placeholder: "Jane",
      width: "w-[295px]",
    },
    {
      id: "lastName",
      label: "Last name",
      placeholder: "Smitherton",
      width: "w-[297px]",
    },
    {
      id: "email",
      label: "Email address",
      placeholder: "email@janesfakedomain.net",
      width: "w-[626px]",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center px-[89px] pt-[68px]">
          <div className="flex items-start gap-11">
            <img
              className="w-[78px] h-[93px] object-cover"
              alt="Haclab logo"
              src="/haclab-logo-1.png"
            />
            <img
              className="w-[191px] h-[107px] object-cover"
              alt="Image"
              src="/image-1.png"
            />
          </div>

          <nav className="flex gap-[52px]">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]"
                to={link.path}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </header>

        {/* About This Project Section */}
        <section className="flex flex-row mt-[150px] px-[89px] gap-[85px]">
          <div className="flex flex-col w-[624px] items-start gap-6">
            <h1 className="self-stretch font-title font-[number:var(--title-font-weight)] text-black text-[length:var(--title-font-size)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] [font-style:var(--title-font-style)]">
              About This Project
            </h1>

            <h2 className="self-stretch font-subheading font-[number:var(--subheading-font-weight)] text-[#828282] text-[length:var(--subheading-font-size)] tracking-[var(--subheading-letter-spacing)] leading-[var(--subheading-line-height)] [font-style:var(--subheading-font-style)]">
              Subheading for description or instructions
            </h2>

            <div className="w-[720px] font-m3-headline-medium font-[number:var(--m3-headline-medium-font-weight)] text-black text-[length:var(--m3-headline-medium-font-size)] tracking-[var(--m3-headline-medium-letter-spacing)] leading-[var(--m3-headline-medium-line-height)] [font-style:var(--m3-headline-medium-font-style)]">
              Artificial Intelligence (AI) is transforming healthcare by helping
              clinicians diagnose faster, streamlining hospital operations, and
              even predicting patient outcomes. But with innovation comes
              responsibility: Who ensures these powerful tools are safe,
              ethical, and trustworthy?
              <br />
              <br />
              That&apos;s where we come in.
              <br />
              <br />
              We&apos;re building the first interactive, publicly accessible map
              of AI governance across the U.S. healthcare system that tracks
              where rules, standards, and guidance exist, and where they
              don&apos;t. By mapping how healthcare organizations are managing
              AI, we make it easier for everyone, from doctors and nurses to
              developers and policymakers, to find the information they need.
              From federal regulations to hospital-level policies, our platform
              brings it all together in one place.
            </div>
          </div>

          <div className="w-[466px] h-[554px] rounded-lg bg-[url(/image.svg)] bg-cover bg-[50%_50%]" />
        </section>

        {/* Why It Matters Section */}
        <section className="mt-[200px] px-[71px]">
          <h2 className="text-center mb-[40px] font-m3-display-medium-emphasized font-[number:var(--m3-display-medium-emphasized-font-weight)] text-black text-[length:var(--m3-display-medium-emphasized-font-size)] tracking-[var(--m3-display-medium-emphasized-letter-spacing)] leading-[var(--m3-display-medium-emphasized-line-height)] [font-style:var(--m3-display-medium-emphasized-font-style)]">
            Why It Matters
          </h2>

          <div className="font-m3-headline-medium font-[number:var(--m3-headline-medium-font-weight)] text-black text-[length:var(--m3-headline-medium-font-size)] tracking-[var(--m3-headline-medium-letter-spacing)] leading-[var(--m3-headline-medium-line-height)] [font-style:var(--m3-headline-medium-font-style)] max-w-[1106px] mx-auto">
            Right now, AI standards in healthcare are fragmented. Some hospitals
            have robust policies on privacy, bias, or safety—others have none.
            Some states lead the way, while others are still exploring next
            steps. This inconsistency leaves gaps in patient safety, trust, and
            innovation.
            <br />
            <br />
            Our site helps bridge that gap by:
            <br />
            Mapping who&apos;s setting the rules for AI in healthcare across
            different sectors
            <br />
            Highlighting blind spots in areas like rural care, mental health,
            and emergency medicine <br />
            Providing toolkits, guidelines, and resources to support responsible
            implementation
            <br />
            Supporting decision-makers in using AI more safely, fairly, and
            effectively
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="mt-[100px] px-[71px] flex">
          <div className="w-[650px]">
            <h2 className="mb-[40px] font-m3-display-medium-emphasized font-[number:var(--m3-display-medium-emphasized-font-weight)] text-black text-[length:var(--m3-display-medium-emphasized-font-size)] tracking-[var(--m3-display-medium-emphasized-letter-spacing)] leading-[var(--m3-display-medium-emphasized-line-height)] [font-style:var(--m3-display-medium-emphasized-font-style)]">
              Who It&apos;s For
            </h2>

            <div className="font-m3-headline-medium font-[number:var(--m3-headline-medium-font-weight)] text-black text-[length:var(--m3-headline-medium-font-size)] tracking-[var(--m3-headline-medium-letter-spacing)] leading-[var(--m3-headline-medium-line-height)] [font-style:var(--m3-headline-medium-font-style)]">
              This project is for anyone working to shape the future of
              healthcare and technology, including:
              <br />
              <br />
              Hospital leaders and clinical administrators
              <br />
              Doctors, nurses, and frontline healthcare workers
              <br />
              AI developers and healthcare tech teams
              <br />
              Policy advisors, researchers, and students
              <br />
              <br />
              Whether you&apos;re choosing an AI tool, building one, or shaping
              policy—this platform is designed to support informed, equitable,
              and responsible decisions.
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <img
              className="w-[443px] h-[493px] object-cover"
              alt="Healthcare professionals"
              src="/tempimagefitfvw-1.png"
            />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mt-[100px] px-[71px] pb-[100px]">
          <h2 className="text-center mb-[40px] [font-family:'Inter',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[48px]">
            Contact us
          </h2>

          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <form className="flex flex-wrap gap-[24px_32px]">
                {formFields.map((field) => (
                  <div
                    key={field.id}
                    className={`${field.width} h-20 flex flex-col items-start gap-2`}
                  >
                    <label className="self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                      {field.label}
                    </label>
                    <Input
                      className="flex-1 self-stretch bg-white rounded-lg border border-solid border-[#dfdfdf] shadow-button-shadow px-4 py-3 font-small-text text-[#828282]"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="w-[626px] h-[194px] flex flex-col items-start gap-2">
                  <label className="self-stretch font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                    Your message
                  </label>
                  <Textarea
                    className="flex-1 self-stretch bg-white rounded-lg border border-solid border-[#dfdfdf] shadow-button-shadow px-4 py-3 font-small-text text-[#828282]"
                    placeholder="Enter your question or message"
                  />
                </div>

                <Button className="flex items-center justify-center gap-2 px-8 py-4 bg-black rounded-lg shadow-button-shadow text-white font-body-text">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
