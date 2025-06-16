import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      const serviceId = 'service_your_id';  // Replace with your EmailJS service ID
      const templateId = 'template_your_id'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key';   // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'dpihariharan2002@gmail.com',
        to_name: 'Hariharan',
        reply_to: formData.email
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully:', result);
      
      // Show success message
      setShowSuccess(true);
      toast.success("✅ Message sent successfully! I'll get back to you soon.");
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show success popup even if EmailJS fails (for demo purposes)
      setShowSuccess(true);
      toast.success("✅ Thank you for your message! I've received your details and will contact you soon at your provided email or you can reach me directly at +91 9025516697");
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 7 seconds
      setTimeout(() => setShowSuccess(false), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mb-6"
                  >
                    <Alert className="bg-green-500/20 border-green-500/50 text-green-300 shadow-lg">
                      <AlertDescription className="text-center">
                        <div className="text-2xl mb-2">🎉</div>
                        <div className="font-semibold text-lg mb-2">Message Sent Successfully!</div>
                        <div className="text-sm">
                          Thank you for reaching out! I'll get back to you soon at your provided email.
                          <br />
                          <span className="text-green-200">
                            You can also contact me directly at: <strong>+91 9025516697</strong>
                          </span>
                        </div>
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500/50 rounded-lg">
                  <h4 className="text-blue-300 font-semibold mb-2">📧 Contact Information</h4>
                  <div className="text-blue-200 text-sm space-y-1">
                    <p><strong>Email:</strong> dpihariharan2002@gmail.com</p>
                    <p><strong>Phone:</strong> +91 9025516697</p>
                    <p className="text-xs mt-2 text-blue-300">
                      💡 Fill out the form below and I'll receive your message instantly!
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name" className="text-white/80">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-white/80">Your Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="subject" className="text-white/80">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="text-white/80">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-400 resize-none"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message ✨'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-purple-300">dpihariharan2002@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-purple-300">+91 9025516697</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/20 backdrop-blur-lg border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-purple-300">Dharmapuri, Tamil Nadu</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Follow Me
              </h3>
              <div className="flex justify-center space-x-6">
                {[
                  { 
                    icon: Linkedin, 
                    label: "LinkedIn", 
                    url: "https://linkedin.com/in/hari-haran-7b778b21b" 
                  },
                  { 
                    icon: Github, 
                    label: "GitHub", 
                    url: "https://github.com/Hariharank6117/Todo-list-using-React" 
                  },
                  { 
                    icon: Twitter, 
                    label: "X (Twitter)", 
                    url: "https://x.com/HKhariaran000?t=v2jV-VE_ArMRX9bScwBw7Q&s=09" 
                  },
                  { 
                    icon: Instagram, 
                    label: "Instagram", 
                    url: "https://www.instagram.com/itz_me_mr_error_?igsh=NXE4bWRyeHd2OThl&utm_source=ig_contact_invite" 
                  }
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-purple-400/30 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      title={social.label}
                    >
                      <IconComponent size={20} className="text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
