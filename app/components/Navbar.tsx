import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full p-6 flex justify-between items-center bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--accent)]/20">
      <div className="text-xl font-bold tracking-wider">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors">
          LEONARDO'S REMODELING
        </Link>
      </div>
      <div className="flex gap-8">
        <Link href="/contact" className="hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-widest">
          Contact
        </Link>
      </div>
    </nav>
  );
}
