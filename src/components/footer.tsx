import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-white text-2xl tracking-wider mb-4">
              PULSAR<span className="text-primary">SOUND</span>
            </div>
            <p className="text-gray-400 mb-4">
              Sello de música electrónica de San Pedro Sula, Honduras. Eventos, música y cultura electrónica.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <Icon icon="logos:instagram-icon" className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <Icon icon="logos:facebook" className="w-6 h-6" />
              </a>
              <a href="https://soundcloud.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <Icon icon="logos:soundcloud" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <Icon icon="logos:twitter" className="w-6 h-6" />
              </a>
              <a href="https://mixcloud.com/pulsarsound" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <Icon icon="logos:mixcloud" className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">Inicio</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition">Eventos</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition">Galería</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">Nosotros</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-400 mb-2">San Pedro Sula, Honduras</p>
            <p className="text-gray-400 mb-2">info@pulsarsound.com</p>
            <p className="text-gray-400">+504 9999-9999</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PULSARSOUND. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;