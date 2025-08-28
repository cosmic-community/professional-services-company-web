import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import Footer from '@/components/Footer'
import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic'

export default async function HomePage() {
  // Fetch all data for the homepage
  const [services, teamMembers, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies()
  ])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection services={services} />
        <CaseStudiesSection caseStudies={caseStudies} />
        <TeamSection teamMembers={teamMembers} />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      <Footer />
    </div>
  )
}