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
              align: "center",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {certifications.map((cert, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="flex items-center justify-center min-h-[280px] md:min-h-[320px] lg:min-h-[360px] bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 hover:bg-card/70 transition-all duration-300 hover:shadow-xl">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full max-h-[240px] md:max-h-[280px] lg:max-h-[320px] object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
