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
      title: 'Full Stack & AI Developer Intern',
      company: 'Gaddr',
      location: 'Sweden',
      period: 'Mar 2025 - Apr 2026',
      type: 'Internship',
      duration: 'Current',
      isCurrent: true,
      achievements: [
        'Led a 5-engineer team delivering 30+ consumer-facing web applications using Angular, Node.js, and PostgreSQL',
        'Engineered AI assistant infrastructure with LangChain and OpenAI API, growing active users to 100+',
        'Mentored 5 junior engineers, improving overall team velocity by 20%',
        'Optimized AWS and Azure CI/CD pipelines, cutting deployment time by 15%',
        'Presented technical demos to stakeholders, aligning engineering deliverables with end-user needs'
      ],
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'LangChain', 'OpenAI', 'AWS', 'Azure']
    },
    {
      title: 'Freelance Full Stack Engineer',
      company: 'Independent Clients (B2B/DTC)',
      location: 'India',
      period: 'Jul 2022 - Jun 2024',
      type: 'Freelance',
      duration: '2 years',
      achievements: [
        'Delivered 5+ end-to-end software products with 100% client satisfaction rate',
        'Architected a real-time task management system with RBAC, JWT auth, and WebSocket updates',
        'Developed a Kotlin-based mobile app with GPS-driven personalization and offline caching',
        'Reduced codebase technical debt by 20% through systematic refactoring and SaaS design patterns',
        'Integrated OpenWeatherMap and other third-party APIs for data-enriched user experiences'
      ],
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Kotlin', 'JWT', 'REST APIs']
    },
    {
      title: 'Cloud Computing Intern',
      company: 'HDLC Info Technologies',
      location: 'Hyderabad, India',
      period: 'May 2023 - Jun 2023',
      type: 'Internship',
      duration: '2 months',
      achievements: [
        'Executed 50+ cloud operations across AWS EC2, S3, and CloudWatch services',
        'Automated CI/CD workflows with GitHub Actions, improving deployment efficiency by 10%',
        'Collaborated with cross-functional teams to deliver cloud-native application features'
      ],
      technologies: ['AWS EC2', 'S3', 'CloudWatch', 'GitHub Actions', 'Docker']
    }
  ];

  const education = [
    {
      degree: 'B.Tech Computer Science (Exchange)',
      institution: 'Blekinge Institute of Technology',
      location: 'Sweden',
      period: '2024 - 2025',
      focus: 'Full-Stack, Cloud, Generative AI'
    },
    {
      degree: 'B.Tech Computer Science',
      institution: 'JNTU',
      location: 'India',
      period: '2021 - 2024',
      focus: 'ML, Data Analytics, Software Development'
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
                      
                      <p className="text-xs text-muted-foreground">{edu.focus}</p>
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

                    <div className="flex flex-wrap gap-1">
                      {['Python', 'TensorFlow', 'MMPose', 'SemGCN', 'OpenMMLab', 'Deep Learning'].map((tech) => (
                        <span key={tech} className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
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
