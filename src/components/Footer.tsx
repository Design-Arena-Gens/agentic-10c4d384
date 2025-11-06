const footerLinks = [
  'FAQ',
  'Help Center',
  'Account',
  'Media Center',
  'Investor Relations',
  'Jobs',
  'Redeem Gift Cards',
  'Buy Gift Cards',
  'Ways to Watch',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
  'Speed Test',
  'Legal Notices',
  'Only on Streamify'
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/80 py-10 text-neutral-400">
      <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 md:grid-cols-4">
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm transition hover:text-neutral-200"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col gap-2 px-6 text-sm">
        <p className="text-netflix-red font-semibold">Streamify | Inspired by Netflix</p>
        <p>© {new Date().getFullYear()} Streamify Entertainment. All rights reserved.</p>
      </div>
    </footer>
  );
}
