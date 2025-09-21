'use client';

import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { featuredProducts } from '@/data/products';
import { ArrowRight, Award, Users, Globe } from 'lucide-react';

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "USA",
      text: "Amazing surf lessons! The instructors were patient and knowledgeable. I went from never surfing to catching waves in just one lesson!",
      rating: 5
    },
    {
      name: "Miguel Rodriguez",
      location: "Costa Rica",
      text: "Best surf shop in Tamarindo! Great equipment and the staff really knows their stuff. Highly recommend!",
      rating: 5
    }
  ];

  const handleAddToCart = (productId: string) => {
    // Cart functionality would be implemented here
    console.log('Added to cart:', productId);
  };

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50">
        Skip to main content
      </a>
      <Navigation />
      
      {/* Hero Section */}
      <main id="main-content">
        <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Surf Adventures?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're Costa Rica's most trusted surf shop and school, helping thousands discover the joy of surfing since 2010.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Award className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Certified surf instructors with 15+ years of experience teaching students of all skill levels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Users className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5000+ Students</h3>
              <p className="text-gray-600">
                We've helped over 5000 people learn to surf and fall in love with the ocean.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-surf-orange/10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Globe className="w-8 h-8" style={{ color: 'hsl(25, 85%, 62%)' }} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Knowledge</h3>
              <p className="text-gray-600">
                Born and raised in Costa Rica, we know the best spots and conditions for every surfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20" aria-labelledby="featured-products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="featured-products-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Equipment
              </h2>
              <p className="text-lg text-gray-600">
                Premium surf gear trusted by professionals and beginners alike
              </p>
            </div>
            <Link href="/shop">
              <Button variant="outline" className="hidden sm:flex items-center" aria-label="View all surf equipment and products">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                rating={product.rating}
                isNew={product.isNew}
                isSale={product.isSale}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/shop">
              <Button variant="outline" className="w-full" aria-label="View all surf equipment and products">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Surf Lessons Preview */}
      <section className="py-20 bg-gray-50" aria-labelledby="surf-lessons-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="surf-lessons-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Learn to Surf with the Experts
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a complete beginner or looking to improve your technique, 
                our experienced instructors will help you progress safely and quickly 
                in Costa Rica's beautiful waves.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-gray-700">Small group lessons (max 4 students)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-gray-700">All equipment included</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-gray-700">Certified water safety instructors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-gray-700">Perfect beginner-friendly waves</span>
                </div>
              </div>

              <Link href="/lessons">
                <Button size="lg" className="bg-primary hover:bg-primary/90" aria-describedby="surf-lessons-heading">
                  Book Your Lesson
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=400&auto=format&fit=crop"
                  alt="Surf instructor teaching a student proper surfing stance on a beginner-friendly wave"
                  className="rounded-lg aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop"
                  alt="Small group surf lesson with four students learning together on the beach"
                  className="rounded-lg aspect-[4/3] object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop"
                  alt="Advanced surfer practicing technique with instructor guidance in deeper water"
                  className="rounded-lg aspect-[4/3] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1566479179817-d1b6c17deea4?q=80&w=400&auto=format&fit=crop"
                  alt="Happy surf students celebrating after successfully catching their first waves"
                  className="rounded-lg aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100" role="article" aria-labelledby={`testimonial-author-${index}`}>
                <div className="flex items-center mb-4" role="group" aria-label={`${testimonial.rating} star rating`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-surf-yellow" aria-hidden="true">★</div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p id={`testimonial-author-${index}`} className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}