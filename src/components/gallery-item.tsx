import React from 'react';
import { motion } from 'framer-motion';

interface GalleryItemProps {
  image: string;
  caption?: string;
  onClick?: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, caption, onClick }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-md cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={caption || "Gallery image"} 
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm">{caption}</p>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryItem;