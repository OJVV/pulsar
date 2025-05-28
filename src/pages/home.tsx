import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from '@iconify/react';
import HeroSection from '../components/hero-section';
import EventCard from '../components/event-card';
import { events } from '../data/events';
import { galleryItems } from '../data/gallery';

const HomePage: React.FC = () => {
  const featuredEvents = events.slice(0, 3);
  const featuredGallery = galleryItems.slice(0, 4);
  
  return (
    <div>
      <HeroSection />
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">PULSAR<span className="text-primary">SOUND</span></h2>
            <p className="text-lg text-gray-300 mb-8">
              Somos un sello de música electrónica con base en San Pedro Sula, Honduras. 
              Desde 2011 hemos estado organizando los mejores eventos de música electrónica, 
              promoviendo artistas locales y trayendo talentos internacionales a nuestra ciudad.
            </p>
            <Button
              as={Link}
              to="/about"
              color="primary"
              variant="light"
              className="font-medium"
            >
              Conoce más sobre nosotros
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Próximos Eventos</h2>
            <Button
              as={Link}
              to="/events"
              variant="light"
              color="primary"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              Ver todos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map(event => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                image={event.image}
                price={event.price}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Galería</h2>
            <Button
              as={Link}
              to="/gallery"
              variant="light"
              color="primary"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              Ver galería completa
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredGallery.map(item => (
              <motion.div
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={item.image} 
                  alt={item.caption || "Gallery image"} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Music Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Música</h2>
            <p className="text-lg text-gray-300">
              Escucha nuestros sets y producciones en las principales plataformas de streaming.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="logos:soundcloud" className="w-10 h-10" />
                  <h3 className="text-xl font-semibold">SoundCloud</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Escucha nuestros sets más recientes y producciones exclusivas.
                </p>
                <Button
                  as="a"
                  href="https://soundcloud.com/pulsarsound"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="flat"
                  fullWidth
                >
                  Escuchar en SoundCloud
                </Button>
              </CardBody>
            </Card>
            
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="logos:mixcloud" className="w-10 h-10" />
                  <h3 className="text-xl font-semibold">Mixcloud</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Sets completos de nuestros eventos y sesiones especiales.
                </p>
                <Button
                  as="a"
                  href="https://mixcloud.com/pulsarsound"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="flat"
                  fullWidth
                >
                  Escuchar en Mixcloud
                </Button>
              </CardBody>
            </Card>
            
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="logos:spotify-icon" className="w-10 h-10" />
                  <h3 className="text-xl font-semibold">Spotify</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Nuestras playlists y producciones originales en Spotify.
                </p>
                <Button
                  as="a"
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="flat"
                  fullWidth
                >
                  Escuchar en Spotify
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mantente Conectado</h2>
            <p className="text-lg text-gray-300 mb-8">
              Suscríbete a nuestro newsletter para recibir información sobre eventos, lanzamientos y promociones exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="https://instagram.com/pulsarsound"
                target="_blank"
                rel="noopener noreferrer"
                color="default"
                variant="flat"
                startContent={<Icon icon="logos:instagram-icon" className="w-5 h-5" />}
              >
                Instagram
              </Button>
              <Button
                as="a"
                href="https://facebook.com/pulsarsound"
                target="_blank"
                rel="noopener noreferrer"
                color="default"
                variant="flat"
                startContent={<Icon icon="logos:facebook" className="w-5 h-5" />}
              >
                Facebook
              </Button>
              <Button
                as="a"
                href="https://soundcloud.com/pulsarsound"
                target="_blank"
                rel="noopener noreferrer"
                color="default"
                variant="flat"
                startContent={<Icon icon="logos:soundcloud" className="w-5 h-5" />}
              >
                SoundCloud
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;