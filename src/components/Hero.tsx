import { heroData } from "../constants";
import { Button } from "../components/ui/button";
import { heroBanner } from "../assets";
import { CirclePlay } from "lucide-react";

import { useRef } from "react";
import { motion, Variants, useScroll, useSpring, useTransform } from 'motion/react';


import { Dialog, DialogTrigger, DialogContent } from "../components/ui/dialog";
import { AspectRatio } from "../components/ui/aspect-ratio";
import ReactPlayer from "react-player/youtube";


const heroImageVariant: Variants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  

const heroVarient: Variants = {
    start: {},
    end:{
        transition: {
            staggerChildren: 0.4,
        }
    },
}

const heroChildVarient: Variants = {
    start: {
        y:30,
        opacity:0,
        filter: 'blur(5px)' 
    },
    end: {
        y:0,
        opacity:1,
        filter: 'blur(0)',
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
};


const Hero = () => {
    const heroBannerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroBannerRef,
        offset: ['start 90%', 'start 30%']
    });


const rawScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

const scale = useSpring(rawScale, {
  stiffness: 400,
  damping: 28,
  restDelta: 0.001,
});


  return (
    <section className="py-10 md:py-16">
        <motion.div variants={heroVarient} 
        initial= 'start'
        animate='end'
        className="container text-center">
            <div className="max-w-screen-md mx-auto">
                <motion.p  
                variants={heroChildVarient}
                className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10">{heroData.sectionSubtitle}
                </motion.p>

                <motion.h2 
                variants={heroChildVarient}
                className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl">
                    {heroData.sectionTitle}

                    <span className="relative isolate ms-4">{heroData.decoTitle}

                        <span className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-1 lg:top-4 lg:bottom-2 "></span>
                    </span>
                </motion.h2>

                <motion.p 
                variants={heroChildVarient}
                className="text-muted-foreground md:text-xl">{heroData.sectionText}</motion.p>

                <motion.div 
                variants={heroChildVarient}
                className="flex justify-center gap-2 mt-6 md:mt-10">
                    <Button className="cursor-pointer">Start Free Trial</Button>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="cursor-pointer">
                                <CirclePlay /> Watch Demo</Button>
                        </DialogTrigger>

                        <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                            <AspectRatio ratio={16 / 9}>
                                <ReactPlayer url='https://youtu.be/cvd2XGJBgLg' style={{
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                }}/> 
                            </AspectRatio>
                        </DialogContent>
                    
                    </Dialog>
                </motion.div>
            </div>

            <div className="relative mt-4 max-w-screen-xl mx-auto isolate rounded-xl md:mt-5">
            <motion.figure
            ref={heroBannerRef}
            variants={heroChildVarient}
            style={{ scale }}          
            className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden">

            <img src={heroBanner} width={1468} height={815} alt="Analytica Dashboard" />
            </motion.figure>


                {/* Blurry Blow effect*/ }

                <motion.div className="absolute bg-primary inset-5 blur-[50px] -z-10" 
                initial={{
                    scale: 0.8,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1,

                }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: 'backInOut',
                }}
                ></motion.div>
                <motion.div className="absolute inset-0 bg-primary blur-[200px] scale-y-55 scale-x-70 rounded-full -z-50"
                initial= {{
                    scale: 0.4,
                    opacity:0
                }}
                animate= {{
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    duration: 2,
                    delay: 1.5,
                    ease: 'backInOut',
                }}
                ></motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero;