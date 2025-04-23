interface BtnLinkDarkProps {
  href: string;
  children: React.ReactNode;
}

export const BtnLinkDark = ({ href, children }: BtnLinkDarkProps) => {
  return (
    <a
      className="text-secondary border-secondary hover:bg-secondary hover:text-primary cursor-pointer rounded-full border bg-transparent px-6 py-2 text-sm font-semibold transition-all duration-200 ease-in-out lg:px-7 lg:py-3"
      href={href}
      target="blank_"
    >
      {children}
    </a>
  );
};
