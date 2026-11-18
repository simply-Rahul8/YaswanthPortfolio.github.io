import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Database, RefreshCw, Bot, Users } from 'lucide-react';

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
      icon: Database,
      title: 'RAG Systems',
      description: 'Semantic chunking, hybrid search, query transformation, reranking, and RAGAS evaluation for grounded answers.',
    },
    {
      icon: Brain,
      title: 'Prompt and Context Engineering',
      description: 'Client-specific prompts and context design that meet requirement acceptance criteria.',
    },
    {
      icon: RefreshCw,
      title: 'Loop Engineering',
      description: 'Agent loops that plan, act, evaluate, and refine until the task is done right.',
    },
    {
      icon: Bot,
      title: 'Agentic AI',
      description: 'Multi-step workflows chaining LLM calls, tool use, and conditional routing, built with LangGraph.',
    },
    {
      icon: Code,
      title: 'AI-Assisted Development',
      description: 'Automating traditional coding practices with AI to raise team productivity.',
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Led a 5-member team and mentored 5 interns, improving team productivity by 20%.',
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
                  I'm an <span className="text-foreground font-semibold">AI Developer with 1.5+ years of experience</span> designing and delivering LLM applications. I've built <span className="text-primary font-semibold">25+ applications and client solutions</span> and deployed AI assistants for <span className="text-primary font-semibold">50+ clients</span>.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I came to AI through engineering. I started with full-stack development, and that foundation shapes how I build AI today: with attention to <strong className="text-foreground">latency, reliability, and maintainability</strong>, not just model output.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  At <strong className="text-foreground">Tekworks</strong>, I work across three products. In my first three months I shipped <span className="text-primary font-semibold">12 pull requests and 11 features</span>, including GraphRAG, a MATH engine, a Jira integration, token-efficient prompt tuning, and role-based access.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Outside work I build automation end to end: a <strong className="text-foreground">script-to-video pipeline</strong> that publishes to YouTube Shorts and Instagram Reels through their official APIs, and an open-source <strong className="text-foreground">Claude Code skill</strong> that turns videos into PDF summaries. I'm based in Hyderabad and available to join immediately.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  My focus areas are <strong className="text-foreground">Retrieval-Augmented Generation (RAG), prompt, context, and loop engineering, and agentic AI</strong>. For my bachelor's thesis, I built a 3D pose estimation system for fatigue detection that reached <span className="text-primary font-semibold">93% accuracy</span>.
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
              "If you explore my work, you won't just see finished code, you'll see experiments, trade-offs, and learning in progress."
            </blockquote>
            <p className="text-muted-foreground mt-4">That's how I grow as an engineer.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
