import { motion } from 'motion/react';
import { Award, BookOpen, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      items: [
        'Judged at UXDA Design Awards 2024',
        'Speaker at Design Systems Summit 2023',
        'Featured in UX Collective Top Articles'
      ]
    },
    {
      icon: BookOpen,
      title: 'Publications & Thought Leadership',
      items: [
        '"AI in Design Systems" - Medium (10K+ views)',
        '"The Future of UX: AI-Augmented Workflows" - Smashing Magazine',
        'Regular contributor to design publications'
      ]
    },
    {
      icon: Users,
      title: 'Leadership & Contributions',
      items: [
        'Led design transformation at 3 Fortune 500 companies',
        'Mentored 20+ junior designers to senior positions',
        'Built and scaled design teams from 2 to 15 members'
      ]
    }
  ];

  const values = [
    {
      title: 'Human-Centered AI',
      description: 'AI should augment human creativity, not replace it. I design tools that amplify designer capabilities while maintaining human judgment at the core.'
    },
    {
      title: 'Systematic Thinking',
      description: 'Great design comes from great systems. I believe in building scalable design languages that empower teams to create consistent, high-quality experiences.'
    },
    {
      title: 'Continuous Learning',
      description: 'The design field evolves rapidly. I stay at the forefront by embracing new tools, methodologies, and perspectives through continuous exploration.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 mb-6">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">Design Leader & AI-Native Creator</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900">About Me</h1>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl mb-6 text-gray-900">
              Design Leader. Product Thinker. AI-Native Creator.
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                With over a decade of experience in UX design and product strategy, I've had the
                privilege of working with leading technology companies to transform complex
                challenges into elegant, user-centered solutions.
              </p>
              <p>
                My journey in design has evolved alongside the industry itself—from the early days
                of mobile-first design to the current era of AI-augmented workflows. I believe
                that the best design happens at the intersection of human insight and intelligent
                automation.
              </p>
              <p>
                Today, I focus on building design systems and product experiences that scale
                across global organizations, while pioneering new approaches that leverage AI to
                amplify creative potential rather than replace it.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740223544743-2aac7fb644c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRlc2lnbmVyfGVufDF8fHx8MTc2NjM1Mjc0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vishal Mehta"
                className="w-full aspect-[3/4] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* EB1A Highlight Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
            <h2 className="text-2xl mb-8 text-gray-900">Recognition & Contributions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-gray-900" />
                    </div>
                    <h3 className="text-lg mb-4 text-gray-900">{achievement.title}</h3>
                    <ul className="space-y-2">
                      {achievement.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex gap-2">
                          <span className="text-gray-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Values & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <h2 className="text-3xl mb-12 text-gray-900">Design Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <h3 className="text-xl mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl mb-12 text-gray-900">Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-gray-900">Design & Strategy</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'UX Design',
                  'Product Strategy',
                  'Design Systems',
                  'User Research',
                  'Information Architecture',
                  'Interaction Design',
                  'Usability Testing',
                  'Design Leadership'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-gray-900">AI & Technology</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI-Augmented Design',
                  'Prompt Engineering',
                  'Design Automation',
                  'Machine Learning UX',
                  'Figma/FigJam',
                  'Design Tokens',
                  'React/TypeScript',
                  'Prototyping Tools'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
