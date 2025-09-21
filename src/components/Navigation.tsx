'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, Waves } from 'lucide-react';

interface NavigationProps {
  cartItemsCount?: number;
}

const Navigation: React.FC<NavigationProps> = ({ cartItemsCount = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/lessons', label: 'Surf Lessons' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Surf Adventures home page">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center" aria-hidden="true">
              <Waves className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              SURF ADVENTURES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group"
                role="menuitem"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-primary transition-colors" aria-label={`Shopping cart with ${cartItemsCount} items`}>
              <ShoppingCart className="w-6 h-6" aria-hidden="true" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-surf-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium" aria-hidden="true">
                  {cartItemsCount > 9 ? '9+' : cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2" aria-label="Open mobile menu" aria-expanded={isOpen}>
                    <Menu className="w-6 h-6" aria-hidden="true" />
                    <span className="sr-only">Toggle mobile menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]" role="dialog" aria-label="Mobile navigation menu">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="flex items-center space-x-2 pb-6 border-b">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center" aria-hidden="true">
                        <Waves className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <span className="font-montserrat font-bold text-lg">
                        SURF ADVENTURES
                      </span>
                    </div>
                    
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-700 hover:text-primary font-medium text-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}

                    <div className="pt-6 border-t">
                      <Link
                        href="/cart"
                        className="flex items-center space-x-2 text-gray-700 hover:text-primary font-medium text-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                        <span>Cart ({cartItemsCount})</span>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;