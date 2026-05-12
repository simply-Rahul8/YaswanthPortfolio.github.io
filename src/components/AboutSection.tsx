import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Cloud, Layers, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const philosophyPoints = [
    {
      icon: Code,
      title: 'Engineering First',
      description: 'Started with full-stack (React, Angular, .NET, Python), now designing systems under real constraints—scale, latency, security.',
    },
    {
      icon: Brain,
      title: 'AI with Purpose',
      description: 'Beyond "calling a model"—I focus on how models reason, how prompts shape behavior, and how context is managed.',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Deployed on AWS, Azure, GCP. Built microservices with Docker/Kubernetes, serverless architectures, and CI/CD pipelines.',
    },
    {
      icon: Layers,
      title: 'Systems Thinking',
      description: 'From 3D pose estimation research to production RAG chatbots—every solution considers reliability, validation, and real-world usability.',
    },
    {
      icon: Users,
      title: 'Collaborative Leader',
      description: 'Led teams, mentored developers, and explained complex technical ideas to non-technical stakeholders.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learner',
      description: 'Experimenting with prompt engineering, multi-LLM orchestration, and reducing hallucinations in production systems.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
              My <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From full-stack foundations to AI-driven systems
            </p>
          </motion.div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Main Story */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a <span className="text-foreground font-semibold">junior-level Full-Stack & AI Engineer with 2+ years of hands-on experience</span> who
                  enjoys building systems end to end — from clean, thoughtful user interfaces, all the way down to
                  <span className="text-secondary font-medium"> scalable backend services</span> and
                  <span className="text-accent font-medium"> intelligent, AI-driven decision layers</span>.
                  My work lives at the intersection of software engineering, cloud platforms, machine learning, and applied AI.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I didn't arrive at AI by chasing trends — I came here through engineering. I started by building full-stack applications
                  with <strong className="text-foreground">React, Angular, .NET, and Python</strong>, deploying systems on AWS, Azure, and GCP.
                  Over time, I became most interested in understanding <strong className="text-foreground">how systems behave under real constraints</strong>:
                  scale, latency, security, and maintainability.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  For my thesis, I built a <strong className="text-foreground">3D pose estimation system for fatigue detection</strong> using
                  smartphone-based motion data — achieving <span className="text-primary font-semibold">93% accuracy</span> with a practical,
                  low-cost approach using MMPose HRNet, SemGCN, and BiLSTM.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Today I actively experiment with <strong className="text-foreground">prompt engineering, Retrieval-Augmented Generation,
                  and multi-LLM orchestration</strong> — focusing on reliability, explainability, and reducing hallucinations in production systems.
                </p>
              </div>

              {/* Languages */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 bg-card border rounded-lg">
                  <span className="text-sm text-muted-foreground">English</span>
                  <span className="block text-foreground font-medium">Fluent</span>
                </div>
                <div className="px-4 py-2 bg-card border rounded-lg">
                  <span className="text-sm text-muted-foreground">Swedish</span>
                  <span className="block text-foreground font-medium">B2 Intermediate</span>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Cards */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="grid gap-3">
                {philosophyPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-3 p-4 bg-card border rounded-xl hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{point.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quote/Tagline */}
          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl border"
          >
            <blockquote className="text-xl md:text-2xl font-medium text-foreground italic">
              "If you explore my work, you won't just see finished code—you'll see experiments, trade-offs, and learning in progress."
            </blockquote>
            <p className="text-muted-foreground mt-4">That's how I grow as an engineer.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
