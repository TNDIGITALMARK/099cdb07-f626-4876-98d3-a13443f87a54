import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Waves, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Waves className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist. Let's get you back to catching some waves!
        </p>
        
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}