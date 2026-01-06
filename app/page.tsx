import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 md:p-12 bg-[var(--background)] text-[var(--foreground)]">

      {/* Centered Logo Section */}
      <div className="w-full flex justify-center mb-12 mt-8">
        <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-2xl shadow-[var(--accent)]/20">
          <Image
            src="/leo-logo.jpeg"
            alt="Leonardo's Remodeling Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl text-center space-y-8">

        {/* Intro */}
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Looking for <span className="text-[var(--accent)]">high quality</span> construction and remodeling services in the greater Denver area?
        </h1>

        {/* Services */}
        <p className="text-lg md:text-xl leading-relaxed text-[var(--foreground)]/90">
          We are highly experienced and do a little bit of everything, from remodeling kitchens and bathrooms, to installing windows, laying flooring, and framing and drywalling. We can also build fences, porches and decks.
        </p>

        {/* Specialty */}
        <div className="p-6 border border-[var(--accent)]/30 rounded-lg bg-[var(--accent)]/5">
          <p className="text-xl font-semibold text-[var(--accent)]">
            Carpentry is one of our specialities, including custom cabinets.
          </p>
        </div>

        {/* CTA English */}
        <div className="pt-4">
          <p className="text-xl font-bold mb-4">
            We are here to help you build the home of your dreams! Call today or send an E-mail!
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[var(--accent)] text-[var(--background)] font-bold rounded hover:bg-[#d4be7d] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[var(--accent)]/30 my-8"></div>

        {/* Spanish Section */}
        <div className="space-y-4 text-[var(--foreground)]/90 italic">
          <p className="text-xl font-medium text-[var(--accent)]">
            Hablamos Español! Estamos aquí para construir la casa de sus sueños! llámen hoy o mánden correo electrónico!
          </p>
        </div>

      </div>
    </main>
  );
}
