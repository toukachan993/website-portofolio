import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Tentor Matematika',
    company: 'Bimbel Excellent',
    period: 'Sep 2024 – Mar 2025',
    description: 'Membimbing peserta didik SMP pada mata pelajaran Matematika dengan metode pengajaran yang efektif dan menyenangkan.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-cyan-500 to-primary-500 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-primary-400 to-cyan-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-primary-500/50" />

              {/* Content Card */}
              <div className="ml-8 md:ml-0 md:w-1/2 md:pl-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-card/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
