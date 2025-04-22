import { useEffect } from "react";
import { NavBar } from "./elements/NavBar";
import { Footer } from "./elements/Footer";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <NavBar />
      <main className="relative flex flex-col overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};
