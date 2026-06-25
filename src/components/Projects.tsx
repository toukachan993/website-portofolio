import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, FolderKanban } from 'lucide-react';
import { projects, categories } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(proj => proj.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Data Engineering': 'from-blue-400 to-cyan-500',
      'Cloud': 'from-purple-400 to-pink-500',
      'ML/AI': 'from-green-400 to-emerald-500',
      'Web': 'from-orange-400 to-red-500',
    };
    return colors[category] || 'from-primary-400 to-cyan-400';
  };

  return (
    <section id="projects" className="py-20 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-card text-gray-400 hover:text-white hover:bg-dark-lighter border border-dark-lighter'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group"
            >
              <div className="relative bg-dark-bg/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300 h-full flex flex-col">
                {/* Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(project.category)} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity shadow-lg`}>
                  <FolderKanban className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Course */}
                <p className="text-xs text-primary-400 mb-3">{project.course}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-lighter">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-dark-card rounded-md text-xs text-gray-400 border border-dark-lighter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent rounded-2xl flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                  <span className="flex items-center gap-2 text-primary-400 text-sm font-medium">
                    View Details <ExternalLink className="w-4 h-4" />
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
