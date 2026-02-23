import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'yashwanthrahul5126@gmail.com', href: 'mailto:yashwanthrahul5126@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Karlskrona, Sweden', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yaswanthrahul', href: 'https://www.linkedin.com/in/yaswanthrahul/' },
    { icon: Github, label: 'GitHub', value: 'github.com/simply-Rahul8', href: 'https://github.com/simply-Rahul8' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to opportunities in Sweden and ready to build something amazing
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                className="p-4 bg-card border rounded-xl text-center hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground truncate">{item.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3">Ready to Build Something Amazing?</h3>
                <p className="text-muted-foreground mb-6 text-sm max-w-lg mx-auto">
                  With 3+ years of experience in full-stack development and AI engineering, 
                  I'm ready to contribute to your team's success.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button size="lg" asChild>
                    <a href="mailto:yashwanthrahul5126@gmail.com">
                      <Send className="h-4 w-4 mr-2" />
                      Get in Touch
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://www.linkedin.com/in/yaswanthrahul/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
