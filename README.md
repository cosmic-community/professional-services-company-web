# Professional Services Company Website

![App Preview](https://imgix.cosmicjs.com/17452270-83c8-11f0-9173-b79e55575d2c-photo-1556742049-0cfed4f6a45d-1756355584691.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 15 that showcases your services, team, case studies, and testimonials. The website dynamically pulls content from your Cosmic CMS bucket and presents it in an engaging, conversion-focused design.

## ✨ Features

- **Dynamic Service Showcase** - Display your services with detailed descriptions, pricing, and key features
- **Professional Team Profiles** - Showcase team members with photos, bios, and skills
- **Case Study Portfolio** - Highlight successful projects with detailed challenge-solution-results format
- **Client Testimonials** - Display 5-star testimonials with client photos and project details
- **Responsive Design** - Mobile-first approach for perfect display on all devices
- **SEO Optimized** - Built-in SEO features with dynamic meta tags and structured data
- **Performance Focused** - Fast loading with optimized images and modern architecture
- **Professional UI** - Clean, modern design that builds trust and credibility

<!-- CLONE_PROJECT_BUTTON -->

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt  

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - Component library for building user interfaces
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Vercel** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your company content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Copy the environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🌟 Cosmic SDK Examples

### Fetching Services
```typescript
const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Getting Team Members
```typescript
const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Loading Case Studies
```typescript
const caseStudies = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## 🎯 Cosmic CMS Integration

This website automatically integrates with your existing Cosmic content structure:

- **Services** - Displays your service offerings with descriptions, pricing, and features
- **Team Members** - Shows team profiles with photos, bios, and skills
- **Case Studies** - Presents project portfolios with detailed success stories
- **Testimonials** - Features client testimonials with ratings and photos

The content is automatically pulled from your Cosmic bucket and displayed with a professional, conversion-focused design.

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy with one click

### Deploy to Netlify

1. Push your code to GitHub  
2. Connect your repository to Netlify
3. Add your environment variables in the Netlify dashboard
4. Deploy automatically

For production deployment, make sure to set the environment variables in your hosting platform's dashboard.