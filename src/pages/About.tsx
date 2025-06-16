import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProfileImage from '@/components/ProfileImage';

const About = () => {
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
            About Me
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional, and innovative web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProfileImage className="w-80 h-80 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-4">
                  As I'm a Full Stack Developer with strong skills in HTML5, CSS3, JavaScript, React, and Angular. This section shows my core front-end abilities through a clean and clear design.
                </p>
                <p>
                  I specialize in modern web technologies and love experimenting with new 
                  frameworks and tools. When I'm not coding, you can find me contributing 
                  to open source projects or learning about the latest trends in tech.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">What I Do</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <ul className="space-y-2">
                  <li>• Full-stack web application development</li>
                  <li>• Mobile-responsive design</li>
                  <li>• API development and integration</li>
                  <li>• Performance optimization</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { title: "Creative Problem Solving", icon: "🎨" },
            { title: "Clean Code Advocate", icon: "✨" },
            { title: "Continuous Learner", icon: "📚" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <Card className="bg-black/20 backdrop-blur-lg border-white/10 h-full">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
