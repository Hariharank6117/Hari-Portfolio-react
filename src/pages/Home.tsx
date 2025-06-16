
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedBackground from '@/components/AnimatedBackground';

const AnimatedSphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        color="#8B5CF6" 
        metalness={0.7}
        roughness={0.2}
        emissive="#8B5CF6"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Home = () => {
  const scrollToContent = () => {
    const targetElement = document.getElementById('content-section');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // Fallback to window scroll
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center pt-20 relative">
        <AnimatedBackground />
        <ParticleBackground />
        
        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Hello, I'm
                </span>
                <br />
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-white"
                >
                  Hariharan
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed"
              >
                Full Stack Developer & Creative Technologist
                <br />
                Building the future, one line of code at a time
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <Link to="/projects">View My Projects</Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    <Link to="/resume">Download Resume</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right 3D Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-96 lg:h-[500px]"
            >
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              </Canvas>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          onClick={scrollToContent}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Outer glow effect */}
          <motion.div
            className="absolute inset-0 w-8 h-12 bg-gradient-to-b from-purple-400/30 to-pink-400/30 rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-8 h-12 border-2 border-gradient-to-b from-purple-400 to-pink-400 rounded-full flex justify-center bg-black/20 backdrop-blur-sm hover:border-white/80 hover:bg-black/40 transition-all duration-300"
            style={{
              borderImage: 'linear-gradient(to bottom, #a855f7, #ec4899) 1'
            }}
          >
            {/* Inner dot */}
            <motion.div
              animate={{ 
                y: [2, 16, 2],
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 shadow-lg"
            />
          </motion.div>
          
          {/* Text label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              delay: 1
            }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-medium whitespace-nowrap"
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section with ID for smooth scrolling */}
      <div id="content-section" className="min-h-screen bg-black/20 backdrop-blur-sm flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Welcome to My Portfolio
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Explore my projects, skills, and experience as a developer. 
              I create innovative solutions using cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Link to="/about">Learn More About Me</Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
