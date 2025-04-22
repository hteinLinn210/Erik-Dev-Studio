import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="bg-secondary relative flex h-screen items-center justify-center"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="heading-1 text-center text-[2rem] md:text-left md:text-[4rem] lg:text-[5rem]">
            hey, i'm erik. <br /> i Make websites <br /> w/ <br />{" "}
            <span className="text-brand">Webflow</span> &{" "}
            <span className="text-brand">React</span>
          </h1>
          <div className="bg-primary my-15 h-0.5 w-full"></div>
          <div className="flex flex-col items-center justify-between gap-y-8 md:flex-row">
            <p className="text-primary/70 text-center text-sm md:text-left md:text-base">
              Need something cool online? Let’s make it happen.
            </p>
            <BtnLink href="#work">Explore My Works</BtnLink>
          </div>
        </motion.div>

        <div className="absolute right-1/2 bottom-20 h-24 w-24 translate-x-1/2 translate-y-1/2">
          <DotLottieReact
            src="https://lottie.host/c108bafd-d629-4b9b-9eae-870c5cb7220b/i62t8pUOFF.lottie"
            loop
            autoplay
          />
        </div>
      </Container>
    </section>
  );
};
