import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Database, Cloud, Brain, Cpu, Bot, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('rag');

  const skillCategories = {
    rag: {
      title: 'RAG Systems',
      icon: Database,
      skills: [
        'Semantic Chunking',
        'Hybrid Search',
        'Query Transformation',
        'Reranking',
        'Metadata Filtering',
        'Pinecone',
        'FAISS',
        'RAGAS'
      ]
    },
    prompt: {
      title: 'Prompt, Context and Loop Engineering',
      icon: RefreshCw,
      skills: [
        'Prompt Design',
        'Context Management',
        'Iterative Agent Loops',
        'LLM Evaluation'
      ]
    },
    agentic: {
      title: 'Agentic AI',
      icon: Bot,
      skills: [
        'AI Agents',
        'Multi-Step Agentic Workflows',
        'Multi-Agent Systems',
        'Stateful Task Routing',
        'MCP'
      ]
    },
    frameworks: {
      title: 'LLM Frameworks',
      icon: Brain,
      skills: [
        'LangChain',
        'LangGraph',
        'OpenAI API',
        'AWS Bedrock',
        'Gemini',
        'Groq'
      ]
    },
    ml: {
      title: 'Machine Learning',
      icon: Cpu,
      skills: [
        'NLP',
        'Computer Vision',
        'TensorFlow',
        'PyTorch',
        'OpenMMLab'
      ]
    },
    backend: {
      title: 'Backend and Cloud',
      icon: Cloud,
      skills: [
        'Python',
        'Node.js',
        'Next.js',
        'FastAPI',
        'REST APIs',
        'PostgreSQL',
        'AWS',
        'GCP',
        'Docker',
        'CI/CD'
      ]
    }
  };

  const categories = Object.entries(skillCategories);

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI engineering skills from RAG and agents to backend and cloud
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(([key, cat]) => {
            const Icon = cat.icon;
            const isActive = activeCategory === key;
            return (
              <Button
                key={key}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(key)}
                className={`transition-all ${isActive ? 'shadow-md' : ''}`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {cat.title}
              </Button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {categories.map(([key, cat]) => {
            const Icon = cat.icon;
            if (key !== activeCategory) return null;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-card border rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
