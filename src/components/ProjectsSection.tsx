import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Brain, Cloud, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'SHL Assessment Recommender',
      description: 'LLM-agent recommender that helps recruiters pick the right SHL assessments. Two-call LLM pipeline (intent classification + grounded recommendations), MMR reranking over a FAISS cosine index on all-MiniLM-L6-v2 embeddings, pre-filters for technical/coding terms, and SHL grid + JSON API scraping for high-fidelity metadata. Hallucinations reduced via strict Pydantic schemas, "no internal knowledge" prompting, and a behavioral test suite covering prompt injection, schema compliance, and Recall@10.',
      category: 'AI/LLM',
      icon: Brain,
      highlights: ['Two-call LLM', 'MMR + FAISS', 'Recall@10 tested'],
      technologies: ['Python', 'LangChain', 'FAISS', 'MiniLM', 'Pydantic', 'RAG'],
      githubUrl: 'https://github.com/simply-Rahul8/shl-recommender-agent'
    },
    {
      title: '3D Pose Estimation & Fatigue Detection',
      description: "Bachelor's thesis (Grade B, 93% accuracy) using MMPose HRNet + SemGCN + BiLSTM on smartphone-based motion data.",
      category: 'Research/ML',
      icon: Brain,
      highlights: ['93% accuracy', 'Thesis · Grade B', 'Smartphone-based'],
      technologies: ['Python', 'MMPose', 'SemGCN', 'BiLSTM', 'TensorFlow'],
      githubUrl: 'https://github.com/simply-Rahul8/3D-pose-estimation'
    },
    {
      title: 'Dual-LLM RAG Insight Engine',
      description: 'Multi-LLM orchestration pipeline using Ollama, LangChain, and Streamlit for enhanced reasoning and grounded responses.',
      category: 'AI/LLM',
      icon: Brain,
      highlights: ['Multi-LLM', 'RAG', 'Streamlit UI'],
      technologies: ['Python', 'LangChain', 'Ollama', 'Streamlit'],
      githubUrl: 'https://github.com/simply-Rahul8/Dual-LLM-RAG-based-Pipeline'
    },
    {
      title: 'Customer Feedback Analysis Tool',
      description: 'Hybrid LLM + rule-based system for low-latency sentiment analysis and topic extraction.',
      category: 'AI/NLP',
      icon: Brain,
      highlights: ['<500ms latency', 'Hybrid AI', 'NLP'],
      technologies: ['Python', 'LLM APIs', 'Rule Engine', 'REST APIs'],
      githubUrl: 'https://github.com/simply-Rahul8/Customer-Feedback-Analysis-Tool'
    },
    {
      title: 'TaskFlow SaaS App',
      description: 'Full-stack SaaS task manager serving 200+ users — ASP.NET Core backend, Angular/React frontend, SQL Server, JWT auth.',
      category: 'Full-Stack',
      icon: Zap,
      highlights: ['200+ users', 'JWT Auth', 'SaaS'],
      technologies: ['.NET Core', 'Angular', 'TypeScript', 'SQL Server'],
      githubUrl: 'https://github.com/simply-Rahul8/TAskFlow',
      demoUrl: 'https://taskflow-dev.netlify.app/'
    },
    {
      title: 'Microservices Food Ordering System',
      description: 'Enterprise-grade microservices architecture using C#/.NET Core, Docker, Kubernetes, gRPC and REST.',
      category: 'Cloud/Backend',
      icon: Cloud,
      highlights: ['Microservices', 'Kubernetes', 'gRPC + REST'],
      technologies: ['C#', '.NET Core', 'Docker', 'Kubernetes', 'gRPC'],
      githubUrl: 'https://github.com/simply-Rahul8/Micro-services-Ordering-system'
    },
    {
      title: 'GamePlan Mobile App',
      description: 'Cross-platform React Native app with Firebase realtime sync and a Spring Boot backend.',
      category: 'Mobile',
      icon: Users,
      highlights: ['React Native', 'Firebase', 'Spring Boot'],
      technologies: ['React Native', 'JavaScript', 'Firebase', 'Spring Boot'],
      githubUrl: 'https://github.com/simply-Rahul8/GamePlanApp'
    },
    {
      title: 'Personal Data RAG Chatbot',
      description: 'Privacy-first chatbot with local RAG using Streamlit, Ollama, LangChain and FAISS local vector store.',
      category: 'AI/LLM',
      icon: Brain,
      highlights: ['Privacy-first', 'Local LLM', 'FAISS'],
      technologies: ['Python', 'LangChain', 'Ollama', 'FAISS', 'Streamlit'],
      githubUrl: 'https://github.com/simply-Rahul8/Personal-chatbot'
    },
    {
      title: 'Voice Notes App',
      description: 'Voice-to-text notes application built with JavaScript and Node.js with real-time transcription.',
      category: 'Voice AI',
      icon: Brain,
      highlights: ['Voice AI', 'Speech-to-Text', 'Realtime'],
      technologies: ['JavaScript', 'Node.js', 'Voice APIs'],
      githubUrl: 'https://github.com/simply-Rahul8/Voice--Notes-APP'
    },
    {
      title: 'AWS Grayscale Image Processor',
      description: 'Event-driven serverless image processing pipeline using AWS Lambda and S3.',
      category: 'Cloud/Serverless',
      icon: Cloud,
      highlights: ['Serverless', 'AWS Lambda', 'Event-driven'],
      technologies: ['AWS Lambda', 'Python', 'S3', 'CloudWatch'],
      githubUrl: 'https://github.com/simply-Rahul8/Grayscale-Image-Processor'
    },
    {
      title: 'Financial Backend Architecture',
      description: 'Python-based backend system designed for financial data processing and modular service composition.',
      category: 'Backend',
      icon: Cloud,
      highlights: ['Finance', 'Backend', 'Modular'],
      technologies: ['Python', 'REST APIs', 'PostgreSQL'],
      githubUrl: 'https://github.com/simply-Rahul8/Financial_Backend_Architecture'
    },
    {
      title: 'COVID-19 Data Visualization Tool',
      description: 'Interactive Streamlit visualization tool using Markov Chains for pandemic data trends.',
      category: 'Data/Viz',
      icon: Brain,
      highlights: ['Markov Chains', 'Streamlit', 'Data Viz'],
      technologies: ['Python', 'Streamlit', 'Pandas'],
      githubUrl: 'https://github.com/simply-Rahul8/COVID-19-Data-Visualization-tool'
    }
  ];

  const getCategoryColor = (category: string) => {
    if (category.includes('AI') || category.includes('ML') || category.includes('Research')) return 'secondary';
    if (category.includes('Cloud') || category.includes('Backend')) return 'accent';
    return 'primary';
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack applications, AI/ML systems, and cloud-native solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const categoryColor = getCategoryColor(project.category);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card className="h-full group hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg bg-${categoryColor}/10`}>
                        <Icon className={`h-4 w-4 text-${categoryColor}`} />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-sm">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <Badge key={highlight} className={`text-xs px-2 py-0 bg-${categoryColor}/10 text-${categoryColor} border-0`}>
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{project.technologies.length - 3}</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 h-8 text-xs" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                      {project.demoUrl && (
                        <Button size="sm" className="flex-1 h-8 text-xs" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { number: '15+', label: 'Projects Delivered' },
            { number: '500+', label: 'Users Served' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-card border rounded-xl">
              <div className="text-2xl font-bold text-primary">{stat.number}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
