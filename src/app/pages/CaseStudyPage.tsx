import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PasswordProtection } from '../components/PasswordProtection';

export function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="pt-32 pb-24 px-6 lg:px-12 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl mb-4 text-gray-900">Case Study Not Found</h1>
          <Link to="/work" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PasswordProtection>
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          {study.isAIEnhanced && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 mb-6">
              <Sparkles className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">AI-Enhanced Project</span>
            </div>
          )}
          
          <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900">{study.title}</h1>
          <p className="text-2xl text-gray-600 leading-relaxed">{study.impactStatement}</p>
        </motion.div>
      </div>

      {/* Hero Image - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-24 w-full"
      >
        <ImageWithFallback
          src={study.hero}
          alt={study.title}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Project Details */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 grid md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">My Role</h3>
            <p className="text-gray-900">{study.role}</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Team</h3>
            <p className="text-gray-900">{study.team}</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Timeline</h3>
            <p className="text-gray-900">{study.timeline}</p>
          </div>
        </motion.section>

        {/* Problem */}
        <Section title="Problem" delay={0.1}>
          <p className="text-xl text-gray-700 leading-relaxed">{study.problem}</p>
        </Section>

        {/* Process */}
        <Section title="Process" delay={0.2}>
          <div className="space-y-4">
            {study.process.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Key Decisions */}
        <Section title="Key Decisions & Rationale" delay={0.3}>
          <ul className="space-y-4">
            {study.keyDecisions.map((decision, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <p className="text-lg text-gray-700 flex-1">{decision}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* AI Section (if applicable) */}
        {study.aiEnabled && (
          <Section title="What AI Enabled" delay={0.4} highlight>
            <div className="space-y-8">
              <AIFeature title="AI-Assisted Ideation" content={study.aiEnabled.ideation} />
              <AIFeature title="AI-Powered Research Summaries" content={study.aiEnabled.research} />
              <AIFeature title="Prompt-Driven UI Variations" content={study.aiEnabled.uiVariations} />
              <AIFeature title="AI-Assisted Workflow Automation" content={study.aiEnabled.automation} />
              <AIFeature title="Faster Iteration Loops" content={study.aiEnabled.iteration} />
            </div>
          </Section>
        )}

        {/* Impact & Metrics */}
        <Section title="Impact & Metrics" delay={0.5}>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-4">
              {study.impact.metrics.map((metric, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-lg text-gray-900">{metric}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">{study.impact.results}</p>
          </div>
        </Section>

        {/* Additional Screenshots */}
        {study.screenshots && study.screenshots.length > 0 && (
          <Section title="Project Screenshots" delay={0.55}>
            <div className="space-y-8">
              {study.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <ImageWithFallback
                    src={screenshot}
                    alt={`${study.title} - Screenshot ${index + 1}`}
                    className="w-full h-auto object-contain rounded-xl shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </Section>
        )}

        {/* Reflection */}
        <Section title="Reflection & Learnings" delay={0.6}>
          <p className="text-xl text-gray-700 leading-relaxed italic">{study.reflection}</p>
        </Section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 pt-12 border-t border-gray-200"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-lg text-gray-900 hover:text-gray-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>View All Projects</span>
          </Link>
        </motion.div>
      </div>
    </div>
    </PasswordProtection>
  );
}

// Helper Components
function Section({
  title,
  children,
  delay = 0,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
  highlight?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-24 ${highlight ? 'bg-gray-50 -mx-6 lg:-mx-12 px-6 lg:px-12 py-16 rounded-2xl' : ''}`}
    >
      <h2 className="text-3xl mb-8 text-gray-900">{title}</h2>
      {children}
    </motion.section>
  );
}

function AIFeature({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="text-lg mb-3 text-gray-900 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-gray-600" />
        {title}
      </h4>
      <p className="text-gray-700 leading-relaxed pl-7">{content}</p>
    </div>
  );
}
