import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center",
      skills: [
        { name: "React", level: 95, icon: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=40&h=40&fit=crop&crop=center" },
        { name: "TypeScript", level: 90, icon: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=40&h=40&fit=crop&crop=center" },
        { name: "JavaScript", level: 92, icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=40&h=40&fit=crop&crop=center" },
        { name: "HTML & CSS", level: 88, icon: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=center" },
        { name: "Media Query", level: 85, icon: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=center" }
      ]
    },
    {
      title: "Backend",
      icon: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center",
      skills: [
        { name: "Java", level: 92, icon: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=40&h=40&fit=crop&crop=center" },
        { name: "Servlet", level: 88, icon: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=40&h=40&fit=crop&crop=center" },
        { name: "JSP", level: 85, icon: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=40&h=40&fit=crop&crop=center" },
        { name: "Spring", level: 90, icon: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=40&h=40&fit=crop&crop=center" },
        { name: "Spring Boot", level: 88, icon: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=40&h=40&fit=crop&crop=center" },
        { name: "Oracle", level: 82, icon: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=40&h=40&fit=crop&crop=center" }
      ]
    }
  ];

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
            My Skills
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
            >
              <Card className="bg-black/20 backdrop-blur-lg border-white/10 h-full">
                <CardHeader className="text-center">
                  <img 
                    src={category.icon} 
                    alt={category.title}
                    className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
                  />
                  <CardTitle className="text-white text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-8 h-8 rounded object-cover"
                          />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-purple-300 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full relative"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: 1.3 + categoryIndex * 0.2 + skillIndex * 0.1
                            }}
                            className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Showcase */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            What I'm Currently Learning
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["MySQL", "RestAPI", "Tailwind"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  bounce: 0.5
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-purple-400/30 rounded-full px-6 py-3"
              >
                <span className="text-purple-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
