# 🏄‍♂️ Surf Adventures Costa Rica

A complete Costa Rican surf shop website built with Next.js 15, featuring a modern design inspired by the tropical beaches and vibrant culture of Costa Rica.

## 🌊 Features

### 3 Core Pages
- **Homepage**: Hero section with stunning beach visuals, featured products, and company highlights
- **Shop Page**: Complete product catalog with filtering, search, and cart functionality
- **Surf Lessons Page**: Lesson packages with booking calendar and instructor profiles

### 🎨 Design System
- **Colors**: Ocean blues (#1A85FF, #56CCF2), tropical green (#27AE60), sunset orange (#F2994A), sandy beige (#F2C94C)
- **Typography**: Montserrat for headings, Roboto for body text
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### 🛠️ Technical Features
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS v4 for styling
- shadcn/ui component library
- Responsive product grid and filtering
- Interactive booking system
- Shopping cart functionality
- Modern Costa Rican surf aesthetic

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd surf-adventures-costa-rica
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── page.tsx           # Homepage
│   ├── shop/page.tsx      # Shop page with product catalog
│   ├── lessons/page.tsx   # Surf lessons with booking
│   └── globals.css        # Global styles & theme
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Homepage hero
│   ├── ProductCard.tsx    # Product display cards
│   └── ui/               # shadcn/ui components
└── data/                 # Mock data for products & lessons
    ├── products.ts       # Surf equipment catalog
    └── lessons.ts        # Lesson packages & instructors
```

## 🛒 Product Catalog

The shop features authentic Costa Rican surf equipment:

### Surfboards
- Performance Longboard ($899)
- Classic Wooden Longboard ($1,299)
- High Performance Shortboard ($749)

### Wetsuits & Apparel
- Women's Full Wetsuit ($350)
- Men's Spring Suit ($189)
- Tropical Rashguard ($60)

### Accessories
- Carbon Fin Set ($120)
- Premium Surf Leash ($35)

## 🏄‍♂️ Surf Lessons

### Lesson Packages
- **Beginner Group Lesson** - $65 (2 hours, max 4 students)
- **Private One-on-One** - $150 (2 hours, personalized instruction)
- **Intermediate Progression** - $85 (2.5 hours, advanced techniques)
- **Family Surf Package** - $200 (2 hours, family of 4)
- **Advanced Performance** - $120 (3 hours, competition prep)
- **Multi-Day Surf Camp** - $350 (5 days, comprehensive program)

### Expert Instructors
- **Carlos Mendez** - 15+ years, beginner specialist
- **Sofia Rivera** - 12+ years, former pro surfer
- **Miguel Torres** - 18+ years, family lesson expert
- **Ana Gutierrez** - 10+ years, marine biology background

## 🎯 Key Components

### Navigation
- Responsive header with mobile menu
- Shopping cart indicator
- Clean Costa Rican surf branding

### Product Cards
- High-quality surf equipment images
- Rating system and pricing
- Add to cart functionality
- Sale and new item badges

### Booking System
- Interactive lesson selection
- Date picker calendar
- Time slot availability
- Customer information form

## 🌊 Costa Rican Surf Culture

The website celebrates Costa Rica's rich surf heritage:
- **Tamarindo Location**: Based in beautiful Guanacaste Province
- **Local Expertise**: 15+ years of Costa Rican surf knowledge  
- **Pura Vida Spirit**: Authentic Costa Rican hospitality
- **Sustainable Approach**: Ocean conservation awareness

## 🚀 Deployment

The website is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure environment variables** (if needed)
3. **Deploy** - automatic builds on every push

```bash
npm run build    # Production build
npm run start    # Production server
```

## 📱 Mobile Experience

- Fully responsive design
- Touch-friendly navigation
- Optimized product browsing
- Mobile booking system
- Fast loading times

## 🎨 Brand Identity

**Surf Adventures Costa Rica** represents the perfect blend of:
- Professional surf instruction
- High-quality equipment retail
- Authentic Costa Rican experience
- Modern, user-friendly technology

## 📞 Contact Information

- **Location**: Tamarindo, Guanacaste, Costa Rica
- **Phone**: +506 2653-1234
- **Email**: info@surfadventures.cr
- **Experience**: 15+ years serving the Costa Rican surf community

---

Built with ❤️ for the Costa Rican surf community. Pura Vida! 🇨🇷🏄‍♂️
