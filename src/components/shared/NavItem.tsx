import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

interface NavItemProps {
  href: string;
  text: string;
  className?: string;
  toggleMenu?: () => void;
}

export const NavItem = ({
  href,
  text,
  className = "",
  toggleMenu,
}: NavItemProps) => {
  const scrollTo = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: href } });
  };

  return (
    <li>
      <a
        href={href}
        className={`link-hover cursor-pointer ${className}`}
        onClick={(e) => {
          e.preventDefault();
          toggleMenu?.();
          scrollTo();
        }}
      >
        <span className="text-top">{text}</span>
        <span className="text-bottom">{text}</span>
      </a>
    </li>
  );
};
