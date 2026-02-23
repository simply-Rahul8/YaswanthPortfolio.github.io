import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:80px_80px] dark:bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-screen pt-20 pb-12">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col justify-center"
          >
            {/* Vertical label */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2"
            >
              <span className="vertical-text text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Full-Stack & AI Engineer
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-12 mb-12">
              <div>
                <span className="text-3xl md:text-4xl font-light text-foreground">+30</span>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">Projects delivered</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-light text-foreground">+3</span>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">Years experience</p>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="heading-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-foreground mb-6"
            >
              Hello
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-md"
            >
              — It's Yaswanth Rahul, a Full-Stack & AI Engineer.
              <br />
              <span className="text-sm">
                Certified in AI & Analytics from IIT Roorkee.
              </span>
            </motion.p>

            {/* Year label - bottom left */}
            <motion.div
              variants={itemVariants}
              className="mt-16 hidden lg:block"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">2025</span>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-72 h-[28rem] sm:w-80 sm:h-[32rem] md:w-[24rem] md:h-[36rem] lg:w-[28rem] lg:h-[40rem]">
              <img
                src="/RY Profile image.png"
                alt="Yaswanth Rahul"
                className="w-full h-full object-cover object-top rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle overlay on bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-6 lg:left-12"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Scroll down
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-3 h-3" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
