import { Layout } from "./components/Layout";
import { AboutMe } from "./components/sections/About-me";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
      }}
    >
      <Layout title="Erik Dev Studio">
        <Hero />
        <AboutMe />
        <Projects />
        <Services />
      </Layout>
      <Analytics />
    </ReactLenis>
  );
}

export default App;
