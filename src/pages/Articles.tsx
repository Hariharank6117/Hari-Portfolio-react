
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedBackground from '@/components/AnimatedBackground';

const Articles = () => {
  const articles = [
    {
      title: "Building Responsive Web Applications with React and Tailwind CSS",
      excerpt: "Learn how to create beautiful, responsive web applications using modern tools and best practices.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Tailwind", "CSS"],
      image: "📱"
    },
    {
      title: "The Future of JavaScript: ES2024 Features You Should Know",
      excerpt: "Explore the latest JavaScript features and how they can improve your development workflow.",
      date: "March 10, 2024",
      readTime: "6 min read",
      tags: ["JavaScript", "ES2024", "Frontend"],
      image: "⚡"
    },
    {
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt: "Discover proven techniques to make your React applications faster and more efficient.",
      date: "March 5, 2024",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization"],
      image: "🚀"
    },
    {
      title: "Building APIs with Node.js and Express",
      excerpt: "A comprehensive guide to creating robust and scalable backend APIs.",
      date: "February 28, 2024",
      readTime: "12 min read",
      tags: ["Node.js", "Express", "API"],
      image: "🔧"
    },
    {
      title: "Introduction to Three.js: Creating 3D Web Experiences",
      excerpt: "Get started with Three.js and learn how to add stunning 3D graphics to your web applications.",
      date: "February 20, 2024",
      readTime: "15 min read",
      tags: ["Three.js", "3D", "WebGL"],
      image: "🎮"
    },
    {
      title: "Advanced TypeScript Patterns for Better Code",
      excerpt: "Master advanced TypeScript concepts to write more maintainable and type-safe code.",
      date: "February 15, 2024",
      readTime: "9 min read",
      tags: ["TypeScript", "Patterns", "Best Practices"],
      image: "📚"
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
            Featured Articles
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-black/20 backdrop-blur-lg border-white/10 h-full overflow-hidden hover:border-purple-400/50 transition-all duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {article.image}
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/60 mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary" 
                        className="bg-purple-500/20 text-purple-300 border-purple-400/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="pt-4"
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none"
                    >
                      Read More →
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <Card className="bg-black/20 backdrop-blur-lg border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">📬</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-white/80 mb-6">
                Get notified when I publish new articles and tutorials
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Articles;
