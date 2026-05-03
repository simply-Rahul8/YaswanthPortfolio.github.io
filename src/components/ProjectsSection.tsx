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
      title: 'India-Quant-Virtual-SME-Assistant',
      description: 'MCP server connecting Claude Desktop to live Indian stock market data via NSE & yfinance APIs — 10 tools covering live prices, options chains, Black-Scholes Greeks, technical signals, news sentiment, and paper trading.',
      category: 'AI/Finance',
      icon: Brain,
      highlights: ['10 MCP tools', 'Local & free data', 'Paper trading'],
      technologies: ['Python', 'FastMCP', 'SQLite', 'yfinance', 'NSE APIs'],
      githubUrl: 'https://github.com/simply-Rahul8/India-Quant-Virtual-SME-Assistant.git'
    },
    {
      title: 'Customer Feedback Analysis Tool',
      description: 'Hybrid rule-based + AI system for low-latency (<500ms) sentiment analysis and topic extraction.',
      category: 'AI/Generative AI',
      icon: Brain,
      highlights: ['<500ms latency', 'Fault-tolerant', 'Scalable hybrid architecture'],
      technologies: ['Python', 'AI/LLM APIs', 'Rule Engine', 'REST APIs', 'Caching'],
      githubUrl: 'https://github.com/simply-Rahul8/Customer-Feedback-Analysis-Tool.git'
    },
    {
      title: 'TaskFlow - Task Management System',
      description: 'Full-stack web app serving 200+ users with role-based access and real-time tracking.',
      category: 'Full-Stack',
      icon: Zap,
      highlights: ['200+ users', '100% client satisfaction', 'Real-time features'],
      technologies: ['C#', '.NET Core', 'Angular', 'SQL Server', 'JWT'],
      githubUrl: 'https://github.com/simply-Rahul8/TAskFlow.git',
      demoUrl: 'https://taskflow-dev.netlify.app/'
    },
    {
      title: 'Personal Data Chatbot (RAG)',
      description: 'Privacy-preserving chatbot with Retrieval-Augmented Generation for secure document querying.',
      category: 'AI/ML',
      icon: Brain,
      highlights: ['Privacy-first', 'Local infrastructure', 'RAG technology'],
      technologies: ['Python', 'LangChain', 'Ollama', 'FAISS', 'Streamlit'],
      githubUrl: 'https://github.com/simply-Rahul8/Personal-chatbot.git'
    },
    {
      title: '3D Pose Estimation - Fatigue Detection',
      description: 'Bachelor\'s thesis achieving 93% accuracy using smartphone-based motion data and ML.',
      category: 'Research/ML',
      icon: Brain,
      highlights: ['93% accuracy', 'Smartphone-based', 'Academic research'],
      technologies: ['Python', 'TensorFlow', 'MMPose', 'SemGCN', 'OpenCV'],
      githubUrl: 'https://github.com/simply-Rahul8/3D-pose-estimation.git'
    },
    {
      title: 'Dual-LLM Insight Engine',
      description: 'AI chatbot with RAG implementation using multiple language models for enhanced responses.',
      category: 'AI/ML',
      icon: Brain,
      highlights: ['Multi-LLM', 'RAG implementation', 'Robust architecture'],
      technologies: ['Python', 'LangChain', 'Ollama', 'PostgreSQL'],
      githubUrl: 'https://github.com/simply-Rahul8/Dual-LLM-RAG-based-Pipeline.git'
    },
    {
      title: 'GamePlan App',
      description: 'React Native mobile app with GPS-based attendance tracking serving 200+ users.',
      category: 'Mobile/Team Lead',
      icon: Users,
      highlights: ['5-person team lead', 'Cross-platform', 'Real-time sync'],
      technologies: ['React Native', 'Firebase', 'Jest', 'Cypress'],
      githubUrl: 'https://github.com/simply-Rahul8/GamePlanApp.git'
    },
    {
      title: 'Intelligent Medical Consent Flow',
      description: 'AI-powered system that streamlines medical consent with speech tech and NLP.',
      category: 'AI/Healthcare',
      icon: Brain,
      highlights: ['Accessibility', 'Privacy-first', 'Voice-enabled'],
      technologies: ['Python', 'Streamlit', 'Perplexity AI', 'Whisper STT'],
      githubUrl: 'https://github.com/simply-Rahul8/Intelligent-medical-Assista.git'
    },
    {
      title: 'Microservices Food Ordering System',
      description: 'Enterprise-grade microservices with Docker, Kubernetes, and API Gateway.',
      category: 'Cloud/Backend',
      icon: Cloud,
      highlights: ['Microservices', 'Kubernetes', 'API Gateway'],
      technologies: ['.NET Core', 'Docker', 'Kubernetes', 'gRPC'],
      githubUrl: 'https://github.com/simply-Rahul8/Micro-services-Ordering-system.git'
    },
    {
      title: 'Grayscale Image Processor',
      description: 'Serverless AWS Lambda application for event-driven image processing.',
      category: 'Cloud/Serverless',
      icon: Cloud,
      highlights: ['Serverless', 'Cost-effective', 'Team lead'],
      technologies: ['AWS Lambda', 'Python', 'S3', 'CloudWatch'],
      githubUrl: 'https://github.com/simply-Rahul8/Grayscale-Image-Processor.git'
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
            { number: '30+', label: 'Projects Delivered' },
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
