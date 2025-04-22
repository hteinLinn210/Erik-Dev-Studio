import { Container } from "../shared/Container";
import logo from "/logo.png";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useRef, useEffect } from "react";

export const navItems = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About Me" },
  { href: "#work", text: "My Works" },
  { href: "#services", text: "Services" },
];

export const NavBar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<SVGSVGElement>(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("opacity-100");
      menuRef.current.classList.toggle("h-dvh");
      menuIconRef.current?.classList.toggle("text-white");
      document.body.classList.toggle("overflow-hidden");
    }
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <header className="bg-secondary absolute inset-0 z-10 flex h-20 items-center">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <a>
              <img src={logo} alt="Brand Logo" width={78} height={23} />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-x-12 md:flex">
            {navItems.map((item, key) => (
              <NavItem
                href={item.href}
                text={item.text}
                key={key}
                toggleMenu={toggleMenu}
              />
            ))}
            <BtnLink href="#contact">Contact Me</BtnLink>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="z-50 md:hidden">
            <button onClick={toggleMenu}>
              <svg
                ref={menuIconRef}
                width="60"
                height="60"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary h-8 w-8 cursor-pointer md:hidden"
              >
                <path
                  d="M3.625 31.75C2.7962 31.75 2.00134 31.4207 1.41529 30.8347C0.829241 30.2486 0.5 29.4538 0.5 28.625V3.63123C0.5 2.80242 0.829241 2.00757 1.41529 1.42152C2.00134 0.835466 2.7962 0.506226 3.625 0.506226H28.625C29.4538 0.506226 30.2487 0.835466 30.8347 1.42152C31.4208 2.00757 31.75 2.80242 31.75 3.63123V28.625C31.75 29.4538 31.4208 30.2486 30.8347 30.8347C30.2487 31.4207 29.4538 31.75 28.625 31.75H3.625ZM47.375 31.75C46.5462 31.75 45.7513 31.4207 45.1653 30.8347C44.5792 30.2486 44.25 29.4538 44.25 28.625V3.63123C44.25 2.80242 44.5792 2.00757 45.1653 1.42152C45.7513 0.835466 46.5462 0.506226 47.375 0.506226H72.3687C73.1975 0.506226 73.9924 0.835466 74.5785 1.42152C75.1645 2.00757 75.4937 2.80242 75.4937 3.63123V28.625C75.4937 29.4538 75.1645 30.2486 74.5785 30.8347C73.9924 31.4207 73.1975 31.75 72.3687 31.75H47.375ZM3.625 75.5C2.7962 75.5 2.00134 75.1707 1.41529 74.5847C0.829241 73.9986 0.5 73.2038 0.5 72.375V47.375C0.5 46.5462 0.829241 45.7513 1.41529 45.1653C2.00134 44.5792 2.7962 44.25 3.625 44.25H28.625C29.4538 44.25 30.2487 44.5792 30.8347 45.1653C31.4208 45.7513 31.75 46.5462 31.75 47.375V72.375C31.75 73.2038 31.4208 73.9986 30.8347 74.5847C30.2487 75.1707 29.4538 75.5 28.625 75.5H3.625ZM47.375 75.5C46.5462 75.5 45.7513 75.1707 45.1653 74.5847C44.5792 73.9986 44.25 73.2038 44.25 72.375V47.375C44.25 46.5462 44.5792 45.7513 45.1653 45.1653C45.7513 44.5792 46.5462 44.25 47.375 44.25H72.3687C73.1975 44.25 73.9924 44.5792 74.5785 45.1653C75.1645 45.7513 75.4937 46.5462 75.4937 47.375V72.375C75.4937 73.2038 75.1645 73.9986 74.5785 74.5847C73.9924 75.1707 73.1975 75.5 72.3687 75.5H47.375Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <div
            ref={menuRef}
            className="bg-primary absolute inset-0 opacity-0 transition-all duration-300 ease-in-out md:hidden"
          >
            <div className="flex h-full items-center justify-center">
              <ul className="flex flex-col items-center gap-y-6">
                {navItems.map((item, key) => (
                  <NavItem
                    href={item.href}
                    text={item.text}
                    key={key}
                    className="heading-2 text-4xl font-semibold text-white"
                    toggleMenu={toggleMenu}
                  />
                ))}
                <NavItem
                  text="Contact Me"
                  href="#contact"
                  className="heading-2 text-4xl font-semibold text-white"
                  toggleMenu={toggleMenu}
                />
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
