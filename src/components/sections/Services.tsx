import { Container } from "../shared/Container";
import { ServiceCard } from "../shared/ServiceCard";
import { services } from "../../utils/services";
import { motion } from "motion/react";

export const Services = () => {
  return (
    <section id="services" className="bg-primary text-secondary">
      <Container>
        <div className="space-y-12.5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-x-16 gap-y-4 md:items-end xl:flex-row"
          >
            <h2 className="heading-2 flex-1 text-2xl sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem]">
              Design. Build. Webflow or React <br /> —your choice.
            </h2>
            <p className="text-secondary/70 max-w-[22rem] md:max-w-[35rem]">
              Startups need more than just a good-looking website—they need a
              site that works effortlessly across all devices and puts
              accessibility first. That’s exactly what I deliver. I build fast,
              responsive, and user-friendly websites that don’t just represent
              your brand but give it an edge.
            </p>
          </motion.div>
          <div>
            <ul className="card-container grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, key) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: key * 0.3 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
