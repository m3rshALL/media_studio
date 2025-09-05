# MediaStudio - Professional Video Production Website

A modern, high-performance website for a video production studio built with Next.js 14+, featuring stunning animations, comprehensive SEO, and professional design.

## 🎬 Features

### Core Features
- **Next.js 14+ App Router** with Server Components and TypeScript
- **Professional Design** with HeroUI components and custom Tailwind CSS theme
- **Smooth Animations** powered by Framer Motion with performance optimizations
- **Comprehensive SEO** with structured data, sitemaps, and metadata optimization
- **Responsive Design** optimized for all devices and screen sizes
- **Performance Optimized** following Core Web Vitals best practices
- **Accessibility Compliant** meeting WCAG 2.1 AA standards

### Page Structure
- **Home Page**: Hero section with video background, services overview, testimonials
- **About Page**: Company story, team profiles with filtering, equipment showcase
- **Services Pages**: Detailed service listings and individual service pages
- **Portfolio**: Project showcase with category filtering and detailed case studies
- **Blog System**: Full blog with categories, tags, and detailed posts
- **Contact Page**: Professional contact form with validation and anti-spam protection

### Technical Highlights
- **Redux Toolkit** for state management
- **Framer Motion** animations with reduced-motion support
- **Zod Validation** for type-safe forms
- **SEO Optimization** with structured data and dynamic metadata
- **Performance Monitoring** with Core Web Vitals tracking
- **Testing Framework** with Jest and React Testing Library

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/media-studio.git
   cd media-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
   # Add other required environment variables
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
media_studio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (marketing)/        # Marketing layout group
│   │   │   ├── about/          # About page
│   │   │   ├── blog/           # Blog pages
│   │   │   ├── contacts/       # Contact page
│   │   │   ├── portfolio/      # Portfolio pages
│   │   │   ├── services/       # Services pages
│   │   │   ├── layout.tsx      # Root layout
│   │   │   └── page.tsx        # Home page
│   │   └── api/                # API routes
│   ├── components/             # Reusable UI components
│   │   ├── about/              # About page components
│   │   ├── blog/               # Blog components
│   │   ├── contacts/           # Contact components
│   │   ├── home/               # Home page components
│   │   ├── layout/             # Layout components
│   │   ├── portfolio/          # Portfolio components
│   │   ├── services/           # Services components
│   │   └── ui/                 # Base UI components
│   ├── features/               # Feature-specific logic
│   ├── lib/                    # Utilities and configurations
│   │   ├── animations.ts       # Framer Motion variants
│   │   ├── blog-data.ts        # Blog content and utilities
│   │   ├── seo.ts              # SEO utilities
│   │   └── validations/        # Zod schemas
│   ├── store/                  # Redux Toolkit store
│   │   ├── slices/             # Redux slices
│   │   └── index.ts            # Store configuration
│   └── styles/                 # Global styles
├── public/                     # Static assets
├── tests/                      # Test files
├── .env.example               # Environment variables template
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues

# Testing
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Utilities
npm run sitemap      # Generate sitemap
npm run analyze      # Analyze bundle size
```

## 🎨 Design System

### Colors
The project uses a professional color palette defined in Tailwind CSS:
- **Primary**: Custom brand blue
- **Accent**: Complementary accent color
- **Neutral**: Grayscale palette for text and backgrounds

### Typography
- **Display Font**: Poppins for headings and important text
- **Body Font**: Inter for readable body text
- **Font Loading**: Optimized with `next/font` for performance

### Components
Built with HeroUI and custom components following design system principles:
- Consistent spacing and sizing
- Accessible color contrasts
- Responsive breakpoints
- Reusable component variants

## 🔧 Configuration

### Next.js Configuration
Key configurations in `next.config.js`:
- Image optimization settings
- Bundle analyzer setup
- Security headers
- Experimental features

### Tailwind CSS
Custom theme configuration with:
- Brand colors and gradients
- Custom animations
- Component utilities
- Responsive breakpoints

### ESLint & Prettier
Strict code quality rules:
- TypeScript strict mode
- React best practices
- Import organization
- Consistent formatting

## 📊 Performance Features

### Core Web Vitals Optimization
- **LCP**: Optimized images and fonts
- **CLS**: Stable layouts and animations
- **FID/INP**: Minimal JavaScript and efficient interactions

### Loading Strategies
- **Images**: Next.js Image optimization with blur placeholders
- **Fonts**: Preloaded with `next/font`
- **Code Splitting**: Dynamic imports for heavy components
- **Animations**: Transform/opacity only for 60fps performance

### Caching
- Static asset caching
- API response caching
- Image optimization caching

## 🔍 SEO Implementation

### Metadata
- Dynamic page titles and descriptions
- Open Graph and Twitter Card support
- Canonical URLs and robots directives

### Structured Data
JSON-LD schemas for:
- Organization information
- Video content
- Blog posts
- Breadcrumb navigation

### Sitemap
- Automatic sitemap generation
- Dynamic route inclusion
- Search engine submission ready

## 🧪 Testing

### Unit Testing
- Jest and React Testing Library
- Component testing
- Utility function testing
- Redux store testing

### Integration Testing
- Page rendering tests
- Form validation tests
- API endpoint tests

### E2E Testing (Planned)
- Playwright setup ready
- Critical user journey testing
- Visual regression testing

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Alternative Hosting
- Netlify: Full static hosting support
- Docker: Container deployment ready
- Traditional hosting: Static export support

### Environment Variables
Required for production:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
# Add other production variables
```

## 🔐 Security

### Implemented Security Measures
- Content Security Policy (CSP)
- XSS protection
- CSRF protection for forms
- Rate limiting on API endpoints
- Secure headers configuration

### Privacy Compliance
- GDPR-ready data handling
- Cookie consent management
- Privacy policy integration
- Data processing transparency

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Maintain test coverage above 80%
- Ensure accessibility compliance
- Follow conventional commit messages
- Update documentation for new features

## 📈 Performance Metrics

Target metrics for production:
- **Lighthouse Performance**: >90 (desktop), >80 (mobile)
- **Lighthouse SEO**: >95
- **Lighthouse Accessibility**: >95
- **Core Web Vitals**: All metrics in "Good" range

## 🐛 Known Issues

- None currently reported

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation wiki

## 🙏 Acknowledgments

- Next.js team for the excellent framework
- Framer Motion for smooth animations
- HeroUI for component library
- Tailwind CSS for utility-first styling
- Open source community for inspiration and tools

---

**Built with ❤️ for professional video production studios**