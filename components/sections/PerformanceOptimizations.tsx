"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { performanceOptimizations } from '@/lib/data';
import { TrendingDown, TrendingUp, ArrowRight } from 'lucide-react';

const PerformanceOptimizations = () => {
  return (
    <section id="optimizations" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Before vs After <span className="gradient-text">Optimizations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Measurable performance improvements delivered in production
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {performanceOptimizations.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {item.project}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Before */}
                <div className="p-6 rounded-lg bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                    <h4 className="text-lg font-bold text-red-700 dark:text-red-400">Before</h4>
                  </div>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
                    {item.before.metric}
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Issues:</p>
                    {item.before.issues.map((issue, issueIndex) => (
                      <div key={issueIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-red-500 flex-shrink-0">✗</span>
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>

                {/* After */}
                <div className="p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h4 className="text-lg font-bold text-green-700 dark:text-green-400">After</h4>
                  </div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
                    {item.after.metric}
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Improvements:</p>
                    {item.after.improvements.map((improvement, improvementIndex) => (
                      <div key={improvementIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-green-500 flex-shrink-0">✓</span>
                        <span>{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="mt-6 text-center">
                <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                  Impact: {item.impact}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Average Performance Gain', value: '16x', color: 'from-blue-500 to-cyan-500' },
            { label: 'Response Time', value: '<100ms', color: 'from-green-500 to-emerald-500' },
            { label: 'Cost Savings', value: '$50K+', color: 'from-purple-500 to-pink-500' },
            { label: 'Systems Optimized', value: '20+', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceOptimizations;
