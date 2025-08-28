'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-max section-padding py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Company
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="#case-studies" className="text-gray-600 hover:text-primary-600 transition-colors">
              Case Studies
            </Link>
            <Link href="#team" className="text-gray-600 hover:text-primary-600 transition-colors">
              Team
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">
                Services
              </Link>
              <Link href="#case-studies" className="text-gray-600 hover:text-primary-600 transition-colors">
                Case Studies
              </Link>
              <Link href="#team" className="text-gray-600 hover:text-primary-600 transition-colors">
                Team
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}