
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedBackground from '@/components/AnimatedBackground';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web",
      image: "🛒",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration and sentiment analysis",
      tech: ["React", "Socket.io", "OpenAI", "Python"],
      category: "AI",
      image: "🤖",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "React Native app for tracking workouts and nutrition",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      image: "💪",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics",
      tech: ["React", "D3.js", "TypeScript", "API"],
      category: "Web",
      image: "📊",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure voting platform using blockchain technology",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      category: "Blockchain",
      image: "🗳️",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "AR Shopping Experience",
      description: "Augmented reality shopping app for furniture",
      tech: ["Unity", "ARCore", "C#", "Firebase"],
      category: "AR/VR",
      image: "🏠",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const categories = ['All', 'Web', 'Mobile', 'AI', 'Blockchain', 'AR/VR'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen pt-24 pb-16"
    >
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none" 
                  : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                }
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-black/20 backdrop-blur-lg border-white/10 h-full overflow-hidden hover:border-purple-400/50 transition-all duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="bg-purple-500/20 text-purple-300 border-purple-400/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none"
                      >
                        Live Demo
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                      >
                        GitHub
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
