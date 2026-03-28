"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { productionChallenges } from '@/lib/data';
import { AlertTriangle, CheckCircle2, Zap } from 'lucide-react';

const ProductionChallenges = () => {
  return (
    <section id="challenges" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Production Challenges <span className="gradient-text">I Solved</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world problems tackled in high-pressure production environments
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {productionChallenges.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900 flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.challenge}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    "{item.situation}"
                  </p>
                </div>
              </div>

              {/* Action Taken */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Actions Taken
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {item.action.map((action, actionIndex) => (
                    <li
                      key={actionIndex}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-blue-500 mt-1 flex-shrink-0">●</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
                      {item.result}
                    </p>
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-sm">
                      {item.impact}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              These aren't hypothetical scenarios
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Every challenge above was solved under pressure in production environments, 
              delivering measurable business impact and preventing revenue loss.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionChallenges;
