"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg';
  const hoverStyles = hover ? 'card-hover' : '';

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
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
