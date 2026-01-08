import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Floor Installation',
      description: 'Professional installation of hardwood, laminate, tile, and vinyl flooring. We ensure precise measurements and expert craftsmanship for a beautiful, long-lasting finish.',
    },
    {
      title: 'Framing',
      description: 'Structural framing for new construction, additions, and renovations. Our experienced team delivers solid, code-compliant framing that forms the backbone of your project.',
    },
    {
      title: 'Drywall',
      description: 'Expert drywall installation, repair, and finishing. We provide smooth, seamless walls ready for painting or finishing touches.',
    },
    {
      title: 'Tile',
      description: 'Professional tile installation for floors, walls, backsplashes, and showers. From classic ceramic to modern porcelain, we deliver precision work that enhances any space.',
    },
    {
      title: 'Kitchen Remodels',
      description: 'Transform your kitchen into the heart of your home. From custom cabinets to complete layouts, we bring your vision to life with quality craftsmanship.',
    },
    {
      title: 'Bathroom Remodels',
      description: 'Create your dream bathroom with our comprehensive remodeling services. We handle everything from tile work to fixtures for a complete transformation.',
    },
    {
      title: 'Basement Remodels',
      description: 'Turn your basement into valuable living space. Whether it\'s a family room, home office, or entertainment area, we maximize your home\'s potential.',
    },
    {
      title: 'Fences',
      description: 'Quality fence installation and repair for privacy, security, and curb appeal. We work with various materials and styles to meet your needs and property requirements.',
    },
    {
      title: 'House Repairs',
      description: 'Comprehensive repair services for all aspects of your home. From minor fixes to major repairs, we handle it all with professionalism and attention to detail.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center p-8 md:p-12 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Services
        </h1>
        <p className="text-center text-lg mb-12 text-[var(--foreground)]/80 max-w-4xl mx-auto">
          From flooring to full remodels, we offer comprehensive construction and remodeling services throughout the greater Denver area. Every project is completed with attention to detail and quality craftsmanship.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-[var(--accent)]/30 rounded-lg bg-[var(--accent)]/5 hover:border-[var(--accent)]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10"
            >
              <h3 className="text-xl font-bold text-[var(--accent)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--foreground)]/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Speciality Callout */}
        <div className="p-8 border-2 border-[var(--accent)]/40 rounded-lg bg-[var(--accent)]/10 mb-12">
          <h2 className="text-2xl font-bold text-[var(--accent)] mb-4 text-center">
            Our Specialty: Custom Carpentry
          </h2>
          <p className="text-lg text-center text-[var(--foreground)]/90 max-w-3xl mx-auto">
            Carpentry is one of our specialties, including custom cabinets. We take pride in creating beautiful, functional woodwork tailored to your exact specifications.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 border border-[var(--accent)]/30 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-6 text-[var(--foreground)]/80">
            We are here to help you build the home of your dreams!
          </p>
          <p className="text-lg mb-6 text-[var(--accent)] italic">
            Hablamos Español! Estamos aquí para construir la casa de sus sueños!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[var(--accent)] text-[var(--background)] font-bold rounded hover:bg-[#d4be7d] transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </main>
  );
}