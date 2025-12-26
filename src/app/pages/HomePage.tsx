import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">AI-Enhanced UX Design</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-gray-900"
            >
              Designing clarity, experiences, and intelligent workflows.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed"
            >
              I'm Vishal Mehta — a UX design leader specializing in product strategy,
              brand systems, and AI-enhanced design workflows.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/work">
                <motion.button
                  className="px-8 py-4 bg-gray-900 text-white rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Work
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <Link to="/about">
                <motion.button
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  About Me
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-gray-900 to-gray-600 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl mb-4 text-gray-900">Featured Work</h2>
                <p className="text-xl text-gray-600">
                  Selected projects showcasing product strategy and AI-enhanced design
                </p>
              </div>
              <Link
                to="/work"
                className="text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2 group"
              >
                <span>View all projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/work/${study.id}`} className="h-full">
                    <motion.div
                      className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors group h-full flex flex-col"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={study.thumbnail}
                          alt={study.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl mb-2 text-gray-900 group-hover:text-gray-600 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-gray-600 flex-grow">
                          {study.valueStatement}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
