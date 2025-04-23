import { NavBar } from "./elements/NavBar";
import { Footer } from "./elements/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main className="relative flex flex-col overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};
