'use client';

import React from 'react';
import Link from 'next/link';
import { Waves, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { href: '/shop', label: 'Surfboards' },
    { href: '/shop', label: 'Wetsuits' },
    { href: '/shop', label: 'Accessories' },
    { href: '/shop', label: 'Fins' },
  ];

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/lessons', label: 'Surf Lessons' },
    { href: '/blog', label: 'Surf Blog' },
  ];

  const supportLinks = [
    { href: '/shipping', label: 'Shipping Info' },
    { href: '/returns', label: 'Returns' },
    { href: '/faq', label: 'FAQ' },
    { href: '/size-guide', label: 'Size Guide' },
  ];

  return (
    <footer className="bg-surf-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">
                SURF ADVENTURES
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Costa Rica's premier surf shop since 2010. We provide top-quality surf gear 
              and expert lessons on the beautiful beaches of Guanacaste Province.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-white mb-4 uppercase tracking-wide">
              Shop
            </h3>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-white mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-white mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>Tamarindo, Guanacaste, Costa Rica</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>+506 2653-1234</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>info@surfadventures.cr</span>
              </div>
            </div>

            {/* Support Links */}
            <div className="mt-6">
              <h4 className="font-montserrat font-medium text-white mb-2 text-sm uppercase tracking-wide">
                Support
              </h4>
              <ul className="space-y-1">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Surf Adventures CR. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;