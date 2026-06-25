import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Award, CheckCircle } from 'lucide-react';

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="publications" className="py-20">
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
              Publications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Featured Publication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-cyan-500 to-primary-500 rounded-2xl blur-xl opacity-30" />

          <div className="relative bg-dark-card/80 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/30">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    SINTA 2 Indexed
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Accepted · Terbit April 2026
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                  Comparative Performance Analysis of ARIMA, LSTM, ARIMA-GARCH, and GARCH-LSTM Models for Forecasting Bitcoin and Gold Prices
                </h3>
              </div>
            </div>

            {/* Abstract */}
            <div className="mb-6 pl-2 border-l-2 border-primary-500/30">
              <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Abstract</h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                Penelitian ini mengkaji perbandingan performa model ARIMA, LSTM, ARIMA-GARCH, dan GARCH-LSTM untuk prediksi harga Bitcoin dan Emas. Dengan menggunakan data historis dan metode evaluasi yang komprehensif, studi ini memberikan insight berharga bagi investor dan analis dalam memilih model forecasting yang optimal untuk aset kripto dan komoditas.
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-dark-lighter">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Award className="w-4 h-4" />
                <span>Journal Publication</span>
              </div>
              <div className="text-sm text-primary-400">
                Research Paper
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
