import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PasswordProtection } from '../components/PasswordProtection';

export function WorkPage() {
  return (
    <PasswordProtection>
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900">Selected Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of case studies showcasing product strategy, design systems,
            and AI-enhanced workflows.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/work/${study.id}`} className="block h-full">
                <motion.article
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 h-full">
                    {/* Image */}
                    <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <ImageWithFallback
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      {study.isAIEnhanced && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200">
                          <span className="text-sm text-gray-900">AI-Enhanced</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl mb-4 text-gray-900 group-hover:text-gray-600 transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {study.valueStatement}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </PasswordProtection>
  );
}
