import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--accent)]/20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex gap-8">

          {/* Contact Info */}
          <div>
            <div className="space-y-2 text-[var(--foreground)]/80">
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+17202352457" className="hover:text-[var(--accent)] transition-colors">
                  (720) 235-2457
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:leonardo.nav33@gmail.com" className="hover:text-[var(--accent)] transition-colors">
                  leonardo.nav33@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className='flex w-full flex-1 flex-col gap-2 items-end'>
            <a
              href="https://www.facebook.com/p/Leonardos-Remodeling-LLC-61577984387108/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[var(--accent)] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://share.google/Tl1KCTJ0KeA4nDcYs"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[var(--accent)] transition-colors"
            >
              Google
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[var(--accent)]/20 text-center text-[var(--foreground)]/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Leonardo's Remodeling LLC. All rights reserved.</p>
          <p className="mt-2 italic">Hablamos Español</p>
        </div>
      </div>
    </footer>
  );
}