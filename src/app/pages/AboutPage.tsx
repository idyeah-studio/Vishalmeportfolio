import { motion } from 'motion/react';
import { Award, BookOpen, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      items: [
        'Senior Member, IEEE',
        'Member, ACM, SIGCHI, UXPA',
        'Judge at TreeHacks (Stanford), CalHacks 11.0, ICXA 2024',
        'Reviewer for IEEE EDUCON 2025, IndiaHCI 2024, ICAD 2024'
      ]
    },
    {
      icon: BookOpen,
      title: 'Publications & Thought Leadership',
      items: [
        '200+ articles on UX, accessibility, and design',
        'Published in UX Matters, DevOps, Bootcamp, Medium',
        'Co-authored ACM paper with 56+ citations',
        'Multiple book chapters on AI and HCI (Springer, Bentham Science)'
      ]
    },
    {
      icon: Users,
      title: 'Leadership & Impact',
      items: [
        '24+ years driving enterprise UX transformation',
        'Led AI-powered design systems at Walmart and Apple',
        'Speaker at World Usability Congress 2025, APCHI 2013',
        'Mentored teams and conducted international workshops'
      ]
    }
  ];

  const values = [
    {
      title: 'Human-Centered AI',
      description: 'By combining AI innovation with ethical HCI practices, I accelerate product development, improve user engagement, and create globally scalable solutions that prioritize fairness and empower users.'
    },
    {
      title: 'Enterprise UX Excellence',
      description: 'I specialize in building scalable, accessible design systems for complex enterprise applications—transforming fragmented experiences into cohesive, data-driven solutions that drive measurable business impact.'
    },
    {
      title: 'Thought Leadership & Mentorship',
      description: 'Through 200+ published articles, international speaking engagements, and hands-on mentorship, I share knowledge that advances the UX community and empowers the next generation of design leaders.'
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 mb-6">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">Human-Centered AI Innovator | HCI Specialist | Enterprise UX Leader</span>
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
              Visionary UX Leader, HCI Specialist, and AI-Driven Design Systems Architect
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                With over 24 years of experience advancing enterprise UX, human-centered AI solutions, 
                and accessibility, I'm recognized globally as a Judge & Scholarly Reviewer for prestigious 
                design competitions, Senior IEEE Member, and thought leader in creating transformative, 
                scalable UX frameworks that bridge AI innovation with human-computer interaction (HCI) principles.
              </p>
              <p>
                Throughout my career, I've delivered enterprise-grade design systems and solutions for 
                global organizations including Apple, Walmart, Intuitive Surgical, and others. I led the 
                AI-powered DV Design System for Walmart Data Ventures, introducing accessible, generative 
                AI-driven color palettes and documentation processes that enabled record product launches. 
                At Apple Pay, I enhanced collaborative engineering platforms, streamlining workflows and 
                integrating human-first UX principles into legacy systems.
              </p>
              <p>
                A passionate advocate for accessibility and inclusivity, I've mentored diverse teams, 
                conducted international workshops on AI, HCI, and data visualization, and authored over 
                200 thought leadership articles. My approach integrates AI-powered tools with creative 
                problem-solving to foster systems that empower users, prioritize fairness, and transform 
                user experiences globally.
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
                src="/Vishalmeportfolio/images/profile.jpg"
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
              <h3 className="text-xl mb-4 text-gray-900">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Enterprise UX',
                  'Design Systems',
                  'Human-Computer Interaction',
                  'User Research',
                  'Accessibility (WCAG)',
                  'Data Visualization',
                  'Usability Testing',
                  'Design Leadership',
                  'Product Strategy',
                  'Design Thinking'
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
              <h3 className="text-xl mb-4 text-gray-900">AI & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI-Driven Design',
                  'Generative AI (ChatGPT, Midjourney)',
                  'Machine Learning UX',
                  'AI Automation',
                  'Figma/FigJam',
                  'Design Tokens',
                  'React/TypeScript',
                  'SAP/ERP UX',
                  'Prototyping',
                  'User Testing Tools'
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
