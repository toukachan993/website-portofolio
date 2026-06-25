import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Cloud, BarChart3 } from 'lucide-react';

const iconMap = {
  code: Code,
  database: Database,
  cloud: Cloud,
  chart: BarChart3,
};

const skillCategories = [
  {
    name: 'Languages',
    icon: 'code',
    color: 'from-yellow-400 to-orange-500',
    skills: ['Python', 'SQL', 'R', 'Java', 'JavaScript', 'TypeScript', 'NoSQL'],
  },
  {
    name: 'Data Engineering',
    icon: 'database',
    color: 'from-blue-400 to-cyan-500',
    skills: ['Apache Kafka', 'Spark', 'Hadoop', 'Cassandra', 'SSIS', 'ETL/ELT Pipelines'],
  },
  {
    name: 'Cloud & Databases',
    icon: 'cloud',
    color: 'from-purple-400 to-pink-500',
    skills: ['Microsoft Azure', 'AWS', 'SQL Server', 'MySQL', 'PostgreSQL', 'Cosmos DB'],
  },
  {
    name: 'Analytics & Visualization',
    icon: 'chart',
    color: 'from-green-400 to-emerald-500',
    skills: ['Machine Learning', 'Deep Learning', 'Power BI', 'Streamlit'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="group"
              >
                <div className="bg-dark-bg/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        className="px-4 py-2 bg-dark-card rounded-lg text-sm font-medium text-gray-300 border border-dark-lighter hover:border-primary-500/30 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
