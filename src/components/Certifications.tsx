import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
            <CarouselContent className="-ml-6 md:-ml-8">
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className="pl-6 md:pl-8 basis-1/2 md:basis-1/4">
                  <div className="flex items-center justify-center min-h-[280px] md:min-h-[320px] bg-transparent p-6 md:p-8">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full max-h-[240px] md:max-h-[280px] object-contain hover:scale-110 transition-transform duration-300"
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
