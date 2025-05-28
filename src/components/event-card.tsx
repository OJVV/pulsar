import React from 'react';
import { Card, CardBody, Button } from "@heroui/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  price: string;
}

const EventCard: React.FC<EventCardProps> = ({ id, title, date, location, image, price }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="event-card bg-content1 overflow-hidden border border-white/10"
        isPressable
        disableRipple
      >
        <CardBody className="p-0 overflow-hidden">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-gray-300 text-sm mb-1">{date}</p>
              <p className="text-gray-400 text-sm mb-3">{location}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">{price}</span>
                <Button
                  as={Link}
                  to={`/events/${id}`}
                  color="primary"
                  variant="flat"
                  size="sm"
                >
                  Detalles
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default EventCard;