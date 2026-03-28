"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { strengths } from '@/lib/data';
import { 
  Layers, 
  Puzzle, 
  Shield, 
  Users, 
  Award, 
  TrendingUp 
} from 'lucide-react';

const Strengths = () => {
  const icons: { [key: string]: React.ReactElement } = {
    layers: <Layers className="w-8 h-8" />,
    puzzle: <Puzzle className="w-8 h-8" />,
    shield: <Shield className="w-8 h-8" />,
    users: <Users className="w-8 h-8" />,
    award: <Award className="w-8 h-8" />,
    'trending-up': <TrendingUp className="w-8 h-8" />,
  };

  return (
    <section id="strengths" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Key <span className="gradient-text">Strengths</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Core competencies that drive excellence and impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <Card key={index} className="text-center group">
              <motion.div
                className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {icons[strength.icon]}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {strength.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {strength.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
