"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  glass = false 
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'card-hover' : '';
  const glassStyles = glass ? 'glass' : 'bg-white dark:bg-gray-800 shadow-lg';
  
  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
