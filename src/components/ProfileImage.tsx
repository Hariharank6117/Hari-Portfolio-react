
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ProfileImageProps {
  className?: string;
  showBorder?: boolean;
}

const ProfileImage = ({ className = "", showBorder = true }: ProfileImageProps) => {
  return (
    <div className={`relative ${className}`}>
      {showBorder && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1"
        >
          <Avatar className="w-full h-full">
            <AvatarImage 
              src="/lovable-uploads/fcb4166e-b3b7-4013-8b1d-37420872942e.png" 
              alt="Profile Picture" 
              className="object-cover"
            />
            <AvatarFallback className="text-6xl bg-gray-200">👨‍💻</AvatarFallback>
          </Avatar>
        </motion.div>
      )}
      
      {!showBorder && (
        <Avatar className="w-full h-full">
          <AvatarImage 
            src="/lovable-uploads/fcb4166e-b3b7-4013-8b1d-37420872942e.png" 
            alt="Profile Picture" 
            className="object-cover"
          />
          <AvatarFallback className="text-6xl bg-gray-200">👨‍💻</AvatarFallback>
        </Avatar>
      )}
      
      {showBorder && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-purple-400/50 rounded-full"
        />
      )}
    </div>
  );
};

export default ProfileImage;
