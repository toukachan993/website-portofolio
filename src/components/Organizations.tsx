import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar } from 'lucide-react';

const organizations = [
  {
    role: 'Anggota',
    organization: 'HMI Komisariat FT UNS',
    period: '2025 – Sekarang',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    role: 'Menteri Bisnis dan Kemitraan',
    organization: 'BEM FATISDA UNS',
    period: '2024',
    color: 'from-purple-400 to-pink-500',
  },
  {
    role: 'Menteri Koordinator Bisnis dan Kemitraan',
    organization: 'BEM FATISDA UNS',
    period: '2024',
    color: 'from-green-400 to-emerald-500',
  },
];

export default function Organizations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="organizations" className="py-20 bg-dark-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Organizations
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Organizations Cards */}
        <div className="space-y-6">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6 bg-dark-bg/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${org.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Users className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{org.role}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{org.period}</span>
                    </div>
                  </div>
                  <p className="text-primary-400 font-medium">{org.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
