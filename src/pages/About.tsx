
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';

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
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-purple-400/50 rounded-full"
              />
            </div>
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
                  I'm a passionate full-stack developer with over X years of experience creating 
                  digital solutions that make a difference. My journey started with curiosity 
                  about how websites work, and it has evolved into a deep passion for crafting 
                  exceptional user experiences.
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
                  <li>• UI/UX design and implementation</li>
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
