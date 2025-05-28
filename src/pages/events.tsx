import React from 'react';
import { motion } from 'framer-motion';
import { events } from '../data/events';
import EventCard from '../components/event-card';
import imagen from '../assets/nahum.jpg';
import flyer1 from '../assets/flyer.jpg';
import flyer2 from '../assets/flyer1.jpg';
import flyer3 from '../assets/sakro.jpg';
import flyer4 from '../assets/kenee.jpg';
import event from '../assets/galeria1.jpg';

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img 
          src={imagen} 
          alt="Events" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient flex flex-col justify-center items-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Eventos</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Descubre los próximos eventos de PULSARSOUND en San Pedro Sula
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Events List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Próximos Eventos</h2>
            <p className="text-gray-400">
              No te pierdas los mejores eventos de música electrónica en San Pedro Sula.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
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
      
      {/* Past Events */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Eventos Pasados</h2>
            <p className="text-gray-400">
              Revive algunos de nuestros mejores momentos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <img 
                src={flyer1}
                alt="Past Event" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">PULSAR NIGHTS VOL. 9</h3>
                  <p className="text-sm text-gray-300">Marzo 2023</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square overflow-hidden rounded-md">
              <img 
                src={flyer2}
                alt="Past Event" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">TECHNO UNDERGROUND</h3>
                  <p className="text-sm text-gray-300">Febrero 2023</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square overflow-hidden rounded-md">
              <img 
                src={flyer3}
                alt="Past Event" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">DEEP HOUSE SESSIONS</h3>
                  <p className="text-sm text-gray-300">Enero 2023</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square overflow-hidden rounded-md">
              <img 
                src={flyer4}
                alt="Past Event" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold">SUNSET SESSIONS</h3>
                  <p className="text-sm text-gray-300">Diciembre 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Venue Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Nuestros Venues</h2>
              <p className="text-gray-300 mb-6">
                Trabajamos con los mejores espacios en San Pedro Sula para ofrecerte la mejor experiencia en música electrónica.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Icon icon="lucide:map-pin" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Club Elektra</h3>
                    <p className="text-gray-400 text-sm">Barrio Río de Piedras, San Pedro Sula</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Icon icon="lucide:map-pin" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Terraza Urbana</h3>
                    <p className="text-gray-400 text-sm">Barrio Guamilito, San Pedro Sula</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Icon icon="lucide:map-pin" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Warehouse 33</h3>
                    <p className="text-gray-400 text-sm">Zona Industrial, San Pedro Sula</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Icon icon="lucide:map-pin" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Playa Omoa</h3>
                    <p className="text-gray-400 text-sm">Omoa, Cortés (a 30 min de San Pedro Sula)</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src={event} 
                alt="Club Venue" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;