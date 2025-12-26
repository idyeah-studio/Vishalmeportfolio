import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:vishal@idyeah.studio', label: 'Email', type: 'icon' as const },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vishalme', label: 'LinkedIn', type: 'icon' as const },
    { iconSrc: '/images/icons/medium.png', href: 'https://www.medium.com/@vishalme', label: 'Medium', type: 'image' as const },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-gray-500">
            <p>© {currentYear} Vishal Mehta. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.type === 'icon' && link.icon ? (
                  <link.icon className="w-5 h-5" />
                ) : (
                  <img src={link.iconSrc} alt={link.label} className="w-5 h-5" />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
