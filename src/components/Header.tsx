import Link from 'next/link';
import { FiBell, FiSearch } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Series', href: '#trending' },
  { label: 'Films', href: '#top-rated' },
  { label: 'New & Popular', href: '#only-on-streamify' },
  { label: 'Plans', href: '#plans' }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black text-netflix-red">
            Streamify
          </Link>
          <nav className="hidden items-center gap-4 text-sm font-medium text-neutral-200 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6 text-lg text-white">
          <button className="hidden text-neutral-200 transition hover:text-white sm:inline">
            <FiSearch aria-hidden />
            <span className="sr-only">Search</span>
          </button>
          <Link href="#notifications" className="transition hover:text-white">
            <FiBell aria-hidden />
            <span className="sr-only">Notifications</span>
          </Link>
          <button className="flex items-center gap-2 rounded bg-neutral-700/60 px-3 py-1 text-sm font-semibold transition hover:bg-neutral-600/80">
            <span className="inline-block h-7 w-7 rounded bg-gradient-to-br from-netflix-red to-red-700 text-center text-xs leading-7">
              U
            </span>
            <span className="hidden sm:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
