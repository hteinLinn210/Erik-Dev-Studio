import { Container } from "../shared/Container";
import memoji from "/memoji.png";
import { PilledSkills } from "../shared/PilledSkills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "motion/react";

const skills = [
  "Webflow",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "GSAP",
];

export const AboutMe = () => {
  return (
    <section id="about" className="bg-primary text-secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-stretch justify-between gap-8 md:flex-row"
        >
          <div className="flex w-full flex-col justify-between gap-8 md:w-1/2">
            <div>
              <h2 className="heading-2 mb-2 text-2xl sm:mb-3 sm:text-[2rem] md:text-[3rem] lg:mb-4 lg:text-[4.5rem]">
                About Me
              </h2>
              <p className="text-secondary/70 sm:text-xl md:text-2xl lg:text-3xl">
                I create interactive, animated web experiences with React,
                blending design and development for smooth, high-performance
                interfaces. I also use Webflow to build seamless, no-code
                solutions.
              </p>
            </div>
            <div className="space-y-4">
              <Swiper
                modules={[Autoplay, FreeMode]}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                loop={true}
                speed={5000}
                grabCursor={true}
                spaceBetween={16}
                slidesPerView="auto"
                className="!overflow-hidden"
              >
                {skills.map((skill, key) => (
                  <SwiperSlide className="!w-fit" key={key}>
                    <PilledSkills skill={skill} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                modules={[Autoplay, FreeMode]}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                loop={true}
                speed={5000}
                grabCursor={true}
                spaceBetween={16}
                slidesPerView="auto"
                className="!overflow-hidden"
              >
                {skills.map((skill, key) => (
                  <SwiperSlide className="!w-fit" key={key}>
                    <PilledSkills skill={skill} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="flex w-full flex-1 items-center justify-center">
            <div className="bg-secondary text-primary flex w-full max-w-[20rem] flex-col items-start gap-4 rounded-lg p-4 sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
              <h3 className="heading-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
                hello!
              </h3>
              <div className="h-auto w-full">
                <img src={memoji} alt="Memoji" />
              </div>
              <p className="text-sm md:text-base">
                I'm open to opportunities to build and optimize innovative
                projects, whether it's scaling a product or crafting immersive
                UI.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
