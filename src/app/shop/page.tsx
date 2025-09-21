'use client';

import React, { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { products, categories } from '@/data/products';
import { Search, Filter, X } from 'lucide-react';

interface CartItem {
  productId: string;
  quantity: number;
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (productId: string) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.productId === productId);
      if (existingItem) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { productId, quantity: 1 }];
      }
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesPrice = true;
      if (priceRange === 'under-100') matchesPrice = product.price < 100;
      else if (priceRange === '100-500') matchesPrice = product.price >= 100 && product.price <= 500;
      else if (priceRange === '500-1000') matchesPrice = product.price >= 500 && product.price <= 1000;
      else if (priceRange === 'over-1000') matchesPrice = product.price > 1000;

      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('name');
    setPriceRange('all');
  };

  const hasActiveFilters = selectedCategory !== 'All' || searchQuery !== '' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-white">
      <Navigation cartItemsCount={cartItemsCount} />
      
      {/* Page Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Surf Shop
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover premium surf equipment from the world's leading brands. 
              From beginner-friendly boards to professional-grade gear.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between"
              >
                <span className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </span>
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-2">
                    Active
                  </Badge>
                )}
              </Button>
            </div>

            {/* Filter Content */}
            <div className={`space-y-6 ${showFilters || 'lg:block' ? 'block' : 'hidden'}`}>
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                      {category !== 'All' && (
                        <span className="float-right text-xs opacity-75">
                          ({products.filter(p => p.category === category).length})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under-100', label: 'Under $100' },
                    { value: '100-500', label: '$100 - $500' },
                    { value: '500-1000', label: '$500 - $1000' },
                    { value: 'over-1000', label: 'Over $1000' }
                  ].map(range => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        priceRange === range.value
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full flex items-center justify-center"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <p className="text-gray-600">
                  Showing {filteredAndSortedProducts.length} of {products.length} products
                </p>
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedCategory !== 'All' && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        {selectedCategory}
                        <button onClick={() => setSelectedCategory('All')}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                    {searchQuery && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        Search: {searchQuery}
                        <button onClick={() => setSearchQuery('')}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                    {priceRange !== 'all' && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        Price filter
                        <button onClick={() => setPriceRange('all')}>
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* Sort Options */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map(product => (
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

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  No products found matching your criteria.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}