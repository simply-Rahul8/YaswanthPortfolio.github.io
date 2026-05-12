import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const techBadges = ['React', 'Python', 'LangChain'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />

      {/* Dot pattern decoration - bottom left */}
      <div className="absolute bottom-0 left-0 w-48 h-48 dot-pattern opacity-40 rounded-tr-[4rem]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen pt-20 lg:pt-0 pb-12">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-center"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Open to Work · Sweden / EU · Remote · Hybrid
              </span>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-4"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-4"
            >
              Yaswanth
              <br />
              Rahul
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg font-medium text-foreground/80 mb-4"
            >
              Full-Stack & AI Developer · GenAI Enthusiast
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-md leading-relaxed mb-8"
            >
              I build systems end to end — from clean interfaces to scalable backends and intelligent, AI-driven decision layers.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 border border-border bg-card/60 hover:bg-card px-6 py-3 rounded-lg text-sm font-medium text-foreground transition-all hover:shadow-md"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-72 h-[28rem] sm:w-80 sm:h-[32rem] md:w-[22rem] md:h-[34rem] lg:w-[26rem] lg:h-[38rem]">
              <img
                src="/RY Profile image.png"
                alt="Yaswanth Rahul"
                className="w-full h-full object-cover object-top rounded-lg shadow-hero"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/50 to-transparent rounded-b-lg" />

              {/* Decorative dots - right side */}
              <div className="absolute -right-6 top-1/4 flex flex-col gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                ))}
              </div>

              {/* Decorative vertical line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -right-10 top-1/3 w-px h-20 bg-primary/40 origin-top"
              />

              {/* Tech badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-4 right-0 flex gap-2"
              >
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-xs font-medium text-foreground shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
