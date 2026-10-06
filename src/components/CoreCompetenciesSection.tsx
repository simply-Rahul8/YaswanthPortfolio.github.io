import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Database, RefreshCw, Bot, Cpu, Cloud } from 'lucide-react';

const CoreCompetenciesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const competencies = [
    {
      icon: Database,
      title: 'RAG Systems',
      description: 'Semantic and hybrid search, query transformation, reranking, metadata filtering, Pinecone, FAISS, RAGAS.',
    },
    {
      icon: RefreshCw,
      title: 'Prompt, Context and Loop Engineering',
      description: 'Prompt design, context management, iterative agent loops, LLM evaluation.',
    },
    {
      icon: Bot,
      title: 'Agentic AI',
      description: 'AI agents, multi-step agentic workflows, multi-agent systems, stateful task routing, MCP.',
    },
    {
      icon: Brain,
      title: 'LLM Frameworks and Platforms',
      description: 'LangChain, LangGraph, OpenAI API, AWS Bedrock, Gemini, Groq.',
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'NLP, computer vision, TensorFlow, PyTorch, OpenMMLab.',
    },
    {
      icon: Cloud,
      title: 'Backend and Cloud',
      description: 'Python, Node.js, Next.js, FastAPI, REST APIs, PostgreSQL, AWS, GCP, Docker, CI/CD.',
    },
  ];

  return (
    <section id="competencies" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            RAG, agentic AI, and prompt engineering backed by solid cloud and backend skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {competencies.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group p-5 bg-card border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Roles Seeking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 p-6 bg-muted/50 rounded-2xl border">
            <span className="text-muted-foreground text-sm">Seeking roles in:</span>
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              AI Developer
            </span>
            <span className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              AI Engineer
            </span>
            <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
              GenAI Engineer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreCompetenciesSection;
