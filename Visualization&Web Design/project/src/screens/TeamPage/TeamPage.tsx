import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const TeamPage = (): JSX.Element => {
  // Team members data for mapping
  const teamMembers = [
    {
      id: 1,
      name: "ALEX CARTER",
      role: "Head Trainer",
      image: "/1-2.png",
    },
    {
      id: 2,
      name: "MAYA LEE",
      role: "Nutrition Specialist",
      image: "/2-2.png",
    },
    {
      id: 3,
      name: "JORDAN SMITH",
      role: "Cardio Coach",
      image: "/3-2.png",
    },
    {
      id: 4,
      name: "EMMA RODRIGUEZ",
      role: "Yoga and Flexibility Instructor",
      image: "/4-2.png",
    },
    {
      id: 5,
      name: "MAYA LEE",
      role: "Nutrition Specialist",
      image: "/2-2.png",
    },
    {
      id: 6,
      name: "JORDAN SMITH",
      role: "Cardio Coach",
      image: "/3-2.png",
    },
    {
      id: 7,
      name: "EMMA RODRIGUEZ",
      role: "Yoga and Flexibility Instructor",
      image: "/4-2.png",
    },
    {
      id: 8,
      name: "ALEX CARTER",
      role: "Head Trainer",
      image: "/1-2.png",
    },
    {
      id: 9,
      name: "JORDAN SMITH",
      role: "Cardio Coach",
      image: "/3-2.png",
    },
    {
      id: 10,
      name: "ALEX CARTER",
      role: "Head Trainer",
      image: "/1-2.png",
    },
    {
      id: 11,
      name: "EMMA RODRIGUEZ",
      role: "Yoga and Flexibility Instructor",
      image: "/4-2.png",
    },
    {
      id: 12,
      name: "MAYA LEE",
      role: "Nutrition Specialist",
      image: "/2-2.png",
    },
  ];

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team-page" },
  ];

  return (
    <main className="bg-[#e7e7e7] flex flex-row justify-center w-full">
      <div className="bg-[#e7e7e7] w-full max-w-[1560px] min-h-screen relative px-4">
        {/* Header with logo and navigation */}
        <header className="flex justify-between items-center py-12">
          <div className="flex items-center gap-4">
            <img
              className="h-[79px] w-auto object-cover"
              alt="Haclab logo"
              src="/haclab-logo-1.png"
            />
            <img
              className="h-[107px] w-auto object-cover"
              alt="University logo"
              src="/image-1.png"
            />
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.name === "Team" ? (
                    <Link
                      to={item.path}
                      className="font-body-text text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-body-text text-black text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                      {item.name}
                    </span>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        {/* Team members grid */}
        <section className="flex flex-wrap justify-center gap-6 mt-24 mb-24">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="w-[228px] bg-transparent border-none shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-6 p-3">
                <Avatar className="w-[204px] h-[204px] rounded-full overflow-hidden">
                  <AvatarImage
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gray-200">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-center gap-1 w-full">
                  <h3 className="font-heading-small font-[number:var(--heading-small-font-weight)] text-[#10152e] text-[length:var(--heading-small-font-size)] text-center tracking-[var(--heading-small-letter-spacing)] leading-[var(--heading-small-line-height)] [font-style:var(--heading-small-font-style)]">
                    {member.name}
                  </h3>
                  <p className="font-body-small font-[number:var(--body-small-font-weight)] text-[#262d4d] text-[length:var(--body-small-font-size)] text-center tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
};
