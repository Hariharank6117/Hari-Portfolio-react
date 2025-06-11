
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/AnimatedBackground';

const CodingProfiles = () => {
  const platforms = [
    {
      name: "LeetCode",
      icon: "🧩",
      stats: {
        problems: "450+",
        rating: "2100",
        rank: "Top 5%"
      },
      link: "#",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "HackerRank",
      icon: "🏆",
      stats: {
        stars: "5 ⭐",
        badges: "25",
        rank: "Gold"
      },
      link: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Codeforces",
      icon: "⚔️",
      stats: {
        rating: "1850",
        contests: "120+",
        rank: "Expert"
      },
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "CodeChef",
      icon: "👨‍🍳",
      stats: {
        rating: "2000+",
        stars: "4 ⭐",
        rank: "4 Star"
      },
      link: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "GeeksforGeeks",
      icon: "🤓",
      stats: {
        score: "2500+",
        articles: "15",
        rank: "Top 2%"
      },
      link: "#",
      color: "from-red-500 to-rose-500"
    },
    {
      name: "GitHub",
      icon: "🐙",
      stats: {
        repos: "50+",
        stars: "1200+",
        contributions: "500+"
      },
      link: "#",
      color: "from-gray-700 to-gray-900"
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
            Coding Profiles
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My journey across different competitive programming and development platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ y: 50, opacity: 0, rotateY: 90 }}
              animate={{ y: 0, opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Card className="bg-black/20 backdrop-blur-lg border-white/10 h-full overflow-hidden hover:border-purple-400/50 transition-all duration-300 transform-gpu">
                <CardHeader className="text-center relative">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    {platform.icon}
                  </motion.div>
                  
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}
                  />
                  
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors text-2xl">
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {Object.entries(platform.stats).map(([key, value]) => (
                      <motion.div
                        key={key}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-white/70 capitalize">{key}:</span>
                        <span className="text-purple-300 font-semibold">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="pt-4"
                  >
                    <Button 
                      className={`w-full bg-gradient-to-r ${platform.color} text-white border-none hover:shadow-lg transition-all duration-300`}
                    >
                      View Profile →
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <Card className="bg-black/20 backdrop-blur-lg border-white/10 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-3xl mb-4">
                🏅 Overall Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { label: "Problems Solved", value: "1000+", icon: "🧩" },
                  { label: "Contest Participated", value: "200+", icon: "🏆" },
                  { label: "Github Stars", value: "1200+", icon: "⭐" },
                  { label: "Years Coding", value: "5+", icon: "📅" }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 1.2 + index * 0.1,
                      type: "spring",
                      bounce: 0.5
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="text-2xl font-bold text-purple-300 mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-white/70 text-sm">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CodingProfiles;
