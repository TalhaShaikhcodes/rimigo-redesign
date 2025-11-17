'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
    { name: 'Refunds and Cancellations Policy', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Blogs', href: '#' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/rimigo.travel?igsh=MmJ4YThiaWVnazFh&utm_source=qr', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/people/Rimigo/61574012545748/', color: 'hover:text-purple-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/rimigotravel/', color: 'hover:text-purple-500' },
  ];

  return (
    <footer className="bg-gradient-to-b from-purple-50 to-white text-gray-600 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-900 font-medium mb-1">Viareel Travel Private Limited</p>
                <a
                  href="mailto:contact@rimigo.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  contact@rimigo.com
                </a>
              </div>
              <div className="text-sm space-y-1">
                <p>CIN: U73100KA2024PTC192855</p>
                <p>GST: 29AAKCV4267D1Z0</p>
              </div>
            </div>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-gray-900 text-xl font-bold mb-6">Office</h3>
            <address className="not-italic text-gray-400 leading-relaxed">
              Vaishnavi Signature<br />
              Marathahalli-Sarjapur Outer Ring Road<br />
              Bangalore, Karnataka-560103<br />
              India
            </address>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                      whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-gray-400 ${social.color} transition-colors duration-300`}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © Rimigo. All rights reserved. 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
