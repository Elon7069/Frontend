# HackLand - Next.js + Material-UI Landing Page

A modern, responsive landing page built with **Next.js 14** and **Material-UI v5** for a frontend hackathon. Features beautiful animations, dark/light mode toggle, and optimized performance.

## 🚀 Live Demo

*Deploy link will be added here*

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: Material-UI (MUI) v5
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Styling**: Emotion (CSS-in-JS)
- **Deployment**: Vercel-ready

## ✨ Features

### 🎯 Core Features
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Dark/Light Mode Toggle** - Persistent theme switching
- ✅ **Sticky Navigation** - Smooth scroll-to-section functionality
- ✅ **Video Hero Section** - Engaging homepage.mp4 background
- ✅ **Loading Animation** - Custom loader.mp4 video loader
- ✅ **Smooth Animations** - Framer Motion powered transitions

### 📱 Sections Included
1. **Hero Section** - Video background with call-to-action
2. **Features Section** - 6 feature cards with icons and animations
3. **Services Section** - Service offerings with video background
4. **Stats Section** - Animated counters with statistics
5. **Testimonials Section** - Carousel with client feedback
6. **Contact Section** - Contact form and company information
7. **Footer** - Links, social media, and company details

### 🎨 Design Elements
- Modern gradient backgrounds
- Glass-morphism effects
- Hover animations and micro-interactions
- Scroll-triggered animations
- Responsive typography and spacing
- Custom MUI theme with consistent styling

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Main homepage combining all sections
├── components/
│   ├── ThemeProvider.tsx   # Dark/Light mode context
│   ├── Loader.tsx          # Video loading component
│   ├── Navigation.tsx      # Sticky navbar with scroll effects
│   ├── HeroSection.tsx     # Video hero with CTA
│   ├── FeaturesSection.tsx # Feature cards grid
│   ├── ServicesSection.tsx # Services with video background
│   ├── StatsSection.tsx    # Animated statistics
│   ├── TestimonialsSection.tsx # Client testimonials carousel
│   ├── ContactSection.tsx  # Contact form and info
│   └── Footer.tsx          # Footer with links
├── public/assets/          # Video and image assets
│   ├── homepage.mp4        # Hero section background video
│   ├── loader.mp4          # Loading animation
│   ├── features-services.mp4
│   ├── testimonials.mp4
│   ├── stats.png
│   └── [other assets]
├── styles/                 # Additional styling (if needed)
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hackathon-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Assets Setup

The project uses video and image assets located in `/public/assets/`. The following files are included:

- `homepage.mp4` - Hero section background video
- `loader.mp4` - Loading animation video
- `features-services.mp4` - Services section background
- `testimonials.mp4` - Testimonials section background
- `stats.png` - Statistics section graphic
- `cards.png` - Card design reference
- `graph.png` - Additional graphics

## 🎨 Customization

### Theme Colors
Edit the theme in `components/ThemeProvider.tsx`:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change primary color
    },
    secondary: {
      main: '#dc004e', // Change secondary color
    },
  },
})
```

### Content Updates
- **Hero Text**: Edit `components/HeroSection.tsx`
- **Features**: Modify the features array in `components/FeaturesSection.tsx`
- **Services**: Update services in `components/ServicesSection.tsx`
- **Contact Info**: Change contact details in `components/ContactSection.tsx`

## 📱 Responsive Breakpoints

The design uses MUI's responsive breakpoints:
- `xs`: 0px+
- `sm`: 600px+
- `md`: 900px+
- `lg`: 1200px+
- `xl`: 1536px+

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

3. **Environment Variables** (if needed)
   - Set any required environment variables in Vercel dashboard

### Build for Production

```bash
npm run build
npm start
```

## 🧠 AI Tools Used

This project was built using **Lovable AI** as the primary development assistant, helping with:
- Component architecture and structure
- TypeScript interfaces and typing
- MUI theme configuration
- Framer Motion animations
- Responsive design implementation
- Code optimization and best practices

## 📋 Performance Features

- ⚡ **Next.js 14** - Latest React features and optimizations
- 🎬 **Optimized Videos** - Compressed video assets for fast loading
- 📱 **Mobile-First** - Designed for mobile performance
- 🎯 **Code Splitting** - Automatic code splitting with Next.js
- 🔄 **Lazy Loading** - Components load when needed
- 💾 **Local Storage** - Theme preference persistence

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have questions or need help:
- Create an issue in the repository
- Contact: hello@hackland.com

---

**Built with ❤️ using Next.js, Material-UI, and Cursor AI** 
