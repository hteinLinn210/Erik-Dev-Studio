import { motion } from "motion/react";
import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { navItems } from "./NavBar";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-secondary relative flex h-auto flex-col items-center justify-center md:h-screen"
    >
      <Container className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex h-full flex-col justify-between"
        >
          <div className="space-y-4 lg:space-y-8">
            <h2 className="heading-2 flex-1 text-2xl sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem]">
              Let's Talk
            </h2>
            <BtnLink href="#">Get In Touch</BtnLink>
          </div>

          <div className="bg-primary my-8 h-0.5 w-full"></div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div>
              <h4 className="heading-3 sm:text-xl md:text-2xl lg:text-3xl">
                social
              </h4>
              <ul className="mt-4">
                <li className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-primary/70 hover:text-primary max-w-min transition-all duration-100 ease-in-out"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-primary/70 hover:text-primary transition-all duration-100 ease-in-out"
                  >
                    Linked In
                  </a>
                  <a
                    href="#"
                    className="text-primary/70 hover:text-primary transition-all duration-100 ease-in-out"
                  >
                    Behance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="heading-3 sm:text-xl md:text-2xl lg:text-3xl">
                Links
              </h4>
              <ul className="mt-4">
                <li className="flex flex-col gap-2">
                  {navItems.map((item, key) => {
                    const scrollTo = () => {
                      gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: item.href },
                      });
                    };
                    return (
                      <a
                        className="text-primary/70 hover:text-primary cursor-pointer transition-all duration-100 ease-in-out"
                        key={key}
                        onClick={() => {
                          scrollTo();
                        }}
                      >
                        {item.text}
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="heading-3 sm:text-xl md:text-2xl lg:text-3xl">
                phone
              </h4>
              <ul className="mt-4">
                <li className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-primary/70 hover:text-primary max-w-min transition-all duration-100 ease-in-out"
                  >
                    +66626366765
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="heading-3 sm:text-xl md:text-2xl lg:text-3xl">
                Email
              </h4>
              <ul className="mt-4">
                <li className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-primary/70 hover:text-primary max-w-min transition-all duration-100 ease-in-out"
                  >
                    erik102.hteinlinn@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary my-8 h-0.5 w-full"></div>
        </motion.div>
      </Container>
      <div className="bg-primary text-secondary flex w-full items-center justify-center p-4 text-sm md:p-8 lg:p-10">
        <p>@2025. ERIK All Rights Reserved</p>
      </div>
    </footer>
  );
};
