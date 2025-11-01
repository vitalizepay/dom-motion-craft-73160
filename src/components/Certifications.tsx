import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import globalRecycled from "@/assets/certifications/global-recycled.jpg";
import oekoTex from "@/assets/certifications/oeko-tex.jpg";
import wrap from "@/assets/certifications/wrap.jpg";
import disneyFama from "@/assets/certifications/disney-fama.jpg";
import bci from "@/assets/certifications/bci.jpg";
import bsci from "@/assets/certifications/bsci.jpg";
import smeta from "@/assets/certifications/smeta.jpg";

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  const certifications = [
    { name: "Global Recycled Standard", image: globalRecycled },
    { name: "OEKO-TEX Standard 100", image: oekoTex },
    { name: "WRAP", image: wrap },
    { name: "Walt Disney FAMA Certified", image: disneyFama },
    { name: "BCI Better Cotton Initiative", image: bci },
    { name: "BSCI", image: bsci },
    { name: "SMETA", image: smeta },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-wide">
            OUR SUPPLY CHAIN CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex items-center justify-center h-32 md:h-40 bg-card rounded-lg border border-border hover:border-accent transition-colors duration-300 p-4 md:p-6">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
