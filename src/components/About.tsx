import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, FolderKanban, FileText, Calendar } from 'lucide-react';

const stats = [
  { label: 'IPK', value: '3.55', icon: Award, color: 'from-yellow-400 to-orange-500' },
  { label: 'Projects', value: '10+', icon: FolderKanban, color: 'from-primary-400 to-cyan-400' },
  { label: 'Publications', value: '1', icon: FileText, color: 'from-green-400 to-emerald-500' },
  { label: 'Active Since', value: '2023', icon: Calendar, color: 'from-purple-400 to-pink-500' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative w-full h-full bg-dark-card rounded-3xl border border-primary-500/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">IAN</span>
                    </div>
                    <p className="text-gray-400 text-sm">Photo Coming Soon</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-500/50 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg" />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-dark-card/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Mahasiswa S1 Sains Data di Universitas Sebelas Maret dengan fokus pada <span className="text-primary-400 font-medium">data engineering</span>, <span className="text-cyan-400 font-medium">machine learning</span>, dan <span className="text-primary-400 font-medium">cloud computing</span>.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Berpengalaman membangun pipeline data end-to-end menggunakan Apache Kafka, Spark, dan Microsoft Azure, serta mengembangkan model deep learning untuk segmentasi citra dan analisis sentimen.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                Memiliki publikasi ilmiah terindeks <span className="text-green-400 font-medium">SINTA 2</span>. Mampu merancang solusi berbasis data mulai dari ingestion, pemrosesan, hingga visualisasi insight.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-dark-bg/50 rounded-xl p-4 text-center border border-dark-lighter hover:border-primary-500/30 transition-colors group"
                  >
                    <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
