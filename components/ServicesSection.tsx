import { Service } from '@/types'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  if (!services || services.length === 0) {
    return (
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600">No services available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {service.metadata?.icon && (
                <div className="mb-6">
                  <img
                    src={`${service.metadata.icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={service.metadata?.name || service.title}
                    width="40"
                    height="40"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.metadata?.name || service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.metadata?.short_description || ''}
              </p>
              
              {service.metadata?.starting_price && (
                <p className="text-primary-600 font-semibold mb-6">
                  {service.metadata.starting_price}
                </p>
              )}

              {service.metadata?.key_features && service.metadata.key_features.length > 0 && (
                <div className="mb-6">
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.metadata.key_features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button className="w-full btn-primary">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}