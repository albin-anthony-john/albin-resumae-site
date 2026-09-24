"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { engineeringMindset } from '@/lib/data';
import { Target, RefreshCw, Zap, ShieldAlert, BarChart3, MessageSquare } from 'lucide-react';

const EngineeringMindset = () => {
  const icons: { [key: string]: React.ReactElement } = {
    target: <Target className="w-8 h-8" />,
    refresh: <RefreshCw className="w-8 h-8" />,
    zap: <Zap className="w-8 h-8" />,
    'shield-alert': <ShieldAlert className="w-8 h-8" />,
    'bar-chart': <BarChart3 className="w-8 h-8" />,
    'message-square': <MessageSquare className="w-8 h-8" />,
  };

  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-emerald-500',
    'from-indigo-500 to-blue-500',
    'from-rose-500 to-pink-500',
  ];

  return (
    <section id="mindset" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {engineeringMindset.title} <span className="gradient-text">as an Engineer</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {engineeringMindset.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {engineeringMindset.principles.map((principle, index) => (
            <Card key={index} className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${colors[index]} text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {icons[principle.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {principle.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {principle.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              My Core Belief
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
              "Great engineering isn't about writing code—it's about solving problems elegantly, 
              delivering value consistently, and building systems that last."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringMindset;
