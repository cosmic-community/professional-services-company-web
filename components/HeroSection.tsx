export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white section-padding py-24">
      <div className="container-max">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-primary-600 block">Expert Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide world-class web development, UI/UX design, and digital strategy consulting 
            services that help businesses achieve their goals and exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-primary">
              View Our Services
            </a>
            <a href="#case-studies" className="btn-secondary">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}