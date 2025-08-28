import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, index) => {
    const filled = index < rating ? 'text-yellow-400' : 'text-gray-300'
    return (
      <svg
        key={index}
        className={`w-5 h-5 ${filled}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          clipRule="evenodd"
        />
      </svg>
    )
  })
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600">No testimonials available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const ratingNumber = parseInt(testimonial.metadata?.rating?.key || '5')
            
            return (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex text-yellow-400 mb-6">
                  {renderStars(ratingNumber)}
                </div>

                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.metadata?.testimonial_text || ''}"
                </blockquote>

                <div className="flex items-center">
                  {testimonial.metadata?.client_photo && (
                    <img
                      src={`${testimonial.metadata.client_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                      alt={testimonial.metadata?.client_name || ''}
                      width="50"
                      height="50"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic">
                      {testimonial.metadata?.client_name || ''}
                    </cite>
                    <div className="text-sm text-gray-600">
                      {testimonial.metadata?.job_title && (
                        <span>{testimonial.metadata.job_title}</span>
                      )}
                      {testimonial.metadata?.job_title && testimonial.metadata?.company && (
                        <span> at </span>
                      )}
                      {testimonial.metadata?.company && (
                        <span>{testimonial.metadata.company}</span>
                      )}
                    </div>
                    {testimonial.metadata?.project_type && (
                      <div className="text-xs text-primary-600 mt-1">
                        {testimonial.metadata.project_type}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}