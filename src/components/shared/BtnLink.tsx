import { gsap } from "gsap/gsap-core";

interface BtnLinkProps {
  href: string;
  children: React.ReactNode;
}

export const BtnLink = ({ href, children }: BtnLinkProps) => {
  const scrollTo = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: href } });
  };

  return (
    <a
      className="text-primary border-primary hover:bg-primary cursor-pointer rounded-full border bg-transparent px-6 py-2 text-sm font-semibold transition-all duration-200 ease-in-out hover:text-white lg:px-7 lg:py-3"
      onClick={() => {
        scrollTo();
      }}
    >
      {children}
    </a>
  );
};
