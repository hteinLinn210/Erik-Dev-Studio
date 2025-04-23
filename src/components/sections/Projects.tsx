import { useLayoutEffect } from "react";
import { Container } from "../shared/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsInfo } from "../../utils/projectsInfo";
import { motion } from "motion/react";
import { BtnLinkDark } from "../shared/BtnLinkDark";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  useLayoutEffect(() => {
    const panelsContainer = document.querySelector("#panels-container");
    const panels = gsap.utils.toArray<HTMLElement>(".panel");

    if (!panelsContainer || panels.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.1, max: 0.1 },
            inertia: false,
          },
          start: "top top",
          end: "+=" + (panelsContainer.scrollWidth - window.innerWidth),
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="work">
      <div
        id="panels-container"
        className="flex h-screen w-[500%] flex-nowrap overflow-hidden"
      >
        <div className="panel bg-secondary flex h-screen w-full items-center justify-center">
          <h2 className="heading-2 mb-2 text-2xl sm:mb-3 sm:text-[2rem] md:text-[3rem] lg:mb-4 lg:text-[4.5rem]">
            Explore My Projects
          </h2>
        </div>
        {projectsInfo.map((project, index) => (
          <div
            key={index}
            className="panel bg-primary text-secondary h-screen w-full"
          >
            <Container className="h-full">
              <div className="flex h-full flex-col items-center justify-between gap-8 overflow-hidden lg:flex-row">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex w-full shrink-0 flex-col gap-4 lg:w-1/2 lg:flex-row lg:gap-8"
                >
                  <div>
                    <h3 className="heading-3 text-2xl md:text-4xl lg:text-6xl">{`[0${index + 1}]`}</h3>
                  </div>
                  <div className="space-y-1 lg:space-y-4">
                    <h3 className="heading-3 text-2xl md:text-4xl lg:text-6xl">
                      {project.title}
                    </h3>
                    <h4 className="heading-3 text-secondary/40 sm:text-xl md:text-2xl lg:text-3xl">
                      {project.type}
                    </h4>
                    <p className="text-secondary/70 mb-4 md:mb-8">
                      {project.description}
                    </p>
                    <BtnLinkDark href={project.link}>Check it out</BtnLinkDark>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="h-[300px] w-full overflow-hidden rounded-lg lg:h-full"
                >
                  <img
                    className="size-full object-cover object-top"
                    src={project.image}
                    alt={project.alt}
                  />
                </motion.div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </section>
  );
};
