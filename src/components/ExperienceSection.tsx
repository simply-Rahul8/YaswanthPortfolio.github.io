import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'AI Developer',
      company: 'Tekworks',
      location: 'Hyderabad, India',
      period: 'Jun 2026 - Present',
      type: 'Full-time',
      duration: '',
      isCurrent: true,
      achievements: [
        'Shipped 12 pull requests and 11 features across 3 products in the first three months',
        'Learning platform: implemented GraphRAG, a MATH engine, an admin panel, and a Jira integration',
        'AI-assisted coding-practice platform (5 languages): built a flash-test module and tuned prompts to be token-efficient',
        'Client-facing web application: implemented soft and hard delete, export and import flows, and view-only access enforced at every layer; fixed a cloning race condition; gave 4 client demos'
      ],
      technologies: ['GraphRAG', 'Prompt Engineering', 'LLMs', 'RAG']
    },
    {
      title: 'AI Developer',
      company: 'Gaddr',
      location: 'Remote, Sweden',
      period: 'Mar 2025 - Apr 2026',
      type: 'Full-time',
      duration: '14 months',
      isCurrent: false,
      achievements: [
        'Delivered AI assistants to 50+ clients via RAG pipelines (LangChain, OpenAI API, vector search) for document Q&A',
        'Prototyped a LangGraph stateful agent workflow, adding conditional branching for clarify, recommend, and refine intents',
        'Led a 5-member team building Node.js, FastAPI, and PostgreSQL applications; mentored 5 interns (+20% productivity)',
        'Reduced deployment time by 15% by containerizing AI applications with Docker and optimizing CI/CD pipelines on AWS'
      ],
      technologies: ['Python', 'LangChain', 'LangGraph', 'OpenAI', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Engineer',
      company: 'Freelance',
      location: 'India',
      period: 'Jul 2022 - Jun 2024',
      type: 'Freelance',
      duration: '2 years',
      isCurrent: false,
      achievements: [
        'Delivered 5+ B2B and DTC software solutions, including a real-time task manager with RBAC and JWT authentication',
        'Reduced technical debt by 20% through systematic refactoring and modern SaaS principles'
      ],
      technologies: ['Node.js', 'REST APIs', 'JWT', 'SQL']
    },
    {
      title: 'Cloud Computing Intern',
      company: 'HDLC Info Technologies',
      location: 'Hyderabad, India',
      period: 'May 2023 - Jun 2023',
      type: 'Internship',
      duration: '2 months',
      isCurrent: false,
      achievements: [
        'Executed 50+ AWS operations (EC2, S3, CloudWatch) for production workloads',
        'Improved deployment efficiency by 10% by automating CI/CD pipelines with GitHub Actions'
      ],
      technologies: ['AWS EC2', 'S3', 'CloudWatch', 'GitHub Actions']
    }
  ];

  const education = [
    {
      degree: 'AI and Analytics (Distance Education)',
      institution: 'Indian Institute of Technology (IIT) Roorkee',
      location: 'India',
      period: 'Ongoing'
    },
    {
      degree: 'B.Tech, Computer Science',
      institution: 'Blekinge Institute of Technology (BTH)',
      location: 'Karlskrona, Sweden',
      period: 'Sep 2024 - Jun 2025'
    },
    {
      degree: 'B.Tech, Computer Science',
      institution: 'Jawaharlal Nehru Technological University (JNTU), Kakinada',
      location: 'India',
      period: 'Dec 2021 - Aug 2024'
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of continuous learning and professional growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                >
                  <Card className="hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          {exp.isCurrent ? (
                            <Badge className="bg-accent/15 text-accent border-accent/30 hover:bg-accent/20 text-[10px] uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-1.5 animate-pulse" />
                              Current
                            </Badge>
                          ) : null}
                          <span className="text-xs text-muted-foreground">
                            {exp.type}{exp.duration ? ` · ${exp.duration}` : ''}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-[10px] font-mono shrink-0">
                          {exp.period}
                        </Badge>
                      </div>

                      <h4 className="font-semibold text-foreground text-lg mb-1">{exp.title}</h4>
                      <p className="text-sm mb-3">
                        <span className="text-primary font-medium">{exp.company}</span>
                        <span className="text-muted-foreground"> · {exp.location}</span>
                      </p>

                      <ul className="space-y-1.5 mb-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded border border-primary/30 text-primary bg-primary/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-secondary/10 rounded-lg">
                <GraduationCap className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </motion.div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <Card className="hover:border-secondary/50 transition-all duration-300">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-sm text-secondary font-medium mb-2">{edu.institution}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Thesis Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-5">
                    <Badge variant="outline" className="mb-3 border-accent text-accent">Bachelor's Thesis</Badge>
                    <h4 className="font-semibold text-foreground mb-2">3D Pose Estimation for Fatigue Detection</h4>
                    
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      Developed a practical, smartphone-based motion analysis system for detecting physical fatigue 
                      without expensive lab equipment. The research focused on making pose estimation accessible 
                      for real-world applications.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Designed end-to-end pipeline using <span className="text-foreground font-medium">Python, TensorFlow, and OpenMMLab</span></span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Achieved <span className="text-accent font-semibold">93% accuracy</span> in fatigue classification using SemGCN architecture</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Low-cost alternative to lab-based motion capture systems</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-accent mt-0.5">•</span>
                        <span>Research that solves real problems and can actually be deployed</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {['Python', 'TensorFlow', 'MMPose', 'SemGCN', 'OpenMMLab', 'Deep Learning'].map((tech) => (
                        <span key={tech} className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href="http://bth.diva-portal.org/smash/record.jsf?pid=diva2:1981297"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-black text-black bg-accent hover:bg-accent/90 px-3 py-1.5 rounded-md transition-colors"
                    >
                      📄 View Publication on DiVA →
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
