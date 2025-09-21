'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  isNew?: boolean;
  isSale?: boolean;
  onAddToCart?: (productId: string) => void;
  onToggleWishlist?: (productId: string) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  rating = 0,
  isNew = false,
  isSale = false,
  onAddToCart,
  onToggleWishlist,
  className = ''
}) => {
  const formatPrice = (price: number) => `$${price.toFixed(0)}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart?.(id);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggleWishlist?.(id);
  };

  return (
    <Card className={`group cursor-pointer card-hover overflow-hidden bg-white ${className}`} role="article" aria-labelledby={`product-name-${id}`}>
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="aspect-square bg-gray-50">
          <Image
            src={image}
            alt={`${name} - ${category} surfing equipment`}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLhcEblmOcAjHwAA1"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {isNew && (
            <Badge className="bg-accent text-white font-medium">New</Badge>
          )}
          {isSale && (
            <Badge className="bg-surf-orange text-white font-medium">Sale</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleToggleWishlist}
          aria-label={`Add ${name} to wishlist`}
        >
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" aria-hidden="true" />
          <span className="sr-only">Add to wishlist</span>
        </Button>

        {/* Add to Cart Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200"
            aria-label={`Add ${name} to cart for ${formatPrice(price)}`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
          {category}
        </p>

        {/* Product Name */}
        <h3 id={`product-name-${id}`} className="font-montserrat font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center mb-2" role="group" aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}>
            <div className="flex items-center" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? 'text-surf-yellow fill-current'
                      : 'text-gray-300'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-2">
              ({rating.toFixed(1)})
            </span>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;