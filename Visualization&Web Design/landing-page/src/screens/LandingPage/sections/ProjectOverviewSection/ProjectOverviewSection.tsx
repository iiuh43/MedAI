
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const ProjectOverviewSection = (): JSX.Element => {
  const navItems = [
    { text: "Home", path: "/landing-page", isLink: true },
    { text: "Search", path: "", isLink: false },
    { text: "About", path: "", isLink: false },
    { text: "Teams", path: "", isLink: false },
  ];
  const navigate = useNavigate();

  return (
    <section className="w-full h-[601px] bg-[linear-gradient(3deg,rgba(255,255,255,1)_0%,rgba(178,190,248,1)_63%,rgba(67,97,238,1)_100%)]">
      <div className="relative w-full max-w-[1264px] mx-auto pt-[49px] px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-14">
            <img
              className="w-[63px] h-[73px] object-cover"
              alt="Haclab logo"
              src="/haclab-logo-1-1.png"
            />
            <img
              className="w-[129px] h-[73px] object-cover"
              alt="Image"
              src="/image-1-1.png"
            />
          </div>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.isLink ? (
                    <Link
                      to={item.path}
                      className="font-body-text font-[number:var(--body-text-font-weight)] text-[#042c57] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="font-body-text font-[number:var(--body-text-font-weight)] text-[#042c57] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
                      {item.text}
                    </span>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="mt-20 max-w-[600px]">
          <h1 className="text-4xl font-bold text-[#042c57] mb-6">
            AI Governance Standards on Medical Treatments
          </h1>
          <Button
            className="bg-[#042c57] hover:bg-[#031f3d] text-white px-6 py-3 rounded-lg shadow-button-shadow"
            onClick={() => navigate("/map")}
          >
            View Map
          </Button>
        </div>
      </div>
    </section>
  );
};
