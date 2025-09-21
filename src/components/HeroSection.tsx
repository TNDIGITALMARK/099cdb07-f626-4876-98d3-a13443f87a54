'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "RIDE THE",
  subtitle = "PERFECT WAVE",
  description = "Discover the ultimate surfing experience in Costa Rica's pristine waters with expert instruction and premium equipment.",
  primaryButtonText = "Book Lessons",
  primaryButtonHref = "/lessons",
  secondaryButtonText = "Watch Video",
  backgroundImage = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  className = ""
}) => {
  return (
    <section className={`relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden ${className}`} aria-labelledby="hero-heading" role="banner">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        role="img"
        aria-label="Surfer riding a perfect wave in Costa Rica's pristine waters"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:max-w-2xl">
          {/* Main Heading */}
          <div className="space-y-2 mb-6">
            <h1 id="hero-heading" className="heading-display text-white drop-shadow-lg">
              {title} <span className="block">{subtitle}</span>
            </h1>
          </div>

          {/* Description */}
          <p id="hero-description" className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-sm max-w-lg lg:max-w-none">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={primaryButtonHref}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold beach-shadow group"
                aria-describedby="hero-description"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>

            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 backdrop-blur-sm px-8 py-4 text-lg font-semibold group shadow-lg"
              aria-label="Play introductory surf video"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              {secondaryButtonText}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left" role="group" aria-label="Company statistics">
            <div>
              <div className="text-3xl font-bold text-white font-montserrat">15+</div>
              <div className="text-white/80 text-sm font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white font-montserrat">5000+</div>
              <div className="text-white/80 text-sm font-medium">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white font-montserrat">★4.9</div>
              <div className="text-white/80 text-sm font-medium">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down to see more content" role="button" tabIndex="0">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
        <span className="sr-only">Scroll down for more content</span>
      </div>

      {/* Beach Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          className="w-full h-16 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          role="presentation"
        >
          <path d="M0,120V60c0,0,200-40,400-20s400,60,800,20V120H0z" opacity="0.1" />
          <path d="M0,120V80c0,0,200-30,400-10s400,40,800,10V120H0z" opacity="0.15" />
          <path d="M0,120V100c0,0,200-20,400,0s400,20,800,0V120H0z" opacity="0.2" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;