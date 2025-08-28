import { CaseStudy } from '@/types'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <section id="case-studies" className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-gray-600">No case studies available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="case-studies" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses achieve their goals and exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {caseStudy.metadata?.featured_image && (
                <div className="aspect-video">
                  <img
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata?.title || caseStudy.title}
                    width="600"
                    height="300"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  {caseStudy.metadata?.industry && (
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                      {caseStudy.metadata.industry}
                    </span>
                  )}
                  {caseStudy.metadata?.duration && (
                    <span className="text-sm text-gray-500">
                      {caseStudy.metadata.duration}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {caseStudy.metadata?.title || caseStudy.title}
                </h3>

                {caseStudy.metadata?.client_name && (
                  <p className="text-primary-600 font-medium mb-4">
                    Client: {caseStudy.metadata.client_name}
                  </p>
                )}

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {caseStudy.metadata?.overview || ''}
                </p>

                {caseStudy.metadata?.technologies && caseStudy.metadata.technologies.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.metadata.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <button className="btn-primary">
                    View Case Study
                  </button>
                  {caseStudy.metadata?.related_service && (
                    <span className="text-sm text-gray-500">
                      Service: {caseStudy.metadata.related_service.title}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}