"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { architecturePrinciples } from '@/lib/data';
import { Activity, Lock, Gauge, Network } from 'lucide-react';

const SystemDesign = () => {
  const icons: { [key: string]: React.ReactElement } = {
    'Scalability First': <Network className="w-8 h-8" />,
    'Performance Optimization': <Gauge className="w-8 h-8" />,
    'Security by Design': <Lock className="w-8 h-8" />,
    'Observability': <Activity className="w-8 h-8" />,
  };

  return (
    <section id="architecture" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            System Design <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building enterprise-grade systems that scale to millions of users
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Typical Microservices Architecture
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend Layer */}
            <div className="space-y-4">
              <div className="text-center font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Client Layer
              </div>
              {['React SPA', 'Mobile Apps', 'Admin Portal'].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md text-center"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Gateway & Services */}
            <div className="space-y-4">
              <div className="text-center font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Service Layer
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md text-center font-semibold">
                API Gateway
              </div>
              {['Auth Service', 'User Service', 'Order Service', 'Payment Service'].map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-white dark:bg-gray-900 shadow-md text-center text-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Data & Infrastructure */}
            <div className="space-y-4">
              <div className="text-center font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Data Layer
              </div>
              {['PostgreSQL', 'Redis Cache', 'MongoDB', 'Message Queue', 'Event Store'].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {['Load Balancer', 'CDN', 'Monitoring', 'Log Aggregation'].map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white text-center font-semibold text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Principles */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {architecturePrinciples.map((principle, index) => (
            <Card key={index} className="hover:shadow-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  {icons[principle.title]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {principle.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm"
                  >
                    <span className="text-blue-500 mt-0.5">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { 
              metric: '<100ms', 
              label: 'API Response Time',
              description: 'P99 latency for critical endpoints'
            },
            { 
              metric: '99.9%', 
              label: 'System Uptime',
              description: 'Production availability SLA'
            },
            { 
              metric: '10x', 
              label: 'Traffic Scalability',
              description: 'Handle 10x current load seamlessly'
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{item.metric}</div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">{item.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SystemDesign;
