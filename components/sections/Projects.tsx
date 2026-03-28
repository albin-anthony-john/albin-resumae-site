"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import { projects } from '@/lib/data';
import { ExternalLink, Star, TrendingUp, Zap, Shield } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world solutions delivering measurable impact at scale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <Card key={project.id} className="group cursor-pointer" hover={true}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(project.impact).slice(0, 4).map(([key, value], impactIndex) => (
                  <div
                    key={impactIndex}
                    className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600"
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-400 capitalize mb-1">
                      {key}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project.id)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                View Details
                <ExternalLink className="w-4 h-4" />
              </button>
            </Card>
          ))}
        </div>

        {/* All Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            + {projects.length - featuredProjects.length} more enterprise projects
          </p>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <>
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-3">
                            {project.category}
                          </span>
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {project.description}
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                        >
                          ×
                        </button>
                      </div>

                      <div className="space-y-6">
                        {/* Problem */}
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-red-500" />
                            Problem Statement
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">{project.problem}</p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            Solution
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Contributions */}
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            Key Contributions
                          </h4>
                          <ul className="space-y-2">
                            {project.contributions.map((contribution, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                              >
                                <span className="text-blue-500 mt-1">✓</span>
                                <span>{contribution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact */}
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            Business Impact
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {Object.entries(project.impact).map(([key, value], index) => (
                              <div
                                key={index}
                                className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600"
                              >
                                <div className="text-sm text-gray-600 dark:text-gray-400 capitalize mb-1">
                                  {key}
                                </div>
                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                  {value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
