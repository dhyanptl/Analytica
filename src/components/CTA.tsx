import { motion } from "motion/react";

import * as variants from "../lib/motionVariants";

import { ctaData } from "../constants";

import { ctaBanner } from "../assets";

import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="section">
        <div className="container">
            <motion.div 
                variants={variants.fadeInUp} 
                initial='start'
                whileInView='end'
                viewport={{ once:true }}
                className="bg-primary rounded-xl border-t border-primary-foreground/30 overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:items-center">
                <div className="p-8 md:p-16 xl:p-20">
                    <motion.h2
                        variants={variants.fadeIn} 
                        initial='start'
                        whileInView='end'
                        viewport={{ once:true }}
                        className="text-[26px] leading-tight font-semibold mb-6 capitalize sm:text-[34px] md:text-[40px] lg:text-[46px] lg:mb-10">{ctaData.text}</motion.h2>

                    <motion.div 
                        variants={variants.fadeIn} 
                        initial='start'
                        whileInView='end'
                        viewport={{ once:true }}
                        className="flex items-center gap-3 lg:gap-4">
                        <Button className="bg-foreground text-background hover:bg-foreground/95 cursor-pointer">Free Trial</Button>

                        <Button variant="outline" className="!bg-transparent border-current cursor-pointer">Pricing and Plans</Button>
                    </motion.div>
                </div>

                <motion.figure 
                    variants={variants.fadeInLeft} 
                    initial='start'
                    whileInView='end'
                    viewport={{ once:true }}
                    className="order-2 lg:order-none p-4 lg:p-0 ">
                    <img src={ctaBanner} alt="" className="w-full h-full object-contain object-right" />
                </motion.figure>
            </motion.div>
        </div>
    </section>
  )
}

export default CTA