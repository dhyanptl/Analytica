import { motion } from "motion/react";

import * as variants from "../lib/motionVariants";

import { blogData } from "../constants";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import { publicDecrypt } from "crypto";

const Blog = () => {
  return (
    <section className="section">
        <div className="section">
        <div className="section-head">
        <motion.p
        variants={variants.fadeInUp} 
        initial='start'
        whileInView='end'
        viewport={{ once:true }}
        className="section-subtitle">
          {blogData.sectionSubtitle}
        </motion.p>

        <motion.h2 
        variants={variants.fadeInUp} 
        initial='start'
        whileInView='end'
        viewport={{ once:true }}
        className="section-title">
          {blogData.sectionTitle}
        </motion.h2>

        <motion.p 
        variants={variants.fadeInUp} 
        initial='start'
        whileInView='end'
        viewport={{ once:true }}
        className="section-text">
          {blogData.sectionText}
        </motion.p>
      </div>

      <motion.div 
        variants={variants.staggerContainer} 
        initial='start'
        whileInView='end'
        viewport={{ once:true }}
        className="grid grid-cols-1 mr-5 ml-5 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {blogData.blogs.map(({imgSrc, title, badge, author:
        {avatarSrc, authorName, publishDate, readingTime}}, index) => (
            <motion.div key={index} variants={variants.fadeInUp}>
                <Card className="group">
                    <CardHeader>
                        <figure className="rounded-lg overflow-hidden">
                            <img src={imgSrc} alt={title} className="img-cover group-hover:scale-105 transition-transform duration-500" />
                        </figure>
                    </CardHeader>

                    <CardContent>
                        <Badge className="mb-3 ">{badge}</Badge>
                        <CardTitle className="leading-normal">
                            <a className="hover:text-primary transition-colors" href="#">{title}</a>
                        </CardTitle>
                    </CardContent>

                    <CardFooter className="gap-3">
                        <Avatar>
                            <AvatarImage src={avatarSrc} />
                            <AvatarFallback>{authorName}</AvatarFallback>
                        </Avatar>

                        <div>
                            <p className="text-sm mb-0.5">{authorName}</p>

                            <div className="flex items-center gap-1.5">
                                <time dateTime={publishDate} className="text-xs text-muted-foreground">{publishDate}</time>

                                <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>

                                <p className="text-xs text-muted-foreground">{readingTime}</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        ))}
      </motion.div>
        </div>
    </section>
  )
}

export default Blog