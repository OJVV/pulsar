import React from 'react';
import { motion } from 'framer-motion';
import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@heroui/react";
import { Icon } from '@iconify/react';
import { galleryItems } from '../data/gallery';
import foto2 from '../assets/nahum.jpg';
import flyer1 from '../assets/flyer.jpg';
import flyer2 from '../assets/flyer1.jpg';
import flyer3 from '../assets/sakro.jpg';
import flyer4 from '../assets/kenee.jpg';


const GalleryPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = React.useState<string | null>(null);
  
  const handleImageClick = (image: string, caption?: string) => {
    setSelectedImage(image);
    setSelectedCaption(caption || null);
    onOpen();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img 
          src={foto2}
          alt="Gallery" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient flex flex-col justify-center items-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Revive los mejores momentos de nuestros eventos
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestros Eventos</h2>
            <p className="text-gray-400">
              Explora las fotos de nuestros eventos más recientes.
            </p>
          </div>
          
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <GalleryItem
                key={item.id}
                image={item.image}
                caption={item.caption}
                onClick={() => handleImageClick(item.image, item.caption)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Flyers Section */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Flyers</h2>
            <p className="text-gray-400">
              Diseños exclusivos para nuestros eventos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div 
              className="aspect-[3/4] rounded-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleImageClick(flyer1)}
            >
              <img 
                src={flyer1}
                alt="Event Flyer" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="aspect-[3/4] rounded-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleImageClick(flyer2)}
            >
              <img 
                src={flyer2}
                alt="Event Flyer" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="aspect-[3/4] rounded-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleImageClick(flyer3)}
            >
              <img 
                src={flyer3}
                alt="Event Flyer" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="aspect-[3/4] rounded-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleImageClick(flyer4)}
            >
              <img 
                src={flyer4} 
                alt="Event Flyer" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Image Modal */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        size="5xl"
        classNames={{
          backdrop: "bg-black/80 backdrop-blur-sm",
          base: "bg-transparent shadow-none"
        }}
      >
        <ModalContent>
          <ModalBody className="p-0 relative">
            <Button
              isIconOnly
              color="default"
              variant="flat"
              radius="full"
              className="absolute top-2 right-2 z-10 bg-black/50"
              onPress={onClose}
            >
              <Icon icon="lucide:x" className="w-5 h-5" />
            </Button>
            <div className="relative">
              <img 
                src={selectedImage || ""} 
                alt="Gallery image" 
                className="w-full h-auto"
              />
              {selectedCaption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                  <p className="text-white">{selectedCaption}</p>
                </div>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GalleryPage;