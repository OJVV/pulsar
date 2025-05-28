import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from '@iconify/react';
import foto1 from '../assets/galeria1.jpg';
import foto2 from '../assets/nahum.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img 
          src={foto1}
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient flex flex-col justify-center items-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosotros</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Conoce más sobre PULSARSOUND y nuestra misión
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-300 mb-4">
                PULSARSOUND nació en 2015 en San Pedro Sula, Honduras, con la misión de crear un espacio para los amantes de la música electrónica en la ciudad.
              </p>
              <p className="text-gray-300 mb-4">
                Lo que comenzó como pequeñas reuniones entre amigos se ha convertido en uno de los sellos más reconocidos de la escena electrónica hondureña, organizando eventos que reúnen a cientos de personas.
              </p>
              <p className="text-gray-300">
                Nuestro objetivo es promover la cultura de la música electrónica en Honduras, apoyando a artistas locales y trayendo talentos internacionales para enriquecer la escena.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://img.heroui.chat/image/ai?w=800&h=800&u=dj-booth" 
                alt="DJ Booth" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conoce a las personas detrás de PULSARSOUND que hacen posible cada evento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={foto2}
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Carlos Mendoza</h3>
                <p className="text-primary mb-3">Fundador & DJ</p>
                <p className="text-gray-400 text-sm mb-4">
                  Fundador de PULSARSOUND y DJ con más de 10 años de experiencia en la escena electrónica.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Icon icon="logos:instagram-icon" className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Icon icon="logos:soundcloud" className="w-5 h-5" />
                  </a>
                </div>
              </CardBody>
            </Card>
            
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={foto2}
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Nahum Ortiz</h3>
                <p className="text-primary mb-3">Director de Eventos</p>
                <p className="text-gray-400 text-sm mb-4">
                  Encargado de la organización y logística de todos los eventos de PULSARSOUND.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Icon icon="logos:instagram-icon" className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Icon icon="logos:linkedin-icon" className="w-5 h-5" />
                  </a>
                </div>
              </CardBody>
            </Card>
            
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={foto2}
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Nahum Ortiz</h3>
                <p className="text-primary mb-3">Director Creativo</p>
                <p className="text-gray-400 text-sm mb-4">
                  Responsable del diseño visual y la identidad de marca de PULSARSOUND.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Icon icon="logos:instagram-icon" className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Icon icon="logos:behance" className="w-5 h-5" />
                  </a>
                </div>
              </CardBody>
            </Card>
            
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={foto2}
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Nahum Ortiz</h3>
                <p className="text-primary mb-3">Marketing & PR</p>
                <p className="text-gray-400 text-sm mb-4">
                  Encargado de la promoción y relaciones públicas de PULSARSOUND.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Icon icon="logos:instagram-icon" className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary">
                    <Icon icon="logos:twitter" className="w-5 h-5" />
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6">
                <div className="bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Icon icon="lucide:music" className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Nuestra Misión</h3>
                <p className="text-gray-400">
                  Promover la cultura de la música electrónica en Honduras, creando espacios para que artistas locales e internacionales puedan compartir su arte con el público.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6">
                <div className="bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Icon icon="lucide:eye" className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Nuestra Visión</h3>
                <p className="text-gray-400">
                  Convertirnos en el referente de la música electrónica en Centroamérica, expandiendo nuestra presencia a nivel internacional y apoyando el talento local.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-content2 border border-white/10">
              <CardBody className="p-6">
                <div className="bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Icon icon="lucide:heart" className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Nuestros Valores</h3>
                <p className="text-gray-400">
                  Pasión por la música, respeto por la diversidad, compromiso con la calidad y dedicación a crear experiencias únicas para nuestro público.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contáctanos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o propuesta? No dudes en contactarnos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Icon icon="lucide:map-pin" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Dirección</h4>
                    <p className="text-gray-400">San Pedro Sula, Honduras</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Icon icon="lucide:mail" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-400">info@pulsarsound.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Icon icon="lucide:phone" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <p className="text-gray-400">+504 9999-9999</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-2 rounded-md">
                    <Icon icon="lucide:clock" className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Horario</h4>
                    <p className="text-gray-400">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="bg-content2 p-3 rounded-full hover:bg-primary/20 transition">
                    <Icon icon="logos:instagram-icon" className="w-6 h-6" />
                  </a>
                  <a href="https://facebook.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="bg-content2 p-3 rounded-full hover:bg-primary/20 transition">
                    <Icon icon="logos:facebook" className="w-6 h-6" />
                  </a>
                  <a href="https://soundcloud.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="bg-content2 p-3 rounded-full hover:bg-primary/20 transition">
                    <Icon icon="logos:soundcloud" className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="bg-content2 p-3 rounded-full hover:bg-primary/20 transition">
                    <Icon icon="logos:twitter" className="w-6 h-6" />
                  </a>
                  <a href="https://mixcloud.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="bg-content2 p-3 rounded-full hover:bg-primary/20 transition">
                    <Icon icon="logos:mixcloud" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://img.heroui.chat/image/ai?w=800&h=800&u=san-pedro-sula-map" 
                alt="San Pedro Sula Map" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 p-3 rounded-md">
                <h4 className="font-medium text-white">San Pedro Sula, Honduras</h4>
                <p className="text-sm text-gray-300">La capital industrial de Honduras</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;