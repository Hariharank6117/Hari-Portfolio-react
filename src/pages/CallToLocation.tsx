
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const CallToLocation = () => {
  const navigate = useNavigate();

  const handleBookMeeting = () => {
    navigate('/contact');
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
            Let's Connect
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to discuss your next project? Let's schedule a call or meet in person
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <MapPin className="text-purple-400" />
                  My Location
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-4">
                  📍 Based in Dharmapuri, Tamil Nadu, India
                </p>
                <p>
                  I'm available for remote work globally and in-person meetings 
                  in Tamil Nadu and surrounding areas. Let's find the best way to collaborate!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Calendar className="text-pink-400" />
                  Schedule a Call
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Ready to discuss your project? Book a free consultation call.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    onClick={handleBookMeeting}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Meeting
                  </Button>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Phone className="text-blue-400" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Prefer a quick chat? Reach out directly:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-white/70">📧 dpihariharan2002@gmail.com</p>
                  <p className="text-white/70">📱 +91 9025516697</p>
                  <p className="text-white/70">💬 Available Mon-Fri, 9AM-6PM IST</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-96 lg:h-[600px]"
          >
            <div className="w-full h-full rounded-lg overflow-hidden bg-black/20 backdrop-blur-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2313282967!2d77.87429686965317!3d12.048267162823252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b6e4c7d3361%3A0x6e61a70b6863d433!2sDharmapuri%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallToLocation;
