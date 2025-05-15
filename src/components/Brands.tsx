import { motion } from "motion/react";

import { brands } from "../assets";

import * as variants from '../lib/motionVariants';

const Brands = () => {
  return (
    <section className="section">
        <div className="container max-w-screen-lg">
            <motion.p 
            variants={variants.fadeInUp} 
            initial='start'
            whileInView='end'
            viewport={{ once:true }}
            className="text-center mb-4 md:mb-6">
                Powering data insights for today's startup and tommorow's leader.
            </motion.p>

            <motion.div 
            variants={variants.staggerContainer} 
            initial='start'
            whileInView='end'
            viewport={{ once:true }}
            className="flex justify-center flex-warp gap-5 md:gap-10">
                {brands.map((brand,index) => (
                    <motion.figure 
                    variants={variants.fadeInUp}
                    key={index}>
                        <img src={brand} alt="" className="opacity-[0.6]" />
                    </motion.figure>

                ))}
            </motion.div>
        </div>
    </section>
  )
}

export default Brands