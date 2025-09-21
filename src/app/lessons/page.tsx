'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { lessonPackages, instructors, timeSlots } from '@/data/lessons';
import { Clock, Users, Star, Check, Calendar as CalendarIcon, User, Mail, Phone } from 'lucide-react';

export default function LessonsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    specialRequests: ''
  });

  const handleBooking = (packageId: string) => {
    setSelectedPackage(packageId);
    setShowBookingForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a booking API
    console.log('Booking submitted:', {
      packageId: selectedPackage,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert('Booking request submitted! We\'ll contact you to confirm your lesson.');
    setShowBookingForm(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      specialRequests: ''
    });
  };

  const formatPrice = (price: number) => `$${price}`;

  const selectedPackageData = lessonPackages.find(pkg => pkg.id === selectedPackage);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Surf Lessons in Paradise
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Learn to surf in Costa Rica's most beautiful waters with certified instructors 
            who know these waves like the back of their hand. From first-timers to pros, 
            we have the perfect lesson for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center text-white/90">
              <Star className="w-5 h-5 text-surf-yellow mr-2" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center text-white/90">
              <Users className="w-5 h-5 mr-2" />
              <span>5000+ Happy Students</span>
            </div>
            <div className="flex items-center text-white/90">
              <Check className="w-5 h-5 mr-2" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From beginner-friendly group lessons to advanced coaching, 
              we offer programs designed for every skill level and goal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {lessonPackages.map((lesson) => (
              <Card key={lesson.id} className="group cursor-pointer card-hover overflow-hidden bg-white border-2 hover:border-primary/20 transition-all duration-300">
                <div className="relative">
                  <img
                    src={lesson.image}
                    alt={lesson.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {lesson.isPopular && (
                      <Badge className="bg-surf-orange text-white">Most Popular</Badge>
                    )}
                    {lesson.isNew && (
                      <Badge className="bg-accent text-white">New</Badge>
                    )}
                    <Badge variant="outline" className="bg-white/90 text-gray-700">
                      {lesson.level}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {lesson.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {lesson.description}
                  </p>

                  {/* Lesson Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{lesson.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{lesson.groupSize}</span>
                    </div>
                  </div>

                  {/* What's Included Preview */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">What's included:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {lesson.includes.slice(0, 3).map((item, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                      {lesson.includes.length > 3 && (
                        <li className="text-sm text-primary">
                          + {lesson.includes.length - 3} more included...
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(lesson.price)}
                      </span>
                      {lesson.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {formatPrice(lesson.originalPrice)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                  
                  <Button 
                    onClick={() => handleBooking(lesson.id)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Instructors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of certified surf instructors brings decades of combined experience 
              and a passion for sharing the joy of surfing with every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="text-center bg-white">
                <CardContent className="p-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {instructor.experience} experience
                  </p>
                  
                  <div className="flex items-center justify-center mb-3">
                    <Star className="w-4 h-4 text-surf-yellow fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {instructor.rating}/5
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {instructor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {instructor.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Book Your Surf Lesson</DialogTitle>
            <DialogDescription>
              {selectedPackageData && (
                <span>
                  {selectedPackageData.name} - {formatPrice(selectedPackageData.price)}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Date Selection */}
            <div>
              <Label className="text-sm font-medium">Select Date</Label>
              <div className="mt-2">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <Label htmlFor="time-select" className="text-sm font-medium">
                Preferred Time
              </Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="experience">Surfing Experience</Label>
              <Select value={formData.experience} onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                  <SelectItem value="some-experience">Some Experience</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="requests">Special Requests</Label>
              <Input
                id="requests"
                placeholder="Any special requirements or questions?"
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              />
            </div>

            <div className="flex space-x-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowBookingForm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
              >
                Book Lesson
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}