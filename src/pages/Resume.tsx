
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Your_Name_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            My Resume
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Download my latest resume or view it online
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4"
                >
                  <FileText className="w-10 h-10 text-white" />
                </motion.div>
                <CardTitle className="text-white text-2xl">
                  Professional Resume
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-white/80 text-lg">
                  Get a comprehensive overview of my skills, experience, and achievements
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      onClick={handleDownload}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download PDF
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      Preview Online
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resume Preview */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Resume Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-8 min-h-[600px]">
                  {/* Resume content preview */}
                  <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Name</h1>
                      <p className="text-lg text-gray-600">Full Stack Developer</p>
                      <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
                        <span>your.email@example.com</span>
                        <span>•</span>
                        <span>+1 (555) 123-4567</span>
                        <span>•</span>
                        <span>Your City, Country</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
                          Professional Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                          Passionate Full Stack Developer with 5+ years of experience building 
                          modern web applications. Skilled in React, Node.js, and cloud technologies. 
                          Committed to writing clean, efficient code and delivering exceptional user experiences.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
                          Technical Skills
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-medium text-gray-800 mb-2">Frontend</h3>
                            <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS, Next.js</p>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800 mb-2">Backend</h3>
                            <p className="text-sm text-gray-600">Node.js, Python, Express, PostgreSQL</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-4">
                          Experience
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium text-gray-800">Senior Frontend Developer</h3>
                            <p className="text-sm text-gray-600">Company Name • 2022 - Present</p>
                            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside space-y-1">
                              <li>Led development of user-facing features for 100k+ users</li>
                              <li>Improved application performance by 40% through optimization</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
