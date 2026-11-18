import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Dual-LLM RAG Insight Engine',
      problem: 'Enterprise users needed accurate, grounded answers from large internal document collections.',
      solution: 'Dual-LLM RAG with semantic chunking, hybrid search, query transformation, and reranking.',
      result: 'Answer quality validated with RAGAS Faithfulness and Context Relevance metrics.',
      category: 'AI/LLM',
      icon: Brain,
      highlights: ['Dual-LLM', 'RAGAS evaluated'],
      technologies: ['Python', 'LangChain', 'Ollama', 'Streamlit'],
      githubUrl: 'https://github.com/simply-Rahul8/Dual-LLM-RAG-based-Pipeline'
    },
    {
      title: 'SHL Assessment Recommender',
      description: 'LLM-agent recommender that helps recruiters pick the right SHL assessments. Two-call LLM pipeline (intent classification + grounded recommendations), MMR reranking over a FAISS cosine index on all-MiniLM-L6-v2 embeddings, pre-filters for technical/coding terms, and SHL grid + JSON API scraping for high-fidelity metadata. Hallucinations reduced via strict Pydantic schemas, "no internal knowledge" prompting, and a behavioral test suite covering prompt injection, schema compliance, and Recall@10.',
      category: 'Agentic AI',
      icon: Brain,
      highlights: ['Two-call LLM', 'MMR + FAISS', 'Recall@10 tested'],
      technologies: ['Python', 'LangChain', 'FAISS', 'MiniLM', 'Pydantic', 'RAG'],
      githubUrl: 'https://github.com/simply-Rahul8/shl-recommender-agent',
      demoUrl: 'https://shl-recommender-agent-production.up.railway.app/'
    },
    {
      title: 'Script-to-Short Automation Pipeline',
      description: 'Automation pipeline that turns a rough script into a 1-minute vertical video with a 2D character (lip-sync, captions, sound design) and publishes it to YouTube Shorts and Instagram Reels through their official APIs. Runs locally as Claude Code skills.',
      category: 'Automation',
      icon: Brain,
      highlights: ['End-to-end automation', 'Auto-publishing'],
      technologies: ['Python', 'Claude Code', 'YouTube API', 'Instagram API'],
      githubUrl: 'https://github.com/simply-Rahul8/MTP-clone-YT-Automation-pipeline'
    },
    {
      title: 'youtube-summary (Claude Code Skill)',
      description: 'Open-source skill that turns a YouTube video or recording into a detailed PDF summary using captions or local Whisper. Filters Whisper hallucinations and passed 17 of 17 automated checks.',
      category: 'Automation',
      icon: Brain,
      highlights: ['Open source (MIT)', '17/17 checks'],
      technologies: ['Python', 'Whisper', 'Claude Code'],
      githubUrl: 'https://github.com/simply-Rahul8/youtube-summary'
    },
    {
      title: '3D Pose Estimation and Fatigue Detection',
      problem: 'Detecting physical fatigue in real time from human body movement.',
      solution: '3D pose pipeline using HRNet keypoints, SemGCN spatial and BiLSTM temporal modeling.',
      result: '93% classification accuracy at 30 FPS on a standard GPU.',
      category: 'Research/ML',
      icon: Brain,
      highlights: ['93% accuracy', '30 FPS'],
      technologies: ['Python', 'MMPose', 'SemGCN', 'BiLSTM', 'TensorFlow'],
      githubUrl: 'https://github.com/simply-Rahul8/3D-pose-estimation'
    },
    {
      title: 'Customer Feedback Analysis Tool',
      problem: 'Unstructured customer feedback was difficult to categorize and analyze at scale.',
      solution: 'Hybrid LLM and rule-based pipeline for sentiment analysis and automated categorization.',
      result: 'Sub-500ms latency insights surfacing recurring customer opinion trends.',
      category: 'AI/NLP',
      icon: Brain,
      highlights: ['<500ms latency', 'Hybrid AI'],
      technologies: ['Python', 'LLM APIs', 'Rule Engine', 'REST APIs'],
      githubUrl: 'https://github.com/simply-Rahul8/Customer-Feedback-Analysis-Tool'
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
            RAG systems, AI automation, and applied machine learning
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
                <Card className="h-full flex flex-col group hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5 flex flex-col flex-1">
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
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-sm line-clamp-2 min-h-[2.5rem]">
                      {project.title}
                    </h3>
                    {'problem' in project ? (
                      <dl className="text-xs text-muted-foreground mb-3 leading-relaxed space-y-1.5">
                        {([['Problem', project.problem], ['Solution', project.solution], ['Result', project.result]] as const).map(([label, text]) => (
                          <div key={label}>
                            <dt className="inline font-semibold text-foreground">{label}: </dt>
                            <dd className="inline">{text}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-3 min-h-[3.6rem]">
                        {project.description}
                      </p>
                    )}

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1 mb-3 min-h-[1.5rem]">
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <Badge key={highlight} className={`text-xs px-2 py-0 bg-${categoryColor}/10 text-${categoryColor} border-0`}>
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4 min-h-[1.5rem]">
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
                    <div className="flex gap-2 mt-auto">
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
            { number: '25+', label: 'Applications Delivered' },
            { number: '50+', label: 'Clients Served' },
            { number: '1.5+', label: 'Years in AI Development' },
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
