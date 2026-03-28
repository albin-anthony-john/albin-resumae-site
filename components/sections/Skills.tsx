"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import SkillBar from '../ui/SkillBar';
import { skills } from '@/lib/data';
import { Code2, Cloud, Layout, Zap } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Backend & Architecture',
      icon: <Code2 className="w-8 h-8" />,
      skills: skills.backend,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: skills.cloud,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="w-8 h-8" />,
      skills: skills.frontend,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Advanced Engineering',
      icon: <Zap className="w-8 h-8" />,
      skills: skills.advanced,
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Core Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Deep technical expertise across the full stack with a focus on scalable architecture and enterprise solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    delay={skillIndex * 0.1}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '8+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Delivered' },
            { number: '5M+', label: 'Users Served' },
            { number: '99.9%', label: 'Uptime Achieved' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
