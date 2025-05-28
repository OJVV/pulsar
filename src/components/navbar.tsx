import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link as HeroLink } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import logo from '../assets/pulsar.png';

const PulsarNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Eventos", path: "/events" },
    { name: "Galería", path: "/gallery" },
    { name: "Nosotros", path: "/about" },
  ];

  return (
    <Navbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black/90 backdrop-blur-md border-b border-white/10"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Pulsar Logo" className="h-28 w-auto" />
            <div className="font-bold text-white text-xl tracking-wider">
              PULSAR<span className="text-primary">SOUND</span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path} isActive={location.pathname === item.path}>
            <HeroLink 
              as={Link} 
              to={item.path}
              color="foreground"
              className={location.pathname === item.path ? "font-medium" : ""}
            >
              {item.name}
            </HeroLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="hidden sm:flex items-center gap-4">
          <motion.a 
            href="https://instagram.com/pulsarsound" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white hover:text-primary"
          >
            <Icon icon="logos:instagram-icon" className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://facebook.com/pulsarsound" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white hover:text-primary"
          >
            <Icon icon="logos:facebook" className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://soundcloud.com/pulsarsound" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white hover:text-primary"
          >
            <Icon icon="logos:soundcloud" className="w-5 h-5" />
          </motion.a>
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-black/95 pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <HeroLink
              as={Link}
              to={item.path}
              color="foreground"
              size="lg"
              className={`w-full ${location.pathname === item.path ? "font-medium text-primary" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </HeroLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <div className="flex items-center gap-6 mt-6">
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
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default PulsarNavbar;